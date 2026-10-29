import type {
  AuditMode, AuditResult, Category, Confidence, FileRole, Finding, LocalizedText,
  ManualCheck, ProjectContext, RuleCatalogItem, Severity, SourceFile
} from './types';
import { tx } from './i18n';

export const guidelineUrl = 'https://github.com/jline-coding/coding_guidelines/blob/master/Coding%20Guidelines%20(VN).md';

const textExtensions = ['.html','.htm','.ejs','.php','.css','.scss','.sass','.js','.mjs','.cjs','.ts','.tsx','.jsx','.json','.md','.txt','.yml','.yaml','.xml','.svg','.gitignore','.jline-auditorignore'];
const imageExtensions = ['.png','.jpg','.jpeg','.gif','.webp','.svg','.ico'];
export const isSecretEnvPath = (path:string) => {
  const base=path.replace(/\\/g,'/').split('/').pop()?.toLowerCase() || '';
  return base==='.env' || (base.startsWith('.env.') && base!=='.env.example');
};
export const isAuditable = (path: string) => { const p=path.toLowerCase().replace(/\\/g,'/'); return textExtensions.some((ext) => p.endsWith(ext)) || p.endsWith('/.jline-auditorignore') || p==='.jline-auditorignore' || isSecretEnvPath(path); };
export const isImagePath = (path: string) => imageExtensions.some(ext => path.toLowerCase().endsWith(ext));

const L = tx;
const section = {
  structure: L('HTML > Cấu trúc file / Template', 'HTML > ファイル構成・テンプレート', 'HTML > File structure / template'),
  format: L('HTML > Quy tắc format', 'HTML > フォーマット規則', 'HTML > Formatting rules'),
  markup: L('HTML > Markup', 'HTML > マークアップ', 'HTML > Markup'),
  heading: L('HTML > h1–h6', 'HTML > h1–h6タグ', 'HTML > h1–h6 headings'),
  anchor: L('HTML > thẻ <a>', 'HTML > aタグ', 'HTML > <a> links'),
  image: L('Hình ảnh', '画像に関して', 'Images'),
  alt: L('Hình ảnh > thuộc tính alt', '画像 > alt属性', 'Images > alt attribute'),
  css: L('CSS > selector và property', 'CSS > セレクタとプロパティ', 'CSS > Selectors and properties'),
  flocss: L('CSS > Quy tắc đặt tên Class (FLOCSS + BEM)', 'CSS > クラス命名ルール（FLOCSS + BEM）', 'CSS > Class naming (FLOCSS + BEM)'),
  sass: L('CSS > Sass', 'CSS > Sassに関して', 'CSS > Sass'),
  js: L('JavaScript', 'JavaScriptに関して', 'JavaScript'),
  responsive: L('Responsive > chiều rộng nội dung, breakpoint và font', 'レスポンシブ > コンテナ幅・ブレークポイント・フォント', 'Responsive > container width, breakpoints and font sizes'),
  delivery: L('Phương pháp giao hàng', '納品方法に関して', 'Delivery method'),
  wp: L('WordPress', 'WordPressに関して', 'WordPress'),
 };

const RULE_ENGLISH: Record<string,{title:string;reason:string;fix:string}> = {
  'STR-ENV-001': {title:'.env is not Git-ignored',reason:'A secret environment file exists but is not excluded by .gitignore.',fix:'Add the secret environment file to .gitignore and commit only a non-secret example file.'},
  'STR-DUMMY-001': {title:'Possible dummy content or asset',reason:'Content appears to contain placeholder or dummy data that may have been left in the task.',fix:'Confirm against the task/design and remove placeholder content unless it is explicitly allowed.'},
  'HTML-TAG-CASE-001': {title:'HTML tag contains uppercase letters',reason:'HTML tag names must be lowercase.',fix:'Change the tag name to lowercase.'},
  'HTML-ATTR-QUOTE-001': {title:'Attribute value is not double-quoted',reason:'The guideline requires attribute values to use double quotes.',fix:'Use the form attribute="value".'},
  'HTML-CLASS-CASE-001': {title:'Class or ID contains uppercase letters',reason:'Class names and IDs must be lowercase.',fix:'Rename it using lowercase and follow the FLOCSS/BEM naming rules.'},
  'HTML-TABLE-001': {title:'Table usage needs review',reason:'The guideline generally prohibits table-based layout; this may be valid only for real tabular data.',fix:'If this is not tabular data, replace the table layout with semantic HTML and CSS layout.'},
  'HTML-CLOSE-001': {title:'Possible missing closing tag',reason:'The number of opening and closing tags appears inconsistent in this standalone HTML file.',fix:'Check the closing tags and template boundaries before changing the markup.'},
  'HTML-ENC-001': {title:'Missing UTF-8 charset declaration',reason:'A complete page must declare UTF-8 with <meta charset="utf-8">.',fix:'Add <meta charset="utf-8"> inside <head>.'},
  'HTML-TITLE-001': {title:'Missing page title',reason:'A complete page does not contain a <title> element.',fix:'Add a page title using the format required by the guideline/project.'},
  'HTML-TITLE-002': {title:'Page title format may be incorrect',reason:'The subpage title may not follow the recommended Page title | Site name pattern.',fix:'Confirm the project-specific title rule and adjust the <title> if needed.'},
  'SEO-KEYWORDS-001': {title:'meta keywords is unnecessary',reason:'The guideline states that meta keywords does not need to be configured.',fix:'Remove meta keywords unless the project has an explicit requirement.'},
  'HTML-H-001': {title:'Page is missing h1',reason:'A complete page must have an appropriate h1.',fix:'Add the main page heading as h1 according to the guideline.'},
  'HTML-H-002': {title:'h2 or h3 structure may be incomplete',reason:'The page may not include the h1-h3 heading structure required by the guideline.',fix:'Review the content outline and add appropriate heading levels where required.'},
  'HTML-H-003': {title:'Heading level may be skipped',reason:'The heading outline jumps over one or more levels.',fix:'Review the content hierarchy and avoid unnecessary heading-level jumps.'},
  'HTML-SEM-001': {title:'Invalid number of main elements',reason:'A complete page should generally contain exactly one <main> element.',fix:'Use a single <main> element for the primary page content.'},
  'HTML-SEM-002': {title:'Header/footer semantic structure needs review',reason:'The shared header or footer may not use the expected semantic element.',fix:'Use <header> and <footer> for the shared page header/footer when applicable.'},
  'HTML-NAV-001': {title:'Global navigation may not use nav',reason:'The guideline requires global navigation to use the <nav> element.',fix:'Wrap the global navigation in an appropriate <nav> element.'},
  'HTML-LINK-001': {title:'External link is missing target/rel',reason:'External links must use target="_blank" together with rel="noopener noreferrer".',fix:'Add target="_blank" rel="noopener noreferrer".'},
  'HTML-LINK-001S': {title:'Absolute link needs external/internal confirmation',reason:'The source contains an absolute URL, but the auditor cannot safely determine whether it is external or the production domain.',fix:'If external, add target/rel. If internal, use an approved internal path and keep the trailing slash.'},
  'HTML-LINK-002': {title:'Local/staging URL is hard-coded',reason:'A local or staging hostname appears to be hard-coded in source.',fix:'Use a project-relative path or the appropriate dynamic WordPress URL helper.'},
  'HTML-LINK-003': {title:'Internal page URL is missing a trailing slash',reason:'The internal page URL does not end with /.',fix:'Add / at the end of the page URL while preserving the existing relative-path style.'},
  'HTML-LINK-004': {title:'tel: link contains formatting characters',reason:'The tel: href contains spaces, hyphens, parentheses, or other formatting characters.',fix:'Keep formatting in visible text, but use digits only in the tel: href.'},
  'HTML-LINK-006': {title:'Internal link uses an absolute URL',reason:'A same-origin internal link is written as an absolute URL.',fix:'Use an approved internal relative path and keep the trailing slash.'},
  'HTML-ALT-001': {title:'Image is missing alt',reason:'The <img> element has no alt attribute.',fix:'Use alt="" for decorative images or a specific alternative description for meaningful images.'},
  'HTML-ALT-002': {title:'Alt text is too generic',reason:'The alt text is generic and does not describe the image meaning.',fix:'Provide a concise, specific description of the image content or purpose.'},
  'HTML-ALT-003': {title:'Empty alt needs contextual confirmation',reason:'alt="" is correct only for decorative images.',fix:'Confirm that the image is decorative; otherwise add meaningful alt text.'},
  'HTML-UPPER-TEXT-001': {title:'English text may be hard-coded in uppercase',reason:'All-uppercase English text may be read character-by-character by assistive technology.',fix:'Consider normal-case source text and use text-transform: uppercase for presentation.'},
  'HTML-CSS-001': {title:'Inline/style-block CSS in markup',reason:'The guideline requires styling to be managed in CSS/SCSS files rather than directly in markup.',fix:'Move the styles into the project CSS/SCSS structure.'},
  'FLOCSS-PREFIX-001': {title:'Class is missing a valid FLOCSS prefix',reason:'The class does not use an allowed FLOCSS/state/hook naming convention.',fix:'Use l-/c-/p-/u- for project-owned styling classes; js-/is-/has- are reserved for hook/state roles.'},
  'FLOCSS-ORDER-001': {title:'Utility class appears before the main FLOCSS class',reason:'Utility classes should follow the primary FLOCSS class in the class attribute.',fix:'Place l-/c-/p- classes before u- utility classes.'},
  'BEM-UNDERSCORE-001': {title:'Class uses a single underscore',reason:'A single underscore is not allowed as a word separator in the BEM naming rule.',fix:'Use - between words and reserve __ for Element separation.'},
  'BEM-NEST-001': {title:'BEM Element is nested inside another Element',reason:'The class contains multiple __ Element levels.',fix:'Keep Elements directly under the Block or split the nested structure into a new Block.'},
  'BEM-SYNTAX-001': {title:'Invalid FLOCSS/BEM syntax',reason:'The class does not match the allowed Block / Element / Modifier forms.',fix:'Use prefix-block, prefix-block__element, prefix-block--modifier, or prefix-block__element--modifier.'},
  'CSS-ID-001': {title:'ID selector is used for styling',reason:'The guideline prohibits using ID selectors for styling, except IDs used structurally as anchor targets.',fix:'Style with a project-owned FLOCSS/BEM class instead.'},
  'CSS-TYPE-CLASS-001': {title:'Type selector is combined with a class',reason:'The guideline prohibits selectors such as tag.class, except for body.',fix:'Remove the type selector and use the class selector directly.'},
  'CSS-DESCENDANT-001': {title:'Nested component/project descendant selector',reason:'The selector appears to couple FLOCSS modules and unnecessarily increase specificity.',fix:'Prefer a modifier or a flat selector; use nesting only for guideline-approved exceptions.'},
  'CSS-SEMICOLON-001': {title:'CSS property may be missing a semicolon',reason:'A declaration appears to end without the required semicolon.',fix:'End every CSS/SCSS property declaration with ;.'},
  'CSS-LINE-001': {title:'Selector/property is not split onto separate lines',reason:'A selector and property appear on the same line.',fix:'Put the selector and each property on separate lines.'},
  'CSS-JS-HOOK-001': {title:'js-* hook is used for styling',reason:'js-* classes are reserved for JavaScript hooks and must not be styling targets.',fix:'Move the style to an appropriate l-/c-/p-/u- class.'},
  'SASS-IMPORT-001': {title:'SCSS uses @import',reason:'The template uses the Dart Sass module system, so @import is not allowed.',fix:'Replace @import with @use/@forward and organize the modules accordingly.'},
  'SASS-STRUCT-001': {title:'Sass module structure may be incomplete',reason:'The project appears to be a J-Line template but the expected FLOCSS/7-1 module groups are incomplete.',fix:'Review foundation/layout/component/page/global/utilities and @use/@forward organization.'},
  'SASS-ENTRY-CSS-001': {title:'Entry SCSS contains direct CSS',reason:'Top-level common.scss/top.scss files should only load modules.',fix:'Move selectors/declarations into modules and keep the entry file for @use statements only.'},
  'HTML-JS-001': {title:'Inline JavaScript',reason:'The guideline says inline JavaScript should be minimized and used only when truly necessary.',fix:'Prefer an external JS file; keep inline code only for a justified exception.'},
  'HTML-JS-002': {title:'External script may be missing defer/async',reason:'The external script has neither defer nor async; guideline exceptions depend on execution context.',fix:'Use defer by default, async for appropriate analytics/tracking, or document the justified exception.'},
  'JS-VAR-001': {title:'var is used instead of const/let',reason:'The guideline requires const for fixed/DOM values and let for reassigned variables.',fix:'Replace var with the appropriate const or let declaration.'},
  'JS-JQ-CACHE-001': {title:'Repeated jQuery selector may not be cached',reason:'The same jQuery selector is executed repeatedly instead of reusing a cached object.',fix:'Cache the jQuery object in a const variable, using a $ prefix.'},
  'JS-JQ-PREFIX-001': {title:'jQuery object variable is missing the $ prefix',reason:'A variable stores a jQuery object but its name does not start with $.',fix:'Rename the variable with a leading $ to identify it as a jQuery object.'},
  'JS-CDN-001': {title:'JavaScript is loaded from a CDN',reason:'The guideline says CDN usage should be minimized.',fix:'Confirm the CDN is necessary; otherwise manage the dependency locally/vendor-side.'},
  'IMG-FMT-001': {title:'Source image WebP pipeline is not confirmed',reason:'A JPG/PNG source image exists but no Sharp/WebP build pipeline was detected.',fix:'If this is the J-Line template with Sharp, the raster source is valid; otherwise add a WebP pipeline/output.'},
  'IMG-FMT-002': {title:'Runtime image does not prioritize WebP',reason:'A runtime image uses a raster format where WebP should generally be prioritized.',fix:'Use WebP, or an approved picture/fallback structure when compatibility requires it.'},
  'IMG-NAME-001': {title:'Image filename does not use bg_/icon_/img_',reason:'The image filename does not follow the guideline prefix convention.',fix:'Rename the image according to purpose: bg_xxx, icon_xxx, or img_xxx.'},
  'IMG-RESP-001': {title:'PC/SP image variants may be missing picture',reason:'The filename suggests separate PC/SP images but the markup does not appear to use <picture>.',fix:'When PC/SP images genuinely differ, use <picture> and an appropriate <source media> rule.'},
  'WP-URL-001': {title:'PHP hard-codes a URL/path instead of a WordPress helper',reason:'The WordPress template contains a hard-coded root-relative URL/path.',fix:'Use home_url(), get_permalink(), or get_theme_file_uri() with esc_url() as appropriate.'},
  'WP-CPTUI-001': {title:'Possible Custom Post Type UI usage',reason:'The source appears to reference Custom Post Type UI where the guideline prefers code/approved registration.',fix:'Confirm whether the plugin is required and prefer the approved registration method.'},
  'RESP-VIEWPORT-001': {title:'Missing viewport meta',reason:'The complete page is missing the responsive viewport meta tag.',fix:'Add <meta name="viewport" content="width=device-width, initial-scale=1">.'},
  'RESP-FONT-MIN-001': {title:'SP font size is below 10px',reason:'A mobile media query contains a font size below the guideline minimum.',fix:'Increase the font size to at least 10px; use 12px or more when no design exception applies.'},
  'RESP-FONT-001': {title:'SP font size is between 10px and under 12px',reason:'The guideline generally avoids mobile font sizes below 12px unless the design explicitly requires it.',fix:'Confirm the design; if no exception exists, increase the font size to 12px or more.'},
  'RESP-WIDTH-001': {title:'Large fixed width needs responsive review',reason:'A fixed width exceeds the standard container size and may cause horizontal overflow.',fix:'Prefer a fluid/max-width layout or confirm the fixed width is an intentional exception.'},
};

