import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-2. フォーマット規則","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-2-format-rules.md","filePath":"01-html/1-2-format-rules.md"}');
const _sfc_main = { name: "01-html/1-2-format-rules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-2-フォーマット規則" tabindex="-1">1-2. フォーマット規則 <a class="header-anchor" href="#_1-2-フォーマット規則" aria-label="Permalink to &quot;1-2. フォーマット規則&quot;">​</a></h1><ul><li>タグ、class名やID名に大文字を使用しない。クラス名はFLOCSS + BEMの命名規則に従うこと： <ul><li>シングルハイフン <code>-</code> ：単語間の区切りに使用（例：<code>.c-global-nav</code>, <code>.p-news-list</code>）</li><li>ダブルアンダースコア <code>__</code> ：Elementの区切りに使用（例：<code>.p-news__title</code>）</li><li>ダブルハイフン <code>--</code> ：Modifierの区切りに使用（例：<code>.c-button--primary</code>）</li><li>FLOCSSレイヤーのprefix：<code>l-</code>（Layout）, <code>c-</code>（Component）, <code>p-</code>（Project）, <code>u-</code>（Utility）</li><li>例：<code>.l-header</code>, <code>.c-global-nav</code>, <code>.p-news-list</code>, <code>.u-text-center</code></li><li>（詳細は「Class命名ルール」セクションを参照）</li></ul></li><li>入れ子時は字下げし、誰が見ても構造を理解しやすいソースにする</li><li>文末やテキスト間の余計なスペースは削除する</li><li>必要に応じてコメントを活用する<br><code>開始時：&lt;!-- ↓↓container↓↓ --&gt;</code><br><code>終了時：&lt;!-- ↑↑container↑↑ --&gt;</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-2-format-rules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12FormatRules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12FormatRules as default
};
