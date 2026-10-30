#!/usr/bin/env bash
# ══════════════════════════════════════════════════════════════════════
#  DEPLOY VITEPRESS → SERVER (SSH + RSYNC) — SAFE MODE
# ──────────────────────────────────────────────────────────────────────
#  Principle: The script is STRICTLY confined to 3 remote paths:
#     TARGET  = ROOT_PATH/PROJECT_DIR                    (active live site)
#     STAGING = ROOT_PATH/.PROJECT_DIR__deploy_staging   (staging directory)
#     PREV    = ROOT_PATH/.PROJECT_DIR__deploy_prev      (previous release for rollback)
#  Each path MUST bear the .repo_lock of THIS repository to be modified.
#
#  Safety layers:
#   1. Build verification (index.html, 404.html, minimum file count)
#   2. ROOT_PATH: absolute, safe characters, no "..", depth >= 2, system root blacklist
#   3. PROJECT_DIR: exactly 1 path level, alphanumeric + [_-]
#   4. SSH host key validation (known_hosts) — MITM prevention
#   5. Repo lock: if folder exists without or with foreign lock -> ABORT
#   6. Anomaly check: significant file drop protection against broken builds
#   7. Staging upload: rsync to staging, atomic swap (mv) -> zero downtime
#   8. Instant rollback: manual trigger or automatic rollback on failed health check
# ══════════════════════════════════════════════════════════════════════
set -Eeuo pipefail
umask 022

die()  { echo "::error::$*"; exit 1; }
log()  { echo "[deploy] $*"; }
warn() { echo "::warning::$*"; }

MODE="${DEPLOY_MODE:-deploy}"          # deploy | rollback
FORCE="${DEPLOY_FORCE:-false}"
DIST="docs/.vitepress/dist"           # fixed path — not read from config to avoid misdirection
CONFIG="deploy-config.json"
: "${GITHUB_REPO:?missing GITHUB_REPO}"
: "${SERVER_CONFIG:?missing server config secret}"

# ─────────────────────────────────────────────
# 1. Read Configuration
# ─────────────────────────────────────────────
[ -f "$CONFIG" ] || die "File not found: $CONFIG"

PROJECT_DIR=$(jq -r '.production.project_dir // ""' "$CONFIG")
SITE_URL=$(jq -r '.production.site_url // ""' "$CONFIG")
MIN_RATIO=$(jq -r '.production.min_file_ratio // 30' "$CONFIG")
AUTH_USER=$(jq -r '.production.basic_auth.username // ""' "$CONFIG")
AUTH_PASS=$(jq -r '.production.basic_auth.password // ""' "$CONFIG")

SSH_HOST=$(jq -r '.host // ""'        <<<"$SERVER_CONFIG")
SSH_USER=$(jq -r '.user // ""'        <<<"$SERVER_CONFIG")
SSH_PORT=$(jq -r '.ssh_port // 22'    <<<"$SERVER_CONFIG")
ROOT_PATH=$(jq -r '.root_path // ""'  <<<"$SERVER_CONFIG")
PRIVATE_KEY=$(jq -r '.private_key // ""' <<<"$SERVER_CONFIG")
KNOWN_HOSTS=$(jq -r '.known_hosts // ""' <<<"$SERVER_CONFIG")

[ -n "$PRIVATE_KEY" ] && echo "::add-mask::$SSH_HOST" && echo "::add-mask::$ROOT_PATH"

[ -n "$SSH_HOST" ] && [ -n "$SSH_USER" ] && [ -n "$ROOT_PATH" ] && [ -n "$PRIVATE_KEY" ] \
  || die "Server secret missing host / user / root_path / private_key"
[[ "$SSH_PORT" =~ ^[0-9]{1,5}$ ]] || die "Invalid ssh_port"
[[ "$MIN_RATIO" =~ ^[0-9]{1,3}$ ]] || die "min_file_ratio must be a number (0-100)"