export const RULE_CATALOG: RuleCatalogItem[] = [
  ['STR-ENV-001','structureDelivery','blocker','deterministic',L('.env không được Git-ignore','.envがGit除外 (.gitignore) に設定されていない'),section.structure,['source']],
  ['STR-DUMMY-001','structureDelivery','major','probable',L('Có dấu hiệu dummy content/assets','ダミーテキスト・ダミー画像残存の疑い'),section.structure,['source','website']],
  ['HTML-TAG-CASE-001','markup','major','deterministic',L('Tag HTML viết hoa','HTMLタグ名に大文字が使用されている'),section.format,['source','website']],
  ['HTML-ATTR-QUOTE-001','markup','minor','deterministic',L('Attribute value không dùng nháy kép','属性値がダブルクォートで囲まれていない'),section.markup,['source']],
  ['HTML-CLASS-CASE-001','cssFlocss','major','deterministic',L('Class/ID có chữ hoa','クラス名・ID名に大文字が使用されている'),section.format,['source']],
  ['HTML-TABLE-001','markup','major','probable',L('Sử dụng thẻ table','レイアウト目的のtableタグ使用の疑い'),section.markup,['source','website']],
  ['HTML-CLOSE-001','markup','major','probable',L('Có thể thiếu closing tag','終了タグの欠落・不整合の疑い'),section.markup,['source']],
  ['HTML-ENC-001','markup','major','deterministic',L('Thiếu meta charset UTF-8','meta charset="utf-8"の指定欠落'),section.markup,['source','website']],
  ['HTML-TITLE-001','linksSeo','major','deterministic',L('Thiếu title trang','<title>タグの欠落'),section.markup,['source','website']],
  ['HTML-TITLE-002','linksSeo','minor','probable',L('Title trang con có thể sai format','下層ページの<title>フォーマット不備'),section.markup,['website']],
  ['SEO-KEYWORDS-001','linksSeo','minor','probable',L('Có meta keywords không cần thiết','不要なmeta keywordsタグの記述'),section.markup,['source','website']],
  ['HTML-H-001','markup','major','deterministic',L('Trang thiếu h1','<h1>タグの欠落'),section.heading,['source','website']],
  ['HTML-H-002','markup','minor','probable',L('Thiếu h2 hoặc h3','<h2>または<h3>タグの欠落'),section.heading,['source','website']],
  ['HTML-H-003','markup','minor','probable',L('Heading có dấu hiệu nhảy cấp','見出しレベルの順序不整合（階層スキップ）'),section.heading,['source','website']],
  ['HTML-SEM-001','markup','major','deterministic',L('Số lượng main không hợp lệ','<main>タグの数が不正（1つではない）'),section.markup,['source','website']],
  ['HTML-SEM-002','markup','minor','probable',L('Header/footer semantic cần kiểm tra','<header>・<footer>セマンティック構造の確認要'),section.markup,['source','website']],
  ['HTML-NAV-001','accessibility','minor','probable',L('Global navigation có thể chưa dùng nav','グローバルナビゲーションに<nav>が未適用'),section.markup,['source','website']],
  ['HTML-LINK-001','linksSeo','major','deterministic',L('External link thiếu target/rel','外部リンクのtarget="_blank"/rel欠落'),section.anchor,['website']],
  ['HTML-LINK-001S','linksSeo','major','probable',L('Absolute link cần xác nhận external/internal','絶対パスリンクの外部/内部リンク属性確認要'),section.anchor,['source']],
  ['HTML-LINK-002','linksSeo','major','deterministic',L('Hard-code URL local/staging','ローカル/検証環境URLのハードコード'),section.anchor,['source']],
  ['HTML-LINK-003','linksSeo','minor','deterministic',L('Internal URL thiếu trailing slash','内部リンクURL末尾のスラッシュ欠落'),section.anchor,['source','website']],
  ['HTML-LINK-004','linksSeo','minor','deterministic',L('Tel link chứa ký tự định dạng','電話番号リンク（tel:）に記号が含まれている'),section.anchor,['source','website']],
  ['HTML-LINK-006','linksSeo','major','deterministic',L('Internal link viết absolute URL','内部リンクが絶対URLで記述されている'),section.anchor,['website']],
  ['HTML-ALT-001','accessibility','major','deterministic',L('Ảnh thiếu alt','<img>タグのalt属性欠落'),section.alt,['source','website']],
  ['HTML-ALT-002','accessibility','minor','deterministic',L('Alt quá chung chung','alt属性の内容が曖昧・汎用的（「画像」等）'),section.alt,['source','website']],
  ['HTML-ALT-003','accessibility','recommendation','manual',L('Alt rỗng cần xác nhận ảnh trang trí','空のalt属性（装飾用画像であるかの確認要）'),section.alt,['source','website']],
  ['HTML-UPPER-TEXT-001','accessibility','recommendation','probable',L('Text tiếng Anh viết hoa trực tiếp','英語テキストの直接大文字記述（text-transform推奨）'),section.markup,['source','website']],
  ['HTML-CSS-001','cssFlocss','major','deterministic',L('Style block/inline trong markup','マークアップ内へのインラインstyle/styleタグ記述'),section.css,['source']],
  ['FLOCSS-PREFIX-001','cssFlocss','major','deterministic',L('Class thiếu prefix FLOCSS/state/hook','FLOCSSプレフィックス（l-/c-/p-/u-）等の欠落'),section.flocss,['source']],
  ['FLOCSS-ORDER-001','cssFlocss','minor','deterministic',L('Utility class đứng trước FLOCSS class','Utilityクラス（u-*）がメインFLOCSSクラスより前'),section.flocss,['source']],
  ['BEM-UNDERSCORE-001','cssFlocss','major','deterministic',L('Class dùng underscore đơn','クラス名に単一アンダースコア（_）を使用'),section.flocss,['source']],
  ['BEM-NEST-001','cssFlocss','major','deterministic',L('BEM lồng Element vào Element','BEMのElement多重ネスト（Element内にElement）'),section.flocss,['source']],
  ['BEM-SYNTAX-001','cssFlocss','major','deterministic',L('Cú pháp BEM/FLOCSS không hợp lệ','BEM/FLOCSSクラス構文が不正'),section.flocss,['source']],
  ['CSS-ID-001','cssFlocss','major','deterministic',L('Dùng ID selector','CSSでのIDセレクタ（#id）の使用'),section.css,['source']],
  ['CSS-TYPE-CLASS-001','cssFlocss','major','deterministic',L('Dùng type selector + class','タイプセレクタとクラスの結合セレクタ（tag.class）'),section.css,['source']],
  ['CSS-DESCENDANT-001','cssFlocss','major','probable',L('Nested component/project selector','コンポーネント/プロジェクトの子孫ネスト'),section.css,['source']],
  ['CSS-SEMICOLON-001','cssFlocss','minor','deterministic',L('Property có thể thiếu dấu ;','CSSプロパティ末尾のセミコロン（;）欠落の疑い'),section.css,['source']],
  ['CSS-LINE-001','cssFlocss','minor','probable',L('Selector/property không tách dòng','セレクタとプロパティが同一行に記述されている'),section.css,['source']],
  ['CSS-JS-HOOK-001','cssFlocss','major','deterministic',L('Dùng js-* để styling','JavaScriptフッククラス（js-*）へのスタイル指定'),section.flocss,['source']],
  ['SASS-IMPORT-001','cssFlocss','major','deterministic',L('SCSS dùng @import','SCSSでの@import使用（@use/@forward推奨）'),section.sass,['source']],
  ['SASS-STRUCT-001','cssFlocss','recommendation','probable',L('Cấu trúc Sass chưa giống module FLOCSS/7-1','Sass構造がFLOCSS/7-1標準モジュールに未準拠'),section.sass,['source']],
  ['SASS-ENTRY-CSS-001','cssFlocss','major','deterministic',L('Entry SCSS đang chứa CSS trực tiếp','エントリーSCSSに直接CSSが記述されている'),section.sass,['source']],
  ['HTML-JS-001','javascript','major','probable',L('Inline JavaScript','HTML内へのインラインJavaScript記述'),section.js,['source']],
  ['HTML-JS-002','javascript','minor','probable',L('Script ngoài thiếu defer/async','外部スクリプトのdefer/async属性欠落'),section.js,['source','website']],
  ['JS-VAR-001','javascript','minor','deterministic',L('Dùng var thay vì const/let','varによる変数宣言（const/let必須）'),section.js,['source']],
  ['JS-JQ-CACHE-001','javascript','minor','probable',L('jQuery selector lặp lại chưa cache','重複するjQueryセレクタのDOMキャッシュ化漏れ'),section.js,['source']],
  ['JS-JQ-PREFIX-001','javascript','minor','deterministic',L('jQuery object thiếu prefix $','jQueryオブジェクト格納変数の「$」プレフィックス欠落'),section.js,['source']],
  ['JS-CDN-001','javascript','recommendation','probable',L('Đang load JavaScript từ CDN','外部CDNからのJavaScript読み込み'),section.js,['source','website']],
  ['IMG-FMT-001','images','minor','probable',L('Ảnh source chưa có pipeline WebP xác định','元画像（JPG/PNG）のWebP変換パイプライン未確認'),section.image,['source']],
  ['IMG-FMT-002','images','minor','deterministic',L('Ảnh runtime chưa ưu tiên WebP','実行時出力画像でWebP形式が未優先'),section.image,['website']],
  ['IMG-NAME-001','images','minor','deterministic',L('Tên ảnh không theo prefix bg_/icon_/img_','画像ファイル名の命名規則（bg_/icon_/img_）不備'),section.image,['source']],
  ['IMG-RESP-001','images','major','probable',L('Ảnh PC/SP tách riêng nhưng chưa thấy picture','PC/SP別画像が<picture>タグで実装されていない'),section.image,['source','website']],
  ['WP-URL-001','wordpress','major','deterministic',L('PHP hard-code URL/path thay vì WordPress helper','PHP内でのURLハードコード（WP関数未使用）'),section.anchor,['source']],
  ['WP-CPTUI-001','wordpress','minor','probable',L('Có dấu hiệu dùng Custom Post Type UI','Custom Post Type UI（CPT UI）使用の疑い'),section.wp,['source']],
  ['RESP-VIEWPORT-001','responsive','major','deterministic',L('Thiếu viewport meta','レスポンシブ用viewport metaタグの欠落'),section.responsive,['source','website']],
  ['RESP-FONT-MIN-001','responsive','major','deterministic',L('Font-size SP nhỏ hơn 10px','SP表示時のフォントサイズが10px未満'),section.responsive,['source']],
  ['RESP-FONT-001','responsive','minor','probable',L('Font-size SP từ 10px đến dưới 12px','SP表示時のフォントサイズが10px以上12px未満'),section.responsive,['source']],
  ['RESP-WIDTH-001','responsive','minor','probable',L('Fixed width lớn cần xác nhận responsive','標準コンテナ幅を超える固定幅（width）指定'),section.responsive,['source']],
].map(([id, category, severity, confidence, title, guidelineSection, modes]) => ({
  id: id as string,
  category: category as Category,
  severity: severity as Severity,
  confidence: confidence as Confidence,
  title: { ...(title as LocalizedText), ...(RULE_ENGLISH[id as string]?.title ? { en: RULE_ENGLISH[id as string].title } : {}) },
  guidelineSection: guidelineSection as LocalizedText,
  modes: modes as AuditMode[],
}));

