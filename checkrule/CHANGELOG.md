# Changelog

## 2.6.0

- Added **VN | JP | EN** UI and report localization.
- Added automatic initial language selection: JP network → Japanese, VN network → Vietnamese, all other countries → English; saved manual selection overrides automatic detection.
- Error/Warning evidence now emphasizes localized **Reason**, exact file/URL and line on every occurrence.
- Expanded third-party isolation from MailformPro-specific suppression to a generic ownership model:
  - standard vendor/plugin/library/external paths;
  - minified distribution bundles;
  - known library prefixes;
  - exact class/ID ownership learned from third-party CSS/SCSS;
  - inferred prefixes from library folder names;
  - `.jline-auditorignore` for future/custom libraries.
- MailformPro `mfp.statics`, `iplogs`, JS/CSS/images and `mfp*` selectors are excluded from J-Line internal coding rules.
- Library images are excluded from image naming/format source findings.
- Commented-out code is masked before HTML/CSS/SCSS/JS checks.
- Disabled noisy automatic `JS-COMMENT-001` finding per team preference.
- Small inline loading/bootstrap scripts are excluded from inline-JS Warning.
- Replaced naive CSS semicolon line matching with declaration-aware detection; pseudo selectors such as `::-moz-focus-inner` no longer create false positives.
- Genuine missing semicolons are now deterministic Errors with the exact line.
- Trailing whitespace is no longer audited in any file type.
- `meta keywords` is classified as Warning rather than deterministic Error because the guideline says it is unnecessary rather than universally forbidden.
- ZIP/folder readers prioritize auditable source before safety caps and report detected library exclusions.
- Excluded YubinBango postal code auto-fill classes (`h-adr`, `p-postal-code`, `p-region`, `p-locality`, `p-street-address`, `p-extended-address`, `p-country-name`), Microformats, and `grecaptcha`/`g-recaptcha` from FLOCSS/BEM prefix and CSS nesting warnings.
- Excluded dedicated reCAPTCHA `<style>` blocks (e.g. `.grecaptcha-badge { display: block !important; }`) and third-party element inline styles from `HTML-CSS-001`.
- Fixed `WP-CPTUI-001` false positive caused by standard admin menu removal (`remove_menu_page('cptui_main_menu')`) and ensured project-level findings never attribute to image files.
- Excluded standard SVG camelCase elements (`clipPath`, `linearGradient`, `radialGradient`, etc.) and SVG internal content from `HTML-TAG-CASE-001` and ID casing checks.
- Prevented `HTML-LINK-003` ("Internal URL thiếu trailing slash") from falsely checking external links (e.g. `google.co.jp/maps?...` or links with `target="_blank"`).
- Disabled noisy automatic `HTML-TABLE-001` warning on `<table>` elements per team preference (allowing semantic tabular data on IR/officer/data pages).
- Regression: **50 rule-engine cases**, **10 Website/API/country-detection cases**, plus page/lib TypeScript validation.

## 2.5.0

- Relative internal paths accepted; only page trailing slash is enforced.
- Initial MailformPro/vendor exclusions.
- VN | JP UI, Error / Warning grouping, batch Website URL + Basic Auth.
