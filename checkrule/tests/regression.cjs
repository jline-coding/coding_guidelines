const assert=require('assert');
const {auditFiles,RULE_CATALOG,MANUAL_CHECKS}=require('./.build/rules.js');
function audit(files, mode='source', libraryPrefixes=[]){return auditFiles(files,{mode,libraryPrefixes});}
function ids(r){return r.findings.map(x=>x.ruleId)}
function findings(r,id){return r.findings.filter(x=>x.ruleId===id)}

// 1. Correct BEM element with hyphen must pass underscore + syntax checks.
let r=audit([{path:'src/components/_footer.ejs',content:'<a class="c-footer__child-link" href="/about/">A</a>'}]);
assert(!ids(r).includes('BEM-UNDERSCORE-001'), 'c-footer__child-link false positive underscore');
assert(!ids(r).includes('BEM-SYNTAX-001'), 'c-footer__child-link false positive syntax');

// 2. Single underscore must fail.
r=audit([{path:'src/components/_footer.ejs',content:'<a class="c-footer_child-link" href="/about/">A</a>'}]);
assert(ids(r).includes('BEM-UNDERSCORE-001'), 'single underscore not detected');

// 3. Nested element must fail.
r=audit([{path:'src/components/_footer.ejs',content:'<div class="c-footer__list__item"></div>'}]);
assert(ids(r).includes('BEM-NEST-001'), 'nested element not detected');

// 4. Valid modifier forms must pass.
r=audit([{path:'src/components/_footer.ejs',content:'<div class="c-footer c-footer--dark c-footer__child-link c-footer__child-link--active"></div>'}]);
assert(!ids(r).some(id=>id.startsWith('BEM-')), 'valid BEM modifier false positive');

// 5. Dynamic EJS class fragments must not be treated as class names.
r=audit([{path:'src/components/_card.ejs',content:'<div class="c-card <%= active ? \'is-active\' : \'\' %>"></div>'}]);
assert(!findings(r,'FLOCSS-PREFIX-001').some(f=>/[<%?]/.test(f.message.vi)), 'dynamic class false positive');

// 6. EJS partial split markup should not get closing-tag/page-shell findings.
r=audit([{path:'src/components/_header.ejs',content:'<header><div class="l-header">'}]);
assert(!ids(r).includes('HTML-CLOSE-001'), 'partial closing false positive');
assert(!ids(r).includes('HTML-H-001'), 'partial h1 false positive');

// 7. functions.php must not be page-audited.
r=audit([{path:'src/functions.php',content:'<?php function x(){ return true; }'}]);
assert(!ids(r).includes('HTML-H-001') && !ids(r).includes('HTML-ENC-001'), 'php logic page false positive');

// 8. .env ignored -> no error; not ignored -> error.
r=audit([{path:'.env',content:''},{path:'.gitignore',content:'node_modules/\n.env\n'}]);
assert(!ids(r).includes('STR-ENV-001'), '.env ignored false positive');
r=audit([{path:'.env',content:''},{path:'.gitignore',content:'node_modules/\n'}]);
assert(ids(r).includes('STR-ENV-001'), '.env non-ignored not detected');

// 9. Source relative anchor allowed by guideline example ../#contact.
r=audit([{path:'src/pages/index.ejs',content:'<a class="c-link" href="../#contact">Contact</a>'}]);
assert(!ids(r).includes('HTML-LINK-005'), '../#contact incorrectly rejected');

// 10. Website same-origin absolute internal URL should be flagged; external with proper attrs should pass.
r=audit([{path:'https://example.com/',url:'https://example.com/',kind:'html',content:'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Example</title></head><body><header></header><main><h1>A</h1><h2>B</h2><h3>C</h3><a href="https://example.com/about/">About</a><a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a></main><footer></footer></body></html>'}], 'website');
assert(ids(r).includes('HTML-LINK-006'), 'same-origin absolute URL not detected');
assert(!findings(r,'HTML-LINK-001').some(f=>f.message.vi.includes('google.com')), 'valid external link false positive');

// 11. Staging detector should not mistake contest.com for test domain.
r=audit([{path:'src/pages/index.ejs',content:'<a class="c-link" href="https://contest.com/about/" target="_blank" rel="noopener noreferrer">x</a>'}]);
assert(!ids(r).includes('HTML-LINK-002'), 'contest.com falsely detected as staging');