const MANUAL_CHECKS_RAW: ManualCheck[] = [
  { id:'MANUAL-VISUAL-375', category:'responsive', title:L('Visual check 375–767px','実機・表示確認 (375〜767px)'), description:L('Xác nhận layout không vỡ, margin SP phù hợp và content dài/ngắn vẫn ổn.','SP表示時にレイアウト崩れがないこと、左右マージンが適切であること、テキストの増減で表示が破綻しないことを確認する。'), guidelineSection:section.responsive, reference:guidelineUrl, appliesTo:['website'] },
  { id:'MANUAL-VISUAL-TABLET', category:'responsive', title:L('Visual check 768–1024px','タブレット表示確認 (768〜1024px)'), description:L('Nếu dự án hỗ trợ tablet, kiểm tra breakpoint và layout trong dải 768–1024px.','タブレット対応案件の場合、768〜1024pxの範囲でブレークポイントおよびレイアウトが正常に維持されているか確認する。'), guidelineSection:section.responsive, reference:guidelineUrl, appliesTo:['website'] },
  { id:'MANUAL-IMG-2X', category:'images', title:L('Độ phân giải ảnh 2×','画像の2倍解像度書き出し確認'), description:L('Xác nhận ảnh raster được xuất khoảng 2× kích thước hiển thị theo design.','Retina等の高解像度環境に対応するため、ラスター画像が表示サイズの約2倍で書き出されているか確認する。'), guidelineSection:section.image, reference:guidelineUrl, appliesTo:['source','website'] },
  { id:'MANUAL-SVG-OUTLINE', category:'images', title:L('Text trong SVG đã outline','SVG内テキストのアウトライン化確認'), description:L('Cần mở SVG/design để xác nhận text không phụ thuộc font.','端末のフォント環境に依存しないよう、SVG内のテキスト要素がすべてパス（アウトライン）化されているか確認する。'), guidelineSection:section.image, reference:guidelineUrl, appliesTo:['source'] },
  { id:'MANUAL-ALT-CONTEXT', category:'accessibility', title:L('Alt đúng theo ý nghĩa ảnh','画像の文脈に応じたalt属性設定の確認'), description:L('Ảnh trang trí dùng alt=""; ảnh có ý nghĩa phải có mô tả cụ thể. Tool không thể hiểu toàn bộ ngữ cảnh hình ảnh.','装飾目的の画像はalt=""とし、意味を持つ画像には適切な代替テキストが設定されているか、目視で文脈を確認する。'), guidelineSection:section.alt, reference:guidelineUrl, appliesTo:['source','website'] },
  { id:'MANUAL-INTERACTION', category:'manualReview', title:L('Hover / fade / Back to Top / cookie popup','インタラクション動作確認（ホバー・TOPへ戻る等）'), description:L('Xác nhận link dạng button không underline khi hover, Back to Top luôn có, mỗi section có fade khi scroll, hover mặc định đổi opacity và có Cookie popup kèm link Privacy Policy/thông tin cá nhân.','ボタン風リンクのhover時に下線を付けないこと、Back to Topの実装、各sectionのスクロールfade、特別な指示がない場合のopacityによるhover、Privacy Policy等へのリンクを持つCookieポップアップを確認する。'), guidelineSection:L('HTML > Interaction','HTML > インタラクションに関して'), reference:guidelineUrl, appliesTo:['website'] },
  { id:'MANUAL-FONT-LICENSE', category:'manualReview', title:L('Web font và license','Webフォントの読み込みとライセンス確認'), description:L('Xác nhận font theo design, weight cần thiết và license nếu không phải Google Fonts.','デザイン通りのフォント・ウェイトのみ読み込まれているか、Google Fonts以外の有償・特殊フォントのライセンス違反がないか確認する。'), guidelineSection:L('HTML > Web Font','HTML > Webフォントに関して'), reference:guidelineUrl, appliesTo:['source','website'] },
  { id:'MANUAL-WP-VERSION', category:'wordpress', title:L('WordPress/PHP version & update policy','WordPress・PHPバージョンと自動更新方針の確認'), description:L('Khi renewal/migration phải xác nhận WP/PHP gốc; auto-update chỉ minor theo guideline.','リニューアル・移行案件では移行元のWP/PHPバージョンを確認し、規約に基づきマイナーアップデートのみ自動更新となっているか確認する。'), guidelineSection:section.wp, reference:guidelineUrl, appliesTo:['source','website'] },
  { id:'MANUAL-WP-ADMIN', category:'wordpress', title:L('Quyền Editor và admin UI','編集者（Editor）権限と管理画面UIの調整確認'), description:L('Đăng nhập bằng tài khoản khách hàng và xác nhận các menu/thông báo không cần thiết đã ẩn.','クライアント提供用の編集者アカウントでログインし、不要な管理メニューやプラグイン通知が非表示化されているか確認する。'), guidelineSection:section.wp, reference:guidelineUrl, appliesTo:['website'] },
  { id:'MANUAL-WP-SECURITY', category:'wordpress', title:L('Login security / plugin policy','ログインセキュリティとプラグイン規約の確認'), description:L('Xác nhận plugin login security và plugin/SEO/form phù hợp guideline của dự án WordPress.','ログイン保護プラグイン（SiteGuard等）の導入や、規約に準拠したSEO/フォーム/ACFプラグイン構成となっているか確認する。'), guidelineSection:section.wp, reference:guidelineUrl, appliesTo:['website'] },
  { id:'MANUAL-DELIVERY', category:'structureDelivery', title:L('Bàn giao sạch và đúng version ZIP','納品データのクリーンアップとバージョン付きZIP確認'), description:L('Xác nhận đã xóa file không cần thiết và ZIP bàn giao được đặt tên theo quy trình, ví dụ ver01-2026-04-01.zip; lần sửa tiếp theo dùng ver02-ngày.','不要ファイルを削除し、納品ZIPが規約の例（ver01-2026-04-01.zip、修正後はver02-日付）に沿って命名されているか確認する。'), guidelineSection:section.delivery, reference:guidelineUrl, appliesTo:['source'] },
  { id:'MANUAL-BROWSER-TARGET', category:'manualReview', title:L('Kiểm tra trình duyệt mục tiêu','対象ブラウザ・OSでの表示/動作確認'), description:L('Xác nhận trên Windows 10/11 với Edge/Chrome/Firefox mới nhất, macOS 12+ với Safari/Chrome/Firefox mới nhất, iOS 16+ và Android browser từ Ver.11 trở lên.','Windows 10/11（最新Edge/Chrome/Firefox）、macOS 12以上（最新Safari/Chrome/Firefox）、iOS 16以上、AndroidブラウザVer.11以上で表示・動作を確認する。'), guidelineSection:L('Trình duyệt mục tiêu','対象ブラウザについて'), reference:guidelineUrl, appliesTo:['website'] },
  { id:'MANUAL-WP-SETUP', category:'wordpress', title:L('Cấu hình WordPress ban đầu','WordPress初期構築ルールの確認'), description:L('Xác nhận WordPress nằm trong folder như wp2026, dùng original theme tên theo dự án và có 2 admin account master/dev theo guideline.','WordPressをwp2026等のサブディレクトリに設置し、案件名のオリジナルテーマを使用し、規約通りmaster/devの2管理者アカウントが作成されているか確認する。'), guidelineSection:section.wp, reference:guidelineUrl, appliesTo:['source','website'] },
  { id:'MANUAL-ANIMATION-SPEED', category:'manualReview', title:L('Tốc độ slider / hover mặc định','スライダー・hoverのデフォルト速度確認'), description:L('Khi không có chỉ định riêng, xác nhận slider 3 giây và hover dùng transition: 0.5s all theo guideline.','個別指示がない場合、スライダーは3秒、hoverは transition: 0.5s all を使用しているか確認する。'), guidelineSection:L('JavaScript > tốc độ animation','JavaScript > アニメーション速度'), reference:guidelineUrl, appliesTo:['source','website'] },
  { id:'MANUAL-PROD-CHECKLIST', category:'structureDelivery', title:L('Checklist sau upload production','本番公開後チェックリストの実施確認'), description:L('Sau upload cần chạy checklist công khai của công ty; việc này không thể suy ra từ source.','本番環境へのアップロード完了後、社内規定の公開前・公開後チェックシートに沿って全項目の確認を実施する。'), guidelineSection:section.delivery, reference:guidelineUrl, appliesTo:['website'] },
];

const MANUAL_ENGLISH:Record<string,{title:string;description:string;section?:string}>={
  'MANUAL-VISUAL-375':{title:'Visual check at 375–767px',description:'Verify that the layout does not break, mobile side margins are appropriate, and short/long content remains stable.'},
  'MANUAL-VISUAL-TABLET':{title:'Visual check at 768–1024px',description:'If tablet is supported, verify breakpoints and layout throughout the 768–1024px range.'},
  'MANUAL-IMG-2X':{title:'2× raster image resolution',description:'Verify that raster assets are exported at roughly twice their rendered size where required by the design.'},
  'MANUAL-SVG-OUTLINE':{title:'SVG text is outlined',description:'Open the SVG/design and verify that text does not depend on the viewer\'s installed fonts.'},
  'MANUAL-ALT-CONTEXT':{title:'Alt text matches image meaning',description:'Decorative images should use alt=""; meaningful images need specific alternative text. This requires visual/context review.'},
  'MANUAL-INTERACTION':{title:'Hover / fade / Back to Top / cookie popup',description:'Verify the interaction defaults and required common UI behavior against the guideline.',section:'HTML > Interaction'},
  'MANUAL-FONT-LICENSE':{title:'Web font and license review',description:'Verify the design font/weights and licensing, especially for non-Google Fonts.',section:'HTML > Web Fonts'},
  'MANUAL-WP-VERSION':{title:'WordPress/PHP version and update policy',description:'For renewals/migrations, verify source WP/PHP versions and the minor-only automatic update policy.'},
  'MANUAL-WP-ADMIN':{title:'Editor permissions and admin UI',description:'Sign in with the client account and verify unnecessary menus/notices are hidden as required.'},
  'MANUAL-WP-SECURITY':{title:'Login security and plugin policy',description:'Verify login protection and the project\'s approved security/SEO/form/ACF plugin policy.'},
  'MANUAL-DELIVERY':{title:'Clean delivery and versioned ZIP',description:'Verify unnecessary files are removed and the delivery ZIP follows the required version/date naming process.'},
  'MANUAL-BROWSER-TARGET':{title:'Target browser/OS verification',description:'Verify behavior on the browser and OS versions specified by the guideline.',section:'Target browsers'},
  'MANUAL-WP-SETUP':{title:'Initial WordPress setup',description:'Verify the WordPress install directory, original project theme, and required administrator accounts.'},
  'MANUAL-ANIMATION-SPEED':{title:'Default slider / hover speed',description:'When there is no project-specific instruction, verify the default animation timings defined by the guideline.',section:'JavaScript > animation timing'},
  'MANUAL-PROD-CHECKLIST':{title:'Post-production-upload checklist',description:'After production upload, complete the company release checklist; this cannot be inferred reliably from source code.'},
};
export const MANUAL_CHECKS:ManualCheck[]=MANUAL_CHECKS_RAW.map(item=>{
  const en=MANUAL_ENGLISH[item.id];
  return en?{...item,title:{...item.title,en:en.title},description:{...item.description,en:en.description},guidelineSection:en.section?{...item.guidelineSection,en:en.section}:item.guidelineSection}:item;
});

function lineOf(content: string, index: number) {
  return content.slice(0, index).split('\n').length;
}
function excerptAt(content: string, line?: number) {
  if (!line) return undefined;
  return content.split('\n')[line - 1]?.trim().slice(0, 260);
}
function preserveStrip(content: string, regex: RegExp) {
  return content.replace(regex, (m) => m.replace(/[^\n]/g, ' '));
}
function cleanForMarkup(content: string) {
  let cleaned = preserveStrip(content, /<!--[\s\S]*?-->/g);
  // Remove template/PHP code while preserving newlines so line numbers stay stable.
  cleaned = preserveStrip(cleaned, /<%[\s\S]*?%>/g);
  cleaned = preserveStrip(cleaned, /<\?(?:php|=)?[\s\S]*?\?>/gi);
  return cleaned;
}
function stripRawTextBodies(content:string) {
  let out=content;
  for (const tagName of ['script','style']) {
    const re=new RegExp(`(<${tagName}\\b[^>]*>)([\\s\\S]*?)(</${tagName}>)`,'gi');
    out=out.replace(re,(_all,open,body,close)=>open+String(body).replace(/[^\n]/g,' ')+close);
  }
  return out;
}
const BUILTIN_THIRD_PARTY_SEGMENT = /^(?:vendor|vendors|plugins?|third[-_.]?party|external|externals|libraries|library|libs?|node_modules|wp-admin|wp-includes|mailformpro(?:[-_.]?[a-z0-9]+)?|mfp(?:[-_.]?[a-z0-9]+)?|iplogs?|jquery(?:[-_.]?[a-z0-9]+)?|swiper(?:[-_.]?[a-z0-9]+)?|splide(?:[-_.]?[a-z0-9]+)?|slick(?:[-_.]?[a-z0-9]+)?|fancybox(?:[-_.]?[a-z0-9]+)?|magnific(?:[-_.]?[a-z0-9]+)?|select2(?:[-_.]?[a-z0-9]+)?|bootstrap(?:[-_.]?[a-z0-9]+)?|aos(?:[-_.]?[a-z0-9]+)?|gsap(?:[-_.]?[a-z0-9]+)?|yubinbango(?:[-_.]?[a-z0-9]+)?|ajaxzip3(?:[-_.]?[a-z0-9]+)?|grecaptcha(?:[-_.]?[a-z0-9]+)?|recaptcha(?:[-_.]?[a-z0-9]+)?)$/i;