# ─────────────────────────────────────────────
# 2. Path Validation (Blast Radius & Confinement)
# ─────────────────────────────────────────────
[[ "$PROJECT_DIR" =~ ^[A-Za-z0-9][A-Za-z0-9_-]*$ ]] \
  || die "Invalid project_dir '$PROJECT_DIR' (must be single-level alphanumeric with _ or -)"

ROOT_PATH="${ROOT_PATH%/}"
[[ "$ROOT_PATH" == /* ]]                  || die "root_path must be an absolute path"
[[ "$ROOT_PATH" =~ ^/[A-Za-z0-9_./-]+$ ]] || die "root_path contains unsafe characters"
[[ "$ROOT_PATH" != *"/.."* && "$ROOT_PATH" != *"/./"* && "$ROOT_PATH" != *"//"* ]] \
  || die "root_path must not contain '..', '/./' or '//'"
DEPTH=$(awk -F/ '{print NF-1}' <<<"$ROOT_PATH")
[ "$DEPTH" -ge 2 ] || die "root_path depth is too shallow ($ROOT_PATH) — minimum 2 levels required, e.g. /home/user"
case "$ROOT_PATH" in
  /etc|/usr|/bin|/sbin|/lib|/lib64|/boot|/dev|/proc|/sys|/root|/tmp|/opt|/srv|/var|/var/www|/var/lib|/home|/usr/local)
    die "root_path points to system directory: $ROOT_PATH";;
esac

TARGET="$ROOT_PATH/$PROJECT_DIR"
STAGING="$ROOT_PATH/.${PROJECT_DIR}__deploy_staging"
PREV="$ROOT_PATH/.${PROJECT_DIR}__deploy_prev"
LOCK_ID="${GITHUB_REPO}:production"
SHA=$(git rev-parse HEAD)

log "Mode:    $MODE"
log "Target:  $PROJECT_DIR (within configured root_path)"
log "Commit:  ${SHA:0:8}"

# ─────────────────────────────────────────────
# 3. Build Verification
# ─────────────────────────────────────────────
if [ "$MODE" = "deploy" ]; then
  [ -f "$DIST/index.html" ] || die "Build output missing index.html"
  [ -f "$DIST/404.html" ]   || die "Build output missing 404.html"
  NEW_COUNT=$(find "$DIST" -type f | wc -l | tr -d ' ')
  [ "$NEW_COUNT" -ge 5 ] || die "Build output only has $NEW_COUNT files — aborting deploy"
  log "Build output: $NEW_COUNT files"
fi

# ─────────────────────────────────────────────
# 4. SSH: Private Key & Host Key Verification
# ─────────────────────────────────────────────
mkdir -p ~/.ssh && chmod 700 ~/.ssh
KH=~/.ssh/known_hosts_deploy
if [ -n "$KNOWN_HOSTS" ]; then
  printf '%s\n' "$KNOWN_HOSTS" > "$KH"
  log "Host key: using pinned known_hosts from secret"
else
  warn "Secret has no 'known_hosts' → temporarily fetching host key via ssh-keyscan. Pin known_hosts to prevent MITM."
  ssh-keyscan -p "$SSH_PORT" -T 15 "$SSH_HOST" > "$KH" 2>/dev/null || die "Failed to retrieve server host key"
fi
[ -s "$KH" ] || die "known_hosts file is empty"

eval "$(ssh-agent -s)" >/dev/null
trap 'ssh-agent -k >/dev/null 2>&1 || true' EXIT
ssh-add - <<<"$PRIVATE_KEY" >/dev/null 2>&1 || die "Invalid private_key"

SSH_OPTS=(-p "$SSH_PORT" -o StrictHostKeyChecking=yes -o UserKnownHostsFile="$KH"
          -o BatchMode=yes -o ConnectTimeout=20 -o ServerAliveInterval=15 -o LogLevel=ERROR)
RSH="ssh -p $SSH_PORT -o StrictHostKeyChecking=yes -o UserKnownHostsFile=$KH -o BatchMode=yes -o LogLevel=ERROR"

# Execute bash commands on remote server; parameters passed via positional args
remote() { ssh "${SSH_OPTS[@]}" "$SSH_USER@$SSH_HOST" bash -s -- "$@"; }

# ─────────────────────────────────────────────
# 5. Repo Lock: Exclusively touch directories belonging to this repository
# ─────────────────────────────────────────────
LOCK_STATE=$(remote "$TARGET" "$STAGING" "$PREV" "$LOCK_ID" "$GITHUB_REPO" <<'EOS'
set -u
check() {  # in: path → OK | EMPTY | FOREIGN:<lock> | NOLOCK
  local d="$1" l=""
  [ -e "$d" ] || { echo EMPTY; return; }
  [ -d "$d" ] && [ ! -L "$d" ] || { echo "FOREIGN:not-a-directory"; return; }
  l=$(cat "$d/.deploy/.repo_lock" 2>/dev/null || cat "$d/.repo_lock" 2>/dev/null || true)
  [ -z "$l" ] && { echo NOLOCK; return; }
  if [ "$l" = "$4" ] || [ "$l" = "$5" ]; then echo OK; else echo "FOREIGN:$l"; fi
}
echo "TARGET=$(check "$1" "" "" "$4" "$5")"
echo "STAGING=$(check "$2" "" "" "$4" "$5")"
echo "PREV=$(check "$3" "" "" "$4" "$5")"
command -v rsync >/dev/null && echo "RSYNC=yes" || echo "RSYNC=no"
EOS
)
get() { grep "^$1=" <<<"$LOCK_STATE" | head -1 | cut -d= -f2-; }
T_STATE=$(get TARGET); S_STATE=$(get STAGING); P_STATE=$(get PREV)
log "Lock state: target=$T_STATE staging=$S_STATE prev=$P_STATE"

[ "$(get RSYNC)" = "yes" ] || die "rsync is not installed on remote server"
for pair in "TARGET:$T_STATE" "STAGING:$S_STATE" "PREV:$P_STATE"; do
  name="${pair%%:*}"; state="${pair#*:}"
  case "$state" in
    OK|EMPTY) ;;
    NOLOCK)   die "Directory $name exists but lacks .repo_lock. Aborting to protect existing server data.";;
    *)        die "Directory $name belongs to '${state#FOREIGN:}', not this repo. Aborting.";;
  esac
done

# ─────────────────────────────────────────────
# 6. ROLLBACK (Manual trigger via workflow_dispatch)
# ─────────────────────────────────────────────
if [ "$MODE" = "rollback" ]; then
  [ "$P_STATE" = "OK" ] || die "No previous release found to rollback"
  remote "$TARGET" "$PREV" "$STAGING" <<'EOS'
set -e
[ -e "$3" ] && rm -rf -- "$3"
[ -d "$1" ] && mv -- "$1" "$3"
mv -- "$2" "$1"
[ -d "$3" ] && mv -- "$3" "$2"
EOS
  log "✅ Restored previous release (displaced release preserved in PREV)."
  exit 0
fi

# ─────────────────────────────────────────────
# 7. Skip unchanged commit / Anomaly file count check
# ─────────────────────────────────────────────
if [ "$T_STATE" = "OK" ] && [ "$FORCE" != "true" ]; then
  INFO=$(remote "$TARGET" <<'EOS'
echo "SHA=$(cat "$1/.deploy/.deploy_sha" 2>/dev/null || true)"
echo "COUNT=$(find "$1" -type f -not -path "$1/.deploy/*" -not -name '.htaccess' -not -name '.htpasswd' 2>/dev/null | wc -l | tr -d ' ')"
EOS
)
  LAST_SHA=$(grep '^SHA=' <<<"$INFO" | cut -d= -f2-)
  OLD_COUNT=$(grep '^COUNT=' <<<"$INFO" | cut -d= -f2-)
  if [ "$LAST_SHA" = "$SHA" ]; then
    log "Commit ${SHA:0:8} already deployed — no changes detected."
    exit 0
  fi
  if [ "${OLD_COUNT:-0}" -gt 0 ] && [ $((NEW_COUNT * 100)) -lt $((OLD_COUNT * MIN_RATIO)) ]; then
    die "New build has $NEW_COUNT files; active release has $OLD_COUNT files (< ${MIN_RATIO}%). Suspected build failure → ABORTED. Run with force=true if intentional."
  fi
fi

# ─────────────────────────────────────────────
# 8. Upload to STAGING (Active site remains untouched)
# ─────────────────────────────────────────────
WORK=$(mktemp -d)
mkdir -p "$WORK/.deploy"
printf '%s\n' "$LOCK_ID" > "$WORK/.deploy/.repo_lock"
printf '%s\n' "$SHA"     > "$WORK/.deploy/.deploy_sha"
cat > "$WORK/.deploy/.htaccess" <<'HT'
<IfModule mod_authz_core.c>
  Require all denied
</IfModule>
<IfModule !mod_authz_core.c>
  Deny from all
</IfModule>
HT

if [ -n "$AUTH_USER" ] && [ -n "$AUTH_PASS" ]; then
  log "Enabling Basic Auth"
  printf '%s:%s\n' "$AUTH_USER" "$(openssl passwd -apr1 "$AUTH_PASS")" > "$WORK/.htpasswd"
  cat > "$WORK/.htaccess" <<HT
<Files ~ "^\.">
  Require all denied
</Files>
AuthType Basic
AuthName "Restricted Area"
AuthUserFile ${TARGET}/.htpasswd
Require valid-user
HT
fi

# Clean leftover staging from failed runs (lock verified in step 5), re-create and write lock FIRST
remote "$STAGING" "$LOCK_ID" <<'EOS'
set -e
[ -e "$1" ] && rm -rf -- "$1"
mkdir -p -- "$1/.deploy"
printf '%s\n' "$2" > "$1/.deploy/.repo_lock"
EOS

LINK_DEST=()
[ "$T_STATE" = "OK" ] && LINK_DEST=(--link-dest="$TARGET")   # Hardlink unchanged files for fast transfer

log "Uploading build output → STAGING"
# --exclude=/.deploy/ : rsync --delete must not remove pre-written lock file
rsync -a --delete --exclude=/.deploy/ --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r "${LINK_DEST[@]}" \
  -e "$RSH" "$DIST/" "$SSH_USER@$SSH_HOST:$STAGING/"
rsync -a --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r \
  -e "$RSH" "$WORK/" "$SSH_USER@$SSH_HOST:$STAGING/"
rm -rf "$WORK"

# ─────────────────────────────────────────────
# 9. Atomic Swap: STAGING → TARGET (Retain previous release in PREV)
# ─────────────────────────────────────────────
log "Switching to new release"
remote "$TARGET" "$STAGING" "$PREV" <<'EOS'
set -e
[ -e "$3" ] && rm -rf -- "$3"
[ -d "$1" ] && mv -- "$1" "$3"
if ! mv -- "$2" "$1"; then
  [ -d "$3" ] && mv -- "$3" "$1"   # Restore previous release on swap failure
  exit 1
fi
EOS

# ─────────────────────────────────────────────
# 10. Health Check → Automatic Rollback on Failure
# ─────────────────────────────────────────────
if [ -n "$SITE_URL" ]; then
  log "Health check: $SITE_URL"
  CODE=$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 20 "$SITE_URL" || echo 000)
  case "$CODE" in
    200|401) log "✅ Health check OK (HTTP $CODE)";;
    *)
      warn "Health check failed (HTTP $CODE) → auto-rolling back to previous release"
      remote "$TARGET" "$PREV" "$STAGING" <<'EOS'
set -e
[ -d "$2" ] || exit 0
[ -e "$3" ] && rm -rf -- "$3"
mv -- "$1" "$3"
mv -- "$2" "$1"
EOS
      die "Rollback complete. Faulty release preserved in STAGING for inspection.";;
  esac
else
  warn "production.site_url is not configured → skipping health check."
fi

log "✅ DEPLOY COMPLETE — commit ${SHA:0:8}"