// 12. SP font <10 deterministic, 10-<12 warning rule.
r=audit([{path:'src/assets/scss/page/_top.scss',content:'@media (max-width: 767px) {\n.c-a {\nfont-size: 9px;\n}\n}'}]);
assert(ids(r).includes('RESP-FONT-MIN-001'), 'font <10 not detected');
r=audit([{path:'src/assets/scss/page/_top.scss',content:'@media (max-width: 767px) {\n.c-a {\nfont-size: 11px;\n}\n}'}]);
assert(ids(r).includes('RESP-FONT-001') && !ids(r).includes('RESP-FONT-MIN-001'), '10-12 font classification wrong');

// 13. Mixed-case tags must be detected, lowercase tags must pass.
r=audit([{path:'index.html',content:'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>X</title></head><body><header></header><main><h1>A</h1><h2>B</h2><h3>C</h3><Div class="c-box"></Div></main><footer></footer></body></html>'}]);
assert(ids(r).includes('HTML-TAG-CASE-001'), 'mixed-case HTML tag not detected');

// 14. Attribute values must use double quotes; boolean attributes are allowed.
r=audit([{path:'src/components/_form.ejs',content:'<input class="c-input" type=text disabled><a class="c-link" href=\'/about/\'>A</a>'}]);
assert(findings(r,'HTML-ATTR-QUOTE-001').length===2, 'single/unquoted attributes classification wrong');

// 15. Any type.class selector except body.class must be detected.
r=audit([{path:'src/assets/scss/component/_x.scss',content:'article.c-card {\n color: red;\n}\nbody.page-home {\n color: black;\n}'}]);
assert(findings(r,'CSS-TYPE-CLASS-001').length===1, 'type.class/body exception wrong');

// 16. HTML-like strings inside script/style must not create markup/class false positives.
r=audit([{path:'index.html',content:'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>X</title><script>const tpl = `<div class="wrong_class">x</div>`;</script></head><body><header></header><main><h1>A</h1><h2>B</h2><h3>C</h3></main><footer></footer></body></html>'}]);
assert(!ids(r).includes('BEM-UNDERSCORE-001') && !ids(r).includes('FLOCSS-PREFIX-001'), 'script string created markup false positive');

// 17. Dummy words in README/docs must not be treated as visible dummy website content.
r=audit([{path:'README.md',content:'Example: dummy text used in documentation only.'}]);
assert(!ids(r).includes('STR-DUMMY-001'), 'README dummy text false positive');

// 18. jQuery object variable without $ prefix is a deterministic guideline error.
r=audit([{path:'src/assets/js/common.js',content:'// cache target\nconst target = $(".js-target");'}]);
const jqPrefix=findings(r,'JS-JQ-PREFIX-001')[0];
assert(jqPrefix && jqPrefix.confidence==='deterministic', 'jQuery $ prefix should be deterministic');

// 19. Same-block modifier -> own element descendant is allowed by team convention.
r=audit([{path:'src/assets/scss/component/_btn.scss',content:'.c-btn-custom--pill .c-btn-custom__link {\n color: red;\n}'}]);
assert(!ids(r).includes('CSS-DESCENDANT-001'), 'same-block modifier -> own element should not be flagged');

// 20. Cross-component/project descendant is still detected.
r=audit([{path:'src/assets/scss/page/_news.scss',content:'.p-news .c-button {\n color: red;\n}'}]);
assert(ids(r).includes('CSS-DESCENDANT-001'), 'cross-module descendant should still be detected');

// 21. Trailing whitespace is intentionally ignored in every source type per team preference.
r=audit([{path:'src/assets/scss/component/_x.scss',content:'.c-x {   \n color: red;   \n}   '}]);
assert(!ids(r).includes('FMT-TRAILING-WS-001'), 'SCSS trailing whitespace should be ignored');
r=audit([{path:'index.html',content:'<!doctype html>   \n<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>X</title></head><body><header></header><main><h1>A</h1><h2>B</h2><h3>C</h3></main><footer></footer></body></html>'}]);
assert(!ids(r).includes('FMT-TRAILING-WS-001'), 'HTML trailing whitespace should also be ignored');

// 22. Zero-with-unit is intentionally not reported per team review preference.
r=audit([{path:'src/assets/scss/component/_x.scss',content:'.c-x {\n margin: 0px;\n padding: 0rem;\n}'}]);
assert(!ids(r).includes('CSS-ZERO-001'), 'zero-with-unit should not be reported');

