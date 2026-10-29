# J-Line Rule Auditor v2.6.0

Internal coding-quality auditor dedicated to the **J-Line Coding Guidelines**.

The UI supports **VN | JP | EN**, automatically selects the initial language by network-country signal (Japan → JP, Vietnam → VN, other countries → EN), and always allows a manual language override.

## Core behavior

### Task Folder / ZIP
- Select a task folder directly or use a ZIP fallback.
- Source is analyzed locally in the browser; source code is not uploaded to the Website Audit API.
- File roles are separated (page, partial/layout, PHP logic, WordPress template, CSS/SCSS, JS, image) to reduce false positives.
- `.env*` contents are never read; only ignore/delivery safety is checked.
- Third-party code is isolated before J-Line rules are applied.

### Website URL
- Enter one or many URLs, one URL per line.
- Optional same-origin internal crawl.
- Up to 20 input URLs, 20 pages per input URL, and 100 actual pages per batch.
- Optional Basic Authentication for protected staging.
- Credentials are request-only: not saved to localStorage, not written to reports, and cross-origin redirects are blocked while Basic Auth is active.
- Private/local targets are blocked by default unless explicitly enabled for trusted internal staging.

## Error / Warning policy

- **Error** = a rule violation that the analyzer can confirm from the available code/output.
- **Warning** = the guideline has an exception, or reviewer/project context is required.

Every finding contains:
- Rule ID
- localized title and **reason**
- exact file/URL
- exact line when determinable
- code excerpt
- localized fix guidance
- guideline section

Repeated findings with the same Rule ID are grouped, while every individual file/line remains visible inside the group.

## Third-party isolation (v2.6)

The auditor does **not** apply J-Line internal source conventions to code owned by libraries/plugins.

It uses multiple layers:

1. **Path isolation** for common third-party locations such as `vendor/`, `plugins/`, `library/`, `libs/`, `external/`, minified bundles, MailformPro/MFP, and common frontend libraries.
2. **Library selector ownership index**: third-party CSS/SCSS is read only to learn library-owned class/ID selectors. Those selectors are then ignored when they appear in project-owned override SCSS or markup.
3. **Known library prefixes** such as MailformPro/MFP, Contact Form 7, Swiper, Splide, Slick, Select2, Fancybox, etc.
4. **Project-specific fallback** via `.jline-auditorignore` so a future/custom library can be excluded without changing application code.

Copy `.jline-auditorignore.example` to `.jline-auditorignore` when needed:

```text
path:**/custom-widget/**
selector:customwidget
```

This means a future library does not require a new application release just to suppress its owned files/selectors.

## False-positive hardening included

- Valid BEM such as `c-footer__child-link` passes.
- Same-Block modifier → own Element such as `.c-btn-custom--pill .c-btn-custom__link` is not reported by team convention.
- EJS layout/include and WordPress `get_header()` / `get_footer()` are not treated as standalone HTML documents.
- Commented-out HTML/CSS/SCSS/JS code is not audited.
- Small inline loading/bootstrap scripts are excluded from the inline-JS Warning.
- CSS pseudo selectors such as `button::-moz-focus-inner` are never parsed as declarations missing `;`.
- A real missing declaration semicolon is still detected with the correct line.
- Trailing whitespace is intentionally not checked anywhere per team preference.
- `0px`, `0rem`, etc. are intentionally not reported per team preference.
- Relative internal paths `/`, `./`, `../` and bare relative paths are accepted; page-like internal links are checked only for the final trailing `/`.
- Library-owned images are excluded from J-Line image naming rules.

## Language selection

Initial language when there is no saved manual choice:

- Network country `JP` → Japanese
- Network country `VN` → Vietnamese
- Other/unknown → English (browser language is used only as a fallback when country detection is unavailable)

Country detection prefers trusted proxy/edge country headers. On local/self-hosted use it can fall back to a short IP-country lookup. IP geolocation can be affected by VPN/proxy/network routing, so the manual **VN | JP | EN** switch always takes precedence once the user chooses a language.

## Run

Node.js 20 or 22 LTS is recommended.

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3050
```

Production:

```bash
npm run build
npm run start
```

Both development and production start on port **3050** by default.

## Optional environment variables

```env
ALLOW_PRIVATE_AUDIT_TARGETS=false
ALLOW_INSECURE_BASIC_AUTH=false
```

Only enable these for trusted internal staging where required.

## Test

```bash
npm test
```

Current regression coverage includes BEM/FLOCSS, generic third-party/MailformPro isolation, exact library selector ownership, comment masking, loading-script exemption, CSS pseudo-selector parsing, real semicolon errors, EJS/PHP composition, relative links, nested `.env`/`.gitignore` matching, multi-URL website audit, Basic Auth, and JP/VN country-header language detection.

## Source of truth

The official company guideline remains the final source of truth:

`https://github.com/jline-coding/coding_guidelines/blob/master/Coding%20Guidelines%20(VN).md`

Team-requested suppressions (for example trailing whitespace and zero-with-unit) are documented in `RULE_CATALOG.md` and regression-tested so behavior remains intentional.
