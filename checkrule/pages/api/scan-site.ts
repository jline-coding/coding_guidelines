import type { NextApiRequest, NextApiResponse } from 'next';
import dns from 'node:dns/promises';
import net from 'node:net';
import type { LocalizedText, SourceFile, WebsiteScanResponse, WebsiteSiteSummary } from '@/lib/types';

const MAX_RESPONSE_BYTES = 1_500_000;
const REQUEST_TIMEOUT_MS = 10_000;
const TOTAL_TIMEOUT_MS = 60_000;
const MAX_REDIRECTS = 5;
const MAX_SEEDS = 20;
const MAX_TOTAL_PAGES = 100;
const MAX_PAGES_PER_URL = 20;
const MAX_PARALLEL_ORIGINS = 3;
const MAX_USERNAME_LENGTH = 256;
const MAX_PASSWORD_LENGTH = 1024;

type BasicAuth = { username: string; password: string } | null;
type ApiError = { error: string; errorJa?: string; errorEn?: string };
type OriginGroup = { origin: string; seeds: URL[]; pageLimit: number };

type ScanGroupResult = {
  files: SourceFile[];
  summary: WebsiteSiteSummary;
};

const W = (vi: string, ja: string, en: string): LocalizedText => ({ vi, ja, en });

class LocalizedError extends Error {
  ja: string;
  en: string;
  constructor(vi: string, ja: string, en: string) {
    super(vi);
    this.name = 'LocalizedError';
    this.ja = ja;
    this.en = en;
  }
}

function isPrivateIPv4(ip: string) {
  const p = ip.split('.').map(Number);
  if (p.length !== 4 || p.some(Number.isNaN)) return false;
  return p[0] === 10 || p[0] === 127 || p[0] === 0 ||
    (p[0] === 169 && p[1] === 254) ||
    (p[0] === 172 && p[1] >= 16 && p[1] <= 31) ||
    (p[0] === 192 && p[1] === 168) ||
    (p[0] === 100 && p[1] >= 64 && p[1] <= 127) ||
    p[0] >= 224;
}

function isPrivateIPv6(ip: string) {
  const x = ip.toLowerCase();
  return x === '::1' || x === '::' || x.startsWith('fc') || x.startsWith('fd') || x.startsWith('fe8') || x.startsWith('fe9') || x.startsWith('fea') || x.startsWith('feb');
}

async function assertSafeTarget(url: URL) {
  if (!['http:', 'https:'].includes(url.protocol)) {
    throw new LocalizedError('Chỉ hỗ trợ URL http:// hoặc https://.', 'http:// または https:// のURLのみ対応しています。', 'Only http:// and https:// URLs are supported.');
  }
  if (url.username || url.password) {
    throw new LocalizedError('Không nhập username/password trực tiếp trong URL. Hãy dùng phần Basic Authentication.', 'URL内にユーザー名/パスワードを含めないでください。Basic Authentication欄を使用してください。', 'Do not embed a username/password in the URL. Use the Basic Authentication fields instead.');
  }

  const allowPrivate = process.env.ALLOW_PRIVATE_AUDIT_TARGETS === 'true';
  if (allowPrivate) return;

  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (host === 'localhost' || host.endsWith('.localhost')) {
    throw new LocalizedError('Local/private target đang bị chặn.', 'ローカル/プライベート環境へのアクセスは現在ブロックされています。', 'Local/private targets are blocked by default.');
  }
  if (net.isIP(host)) {
    if ((net.isIPv4(host) && isPrivateIPv4(host)) || (net.isIPv6(host) && isPrivateIPv6(host))) {
      throw new LocalizedError('Private IP target đang bị chặn.', 'プライベートIPへのアクセスは現在ブロックされています。', 'Private IP targets are blocked by default.');
    }
    return;
  }

  const addresses = await dns.lookup(host, { all: true, verbatim: true });
  if (!addresses.length) {
    throw new LocalizedError('Không resolve được domain.', 'ドメイン名を解決できませんでした。', 'The domain could not be resolved.');
  }
  for (const { address, family } of addresses) {
    if ((family === 4 && isPrivateIPv4(address)) || (family === 6 && isPrivateIPv6(address))) {
      throw new LocalizedError('Domain resolve tới private/local network nên bị chặn.', 'ドメインがプライベート/ローカルネットワークを指しているためブロックしました。', 'The domain resolves to a private/local network address and was blocked.');
    }
  }
}

