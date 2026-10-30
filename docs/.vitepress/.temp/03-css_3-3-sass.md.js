import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"3-3. Sassについて","description":"","frontmatter":{},"headers":[],"relativePath":"03-css/3-3-sass.md","filePath":"03-css/3-3-sass.md"}');
const _sfc_main = { name: "03-css/3-3-sass.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-3-sassについて" tabindex="-1">3-3. Sassについて <a class="header-anchor" href="#_3-3-sassについて" aria-label="Permalink to &quot;3-3. Sassについて&quot;">​</a></h1><ul><li>Sassの規則は「Sassマニュアル」に沿ってコーディングする</li></ul><p><strong>※ テンプレートに適用されるSCSS構造ルール:</strong></p><ul><li>現在のテンプレートはDart Sassのモジュール構造（FLOCSS / 7-1パターン）を採用しており、<code>foundation</code>（リセット、ベース）、<code>layout</code>（ヘッダー、フッター）、<code>component</code>（UIコンポーネント）、<code>page</code>（ページ個別のスタイル）、<code>global</code>（変数、mixin）、<code>utilities</code> のディレクトリに分割されています。</li><li><strong><code>@import</code> は絶対に使用しないでください。</strong> 代わりに <code>@use</code> と <code>@forward</code> を使用します。</li><li><code>global</code> ディレクトリには色（<code>_color.scss</code>）、フォント（<code>_font.scss</code>）、mixin（<code>_mixin.scss</code>）などが定義されており、<code>_index.scss</code> を通じて <code>@forward</code> でまとめられています。これらの変数/mixinを使用するには、各SCSSファイルの先頭で <code>@use &quot;../global&quot; as *;</code> のように読み込みます。共通変数の設定は必ずこの <code>global</code> 内で行ってください。</li><li><code>common.scss</code> や <code>top.scss</code> などの上位ファイルは、<code>@use</code> を使ってモジュールを読み込む役割のみを持ちます。これらのファイルには直接CSSを記述しないでください。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03-css/3-3-sass.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _33Sass = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _33Sass as default
};