function normalizePath(path:string){ return path.replace(/\\/g,'/').replace(/^\.\//,''); }
function globToRegExp(pattern:string){
  const escaped=pattern.trim().replace(/\\/g,'/').replace(/[.+^${}()|[\]\\]/g,'\\$&').replace(/\*\*/g,'§§DOUBLESTAR§§').replace(/\*/g,'[^/]*').replace(/§§DOUBLESTAR§§/g,'.*').replace(/\?/g,'[^/]');
  return new RegExp(`(?:^|/)${escaped.replace(/^\/+|\/+$/g,'')}(?:$|/)`,'i');
}
function matchesConfiguredIgnore(path:string, patterns:string[] = []){
  const p=normalizePath(path);
  return patterns.some(raw=>{
    const line=raw.trim();
    if(!line || line.startsWith('#') || line.startsWith('selector:')) return false;
    const pattern=line.startsWith('path:')?line.slice(5).trim():line;
    if(!pattern) return false;
    try{return globToRegExp(pattern).test(p)}catch{return p.toLowerCase().includes(pattern.toLowerCase())}
  });
}
export function isThirdPartyPath(path: string, context?: Pick<ProjectContext,'thirdPartyIgnorePatterns'>) {
  const p=normalizePath(path);
  const segments=p.split('/').filter(Boolean);
  if(segments.some(seg=>BUILTIN_THIRD_PARTY_SEGMENT.test(seg))) return true;
  if(/(^|\/)assets\/(?:vendor|plugins?|libs?|library|libraries|external|third[-_.]?party)(?:\/|$)/i.test(p)) return true;
  if(/(^|\/)(?:[^/]+\.statics|mailformpro[^/]*|iplogs?|vendor-assets?|plugin-assets?)(?:\/|$)/i.test(p)) return true;
  if(/(?:^|\/)(?:mailformpro|mfp)[^/]*\.(?:cgi|php|js|css)$/i.test(p)) return true;
  // Minified/distribution bundles are treated as generated or third-party code. Team-owned source should be audited before minification.
  if(/(?:^|\/)[^/]+\.min\.(?:css|js|mjs|cjs)$/i.test(p)) return true;
  return !!context && matchesConfiguredIgnore(p,context.thirdPartyIgnorePatterns);
}
function pathBase(path: string) { return path.split('/').pop()?.toLowerCase() || ''; }

export function detectFileRole(file: SourceFile, mode: AuditMode): FileRole {
  const p = file.path.replace(/\\/g,'/').toLowerCase();
  if (mode === 'website') {
    if (file.kind === 'css' || p.endsWith('.css')) return 'runtime-css';
    if (file.kind === 'js' || /\.(?:js|mjs)$/.test(p)) return 'runtime-js';
    return 'runtime-html';
  }
  if (isImagePath(p) && !p.endsWith('.svg')) return 'image';
  if (/\.s[ac]ss$/.test(p)) return 'scss';
  if (p.endsWith('.css')) return 'css';
  if (/\.(?:js|mjs|cjs|ts|tsx|jsx)$/.test(p)) return 'javascript';
  if (isSecretEnvPath(p) || p.endsWith('.gitignore') || p.endsWith('package.json')) return 'config';
  if (/\.ejs$/.test(p)) {
    if (/(^|\/)(components?|partials?|layouts?)(\/|$)/.test(p) || pathBase(p).startsWith('_')) return 'ejs-partial';
    if (/(^|\/)pages?(\/|$)/.test(p) || /<!doctype|<html\b/i.test(file.content)) return 'ejs-page';
    return 'ejs-partial';
  }
  if (/\.html?$/.test(p)) {
    if (/(^|\/)(components?|partials?)(\/|$)/.test(p) || pathBase(p).startsWith('_')) return 'html-partial';
    return 'html-page';
  }
  if (/\.php$/.test(p)) {
    const base = pathBase(p);
    if (['header.php','footer.php','sidebar.php','comments.php'].includes(base) || /(^|\/)(partials?|template-parts?)(\/|$)/.test(p)) return 'php-partial';
    if (base === 'functions.php' || /(^|\/)includes?(\/|$)/.test(p) || /(^|\/)inc(\/|$)/.test(p)) return 'php-logic';
    if (/^(front-page|home|index|page|single|archive|search|404|taxonomy|category|tag)([-.]|$)/.test(base) || /get_header\s*\(/.test(file.content)) return 'php-template';
    return 'php-logic';
  }
  return 'other';
}

export function buildProjectContext(files: SourceFile[], extraLibraryPrefixes: string[] = [], extraLibrarySelectors: string[] = []): ProjectContext {
  const norm = files.map(f => f.path.replace(/\\/g,'/'));
  const packageFile = files.find(f => /(^|\/)package\.json$/i.test(f.path));
  const scripts = files.filter(f => /(^|\/)scripts?\//i.test(f.path)).map(f=>f.content).join('\n');
  const gitignore = files.find(f => /(^|\/)\.gitignore$/i.test(f.path));
  const auditorIgnore = files.find(f => /(^|\/)\.jline-auditorignore$/i.test(f.path));
  const ignoreLines=(auditorIgnore?.content||'').split(/\r?\n/).map(x=>x.trim()).filter(x=>x&&!x.startsWith('#'));
  const thirdPartyIgnorePatterns=ignoreLines.filter(x=>!x.startsWith('selector:'));
  const configPrefixes=ignoreLines.filter(x=>x.startsWith('selector:')).map(x=>x.slice('selector:'.length).trim()).filter(Boolean);
  const normalizePrefix=(x:string)=>x.toLowerCase().replace(/^[.#]/,'').replace(/[^a-z0-9_-].*$/,'').replace(/[-_.]+$/,'');
  const libraryPrefixes=[...new Set([...extraLibraryPrefixes,...configPrefixes].map(normalizePrefix).filter(x=>x.length>=2))];
  const detectedSelectors:string[]=[];
  for(const file of files){
    if(detectedSelectors.length>=12000||!isThirdPartyPath(file.path)||!/.s?css$/i.test(file.path)||!file.content)continue;
    const cleaned=file.content.replace(/\/\*[\s\S]*?\*\//g,' ');
    for(const m of cleaned.matchAll(/[.#]([A-Za-z_][\w-]*)/g)){
      detectedSelectors.push(m[1].toLowerCase());
      if(detectedSelectors.length>=12000)break;
    }
  }
  const librarySelectors=[...new Set([...extraLibrarySelectors,...detectedSelectors].map(x=>x.toLowerCase().replace(/^[.#]/,'')).filter(Boolean))].slice(0,12000);
  const isWordPress = norm.some(p => /(^|\/)(functions\.php|wp-content\/|src\/(?:functions|front-page|page|single|archive).*\.php$)/i.test(p)) || files.some(f=>/\b(?:wp_enqueue|home_url|get_permalink|the_content)\s*\(|\/wp-content\/|\/wp-includes\/|content=["']WordPress/i.test(f.content));
  const hasSrc = norm.some(p=>/(^|\/)src\//i.test(p));
  const hasPublic = norm.some(p=>/(^|\/)public\//i.test(p));
  const hasScripts = norm.some(p=>/(^|\/)scripts\//i.test(p));
  const hasTemplateScripts = ['build','clean','link'].every(name => norm.some(p=>new RegExp(`(^|/)scripts/${name}\\.js$`,'i').test(p)));
  const packageText = packageFile?.content || '';
  const hasSharpPipeline = /["']sharp["']\s*:|require\(["']sharp["']\)|from\s+["']sharp["']/i.test(packageText + '\n' + scripts);
  const hasJLineShape = (hasSrc && hasScripts && (hasPublic || hasTemplateScripts || hasSharpPipeline)) || norm.some(p=>/(^|\/)scripts\/builders\/(?:assets|ejs|scss)\.js$/i.test(p));
  return {
    isWordPress,
    isJLineTemplate: hasJLineShape,
    hasSharpPipeline,
    hasGitignore: !!gitignore,
    gitignoreContent: gitignore?.content || '',
    hasEnv: norm.some(p => isSecretEnvPath(p)),
    hasScss: norm.some(p => /\.s[ac]ss$/i.test(p)),
    thirdPartyIgnorePatterns,
    libraryPrefixes,
    librarySelectors,
  };
}

function mkFinding(args: Omit<Finding,'id'|'reference'>): Finding {
  return { ...args, id:`${args.ruleId}:${args.file}:${args.line ?? 0}:${Math.random().toString(36).slice(2,8)}`, reference:guidelineUrl };
}

function catalog(id: string) {
  const r = RULE_CATALOG.find(x=>x.id===id);
  if (!r) throw new Error(`Missing rule metadata: ${id}`);
  return r;
}

function add(out: Finding[], file: SourceFile, id: string, message: LocalizedText, recommendation: LocalizedText, line?: number, excerpt?: string, overrides?: Partial<Pick<Finding,'severity'|'confidence'|'category'>>) {
  const r = catalog(id);
  const en = RULE_ENGLISH[id];
  out.push(mkFinding({
    ruleId:id,
    category:overrides?.category ?? r.category,
    severity:overrides?.severity ?? r.severity,
    confidence:overrides?.confidence ?? r.confidence,
    title: en ? { ...r.title, en: en.title } : r.title,
    message: en ? { ...message, en: en.reason } : message,
    recommendation: en ? { ...recommendation, en: en.fix } : recommendation,
    guidelineSection:r.guidelineSection,
    file:file.url || file.path,
    line,
    excerpt:excerpt ?? excerptAt(file.content,line),
  }));
}

function eachRegex(file: SourceFile, content: string, regex: RegExp, cb:(m:RegExpExecArray,line:number)=>void) {
  const flags = regex.flags.includes('g') ? regex.flags : `${regex.flags}g`;
  const r = new RegExp(regex.source, flags);
  let m: RegExpExecArray|null;
  while ((m=r.exec(content))) {
    cb(m,lineOf(content,m.index));
    if (m.index===r.lastIndex) r.lastIndex++;
  }
}

function parseAttributes(tag: string) {
  const attrs: Record<string,string> = {};
  const re = /([:\w-]+)\s*=\s*(["'])([\s\S]*?)\2/g;
  let m:RegExpExecArray|null;
  while((m=re.exec(tag))) attrs[m[1].toLowerCase()] = m[3];
  return attrs;
}
function tags(content:string,name?:string) {
  const re = name ? new RegExp(`<${name}\\b[^>]*>`,'gi') : /<[A-Za-z][\w:-]*\b[^>]*>/g;
  return [...content.matchAll(re)].map(m=>({raw:m[0],index:m.index||0,attrs:parseAttributes(m[0])}));
}
function isDynamicValue(value:string) { return /<%|<\?php|\{\{|\$\{|\[\[/.test(value); }
function isFullPageRole(role:FileRole) { return role==='html-page'||role==='runtime-html'; }
function isMarkupRole(role:FileRole) { return ['html-page','html-partial','ejs-page','ejs-partial','php-template','php-partial','runtime-html'].includes(role); }
function isStyleRole(role:FileRole) { return role==='css'||role==='scss'; }

const classExempt = /^(?:js-|is-|has-|swiper(?:[-_]|$)|splide(?:[-_]|$)|slick(?:[-_]|$)|wpcf7(?:[-_]|$)|mfp(?:[-_]|$)|mailformpro(?:[-_]|$)|yubinbango(?:[-_]|$)|h-adr(?:[-_]|$)|h-(?:card|entry|feed|event|geo|item|product|recipe|review|resume)(?:[-_]|$)|p-(?:postal-code|region|locality|street-address|extended-address|country-name)(?:[-_]|$)|grecaptcha(?:[-_]|$)|g-recaptcha(?:[-_]|$)|recaptcha(?:[-_]|$)|ajaxzip3(?:[-_]|$)|wp-|screen-reader-text$|acf-|admin-bar$|menu-item(?:-|$)|current-menu-item$|current_page_item$|align(?:wide|full|left|right|center)$|attachment-|size-|post-|page-id-|logged-in$)/i;

const BUILTIN_LIBRARY_SELECTOR_PREFIXES = [
  'mfp','mfpcart','mailformpro','wpcf7','swiper','splide','slick','select2','fancybox','magnific','glightbox','lightbox','aos','bootstrap','jquery','ui','h-adr','yubinbango','p-postal-code','p-region','p-locality','p-street-address','p-extended-address','p-country-name','grecaptcha','g-recaptcha','recaptcha','ajaxzip3'
];
function normalizeSelectorToken(value:string){return value.replace(/^[.#]/,'').toLowerCase();}
function isThirdPartySelectorName(value:string, context:ProjectContext){
  const token=normalizeSelectorToken(value);
  if(context.librarySelectors.includes(token)) return true;
  const prefixes=[...BUILTIN_LIBRARY_SELECTOR_PREFIXES,...context.libraryPrefixes];
  return prefixes.some(prefix=>{
    const p=normalizeSelectorToken(prefix);
    return token===p || token.startsWith(`${p}-`) || token.startsWith(`${p}_`) || token.startsWith(`${p}.`) || (p==='mfp' && token.startsWith('mfp'));
  });
}
function selectorTextHasThirdParty(prelude:string, context:ProjectContext){
  const tokens=[...prelude.matchAll(/[.#]([A-Za-z_][\w-]*)/g)].map(m=>m[1]);
  return tokens.some(t=>isThirdPartySelectorName(t,context));
}
function isThirdPartyStyleBlock(styleTag: string, context: ProjectContext): boolean {
  const css = styleTag
    .replace(/^<style\b[^>]*>/i, '')
    .replace(/<\/style>$/i, '')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .trim();
  if (!css) return true;
  const rules = [...css.matchAll(/([^{};]+)\{/g)]
    .map(m => m[1].trim())
    .filter(p => !p.startsWith('@'));
  if (rules.length === 0) {
    return /grecaptcha|recaptcha/i.test(css);
  }
  return rules.every(prelude => {
    const parts = prelude.split(',').map(s => s.trim()).filter(Boolean);
    return parts.length > 0 && parts.every(sel => {
      if (/grecaptcha|recaptcha/i.test(sel)) return true;
      return selectorTextHasThirdParty(sel, context);
    });
  });
}
function maskRangePreserveLines(text:string,start:number,end:number){
  return text.slice(0,start)+text.slice(start,end).replace(/[^\n]/g,' ')+text.slice(end);
}
function findMatchingBrace(text:string,open:number){
  let depth=0, quote='', escaped=false;
  for(let i=open;i<text.length;i++){
    const ch=text[i];
    if(quote){if(escaped){escaped=false;continue} if(ch==='\\'){escaped=true;continue} if(ch===quote)quote='';continue;}
    if(ch==='"'||ch==="'"){quote=ch;continue}
    if(ch==='{')depth++;
    else if(ch==='}'&&--depth===0)return i+1;
  }
  return text.length;
}
function maskThirdPartyCssBlocks(content:string,context:ProjectContext){
  let out=content;
  let cursor=0;
  while(cursor<out.length){
    const open=out.indexOf('{',cursor); if(open<0)break;
    let start=open-1; while(start>=0 && !/[{};]/.test(out[start]))start--;
    const prelude=out.slice(start+1,open).trim();
    if(prelude && selectorTextHasThirdParty(prelude,context)){
      const end=findMatchingBrace(out,open);
      out=maskRangePreserveLines(out,start+1,end);
      cursor=end;
    } else cursor=open+1;
  }
  return out;
}
function maskJsComments(content:string){
  const chars=[...content];
  let i=0, quote='', template=false, escaped=false;
  while(i<chars.length){
    const ch=chars[i], next=chars[i+1];
    if(quote){
      if(escaped){escaped=false;i++;continue}
      if(ch==='\\'){escaped=true;i++;continue}
      if((template&&ch==='`')||(!template&&ch===quote)){quote='';template=false}
      i++;continue;
    }
    if(ch==='"'||ch==="'"||ch==='`'){quote=ch;template=ch==='`';i++;continue}
    if(ch==='/'&&next==='*'){
      chars[i]=' '; chars[i+1]=' '; i+=2;
      while(i<chars.length){if(chars[i]==='*'&&chars[i+1]==='/'){chars[i]=' ';chars[i+1]=' ';i+=2;break} if(chars[i]!=='\n'&&chars[i]!=='\r')chars[i]=' '; i++}
      continue;
    }
    if(ch==='/'&&next==='/'){
      chars[i]=' ';chars[i+1]=' ';i+=2;
      while(i<chars.length&&chars[i]!=='\n'){if(chars[i]!=='\r')chars[i]=' ';i++}
      continue;
    }
    i++;
  }
  return chars.join('');
}
function isLoadingBootstrapScript(body:string){
  const b=body.toLowerCase();
  const hasLoadingTerm=/\b(?:loading|loader|preloader|splash|page-load|is-loading)\b/.test(b);
  const onlyUiBootstrap=/(?:sessionstorage|localstorage|classlist|documentelement|document\.body|date\(\)|gettime\(|domcontentloaded|settimeout)/.test(b);
  const noNetwork=!/(?:fetch\s*\(|xmlhttprequest|axios\.|\.ajax\s*\()/i.test(body);
  return hasLoadingTerm&&onlyUiBootstrap&&noNetwork&&body.length<5000;
}
function obviousMissingSemicolonLines(content:string){
  const lines=content.split(/\n/); const out:number[]=[];
  for(let i=0;i<lines.length;i++){
    const t=lines[i].trim();
    if(!t||t.startsWith('//')||t.startsWith('@')||t.startsWith('$')||t.startsWith('--')||/[{},;]$/.test(t)||t.includes('{')||t.includes('}'))continue;
    // A declaration must start with a property name and use a single colon, not a pseudo-selector (:: / :hover).
    if(!/^(?:-[a-z]+-)?[a-z][a-z0-9-]*\s*:(?!:)\s*.+$/i.test(t))continue;
    if(/[,(\\]$/.test(t))continue;
    const next=lines.slice(i+1).map(x=>x.trim()).find(Boolean)||'';
    if(next.startsWith('}')||/^(?:-[a-z]+-)?[a-z][a-z0-9-]*\s*:(?!:)/i.test(next))out.push(i+1);
  }
  return out;
}

function stripTemplateExpressions(value:string) {
  return value
    .replace(/<%[\s\S]*?%>/g, ' ')
    .replace(/<\?(?:php|=)?[\s\S]*?\?>/gi, ' ')
    .replace(/\{\{[\s\S]*?\}\}/g, ' ')
    .replace(/\$\{[\s\S]*?\}/g, ' ');
}

export function hasSingleUnderscore(className:string) {
  return /(?<!_)_(?!_)/.test(className);
}

export function isValidFlocssBemClass(className:string) {
  return /^(?:l|c|p|u)-[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$/.test(className);
}

const SVG_CAMEL_CASE_TAGS = new Set([
  'animatemotion',
  'animatetransform',
  'clippath',
  'feblend',
  'fecolormatrix',
  'fecomponenttransfer',
  'fecomposite',
  'feconvolvematrix',
  'fediffuselighting',
  'fedisplacementmap',
  'fedistantlight',
  'fedropshadow',
  'feflood',
  'fefunca',
  'fefuncb',
  'fefuncg',
  'fefuncr',
  'fegaussianblur',
  'feimage',
  'femerge',
  'femergenode',
  'femorphology',
  'feoffset',
  'fepointlight',
  'fespecularlighting',
  'fespotlight',
  'fetile',
  'feturbulence',
  'foreignobject',
  'lineargradient',
  'radialgradient',
  'textpath'
]);

function getSvgInnerRanges(content: string): Array<{ start: number; end: number }> {
  const ranges: Array<{ start: number; end: number }> = [];
  const re = /<svg\b[^>]*>([\s\S]*?)<\/svg>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(content)) !== null) {
    const full = match[0];
    const openTagEnd = full.indexOf('>');
    if (openTagEnd >= 0) {
      const innerStart = match.index + openTagEnd + 1;
      const innerEnd = match.index + full.lastIndexOf('<');
      if (innerStart < innerEnd) {
        ranges.push({ start: innerStart, end: innerEnd });
      }
    }
  }
  return ranges;
}

function inspectClasses(file:SourceFile, content:string, mode:AuditMode, context:ProjectContext, out:Finding[]) {
  const svgInnerRanges = getSvgInnerRanges(content);
  const isInsideSvg = (idx: number) => svgInnerRanges.some(r => idx >= r.start && idx < r.end);

  eachRegex(file,content,/\bclass\s*=\s*["']([^"']*)["']/gi,(m,line)=>{
    if (isInsideSvg(m.index)) return;
    const staticValue = stripTemplateExpressions(m[1]);
    const classes = staticValue.trim().split(/\s+/).filter(Boolean);
    for (const cls of classes) {
      if (mode !== 'source') continue;
      // Do not attempt to validate fragments that still contain template syntax.
      if (!/^[A-Za-z0-9_$:-]+(?:__[A-Za-z0-9-]+)?(?:--[A-Za-z0-9-]+)?$/.test(cls) && /[<>{}%?=]/.test(cls)) continue;
      // Classes owned by third-party libraries / MailformPro are outside J-Line naming rules.
      if (classExempt.test(cls) || isThirdPartySelectorName(cls,context)) continue;
      if (/[A-Z]/.test(cls)) add(out,file,'HTML-CLASS-CASE-001',L(`Class "${cls}" có chữ hoa.`,`クラス名「${cls}」に大文字が含まれています。`),L('Đổi class về lowercase và tuân FLOCSS/BEM.','クラス名はすべて小文字（lowercase）にし、FLOCSS/BEM規則に従ってください。'),line,m[0]);
      if (hasSingleUnderscore(cls)) {
        add(out,file,'BEM-UNDERSCORE-001',L(`Class "${cls}" dùng underscore đơn.`,`クラス名「${cls}」に単一アンダースコア（_）が使用されています。`),L('Dùng - để nối từ; chỉ dùng __ cho Element.','単語の区切りにはハイフン（-）を使用し、アンダースコアはElementの区切り（__）としてのみ使用してください。'),line,m[0]);
      }
      if (/__(?:[a-z0-9-]+)__(?:[a-z0-9-]+)/i.test(cls)) {
        add(out,file,'BEM-NEST-001',L(`Class "${cls}" lồng Element vào Element.`,`クラス名「${cls}」でElement内にさらにElementがネストされています。`),L('Giữ Element phẳng dưới Block hoặc tách thành Block mới.','ElementはBlock直下にフラットに保つか、独立した新規Blockに分割してください。'),line,m[0]);
      }
      const prefixed = /^(?:l|c|p|u)-/i.test(cls);
      if (!isThirdPartyPath(file.path,context) && !prefixed) {
        add(out,file,'FLOCSS-PREFIX-001',L(`Class "${cls}" không có prefix FLOCSS hợp lệ.`,`クラス名「${cls}」に有効なFLOCSSプレフィックスがありません。`),L('Dùng l-/c-/p-/u- theo vai trò; js-/is-/has- chỉ cho hook/state.','役割に応じて l-/c-/p-/u- を付与してください（js- はフック専用、is-/has- は状態管理専用）。'),line,m[0]);
      } else if (prefixed && !hasSingleUnderscore(cls) && !/__(?:[a-z0-9-]+)__(?:[a-z0-9-]+)/i.test(cls) && !isValidFlocssBemClass(cls)) {
        add(out,file,'BEM-SYNTAX-001',L(`Class "${cls}" không đúng cấu trúc Block / Element / Modifier của guideline.`,`クラス名「${cls}」が規約のBlock / Element / Modifier構文に一致していません。`),L('Dùng dạng prefix-block, prefix-block__element, prefix-block--modifier hoặc prefix-block__element--modifier.','prefix-block、prefix-block__element、prefix-block--modifier、prefix-block__element--modifier のいずれかに修正してください。'),line,m[0]);
      }
    }
    if (mode==='source') {
      const firstMain = classes.findIndex(c=>!classExempt.test(c) && !isThirdPartySelectorName(c,context) && /^(?:l|c|p)-/.test(c));
      const firstUtility = classes.findIndex(c=>!classExempt.test(c) && !isThirdPartySelectorName(c,context) && /^u-/.test(c));
      if (firstUtility>=0 && firstMain>=0 && firstUtility<firstMain) add(out,file,'FLOCSS-ORDER-001',L('Utility class đang đứng trước FLOCSS class chính.','Utilityクラス（u-*）がメインのFLOCSSクラスより前に記述されています。'),L('Đặt l-/c-/p- trước, utility u- sau.','class属性では l-/c-/p- を先に記述し、ユーティリティ（u-）は末尾に配置してください。'),line,m[0]);
    }
  });
  if (mode === 'source') eachRegex(file,content,/\bid\s*=\s*["']([^"']+)["']/gi,(m,line)=>{
    if (isInsideSvg(m.index)) return;
    const value=stripTemplateExpressions(m[1]).trim();
    if(value && /[A-Z]/.test(value)) add(out,file,'HTML-CLASS-CASE-001',L(`ID "${value}" có chữ hoa.`,`ID名「${value}」に大文字が含まれています。`),L('Đổi ID về lowercase.','ID名はすべて小文字（lowercase）に統一してください。'),line,m[0]);
  });
}

function isLikelyLocalOrStagingUrl(value:string) {
  try {
    const u=new URL(value); const h=u.hostname.toLowerCase();
    if(h==='localhost'||h==='127.0.0.1'||h==='::1'||h.endsWith('.local')) return true;
    if(/^(?:10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.)/.test(h)) return true;
    return h.split('.').some(label=>/^(?:staging|stage|stg|test|test-server|dev|development|local)$/.test(label));
  } catch { return false; }
}
function isPageLikePath(pathname:string) {
  if(!pathname || pathname==='/' || pathname.endsWith('/')) return false;
  const last=pathname.split('/').pop()||'';
  return !/\.[a-z0-9]{2,8}$/i.test(last);
}

function isExternalHref(href: string, attrs?: Record<string, string>): boolean {
  const value = href.trim();
  if (!value) return false;
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value)) return true;
  if (/^(?:#|\?)/.test(value)) return false;
  if (/^(?:\/|\.\/|\.\.\/)/.test(value)) return false;

  if (attrs && attrs.target === '_blank' && /\b(?:noopener|noreferrer|external)\b/i.test(attrs.rel || '')) {
    return true;
  }

  const firstSegment = value.split(/[/?#]/)[0].toLowerCase();
  if (/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}(?::\d+)?$/i.test(firstSegment)) {
    if (!/\.(?:html?|php|ejs|aspx?|jsp|cgi|pl|json|xml|txt|pdf|zip|png|jpe?g|webp|svg|gif)$/i.test(firstSegment)) {
      return true;
    }
  }

  return false;
}

type InternalHrefCheck = { path:string; suffix:string; suggested:string };
function internalHrefMissingTrailingSlash(href:string, attrs?:Record<string,string>): InternalHrefCheck | null {
  const value=href.trim();
  if(!value || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(value) || isExternalHref(value, attrs)) return null;
  const m=value.match(/^([^?#]*)([?#].*)?$/);
  if(!m) return null;
  const path=m[1]; const suffix=m[2]||'';
  if(!path || path.endsWith('/')) return null;
  const last=path.split('/').filter(Boolean).pop()||'';
  if(/\.[a-z0-9]{1,8}$/i.test(last)) return null;
  const fixed=`${path}/`;
  const suggested=(/^(?:\.{1,2}\/|\/)/.test(path)?fixed:`./${fixed}`)+suffix;
  return {path,suffix,suggested};
}

function markupRules(file:SourceFile, role:FileRole, mode:AuditMode, context:ProjectContext):Finding[] {
  const out:Finding[]=[];
  const c=cleanForMarkup(file.content);
  const t=stripRawTextBodies(c);
  if (!t.trim()) return out;

  const svgInnerRanges = getSvgInnerRanges(t);
  const isInsideSvg = (idx: number) => svgInnerRanges.some(r => idx >= r.start && idx < r.end);

  eachRegex(file,t,/<\/?([A-Za-z][\w:-]*)\b[^>]*>/g,(m,line)=>{
    const tag = m[1];
    if (/[A-Z]/.test(tag)) {
      if (SVG_CAMEL_CASE_TAGS.has(tag.toLowerCase()) || isInsideSvg(m.index)) return;
      add(out,file,'HTML-TAG-CASE-001',L(`Tag <${tag}> phải viết lowercase.`,`HTMLタグ <${tag}> に大文字が含まれています。`),L('Đổi tên tag về lowercase.','タグ名を小文字に変換してください。'),line,m[0]);
    }
  });
  if (mode==='source') {
    for (const tag of tags(t)) {
      const line=lineOf(t,tag.index);
      const staticTag=stripTemplateExpressions(tag.raw);
      // Mask already-valid double-quoted values so text inside them cannot look like another attribute.
      const withoutDouble=staticTag.replace(/=\s*"[^"\n]*"/g,m=>m.replace(/[^\n]/g,' '));
      for (const match of withoutDouble.matchAll(/\s([:\w-]+)\s*=\s*'[^']*'/g)) {
        add(out,file,'HTML-ATTR-QUOTE-001',L(`Attribute "${match[1]}" đang dùng nháy đơn.`,`属性「${match[1]}」の値がシングルクォートで囲まれています。`),L('Đổi sang attribute="value".','attribute="value" の形式（ダブルクォート）に変更してください。'),line,match[0].trim());
      }
      const withoutQuoted=staticTag.replace(/=\s*(?:"[^"\n]*"|'[^'\n]*')/g,m=>m.replace(/[^\n]/g,' '));
      for (const match of withoutQuoted.matchAll(/\s([:\w-]+)\s*=\s*([^\s"'=<>`]+)/g)) {
        add(out,file,'HTML-ATTR-QUOTE-001',L(`Attribute "${match[1]}" chưa được bọc bằng dấu nháy kép.`,`属性「${match[1]}」の値がダブルクォートで囲まれていません。`),L('Dùng attribute="value" theo guideline.','規約に従い attribute="value" の形式に修正してください。'),line,match[0].trim());
      }
    }
  }
  inspectClasses(file,t,mode,context,out);

  if (mode==='website') {
    eachRegex(file,t,/\b(?:lorem ipsum|dummy text|dummy image|sample text|テキストテキスト|ダミー)\b/gi,(m,line)=>add(out,file,'STR-DUMMY-001',L(`Phát hiện chuỗi "${m[0]}" có thể là dummy content trên website.`,`Webサイト出力にダミーコンテンツの可能性がある「${m[0]}」を検出しました。`),L('Xác nhận nội dung hiển thị; bản test về nguyên tắc không được để dummy nếu không thuộc ngoại lệ guideline.','表示内容を確認し、規約上の例外でない限りテストアップにダミーを残さないでください。'),line,m[0]));
  }

  // Disabled noisy automatic HTML-TABLE-001 finding per team preference.

  if (mode==='source' && role==='html-page') {
    for (const tagName of ['div','section','article','nav','ul','ol','li','p','a','button','h1','h2','h3','h4','h5','h6']) {
      const opens=(t.match(new RegExp(`<${tagName}\\b`,'gi'))||[]).length;
      const closes=(t.match(new RegExp(`</${tagName}>`,'gi'))||[]).length;
      if (opens>closes) add(out,file,'HTML-CLOSE-001',L(`Có ${opens} thẻ <${tagName}> nhưng chỉ ${closes} closing tag trong file này.`,`<${tagName}>タグが ${opens} 個に対し、終了タグが ${closes} 個しかありません。`),L('Kiểm tra closing tag; với template split/conditional hãy reviewer xác nhận trước khi sửa.','終了タグの閉じ忘れを確認してください。テンプレート分割や条件分岐の場合はレビュアーに確認してください。'),undefined,undefined,{confidence:'probable'});
    }
  }

  for (const img of tags(t,'img')) {
    const src=img.attrs.src?.trim()||'';
    if(src && isThirdPartyPath(src,context)) continue;
    const line=lineOf(t,img.index);
    if (!('alt' in img.attrs)) add(out,file,'HTML-ALT-001',L('Thẻ img không có thuộc tính alt.','<img>タグにalt属性が記述されていません。'),L('Thêm alt="" cho ảnh trang trí hoặc mô tả cụ thể cho ảnh có ý nghĩa.','装飾画像には alt="" を指定し、意味のある画像には具体的な代替テキストを記述してください。'),line,img.raw);
    else if (/^(?:image|img|photo|picture|画像|写真)$/i.test(img.attrs.alt.trim())) add(out,file,'HTML-ALT-002',L(`Alt "${img.attrs.alt}" quá chung chung.`,`alt属性「${img.attrs.alt}」の内容が曖昧・汎用的すぎます。`),L('Mô tả ngắn gọn nội dung/ý nghĩa ảnh.','画像の内容や目的を簡潔・具体的に説明するテキストに変更してください。'),line,img.raw);
    else if (img.attrs.alt==='') add(out,file,'HTML-ALT-003',L('Alt rỗng chỉ đúng khi ảnh mang tính trang trí.','alt=""（空文字）は装飾目的の画像でのみ使用が許可されます。'),L('Reviewer xác nhận ảnh trang trí; nếu ảnh có ý nghĩa, viết alt mô tả.','装飾画像であることをレビュアーが確認してください。意味を持つ画像の場合は代替テキストを記述してください。'),line,img.raw,{severity:'recommendation',confidence:'manual'});
  }

  // Disabled noisy automatic HTML-UPPER-TEXT-001 finding per team preference.


  if (mode==='source') {
    eachRegex(file,c,/<style\b[^>]*>[\s\S]*?<\/style>/gi,(m,line)=>{
      if (isThirdPartyStyleBlock(m[0], context)) return;
      add(out,file,'HTML-CSS-001',L('Không nên viết CSS trực tiếp trong markup.','HTMLマークアップ内にインラインスタイルや<style>タグを直接記述しないでください。'),L('Chuyển style sang SCSS/CSS theo cấu trúc FLOCSS.','スタイル指定はSCSS/CSSファイルに切り出し、FLOCSS設計に従って記述してください。'),line,m[0].slice(0,220));
    });
    for(const tag of tags(t)){
      if('style' in tag.attrs) {
        if (isInsideSvg(tag.index)) continue;
        const cls = (tag.attrs.class || '').trim();
        const classList = stripTemplateExpressions(cls).trim().split(/\s+/).filter(Boolean);
        const isThirdPartyTag = classList.length > 0 && classList.every(c => classExempt.test(c) || isThirdPartySelectorName(c, context));
        if (isThirdPartyTag) continue;
        add(out,file,'HTML-CSS-001',L('Không nên viết CSS trực tiếp trong markup.','HTMLマークアップ内にインラインスタイルを直接記述しないでください。'),L('Chuyển style sang SCSS/CSS theo cấu trúc FLOCSS.','スタイル指定はSCSS/CSSファイルに切り出し、FLOCSS設計に従って記述してください。'),lineOf(t,tag.index),tag.raw.slice(0,220));
      }
    }
    eachRegex(file,c,/<script(?![^>]*\bsrc\s*=)[^>]*>[\s\S]*?<\/script>/gi,(m,line)=>{
      const body=m[0];
      if(isLoadingBootstrapScript(body)) return;
      const tracking=/gtag\(|dataLayer|googletagmanager|fbq\(/i.test(body);
      add(out,file,'HTML-JS-001',tracking?L('Inline tracking script có thể là ngoại lệ hợp lệ; cần reviewer xác nhận.','インラインのアクセス解析/トラッキングコードの可能性があります。例外として問題ないかレビュアー確認が必要です。'):L('Guideline yêu cầu hạn chế tối đa JavaScript inline.','コーディング規約により、HTML内へのインラインJavaScript記述は原則禁止されています。'),L('Ưu tiên chuyển sang file JS ngoài; chỉ giữ inline cho trường hợp thực sự cần thiết.','外部JavaScriptファイルへ処理を移行してください。真に必要な例外処理のみインライン記述を許可します。'),line,body.slice(0,220),tracking?{severity:'recommendation',confidence:'probable'}:undefined);
    });
  }

  eachRegex(file,t,/<script\b(?=[^>]*\bsrc\s*=)(?![^>]*(?:\bdefer\b|\basync\b))[^>]*>/gi,(m,line)=>add(out,file,'HTML-JS-002',L('Script ngoài không có defer/async. Guideline có ngoại lệ cho script chạy sớm, redirect và tracking nên cần xác nhận context.','外部スクリプトにdeferまたはasync属性が指定されていません。先行読み込み・リダイレクト・解析タグ等の例外に該当するか確認が必要です。'),L('Dùng defer mặc định; async cho tracking khi phù hợp; nếu là exception hợp lệ thì reviewer xác nhận.','通常スクリプトには原則として defer を付与し、解析タグ等には適宜 async を指定してください。例外の場合はレビュアーが承認します。'),line,m[0]));

  for (const script of tags(t,'script')) {
    const src=script.attrs.src?.trim();
    if(!src || !/^https?:\/\//i.test(src)) continue;
    let looksExternal=true;
    if(mode==='website' && file.url) { try { looksExternal=new URL(src).origin!==new URL(file.url).origin; } catch {} }
    if(looksExternal) add(out,file,'JS-CDN-001',L(`JavaScript được load bằng URL ngoài/CDN: "${src}".`,`外部URL/CDNからJavaScriptを読み込んでいます: 「${src}」。`),L('Guideline yêu cầu hạn chế CDN; reviewer xác nhận có cần thiết hay có thể lưu asset trong vendor/local.','規約ではCDN利用を極力控えるため、必要性を確認し、可能であればvendor/local管理へ切り替えてください。'),lineOf(t,script.index),script.raw);
  }

  for (const a of tags(t,'a')) {
    const href=a.attrs.href?.trim(); if (!href || isDynamicValue(href)) continue;
    const line=lineOf(t,a.index);
    if (/^tel:/i.test(href) && /[-()\s]/.test(href.slice(4))) add(out,file,'HTML-LINK-004',L(`tel href "${href}" chứa ký tự định dạng.`,`電話番号リンク「${href}」に記号や空白等のフォーマット文字が含まれています。`),L('Giữ phần text hiển thị tùy ý nhưng href chỉ chứa số.','表示テキスト側はハイフン等の体裁を保ち、href="tel:..." の値は数字のみ（例: tel:0312345678）にしてください。'),line,a.raw);
    const trailing=internalHrefMissingTrailingSlash(href, a.attrs);
    if (mode==='source' && trailing) {
      add(out,file,'HTML-LINK-003',L(`Internal URL "${href}" thiếu trailing slash.`,`内部URL「${href}」の末尾にスラッシュ（トレイリングスラッシュ）がありません。`),L(`Thêm / ở cuối page URL. Gợi ý: ${trailing.suggested}`,`ページURLの末尾に / を付けてください。例: ${trailing.suggested}`),line,a.raw);
    }
    if (mode==='source') {
      // Team rule: ./, ../, / and bare relative paths are all allowed. Only trailing slash is enforced.
      if (isLikelyLocalOrStagingUrl(href)) add(out,file,'HTML-LINK-002',L(`URL "${href}" có dấu hiệu hard-code local/staging.`,`URL「${href}」にローカル環境または検証用ドメインがハードコードされています。`),L('Dùng relative path hoặc WordPress helper động.','相対パス、またはWordPressの動的URL取得関数（home_url()等）を使用してください。'),line,a.raw);
      if (/^https?:\/\//i.test(href)) {
        const rel=a.attrs.rel||''; const target=a.attrs.target||'';
        if (target!=='_blank' || !/\bnoopener\b/.test(rel) || !/\bnoreferrer\b/.test(rel)) add(out,file,'HTML-LINK-001S',L(`Absolute link "${href}" thiếu cấu hình external-link đầy đủ; tool không biết chắc đây là external hay domain nội bộ production.`,`絶対パスリンク「${href}」に完全な外部リンク属性がありません。外部リンクか本番内部ドメインかの確認が必要です。`),L('Nếu là external: thêm target="_blank" rel="noopener noreferrer". Nếu là internal: dùng relative path hợp lệ và giữ trailing slash.','外部リンクの場合は target="_blank" rel="noopener noreferrer" を付与し、内部リンクの場合は有効な相対パスを使用し末尾スラッシュを付けてください。'),line,a.raw);
      }
    } else if (file.url) {
      try {
        const base=new URL(file.url); const dest=new URL(href,base);
        if (/^https?:\/\//i.test(href) && dest.origin===base.origin) {
          add(out,file,'HTML-LINK-006',L(`Internal link "${href}" đang dùng absolute URL.`,`内部リンク「${href}」が絶対URLで記述されています。`),L('Đổi sang internal relative path phù hợp và giữ trailing slash, ví dụ ./about/ hoặc /about/.','内部リンクは適切な相対パスへ変更し、./about/ または /about/ のように末尾スラッシュを付けてください。'),line,a.raw);
        }
        if (dest.origin===base.origin) {
          const rawTrailing=internalHrefMissingTrailingSlash(href, a.attrs);
          const absoluteTrailing=/^https?:\/\//i.test(href) && isPageLikePath(dest.pathname);
          if (rawTrailing || absoluteTrailing) {
            const suggested=rawTrailing?.suggested || `${dest.pathname}/${dest.search}${dest.hash}`.replace(/\/\//g,'/');
            add(out,file,'HTML-LINK-003',L(`Internal URL "${href}" thiếu trailing slash.`,`内部URL「${href}」の末尾にスラッシュ（トレイリングスラッシュ）がありません。`),L(`Thêm / ở cuối page URL. Gợi ý: ${suggested}`,`ページURLの末尾に / を付けてください。例: ${suggested}`),line,a.raw);
          }
        }
        if (dest.origin!==base.origin && /^https?:/i.test(dest.protocol)) {
          const rel=a.attrs.rel||''; const target=a.attrs.target||'';
          if (target!=='_blank'||! /\bnoopener\b/.test(rel)||! /\bnoreferrer\b/.test(rel)) add(out,file,'HTML-LINK-001',L(`External link "${href}" thiếu target/rel theo guideline.`,`外部リンク「${href}」に規約で定められた target="_blank" または rel="noopener noreferrer" が欠落しています。`),L('Thêm target="_blank" rel="noopener noreferrer".','target="_blank" rel="noopener noreferrer" を追加してください。'),line,a.raw);
        }
      } catch {}
    }
  }

  // Page-shell rules are intentionally limited to standalone HTML/runtime output.
  // EJS pages and WordPress PHP templates are assembled from layout/header/footer imports,
  // so checking <head>/<header>/<footer>/<title>/viewport on an individual source file would be a false positive.
  if (isFullPageRole(role)) {
    const h=[1,2,3,4,5,6].map(n=>(t.match(new RegExp(`<h${n}\\b`,'gi'))||[]).length);
    if (h[0]===0) add(out,file,'HTML-H-001',L('Trang hoàn chỉnh không có h1.','ページ全体の中に<h1>タグが存在しません。'),L('Bổ sung h1 cho tiêu đề chính theo guideline.','規約に従い、ページの主見出しとして適切な<h1>タグを1箇所設置してください。'));
    if (h[1]===0 || h[2]===0) add(out,file,'HTML-H-002',L(`Trang có h2=${h[1]}, h3=${h[2]}; guideline yêu cầu cấu trúc heading h1–h3 phù hợp.`,`ページの構成（h2=${h[1]}, h3=${h[2]}）において、規約が推奨する見出し構造（h1〜h3）が不足しています。`),L('Reviewer xác nhận cấu trúc nội dung/design và bổ sung heading phù hợp nếu thiếu.','デザインおよびコンテンツ構造を確認し、適切な階層の見出しタグを追加してください。'));
    const seq=[...t.matchAll(/<h([1-6])\b/gi)].map(m=>({n:Number(m[1]),index:m.index||0}));
    for(let i=1;i<seq.length;i++) if(seq[i].n-seq[i-1].n>1){ add(out,file,'HTML-H-003',L(`Heading nhảy từ h${seq[i-1].n} lên h${seq[i].n}.`,`見出しレベルが h${seq[i-1].n} から h${seq[i].n} へ階層を飛ばしてジャンプしています。`),L('Kiểm tra lại outline nội dung; tránh nhảy cấp khi không có lý do semantic.','文章構造（アウトライン）を見直し、セマンティック上の理由がない限り見出しレベルを飛ばさないでください。'),lineOf(t,seq[i].index)); break; }

    const main=(t.match(/<main\b/gi)||[]).length;
    if(main!==1) add(out,file,'HTML-SEM-001',L(`Trang hoàn chỉnh có ${main} thẻ main; guideline về nguyên tắc dùng 1 main.`,`ページ内に <main> タグが ${main} 個存在します。規約では原則1ページにつき1つのmainタグと定めています。`),L('Đảm bảo nội dung chính được bọc trong một thẻ main.','主要コンテンツ全体を単一の <main> タグで囲むように構造を修正してください。'));
    const headers=(t.match(/<header\b/gi)||[]).length, footers=(t.match(/<footer\b/gi)||[]).length;
    if(headers!==1||footers!==1) add(out,file,'HTML-SEM-002',L(`Trang có header=${headers}, footer=${footers}; cần xác nhận semantic dùng chung.`,`ページ内のタグ数が header=${headers}, footer=${footers} となっています。共通セマンティック構造の確認が必要です。`),L('Với trang hoàn chỉnh, xác nhận header/footer dùng chung theo guideline.','通常ページにおいて共通ヘッダーおよびフッターが規約通り正しく設計されているか確認してください。'));
    if(!/<meta\s+charset\s*=\s*["']?utf-8/i.test(t)) add(out,file,'HTML-ENC-001',L('Trang hoàn chỉnh thiếu <meta charset="utf-8">.','<meta charset="utf-8"> の文字コード宣言が記述されていません。'),L('Thêm meta charset UTF-8 trong head.','<head>内の先頭付近に <meta charset="utf-8"> を追加してください。'));
    const titleMatch=t.match(/<title>\s*([^<]+?)\s*<\/title>/i);
    if(!titleMatch) add(out,file,'HTML-TITLE-001',L('Trang hoàn chỉnh thiếu title.','<title>タグが設定されていません。'),L('Thêm title theo format của guideline.','規約の指定フォーマット（例: ページ名｜サイト名）に従って<title>を設定してください。'));
    if(/<meta\b[^>]*name\s*=\s*["']keywords["']/i.test(t)) add(out,file,'SEO-KEYWORDS-001',L('Guideline nói không cần thiết lập meta keywords.','コーディング規約により、meta keywordsタグの設定は不要（原則削除）とされています。'),L('Xóa meta keywords trừ khi dự án có yêu cầu đặc biệt.','案件独自の明確な指示がない限り、meta keywordsタグを削除してください。'));
    if(!/<meta\b[^>]*name\s*=\s*["']viewport["']/i.test(t)) add(out,file,'RESP-VIEWPORT-001',L('Trang hoàn chỉnh thiếu viewport meta cho responsive.','レスポンシブ対応用の <meta name="viewport"> が記述されていません。'),L('Thêm <meta name="viewport" content="width=device-width, initial-scale=1">.','<head>内に <meta name="viewport" content="width=device-width, initial-scale=1"> を追加してください。'));
    if(mode==='website' && file.url && titleMatch){ try{ const u=new URL(file.url); if(u.pathname!=='/' && !/[｜|]/.test(titleMatch[1])) add(out,file,'HTML-TITLE-002',L(`Title trang con "${titleMatch[1]}" chưa thấy separator theo format “Tên trang｜Tên website”.`,`下層ページのタイトル「${titleMatch[1]}」に規定の区切り文字（｜）が含まれていません。`),L('Nếu khách hàng không có chỉ định riêng, áp dụng format của guideline.','クライアントからの個別指定がない場合は、規約の推奨形式「下層ページ名｜サイト名」を適用してください。')); }catch{} }
    const navish=/<(?:div|ul)\b[^>]*(?:class|id)\s*=\s*["'][^"']*(?:global-nav|navigation|g-nav|main-nav)[^"']*["']/i.test(t);
    if(navish && !/<nav\b/i.test(t)) add(out,file,'HTML-NAV-001',L('Có cấu trúc giống global navigation nhưng chưa thấy thẻ nav.','グローバルナビゲーションと思われる構造ですが、<nav>タグが使用されていません。'),L('Bọc global navigation bằng <nav> nếu đúng vai trò.','サイトの主要ナビゲーションである場合は、<nav>タグでマークアップしてください。'));
  }

  // Runtime WebP: ignore jpg/png when it is a fallback inside <picture> with WebP source.
  if (mode==='website') {
    for(const img of tags(t,'img')){
      const src=img.attrs.src||''; if(isThirdPartyPath(src,context)||!/\.(?:jpe?g|png)(?:[?#]|$)/i.test(src)) continue;
      const before=t.slice(Math.max(0,img.index-500),img.index);
      const open=before.lastIndexOf('<picture'); const close=before.lastIndexOf('</picture>');
      const hasWebpFallback=open>close && /<source\b[^>]*srcset\s*=\s*["'][^"']+\.webp/i.test(before.slice(open));
      if(!hasWebpFallback) add(out,file,'IMG-FMT-002',L(`Runtime image "${src}" đang dùng JPG/PNG mà chưa thấy WebP source.`,`ブラウザ出力画像「${src}」がJPG/PNG形式のまま配信されており、WebPソースが確認できません。`),L('Ưu tiên WebP; nếu cần fallback, dùng picture theo guideline.','画像をWebP形式に変換して優先配信し、フォールバックが必要な場合は<picture>タグを使用してください。'),lineOf(t,img.index),img.raw);
    }
  }

  eachRegex(file,t,/<img\b[^>]*\bsrc\s*=\s*["'][^"']*(?:_pc|_sp)\.[a-z0-9]+[^"']*["'][^>]*>/gi,(m,line)=>{
    if(isThirdPartyPath(m[0],context)) return;
    const before=t.slice(Math.max(0,m.index-300),m.index); if(before.lastIndexOf('<picture')<=before.lastIndexOf('</picture>')) add(out,file,'IMG-RESP-001',L('Tên file cho thấy ảnh PC/SP tách riêng nhưng thẻ img không nằm trong picture.','ファイル名（_pc / _sp）からPC/SP用画像が分離されていますが、<picture>タグで囲まれていません。'),L('Nếu layout ảnh thực sự khác PC/SP, dùng <picture><source media=...>.','PCとSPで切り替える画像の場合は、<picture>タグと<source media="...">構文を使用してください。'),line,m[0]);
  });

  if(context.isWordPress && /\.php$/i.test(file.path)) {
    eachRegex(file,t,/(?:href|src)\s*=\s*["']\/(?!\/)[^"']+["']/gi,(m,line)=>add(out,file,'WP-URL-001',L('PHP template đang viết cứng root-relative URL/path; guideline WordPress yêu cầu helper động.','PHPテンプレート内でルート相対パスがハードコードされています。WordPress規約では動的ヘルパー関数の使用が必須です。'),L('Dùng home_url(), get_permalink() hoặc get_theme_file_uri() + esc_url() theo loại link.','用途に応じて home_url()、get_permalink()、get_theme_file_uri() と esc_url() を組み合わせて使用してください。'),line,m[0]));
  }

  return out;
}

function styleRules(file:SourceFile, role:FileRole, context:ProjectContext):Finding[] {
  const out:Finding[]=[]; if(!isStyleRole(role)||isThirdPartyPath(file.path,context)) return out;
  let c=preserveStrip(file.content,/\/\*[\s\S]*?\*\//g);
  if(role==='scss') c=maskJsComments(c); // ignore commented-out SCSS code while preserving line numbers
  c=maskThirdPartyCssBlocks(c,context);
  if(role==='scss') eachRegex(file,c,/@import\b[^;]*;/gi,(m,line)=>add(out,file,'SASS-IMPORT-001',L('Template dùng Dart Sass module; @import bị cấm.','Dart Sassモジュール設計を採用しているため、@importの使用は禁止されています。'),L('Thay bằng @use / @forward và tổ chức module phù hợp.','@use や @forward に置き換え、モジュール構成を最適化してください。'),line,m[0]));
  if(role==='scss' && context.isJLineTemplate && /(?:^|\/)(?:common|top)\.scss$/i.test(file.path)) {
    const stripped=c
      .replace(/^\s*@(?:use|forward)\b[^;]*;\s*$/gmi,'')
      .replace(/^\s*$/gm,'');
    if(/[{}]|(?:^|\n)\s*[.#a-z][^\n{]*\{/i.test(stripped)) add(out,file,'SASS-ENTRY-CSS-001',L('File entry common.scss/top.scss có CSS trực tiếp; guideline Template yêu cầu file cấp cao chỉ nạp module bằng @use.','common.scss / top.scss に直接CSSが記述されています。テンプレート規約では上位ファイルは @use によるモジュール読み込みのみとします。'),L('Di chuyển selector/property vào module foundation/layout/component/page/utilities và giữ entry file chỉ để @use.','セレクタ/プロパティを foundation/layout/component/page/utilities の各モジュールへ移し、エントリーファイルは @use のみとしてください。'));
  }
  eachRegex(file,c,/(^|[},\n])\s*#([A-Za-z][\w-]*)\s*(?:[,{:#.\[]|$)/gm,(m,line)=>{
    if(isThirdPartySelectorName(m[2],context)) return;
    add(out,file,'CSS-ID-001',L('CSS đang dùng ID selector.','CSS内でIDセレクタ（#id）が使用されています。'),L('Ưu tiên class FLOCSS/BEM để giảm specificity.','詳細度（specificity）を低く保つため、FLOCSS/BEMに基づいたクラスセレクタを使用してください。'),line,m[0].trim());
  });
  eachRegex(file,c,/(^|[},\n])\s*([a-z][a-z0-9-]*)\.([a-z][\w-]*)/gim,(m,line)=>{
    if (m[2].toLowerCase()==='body' || isThirdPartySelectorName(m[3],context)) return;
    add(out,file,'CSS-TYPE-CLASS-001',L(`Không viết selector theo dạng ${m[2]}.class.`,`タイプセレクタとクラスを結合した「${m[2]}.class」の形式は使用しません。`),L('Bỏ type selector và dùng class trực tiếp; guideline chỉ ngoại lệ body.','タイプセレクタを削除してクラスのみを使用してください（規約上の例外はbodyのみ）。'),line,m[0].trim());
  });
  const flocssClass = String.raw`((?:p|c)-[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?)`;
  const descendantRe = new RegExp(`\\.${flocssClass}[ \\t]+\\.${flocssClass}`, 'gi');
  eachRegex(file,c,descendantRe,(m,line)=>{
    const parent=m[1];
    const child=m[2];
    const parentParts=parent.match(/^((?:p|c)-[a-z0-9]+(?:-[a-z0-9]+)*)(?:__([a-z0-9]+(?:-[a-z0-9]+)*))?(?:--([a-z0-9]+(?:-[a-z0-9]+)*))?$/i);
    const childParts=child.match(/^((?:p|c)-[a-z0-9]+(?:-[a-z0-9]+)*)(?:__([a-z0-9]+(?:-[a-z0-9]+)*))?(?:--([a-z0-9]+(?:-[a-z0-9]+)*))?$/i);
    const sameBlockModifierToOwnElement = !!(
      parentParts && childParts &&
      parentParts[1]===childParts[1] &&
      !parentParts[2] && !!parentParts[3] &&
      !!childParts[2]
    );
    if(sameBlockModifierToOwnElement || isThirdPartySelectorName(parent,context) || isThirdPartySelectorName(child,context) || classExempt.test(parent) || classExempt.test(child)) return;
    add(out,file,'CSS-DESCENDANT-001',L(`Selector "${m[0].trim()}" có dấu hiệu lồng component/project và tăng specificity.`,`セレクタ「${m[0].trim()}」はコンポーネント/プロジェクトを子孫ネストしており、詳細度が高くなっています。`),L('Dùng modifier hoặc selector phẳng; chỉ lồng khi thật sự cần theo exception/state hoặc modifier cùng Block.','Modifierやフラットなセレクタを使用してください。状態例外、または同一BlockのModifierから自身のElementをスコープする場合のみ許可します。'),line,m[0]);
  });
  eachRegex(file,c,/(^|[,{\n])\s*\.js-[\w-]+[^,{]*\{/gm,(m,line)=>add(out,file,'CSS-JS-HOOK-001',L('Class js-* chỉ dùng làm JavaScript hook, không dùng styling.','js-* クラスはJavaScriptフック専用であり、CSSスタイルを当ててはいけません。'),L('Chuyển style sang class c-/p-/l-/u- tương ứng.','スタイルの適用先を、対応する FLOCSS クラス（c-/p-/l-/u-）に変更してください。'),line,m[0].trim()));
  for(const line of obviousMissingSemicolonLines(c)) {
    add(out,file,'CSS-SEMICOLON-001',L(`Property ở dòng ${line} thiếu dấu ;.`,`${line} 行目のCSSプロパティ末尾にセミコロン（;）がありません。`),L('Đảm bảo mỗi property kết thúc bằng ;.','すべてのプロパティの末尾にセミコロン（;）を記述してください。'),line,excerptAt(c,line),{confidence:'deterministic'});
  }
  const lines=c.split('\n');
  lines.forEach((raw,i)=>{
    const t=raw.trim();
    if(!t) return;
    if(/\{\s*[a-z-]+\s*:(?!:)/i.test(t)) add(out,file,'CSS-LINE-001',L('Selector và property đang nằm cùng một dòng.','セレクタとプロパティが同一行に記述されています。'),L('Tách selector và từng property thành dòng riêng.','可読性を保つため、セレクタと各プロパティは別々の行に改行して記述してください。'),i+1,t);
  });
  return out;
}

function jsRules(file:SourceFile, role:FileRole, context:ProjectContext):Finding[] {
  const out:Finding[]=[]; if(role!=='javascript'||isThirdPartyPath(file.path,context)) return out;
  // Mask both block and line comments so commented-out code is never audited.
  const c=maskJsComments(file.content);
  eachRegex(file,c,/\bvar\s+[A-Za-z_$]/g,(m,line)=>add(out,file,'JS-VAR-001',L('Guideline sử dụng const cho giá trị cố định/DOM và let cho biến thay đổi.','コーディング規約により、var の使用は禁止されています（固定値/DOMには const、再代入には let を使用）。'),L('Thay var bằng const hoặc let phù hợp.','var を適切な const または let に置き換えてください。'),line,m[0]));
  // Missing-code-comment checks are intentionally not automated: template/library/generated boundaries make them noisy.
  const jq=[...c.matchAll(/\$\(\s*(["'])([^"']+)\1\s*\)/g)];
  const freq=new Map<string,{count:number;index:number}>();
  jq.forEach(m=>{const k=m[2];const prev=freq.get(k);freq.set(k,{count:(prev?.count||0)+1,index:prev?.index??(m.index||0)});});
  for(const [selector,v] of freq) if(v.count>=2) add(out,file,'JS-JQ-CACHE-001',L(`jQuery selector "${selector}" được gọi ${v.count} lần.`,`jQueryセレクタ「${selector}」が ${v.count} 回重複して実行されています。`),L('Cache DOM object vào const có prefix $, ví dụ const $target = $(...).',`DOMオブジェクトを変数にキャッシュしてください（例: const $target = $('${selector}');）。`),lineOf(c,v.index));
  eachRegex(file,c,/\b(?:const|let)\s+([A-Za-z_][\w$]*)\s*=\s*\$\s*\(/g,(m,line)=>{if(!m[1].startsWith('$')) add(out,file,'JS-JQ-PREFIX-001',L(`Biến "${m[1]}" chứa jQuery object nhưng không có prefix $.`,`変数「${m[1]}」はjQueryオブジェクトを保持していますが、プレフィックス「$」が付与されていません。`),L(`Đổi thành $${m[1]} để nhận diện jQuery object.`,`jQueryオブジェクトであることを明確にするため、変数名を「$${m[1]}」に変更してください。`),line,m[0]);});
  return out;
}

function imagePathRules(file:SourceFile, context:ProjectContext):Finding[] {
  const out:Finding[]=[]; if(!isImagePath(file.path)||/\.svg$/i.test(file.path)||isThirdPartyPath(file.path,context)) return out;
  const p=file.path.replace(/\\/g,'/'); const base=p.split('/').pop()||'';
  if(/\.(?:jpe?g|png)$/i.test(base) && /(?:^|\/)assets\/images\//i.test(p) && !context.hasSharpPipeline) add(out,file,'IMG-FMT-001',L(`Ảnh source "${base}" là JPG/PNG nhưng chưa xác nhận được Sharp/WebP pipeline trong project.`,`元画像「${base}」がJPG/PNG形式ですが、プロジェクト内にSharp等のWebP生成パイプラインが確認できません。`),L('Nếu dùng J-Line Template có Sharp thì giữ source raster là hợp lệ; nếu không, bổ sung pipeline hoặc WebP output.','J-Lineテンプレート（Sharp連携ビルド）を使用している場合は元ラスター画像で問題ありません。それ以外はWebP生成タスクを追加してください。'));
  if(/\.(?:webp|jpe?g|png|gif)$/i.test(base) && !/^(?:bg|icon|img)_[a-z0-9][a-z0-9_-]*\./i.test(base)) add(out,file,'IMG-NAME-001',L(`Tên ảnh "${base}" chưa theo prefix bg_/icon_/img_.`,`画像ファイル名「${base}」が命名規則（bg_/icon_/img_）に従っていません。`),L('Đổi tên theo mục đích: bg_xxx, icon_xxx hoặc img_xxx.','用途に応じて bg_xxx、icon_xxx、img_xxx のいずれかの形式にリネームしてください。'));
  return out;
}

function gitignoreIgnoresEnvPath(content:string, envPath:string) {
  const normalized=normalizePath(envPath).replace(/^\/+/, '').toLowerCase();
  const segments=normalized.split('/').filter(Boolean);
  const base=segments.at(-1) || '';
  // Folder uploads often include the selected root directory in every path. Keep both
  // forms so a repository-root rule such as `config/.env` still matches
  // `my-project/config/.env` without pretending to be a full Git implementation.
  const pathCandidates=new Set<string>([normalized]);
  if(segments.length>1) pathCandidates.add(segments.slice(1).join('/'));

  const escape=(value:string)=>value.replace(/[.+^${}()|[\]\\]/g,'\\$&');
  const glob=(pattern:string)=>{
    let x='';
    for(let i=0;i<pattern.length;i++){
      const ch=pattern[i];
      if(ch==='*'){
        if(pattern[i+1]==='*'){x+='.*';i++;}
        else x+='[^/]*';
      } else if(ch==='?') x+='[^/]';
      else x+=escape(ch);
    }
    return x;
  };

  let ignored=false;
  for (const raw of content.split(/\r?\n/)) {
    const trimmed=raw.trim();
    if(!trimmed || trimmed.startsWith('#')) continue;
    const neg=trimmed.startsWith('!');
    let pattern=(neg?trimmed.slice(1):trimmed).trim().replace(/\\ /g,' ');
    if(!pattern) continue;
    const directoryOnly=pattern.endsWith('/');
    pattern=pattern.replace(/^\/+/, '').replace(/\/+$/,'').toLowerCase();
    if(!pattern) continue;

    let matches=false;
    if(!pattern.includes('/')) {
      // Git patterns without a slash match a basename at any depth.
      const re=new RegExp(`^${glob(pattern)}$`,'i');
      matches=re.test(base);
    } else {
      const re=new RegExp(`^${glob(pattern)}${directoryOnly?'(?:/.*)?':''}$`,'i');
      matches=[...pathCandidates].some(candidate=>re.test(candidate));
      // **/foo also matches foo at repository root.
      if(!matches && pattern.startsWith('**/')) {
        const rootRe=new RegExp(`^${glob(pattern.slice(3))}${directoryOnly?'(?:/.*)?':''}$`,'i');
        matches=[...pathCandidates].some(candidate=>rootRe.test(candidate));
      }
    }
    if(matches) ignored=!neg;
  }
  return ignored;
}

function structureRules(files:SourceFile[], context:ProjectContext):Finding[] {
  const out:Finding[]=[];
  const anchor=files.find(f=>!isImagePath(f.path)&&!isSecretEnvPath(f.path)&&!isThirdPartyPath(f.path,context))||files[0]||{path:'project',content:''};
  if(context.hasEnv){
    const envFiles=files.filter(f=>isSecretEnvPath(f.path));
    for(const envFile of envFiles){
      const ignored=context.hasGitignore && gitignoreIgnoresEnvPath(context.gitignoreContent,envFile.path);
      if(!ignored) {
        const name=envFile.path.replace(/\\/g,'/').split('/').pop() || '.env';
        add(out,envFile,'STR-ENV-001',L(`Project có ${name} nhưng .gitignore chưa ignore file này.`,`プロジェクトに ${name} が存在しますが、.gitignore で除外されていません。`),L('Thêm file môi trường bí mật vào .gitignore; chỉ commit .env.example hoặc file mẫu không chứa secret.','秘密情報を含む環境ファイルを .gitignore に追加し、リポジトリには .env.example など秘密情報を含まないサンプルのみをコミットしてください。'));
      }
    }
  }
  for(const file of files){
    if(!file.content||isThirdPartyPath(file.path,context)) continue;
    const role=detectFileRole(file,'source');
    // Team preference: trailing whitespace is intentionally not audited in any source type.
    if(isMarkupRole(role)) {
      const markup=cleanForMarkup(file.content);
      eachRegex(file,markup,/\b(?:lorem ipsum|dummy text|dummy image|sample text|テキストテキスト|ダミー)\b/gi,(m,line)=>add(out,file,'STR-DUMMY-001',L(`Phát hiện chuỗi "${m[0]}" có thể là dummy content.`,`ダミーコンテンツの可能性のある文字列「${m[0]}」が検出されました。`),L('Xác nhận với task/design; test upload không được để dummy trừ trường hợp được cho phép.','タスク仕様およびデザインを確認してください。指示がある場合を除き、テストアップ時にダミーを残さないでください。'),line,m[0]));
    }
  }
  if(context.hasScss && context.isJLineTemplate){
    const scssFiles=files.filter(f=>/\.s[ac]ss$/i.test(f.path));
    const scssAnchor=scssFiles[0]||anchor;
    const dirs=new Set(scssFiles.flatMap(f=>f.path.replace(/\\/g,'/').split('/')));
    const expected=['foundation','layout','component','page','global','utilities'];
    const found=expected.filter(x=>dirs.has(x)).length;
    if(found>0&&found<4) add(out,scssAnchor,'SASS-STRUCT-001',L(`SCSS project chỉ phát hiện ${found}/${expected.length} nhóm module FLOCSS/7-1 chuẩn.`,`SCSSディレクトリ内で、標準FLOCSS/7-1構成のモジュール群が ${found}/${expected.length} カテゴリしか確認できません。`),L('Nếu đang dùng J-Line Template, kiểm tra foundation/layout/component/page/global/utilities và @use/@forward.','J-Lineテンプレートを使用している場合は、foundation/layout/component/page/global/utilities の構成および @use/@forward を確認してください。'));
  }
  if(context.isWordPress){
    for(const file of files){
      if(!file.content || isThirdPartyPath(file.path, context) || isImagePath(file.path)) continue;
      // remove_menu_page('cptui_main_menu') is standard admin hardening recommended directly in the guideline
      const stripped = file.content
        .replace(/remove_menu_page\s*\(\s*['"]cptui_main_menu['"]\s*\)/gi, '')
        .replace(/['"]cptui_main_menu['"]/gi, '');
      eachRegex(file, stripped, /\b(?:custom-post-type-ui|cptui_(?!main_menu))\b/gi, (m, line) => {
        add(out, file, 'WP-CPTUI-001', L('Source có dấu hiệu tham chiếu Custom Post Type UI, trong khi guideline ưu tiên ACF registration hoặc code.','Custom Post Type UI（CPT UI）の参照が検出されましたが、規約ではACFによる登録またはPHPコードでの定義を推奨しています。'), L('Xác nhận plugin có thực sự cần thiết; ưu tiên ACF hoặc đăng ký bằng PHP theo guideline.','プラグインの必要性を再確認し、規約に従ってACFまたはPHPの register_post_type による登録を優先してください。'), line, m[0]);
      });
    }
  }
  return out;
}

function responsiveStyleRules(file:SourceFile,role:FileRole,context:ProjectContext):Finding[] {
  const out:Finding[]=[]; if(!isStyleRole(role)||isThirdPartyPath(file.path,context)) return out;
  let c=preserveStrip(file.content,/\/\*[\s\S]*?\*\//g);
  if(role==='scss') c=maskJsComments(c);
  c=maskThirdPartyCssBlocks(c,context);
  eachRegex(file,c,/@media[^\{]*(?:max-width\s*:\s*(?:767|768)px)[\s\S]{0,700}?font-size\s*:\s*(\d+(?:\.\d+)?)px/gi,(m,line)=>{const n=Number(m[1]);if(n<10)add(out,file,'RESP-FONT-MIN-001',L(`Trong media SP phát hiện font-size ${n}px (<10px), thấp hơn minimum của guideline.`,`SP向けメディアクエリ内で規約上の最小値10pxを下回る font-size ${n}px が指定されています。`),L('Tăng font-size lên tối thiểu 10px; nếu design không chỉ định khác nên dùng từ 12px.','最低10px以上に修正し、デザイン指定がない場合は12px以上を使用してください。'),line,m[0].slice(0,220));else if(n<12)add(out,file,'RESP-FONT-001',L(`Trong media SP phát hiện font-size ${n}px (10–<12px); guideline nói cơ bản không nhỏ hơn 12px nếu design không chỉ định.`,`SP向けに ${n}px（10px以上12px未満）が指定されています。デザイン指定がない場合は12px未満を使用しない規約です。`),L('Xác nhận design; nếu không có chỉ định đặc biệt, tăng lên 12px trở lên.','デザイン指定を確認し、特別な指定がなければ12px以上に修正してください。'),line,m[0].slice(0,220));});
  eachRegex(file,c,/(?:^|[;{\n])\s*width\s*:\s*(1[2-9]\d\d|[2-9]\d{3,})px\s*;/gi,(m,line)=>add(out,file,'RESP-WIDTH-001',L(`Fixed width ${m[1]}px lớn hơn container chuẩn 1160px; cần xác nhận không gây overflow.`,`固定幅（width: ${m[1]}px）が標準コンテナ幅（1160px）を超えています。横スクロールが発生しないか確認してください。`),L('Ưu tiên max-width/fluid layout hoặc reviewer xác nhận đây là exception có chủ đích.','max-width や可変レイアウトを使用するか、意図的な仕様であるかレビュアーの承認を得てください。'),line,m[0]));
  return out;
}

function calculateScore(findings:Finding[]) {
  const base:Record<Severity,number>={blocker:24,major:10,minor:4,recommendation:1.5};
  const byRule=new Map<string,Finding[]>(); findings.filter(f=>f.confidence!=='manual').forEach(f=>byRule.set(f.ruleId,[...(byRule.get(f.ruleId)||[]),f]));
  let penalty=0;
  for(const group of byRule.values()){
    const first=group[0]; let p=base[first.severity];
    p += Math.min(4,group.length-1)*base[first.severity]*0.22;
    if(first.confidence==='probable') p*=0.5;
    penalty += p;
  }
  return Math.max(0,Math.round(100-Math.min(100,penalty)));
}
function gate(findings:Finding[]):AuditResult['gateStatus'] {
  // UI exposes only Error / Warning. A deterministic guideline violation is an Error and fails the gate.
  if(findings.some(f=>f.confidence==='deterministic')) return 'fail';
  if(findings.length) return 'pass_with_warnings';
  return 'pass';
}

export function auditFiles(files:SourceFile[], options:{mode:AuditMode; libraryPrefixes?:string[]; librarySelectors?:string[]}):AuditResult {
  const context=buildProjectContext(files,options.libraryPrefixes||[],options.librarySelectors||[]);
  let findings:Finding[]=[];
  if(options.mode==='source') findings.push(...structureRules(files,context));
  for(const file of files){
    if(isThirdPartyPath(file.url || file.path,context)) continue;
    const role=detectFileRole(file,options.mode);
    if(isMarkupRole(role)) findings.push(...markupRules(file,role,options.mode,context));
    if(options.mode==='source') {
      findings.push(...styleRules(file,role,context));
      findings.push(...responsiveStyleRules(file,role,context));
      findings.push(...jsRules(file,role,context));
      findings.push(...imagePathRules(file,context));
    }
  }
  // Deduplicate identical rule/file/line findings caused by overlapping checks.
  const seen=new Set<string>(); findings=findings.filter(f=>{const k=`${f.ruleId}|${f.file}|${f.line||0}|${f.excerpt||''}`;if(seen.has(k))return false;seen.add(k);return true;});
  const counts:AuditResult['counts']={blocker:0,major:0,minor:0,recommendation:0};
  const confidenceCounts:AuditResult['confidenceCounts']={deterministic:0,probable:0,manual:0};
  const categoryCounts:AuditResult['categoryCounts']={markup:0,linksSeo:0,accessibility:0,cssFlocss:0,javascript:0,images:0,wordpress:0,structureDelivery:0,responsive:0,manualReview:0};
  findings.forEach(f=>{counts[f.severity]++;confidenceCounts[f.confidence]++;categoryCounts[f.category]++;});
  let manualChecks=MANUAL_CHECKS.filter(m=>m.appliesTo.includes(options.mode));
  if(!context.isWordPress) manualChecks=manualChecks.filter(m=>m.category!=='wordpress');
  manualChecks.forEach(m=>categoryCounts[m.category]++);
  categoryCounts.manualReview = manualChecks.length;
  const applicableCatalog=RULE_CATALOG.filter(r=>r.modes.includes(options.mode));
  return {score:calculateScore(findings),gateStatus:gate(findings),findings,manualChecks,filesChecked:files.length,rulesEvaluated:applicableCatalog.length,catalogSize:RULE_CATALOG.length,counts,confidenceCounts,categoryCounts,context};
}