function normalizePageUrl(input: URL) {
  const u = new URL(input.toString());
  u.hash = '';
  return u;
}

function hostnameWithoutWww(hostname: string) {
  return hostname.toLowerCase().replace(/^www\./, '');
}

function isCanonicalSiteRedirect(from: URL, to: URL) {
  // Accept common canonicalization only (HTTP→HTTPS and/or www toggle on the same hostname family).
  // Arbitrary cross-domain redirects are not adopted as the crawl origin.
  return hostnameWithoutWww(from.hostname) === hostnameWithoutWww(to.hostname);
}

function normalizeInputUrl(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) throw new LocalizedError('URL rỗng.', '空のURLは指定できません。', 'The URL is empty.');
  return normalizePageUrl(new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`));
}

function isPageCandidate(url: URL) {
  const path = url.pathname.toLowerCase();
  if (/\.(?:jpg|jpeg|png|gif|webp|svg|ico|pdf|zip|rar|7z|css|js|mjs|json|xml|txt|woff2?|ttf|eot|mp4|mp3|webm)$/i.test(path)) return false;
  return true;
}

function extractLinks(html: string, base: URL) {
  const out: URL[] = [];
  const re = /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const raw = m[1].trim();
    if (!raw || raw.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(raw)) continue;
    try { out.push(normalizePageUrl(new URL(raw, base))); } catch {}
  }
  return out;
}

function extractAssets(html: string, base: URL) {
  const assets: { url: URL; kind: 'css' | 'js' }[] = [];
  let m: RegExpExecArray | null;
  const css = /<link\b(?=[^>]*\brel\s*=\s*["'][^"']*stylesheet[^"']*["'])[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi;
  while ((m = css.exec(html))) { try { assets.push({ url: new URL(m[1], base), kind: 'css' }); } catch {} }
  const js = /<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
  while ((m = js.exec(html))) { try { assets.push({ url: new URL(m[1], base), kind: 'js' }); } catch {} }
  return assets;
}

function parseAuth(body: NextApiRequest['body']): BasicAuth {
  const enabled = Boolean(body?.basicAuth?.enabled);
  if (!enabled) return null;
  const username = String(body?.basicAuth?.username || '');
  const password = String(body?.basicAuth?.password || '');
  if (!username) throw new LocalizedError('Basic Authentication cần username.', 'Basic Authenticationのユーザー名を入力してください。', 'Basic Authentication requires a username.');
  if (username.length > MAX_USERNAME_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
    throw new LocalizedError('Basic Authentication credential quá dài.', 'Basic Authenticationの認証情報が長すぎます。', 'The Basic Authentication credentials are too long.');
  }
  return { username, password };
}

function authHeader(auth: BasicAuth) {
  if (!auth) return undefined;
  return `Basic ${Buffer.from(`${auth.username}:${auth.password}`, 'utf8').toString('base64')}`;
}

async function fetchText(input: URL, accept: string, auth: BasicAuth, authOrigin: string) {
  let url = new URL(input.toString());
  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects++) {
    await assertSafeTarget(url);

    if (auth && url.origin === authOrigin && url.protocol !== 'https:' && process.env.ALLOW_INSECURE_BASIC_AUTH !== 'true') {
      throw new LocalizedError(
        'Basic Authentication qua HTTP thường không an toàn. Dùng HTTPS hoặc đặt ALLOW_INSECURE_BASIC_AUTH=true nếu đây là staging tin cậy.',
        'HTTP上のBasic Authenticationは安全ではありません。HTTPSを使用するか、信頼できる検証環境の場合のみ ALLOW_INSECURE_BASIC_AUTH=true を設定してください。',
        'Basic Authentication over HTTP is normally unsafe. Use HTTPS, or set ALLOW_INSECURE_BASIC_AUTH=true only for a trusted staging environment.'
      );
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const headers: Record<string, string> = {
        'user-agent': 'JLine-Rule-Auditor/2.6.0 (+internal quality audit)',
        accept,
      };
      if (auth && url.origin === authOrigin) headers.authorization = authHeader(auth)!;

      const response = await fetch(url, {
        redirect: 'manual',
        signal: controller.signal,
        headers,
        cache: 'no-store',
      });

      if (response.status >= 300 && response.status < 400) {
        const location = response.headers.get('location');
        if (!location) throw new LocalizedError(`HTTP ${response.status} không có Location header.`, `HTTP ${response.status}: Locationヘッダーがありません。`, `HTTP ${response.status} redirect has no Location header.`);
        const next = new URL(location, url);
        if (auth && next.origin !== authOrigin) {
          throw new LocalizedError('Redirect sang domain khác khi đang dùng Basic Authentication đã bị chặn để tránh lộ credential.', 'Basic Authentication使用中の別ドメインへのリダイレクトは、認証情報漏えい防止のためブロックしました。', 'A cross-origin redirect while using Basic Authentication was blocked to prevent credential leakage.');
        }
        url = next;
        continue;
      }

      if (response.status === 401) {
        throw new LocalizedError('HTTP 401: Basic Authentication thất bại hoặc trang yêu cầu đăng nhập.', 'HTTP 401: Basic Authenticationに失敗したか、認証が必要なページです。', 'HTTP 401: Basic Authentication failed or the page requires authentication.');
      }
      if (response.status === 403) {
        throw new LocalizedError('HTTP 403: Không có quyền truy cập trang.', 'HTTP 403: このページへのアクセス権限がありません。', 'HTTP 403: Access to this page is forbidden.');
      }
      if (!response.ok) throw new LocalizedError(`HTTP ${response.status}`, `HTTP ${response.status}`, `HTTP ${response.status}`);

      const length = Number(response.headers.get('content-length') || 0);
      if (length > MAX_RESPONSE_BYTES) {
        throw new LocalizedError('Response quá lớn để audit an toàn.', 'レスポンスサイズが大きすぎるため、安全上スキャンを中止しました。', 'The response is too large to audit safely.');
      }
      const text = await response.text();
      if (Buffer.byteLength(text, 'utf8') > MAX_RESPONSE_BYTES) {
        throw new LocalizedError('Response quá lớn để audit an toàn.', 'レスポンスサイズが大きすぎるため、安全上スキャンを中止しました。', 'The response is too large to audit safely.');
      }
      return { text, finalUrl: url, contentType: response.headers.get('content-type') || '' };
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new LocalizedError(`Timeout sau ${REQUEST_TIMEOUT_MS / 1000} giây.`, `${REQUEST_TIMEOUT_MS / 1000}秒でタイムアウトしました。`, `Timed out after ${REQUEST_TIMEOUT_MS / 1000} seconds.`);
      }
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }
  throw new LocalizedError('Quá nhiều redirect.', 'リダイレクト回数が多すぎます。', 'Too many redirects.');
}

async function scanOriginGroup(group: OriginGroup, crawlInternal: boolean, auth: BasicAuth, started: number): Promise<ScanGroupResult> {
  const queue: URL[] = [...group.seeds];
  const queued = new Set(group.seeds.map(x => x.toString()));
  const visited = new Set<string>();
  const assetVisited = new Set<string>();
  const files: SourceFile[] = [];
  const warnings: LocalizedText[] = [];
  let pagesScanned = 0;
  let assetsDiscovered = 0;
  let effectiveOrigin = group.origin;

  while (queue.length && pagesScanned < group.pageLimit && Date.now() - started < TOTAL_TIMEOUT_MS) {
    const current = queue.shift()!;
    const key = current.toString();
    if (visited.has(key) || (current.origin !== group.origin && current.origin !== effectiveOrigin) || !isPageCandidate(current)) continue;
    visited.add(key);

    try {
      const page = await fetchText(current, 'text/html,application/xhtml+xml', auth, group.origin);
      if (!/text\/html|application\/xhtml\+xml/i.test(page.contentType) && !/<html|<!doctype/i.test(page.text)) {
        warnings.push(W(`${current}: không phải HTML, đã bỏ qua.`, `${current}: HTMLではないためスキップしました。`, `${current}: not HTML; skipped.`));
        continue;
      }

      const final = normalizePageUrl(page.finalUrl);
      if (final.origin !== effectiveOrigin) {
        const base = new URL(effectiveOrigin);
        if (!auth && isCanonicalSiteRedirect(base, final)) {
          effectiveOrigin = final.origin;
        } else {
          warnings.push(W(`${current}: redirect sang domain khác nên không crawl tiếp.`, `${current}: 別ドメインへリダイレクトされたため、クロールを継続しません。`, `${current}: redirected to a different domain, so crawling was not continued.`));
          continue;
        }
      }

      files.push({ path: final.toString(), url: final.toString(), content: page.text, kind: 'html' });
      pagesScanned++;

      if (crawlInternal) {
        for (const link of extractLinks(page.text, final)) {
          const linkKey = link.toString();
          if (link.origin === effectiveOrigin && isPageCandidate(link) && !visited.has(linkKey) && !queued.has(linkKey) && queue.length < group.pageLimit * 8) {
            queue.push(link);
            queued.add(linkKey);
          }
        }
      }

      for (const asset of extractAssets(page.text, final)) {
        if (asset.url.origin !== effectiveOrigin || assetVisited.has(asset.url.toString())) continue;
        assetVisited.add(asset.url.toString());
        assetsDiscovered++;
      }
    } catch (e) {
      const vi = e instanceof Error ? e.message : 'không tải được trang';
      const ja = e instanceof LocalizedError ? e.ja : 'ページを取得できませんでした。';
      const en = e instanceof LocalizedError ? e.en : 'The page could not be fetched.';
      warnings.push(W(`${current}: ${vi}`, `${current}: ${ja}`, `${current}: ${en}`));
    }
  }

  if (Date.now() - started >= TOTAL_TIMEOUT_MS) {
    warnings.push(W('Đã dừng crawl do đạt giới hạn thời gian 60 giây.', '全体の制限時間60秒に達したためクロールを停止しました。', 'Crawling stopped after reaching the 60-second time limit.'));
  }
  if (queue.length && pagesScanned >= group.pageLimit) {
    warnings.push(W(`Đã dừng ở giới hạn ${group.pageLimit} trang cho ${group.origin}.`, `${group.origin} は ${group.pageLimit} ページの上限に達したため停止しました。`, `Stopped at the ${group.pageLimit}-page limit for ${group.origin}.`));
  }

  return {
    files,
    summary: {
      origin: effectiveOrigin,
      seeds: group.seeds.map(x => x.toString()),
      pagesScanned,
      assetsDiscovered,
      warnings,
    },
  };
}

async function mapLimit<T, R>(items: T[], limit: number, worker: (item: T) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  async function run() {
    while (true) {
      const index = next++;
      if (index >= items.length) return;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => run()));
  return results;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<WebsiteScanResponse | ApiError>) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed', errorJa: 'Method not allowed', errorEn: 'Method not allowed' });

  const started = Date.now();
  try {
    const rawUrls = Array.isArray(req.body?.urls)
      ? req.body.urls.map((x: unknown) => String(x || '').trim()).filter(Boolean)
      : String(req.body?.url || '').split(/\r?\n/).map((x: string) => x.trim()).filter(Boolean);

    if (!rawUrls.length) {
      return res.status(400).json({ error: 'Vui lòng nhập ít nhất 1 URL.', errorJa: 'URLを1件以上入力してください。', errorEn: 'Enter at least one URL.' });
    }
    if (rawUrls.length > MAX_SEEDS) {
      return res.status(400).json({ error: `Tối đa ${MAX_SEEDS} URL mỗi lần scan.`, errorJa: `1回のスキャンで指定できるURLは最大${MAX_SEEDS}件です。`, errorEn: `A maximum of ${MAX_SEEDS} URLs is allowed per scan.` });
    }

    const crawlInternal = req.body?.crawlInternal !== false;
    const requestedMax = Math.max(1, Math.min(MAX_PAGES_PER_URL, Number(req.body?.maxPages) || 5));
    const auth = parseAuth(req.body);

    const normalized: URL[] = [];
    const seen = new Set<string>();
    for (const raw of rawUrls) {
      const url = normalizeInputUrl(raw);
      await assertSafeTarget(url);
      const key = url.toString();
      if (!seen.has(key)) {
        seen.add(key);
        normalized.push(url);
      }
    }

    const groupMap = new Map<string, URL[]>();
    for (const url of normalized) {
      const list = groupMap.get(url.origin) || [];
      list.push(url);
      groupMap.set(url.origin, list);
    }

    // Never spray one Basic Auth credential across unrelated hosts/origins.
    // Multiple page URLs on the same protected staging site are supported in one batch.
    if (auth && groupMap.size > 1) {
      throw new LocalizedError(
        'Vì lý do bảo mật, Basic Authentication chỉ được dùng cho 1 origin trong mỗi batch. Bạn vẫn có thể nhập nhiều URL/trang cùng domain; với domain khác hãy scan ở batch riêng.',
        'セキュリティ上、Basic Authenticationは1回のバッチにつき1つのoriginのみ使用できます。同一ドメイン内の複数URLは同時監査できますが、別ドメインは別バッチで実行してください。',
        'For security, Basic Authentication can be used with only one origin per batch. Multiple URLs on the same origin are supported; scan other domains in a separate batch.'
      );
    }

    // Reserve one page for every explicit input URL first, then distribute the remaining crawl budget.
    // This guarantees that every URL the reviewer entered is checked at least once.
    let remainingExtra = Math.max(0, MAX_TOTAL_PAGES - normalized.length);
    const groups: OriginGroup[] = [];
    for (const [origin, seeds] of groupMap) {
      const desiredExtra = crawlInternal ? seeds.length * Math.max(0, requestedMax - 1) : 0;
      const allocatedExtra = Math.min(desiredExtra, remainingExtra);
      const pageLimit = seeds.length + allocatedExtra;
      groups.push({ origin, seeds, pageLimit });
      remainingExtra -= allocatedExtra;
    }

    const results = await mapLimit(groups, MAX_PARALLEL_ORIGINS, group => scanOriginGroup(group, crawlInternal, auth, started));

    const filesByUrl = new Map<string, SourceFile>();
    const sites: WebsiteSiteSummary[] = [];
    const warnings: LocalizedText[] = [];
    let assetsDiscovered = 0;

    for (const result of results) {
      sites.push(result.summary);
      assetsDiscovered += result.summary.assetsDiscovered;
      warnings.push(...result.summary.warnings);
      for (const file of result.files) filesByUrl.set(file.url || file.path, file);
    }

    const files = [...filesByUrl.values()];
    if (!files.length) {
      const first = warnings[0];
      throw new LocalizedError(first?.vi || 'Không đọc được trang HTML từ các URL đã nhập.', first?.ja || '入力されたURLからHTMLページを取得できませんでした。', first?.en || 'No HTML page could be fetched from the input URLs.');
    }

    const plannedTotal = normalized.length * (crawlInternal ? requestedMax : 1);
    if (plannedTotal > MAX_TOTAL_PAGES) {
      warnings.push(W(
        `Batch yêu cầu tối đa ${plannedTotal} trang; hệ thống giới hạn ${MAX_TOTAL_PAGES} trang/lần để bảo vệ staging.`,
        `要求された最大ページ数は ${plannedTotal} 件ですが、検証環境保護のため1回あたり ${MAX_TOTAL_PAGES} ページに制限されています。`,
        `The batch requested up to ${plannedTotal} pages; it is capped at ${MAX_TOTAL_PAGES} pages per scan to protect staging environments.`
      ));
    }

    return res.status(200).json({
      target: normalized[0].toString(),
      targets: normalized.map(x => x.toString()),
      files,
      pagesScanned: files.length,
      assetsDiscovered,
      warnings,
      sites,
      crawlInternal,
      maxPagesPerUrl: crawlInternal ? requestedMax : 1,
    });
  } catch (e) {
    if (e instanceof LocalizedError) return res.status(400).json({ error: e.message, errorJa: e.ja, errorEn: e.en });
    return res.status(400).json({ error: e instanceof Error ? e.message : 'Không thể scan website.', errorJa: 'Webサイトをスキャンできませんでした。', errorEn: 'The website could not be scanned.' });
  }
}
