# Rule Catalog — J-Line Guideline Only (v2.6)

Source of truth: `Coding Guidelines (VN).md` in `jline-coding/coding_guidelines`.

## Classification

- **Error**: the current source/runtime evidence is sufficient to confirm a company-rule violation.
- **Warning**: the rule has a documented exception or the tool needs project/design/reviewer context.
- Third-party library code is not converted into J-Line Error/Warning findings.

## Rule groups

- HTML & Semantics
- Links & SEO
- Accessibility
- CSS / FLOCSS / BEM
- JavaScript
- Images
- WordPress
- Structure & Delivery
- Responsive
- Manual Review

## Evidence displayed

Each Error/Warning keeps the exact:

- file or website URL
- line number when determinable
- source excerpt
- localized reason
- localized fix guidance
- guideline section

Same Rule IDs are grouped only for presentation; their individual evidence locations are never discarded.

## Third-party ownership policy

J-Line naming/style rules apply only to team-owned code.

Third-party exclusion is determined by:

1. standard library/vendor/plugin path patterns;
2. MailformPro/MFP and common frontend-library signatures;
3. minified/distribution bundle paths;
4. exact selector names learned from third-party CSS/SCSS present in the task;
5. inferred library prefixes from skipped library folders;
6. optional `.jline-auditorignore` project configuration.

Example:

```text
path:**/future-widget/**
selector:futurewidget
```

Library selectors found in project-owned override SCSS are skipped when ownership is known. This prevents rules such as CSS ID, `tag.class`, FLOCSS/BEM naming and responsive source rules from judging plugin-owned APIs.

## Team-requested suppressions / conventions

These are intentionally regression-tested:

1. `c-footer__child-link` is valid BEM.
2. `.c-btn-custom--pill .c-btn-custom__link` is allowed as same-Block modifier → own Element.
3. Trailing whitespace is **not audited in any file type**.
4. `0px`, `0rem`, etc. are not reported.
5. EJS/PHP/WordPress composed templates are not forced through standalone document-shell rules.
6. Internal links may use `/`, `./`, `../`, or bare relative notation; only page-like links missing the final `/` are reported.
7. Code inside comments is ignored.
8. Small page-loading bootstrap scripts are not reported as inline-JS violations.
9. Function/action comment presence is not automatically audited because template/library/generated boundaries made that detector noisy; code inside comments is still ignored by all JS detectors.

## Important parser hardening

The CSS missing-semicolon rule now recognizes declarations rather than simply matching any line containing `:`. Pseudo selectors such as:

```css
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
```

do not trigger `CSS-SEMICOLON-001`.
