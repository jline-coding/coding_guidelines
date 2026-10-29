# Architecture — J-Line Rule Auditor v2.6

## Separation of concerns

- `pages/index.tsx` — Task Folder/ZIP UI, Website URL UI, grouping/filter/report rendering.
- `lib/rules.ts` — company-rule catalog, context detection and audit engine.
- `lib/folder-reader.ts` — local folder reading, safety limits and third-party ownership indexing.
- `lib/i18n.ts` — VN/JP/EN UI and labels.
- `pages/api/scan-site.ts` — batch Website URL crawler with Basic Auth and SSRF controls.
- `pages/api/detect-country.ts` — no-store country detection for initial language selection.

## Third-party isolation pipeline

1. Enumerate task paths.
2. Identify standard generated/dependency/third-party locations.
3. Before excluding library CSS/SCSS from audit, optionally extract only selector names under bounded byte/selector limits.
4. Infer library prefixes from library directory names.
5. Merge project-specific `.jline-auditorignore` patterns/prefixes.
6. Build `ProjectContext.libraryPrefixes` + `librarySelectors`.
7. Apply J-Line rules only to team-owned source.
8. Mask library-owned selector blocks that appear in first-party override styles.

This avoids hard-coding every future library into the rule engine while preserving an explicit fallback for unusual project structures.

## Localization

- User manual choice in localStorage has highest priority.
- Otherwise `/api/detect-country` checks edge/proxy country headers.
- Local/self-hosted fallback uses a short IP-country lookup.
- JP → `ja`, VN → `vi`, other → `en`.
- Browser language is only a final fallback if network-country detection is unavailable.

## Finding semantics

UI levels are intentionally simple:

- deterministic confidence → **Error**
- probable/manual confidence → **Warning**

A grouped card never destroys occurrence-level evidence: each item retains `file`, `line`, `excerpt`, localized `message` and localized recommendation.