// 23. EJS page assembled via layout/includes must not get standalone document-shell errors.
r=audit([{path:'src/pages/about/index.ejs',content:'<%- include("../../layouts/_default", { body: body }) %>\n<main><h1>About</h1></main>'}]);
for (const id of ['HTML-ENC-001','HTML-TITLE-001','HTML-H-001','HTML-SEM-001','HTML-SEM-002','RESP-VIEWPORT-001']) {
  assert(!ids(r).includes(id), `EJS assembled page false positive: ${id}`);
}

// 24. WordPress PHP template using get_header/get_footer must not get standalone document-shell errors.
r=audit([{path:'src/page.php',content:'<?php get_header(); ?>\n<main><h1><?php the_title(); ?></h1></main>\n<?php get_footer(); ?>'}]);
for (const id of ['HTML-ENC-001','HTML-TITLE-001','HTML-H-001','HTML-SEM-001','HTML-SEM-002','RESP-VIEWPORT-001','HTML-CLOSE-001']) {
  assert(!ids(r).includes(id), `WP assembled template false positive: ${id}`);
}

// 25. Secret env variants must also be protected; .env.example is allowed.
r=audit([{path:'.env.local',content:''},{path:'.gitignore',content:'.env\n'}]);
assert(ids(r).includes('STR-ENV-001'), '.env should not implicitly ignore .env.local');
r=audit([{path:'.env.local',content:''},{path:'.gitignore',content:'.env*\n'}]);
assert(!ids(r).includes('STR-ENV-001'), '.env* should ignore .env.local');
r=audit([{path:'.env.example',content:'SITE_URL='},{path:'.gitignore',content:'node_modules/\n'}]);
assert(!ids(r).includes('STR-ENV-001'), '.env.example must not be treated as a secret env file');

// 26. User-requested team exceptions remain suppressed.
r=audit([{path:'src/assets/scss/component/_x.scss',content:'.c-x--wide .c-x__label {   \n margin: 0px;   \n}   '}]);
assert(!ids(r).includes('CSS-DESCENDANT-001'), 'same-block modifier descendant should stay allowed');
assert(!ids(r).includes('FMT-TRAILING-WS-001'), 'SCSS trailing whitespace should stay ignored');
assert(!ids(r).includes('CSS-ZERO-001'), 'zero-with-unit should stay ignored');


// 27. Relative internal links are allowed; only page trailing slash is enforced.
r=audit([{path:'src/components/_nav.ejs',content:'<a class="c-link" href="../">Up</a><a class="c-link" href="../about/">About</a><a class="c-link" href="./company/">Company</a>'}]);
assert(!ids(r).includes('HTML-LINK-005'), 'relative internal path should never be rejected for not starting with /');
assert(!ids(r).includes('HTML-LINK-003'), 'relative links already ending with / should pass');
r=audit([{path:'src/components/_nav.ejs',content:'<a class="c-link" href="about/abc">ABC</a>'}]);
const relativeTrailing=findings(r,'HTML-LINK-003')[0];
assert(relativeTrailing, 'bare relative page URL without trailing slash not detected');
assert(relativeTrailing.recommendation.vi.includes('./about/abc/'), 'bare relative URL suggestion should be ./about/abc/');
r=audit([{path:'src/components/_nav.ejs',content:'<a class="c-link" href="../about/abc">ABC</a>'}]);
assert(ids(r).includes('HTML-LINK-003'), '../ relative page URL without trailing slash not detected');
r=audit([{path:'src/components/_nav.ejs',content:'<a class="c-link" href="./assets/file.pdf">PDF</a><a class="c-link" href="#contact">Anchor</a><a class="c-link" href="?tab=1">Query</a>'}]);
assert(!ids(r).includes('HTML-LINK-003'), 'file/hash/query links should not require trailing slash');

// 28. Third-party library and MailformPro files are fully excluded from internal coding rules.
r=audit([
  {path:'src/assets/library/plugin.css',content:'#Bad_ID { margin: 0; } .Wrong_Class { color:red; }'},
  {path:'src/assets/vendor/plugin.js',content:'var bad = 1;'},
  {path:'src/mailformpro4/mfp.css',content:'#mail_form { color:red; }'},
  {path:'src/mailformpro/mailformpro.cgi',content:'var bad = 1;'},
  {path:'src/assets/images/vendor/logo_bad_name.png',content:''},
]);
assert(r.findings.length===0, `third-party/MailformPro files should be excluded, got: ${ids(r).join(',')}`);

// 29. Third-party classes used from first-party markup are exempt from FLOCSS/BEM naming checks.
r=audit([{path:'src/components/_form.ejs',content:'<div class="swiper-slide wpcf7_form mfp_element mailformpro_item"></div>'}]);
assert(!ids(r).includes('FLOCSS-PREFIX-001'), 'third-party class prefix false positive');
assert(!ids(r).includes('BEM-UNDERSCORE-001'), 'third-party underscore class false positive');
assert(!ids(r).includes('BEM-SYNTAX-001'), 'third-party BEM syntax false positive');

// 30. Website relative internal paths are allowed; missing trailing slash still detected.
r=audit([{path:'https://example.com/',url:'https://example.com/',kind:'html',content:'<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Example</title></head><body><header></header><main><h1>A</h1><h2>B</h2><h3>C</h3><a href="../about/">About</a><a href="./company/team">Team</a></main><footer></footer></body></html>'}], 'website');
assert(!ids(r).includes('HTML-LINK-005'), 'website relative path should not be rejected for root-relative formatting');
assert(findings(r,'HTML-LINK-003').some(f=>f.excerpt?.includes('./company/team')), 'website missing trailing slash on relative page URL not detected');


// 31. MailformPro static files, logs, JS and images are never audited.
r=audit([
  {path:'pages/contact/mfp.statics/cart.css',content:'form.mfpcart { color:red }'},
  {path:'pages/contact/mfp.statics/cart.js',content:'var m=1; var a=2;'},
  {path:'pages/contact/mfp.statics/_images/draganddrop.png',content:''},
  {path:'pages/contact/iplogs/iplogs.img.gif',content:''},
]);
assert(r.findings.length===0, `MailformPro path isolation failed: ${ids(r).join(',')}`);

// 32. Library-owned selectors in first-party override SCSS are ignored.
r=audit([{path:'pages/assets/scss/page/contact/_index.scss',content:'#mfp_warning { color:red; }\n#mfp_OperationCheck { color:red; }\nform.mfpcart { color:red; }'}]);
assert(!ids(r).includes('CSS-ID-001')&&!ids(r).includes('CSS-TYPE-CLASS-001'), 'MailformPro selectors in first-party overrides must be excluded');

// 33. Vendor pseudo-elements/selectors must never look like missing CSS semicolons.
r=audit([{path:'src/assets/scss/component/_reset.scss',content:'button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}'}]);
assert(!ids(r).includes('CSS-SEMICOLON-001'), 'pseudo selector incorrectly treated as a CSS property');

// 34. A genuinely missing property semicolon is still a confirmed error.
r=audit([{path:'src/assets/scss/component/_card.scss',content:'.c-card {\n  color: red\n  display: block;\n}'}]);
const semi=findings(r,'CSS-SEMICOLON-001')[0];
assert(semi&&semi.line===2&&semi.confidence==='deterministic', 'real missing semicolon should be detected precisely');

// 35. Commented-out CSS/SCSS/JS code is ignored.
r=audit([{path:'src/assets/scss/component/_x.scss',content:'/* #bad_id { color:red } */\n// article.Bad_Class { color:red }\n.c-x { color:red; }'}]);
assert(!ids(r).includes('CSS-ID-001')&&!ids(r).includes('CSS-TYPE-CLASS-001'), 'commented SCSS should not be audited');
r=audit([{path:'src/assets/js/common.js',content:'// var oldValue = 1;\n/* var legacy = 2; */\nconst ok = 1;'}]);
assert(!ids(r).includes('JS-VAR-001'), 'commented JS should not be audited');

// 36. Small loading bootstrap scripts are an intentional inline-script exception.
r=audit([{path:'src/pages/index.ejs',content:'<script>if (!window.sessionStorage.getItem("storage_loading")) { document.documentElement.classList.add("is-loading"); window.sessionStorage.setItem("storage_loading", new Date().getTime().toString()); }</script>'}]);
assert(!ids(r).includes('HTML-JS-001'), 'loading bootstrap inline script should be excluded');

// 37. Custom future libraries can be excluded without code changes via .jline-auditorignore.
r=audit([
  {path:'.jline-auditorignore',content:'path:**/future-widget/**\nselector:futurewidget\n'},
  {path:'src/future-widget/core.js',content:'var legacy = 1;'},
  {path:'src/assets/scss/page/_override.scss',content:'#futurewidget_root { color:red; } .futurewidget-item { color:red; }'},
]);
assert(!ids(r).includes('JS-VAR-001')&&!ids(r).includes('CSS-ID-001'), '.jline-auditorignore third-party exclusion failed');

// 38. Reader-provided library prefixes also protect first-party override styles.
r=audit([{path:'src/assets/scss/page/_override.scss',content:'#carouselx_root { color:red; } carousel.carouselx-item { color:red; }'}], 'source', ['carouselx']);
assert(!ids(r).includes('CSS-ID-001')&&!ids(r).includes('CSS-TYPE-CLASS-001'), 'dynamic library prefix exclusion failed');

// 39. English reason/fix/title exist for all automatic findings.
r=audit([{path:'src/components/_x.ejs',content:'<div class="wrong_class"></div>'}]);
for(const f of r.findings){assert(f.title.en&&f.message.en&&f.recommendation.en, `missing English localization: ${f.ruleId}`)}

// 40. Every rule/manual item exposed to EN has professional English text.
for(const rule of RULE_CATALOG){assert(rule.title.en&&rule.guidelineSection.en, `rule English metadata missing: ${rule.id}`)}
for(const item of MANUAL_CHECKS){assert(item.title.en&&item.description.en&&item.guidelineSection.en, `manual English metadata missing: ${item.id}`)}

// 41. Exact class/ID ownership is learned from third-party CSS when available.
r=audit([
  {path:'src/assets/vendor/futureui/futureui.css',content:'.cardx { color:red; } #dialogx { display:none; }'},
  {path:'src/components/_future.ejs',content:'<div class="cardx"></div>'},
  {path:'src/assets/scss/page/_future.scss',content:'#dialogx { display:block; }'},
]);
assert(!ids(r).includes('FLOCSS-PREFIX-001')&&!ids(r).includes('CSS-ID-001'), 'exact third-party selector ownership inference failed');

// 42. Repository-relative .gitignore paths and negation are honored for nested env files.
r=audit([{path:'project/config/.env',content:''},{path:'project/.gitignore',content:'config/.env\n'}]);
assert(!ids(r).includes('STR-ENV-001'), 'repository-relative gitignore path should ignore nested .env');
r=audit([{path:'project/config/.env',content:''},{path:'project/.gitignore',content:'config/.env\n!config/.env\n'}]);
assert(ids(r).includes('STR-ENV-001'), 'gitignore negation should re-include nested .env');

// 43. Generic *.statics library folders are isolated for future plugins, not only MailformPro.
r=audit([{path:'pages/contact/futurewidget.statics/reset.css',content:'#Future_ID { color:red } form.futurewidget { color:red }'},{path:'pages/contact/futurewidget.statics/core.js',content:'var legacy = 1;'}]);
assert(r.findings.length===0, `generic *.statics third-party isolation failed: ${ids(r).join(',')}`);

// 44. YubinBango (h-adr, p-postal-code, etc.), microformats and reCAPTCHA classes are exempt from FLOCSS/BEM prefix checks.
r=audit([
  {
    path:'src/pages/contact/index.ejs',
    content:'<form class="c-form h-adr"><span class="p-country-name">Japan</span><input class="c-form__input p-postal-code" type="text"><input class="p-region" type="text"><div class="g-recaptcha"></div></form>'
  },
  {
    path:'src/assets/scss/page/_contact.scss',
    content:'.c-form .p-postal-code { width: 100px; }\nform.h-adr { display: block; }\n'
  }
]);
assert(!ids(r).includes('FLOCSS-PREFIX-001'), `YubinBango/microformat classes should not trigger FLOCSS-PREFIX-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('BEM-SYNTAX-001'), `YubinBango classes should not trigger BEM-SYNTAX-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('FLOCSS-ORDER-001'), `YubinBango classes should not trigger FLOCSS-ORDER-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('CSS-DESCENDANT-001'), `Nesting YubinBango selector in SCSS should not trigger CSS-DESCENDANT-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('CSS-TYPE-CLASS-001'), `form.h-adr should not trigger CSS-TYPE-CLASS-001, got: ${ids(r).join(',')}`);

// 45. reCAPTCHA badge style blocks in markup and third-party element styles are exempt from HTML-CSS-001.
r=audit([
  {
    path:'header.php',
    content:`<?php if (is_page('contact')): ?>
<style>
    .grecaptcha-badge{
        display: block !important;
        z-index: 1000;
    }
</style>
<?php endif; ?>
<span class="p-country-name" style="display:none;">Japan</span>`
  }
]);
assert(!ids(r).includes('HTML-CSS-001'), `reCAPTCHA style tag and third-party inline style should not trigger HTML-CSS-001, got: ${ids(r).join(',')}`);

// 46. Uppercase English text (e.g. >TOP<, >NEWS<) is not reported by HTML-UPPER-TEXT-001.
r=audit([
  {
    path:'404.php',
    content:'<div class="p-404__btn"><a href="/">TOP</a></div>'
  }
]);
assert(!ids(r).includes('HTML-UPPER-TEXT-001'), `uppercase text should not trigger HTML-UPPER-TEXT-001, got: ${ids(r).join(',')}`);

// 47. Standard admin menu hardening (remove_menu_page('cptui_main_menu')) does not trigger WP-CPTUI-001.
r=audit([
  {
    path:'assets/images/common/img_dummy.jpg',
    content:''
  },
  {
    path:'functions.php',
    content:`<?php
function remove_menus() {
    remove_menu_page('cptui_main_menu'); // CPT UI
}
add_action('admin_menu', 'remove_menus');
`
  }
]);
assert(!ids(r).includes('WP-CPTUI-001'), `remove_menu_page('cptui_main_menu') should not trigger WP-CPTUI-001, got: ${ids(r).join(',')}`);

// 48. SVG standard camelCase tags (clipPath, linearGradient, etc.) and SVG internal content do not trigger HTML-TAG-CASE-001 or ID case rules.
r=audit([
  {
    path:'pages/index.ejs',
    content:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
  <clipPath id="clip0_3033_184640">
    <rect width="20" height="20" fill="white"/>
  </clipPath>
  <linearGradient id="paint0_linear_10_8158" x1="413.456" y1="0.00585937" x2="413.456" y2="459.994" gradientUnits="userSpaceOnUse">
    <stop stop-color="#fff"/>
  </linearGradient>
  <path id="Vector_A" class="st0" style="fill:#000;" d="M0 0h20v20H0z"/>
</svg>`
  }
]);
assert(!ids(r).includes('HTML-TAG-CASE-001'), `SVG camelCase tags should not trigger HTML-TAG-CASE-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('HTML-CLASS-CASE-001'), `SVG internal IDs/classes should not trigger HTML-CLASS-CASE-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('FLOCSS-PREFIX-001'), `SVG internal classes should not trigger FLOCSS-PREFIX-001, got: ${ids(r).join(',')}`);
assert(!ids(r).includes('HTML-CSS-001'), `SVG internal styles should not trigger HTML-CSS-001, got: ${ids(r).join(',')}`);

// 49. External links (e.g. google.co.jp/maps with target="_blank") do not trigger HTML-LINK-003 internal trailing slash error.
r=audit([
  {
    path:'pages/company/japan.ejs',
    content:'<a href="google.co.jp/maps?q=tokyo" class="c-tbl-location__link" target="_blank" rel="noopener noreferrer">Map</a><a href="./about">About</a>'
  }
]);
assert(!findings(r,'HTML-LINK-003').some(f=>f.excerpt?.includes('google.co.jp')), `external link without protocol should not trigger HTML-LINK-003, got: ${ids(r).join(',')}`);
assert(findings(r,'HTML-LINK-003').some(f=>f.excerpt?.includes('./about')), `internal relative link should still trigger HTML-LINK-003`);

// 50. Table elements are not reported by HTML-TABLE-001.
r=audit([
  {
    path:'pages/company/officer/index.ejs',
    content:'<table><thead><tr><th>Name</th><th>Role</th></tr></thead><tbody><tr><td>A</td><td>B</td></tr></tbody></table>'
  }
]);
assert(!ids(r).includes('HTML-TABLE-001'), `table elements should not trigger HTML-TABLE-001, got: ${ids(r).join(',')}`);

console.log('REGRESSION_EXTRA_OK 50/50');







