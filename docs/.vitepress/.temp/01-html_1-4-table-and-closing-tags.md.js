import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-4. Table・終了タグ・文字コード","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-4-table-and-closing-tags.md","filePath":"01-html/1-4-table-and-closing-tags.md"}');
const _sfc_main = { name: "01-html/1-4-table-and-closing-tags.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-4-table・終了タグ・文字コード" tabindex="-1">1-4. Table・終了タグ・文字コード <a class="header-anchor" href="#_1-4-table・終了タグ・文字コード" aria-label="Permalink to &quot;1-4. Table・終了タグ・文字コード&quot;">​</a></h1><h2 id="各種項目のマークアップ一覧" tabindex="-1">各種項目のマークアップ一覧 <a class="header-anchor" href="#各種項目のマークアップ一覧" aria-label="Permalink to &quot;各種項目のマークアップ一覧&quot;">​</a></h2><h3 id="tableコーディングについて" tabindex="-1">Tableコーディングについて <a class="header-anchor" href="#tableコーディングについて" aria-label="Permalink to &quot;Tableコーディングについて&quot;">​</a></h3><ul><li>Tableコーディングは原則行わない</li></ul><h3 id="終了タグについて" tabindex="-1">終了タグについて <a class="header-anchor" href="#終了タグについて" aria-label="Permalink to &quot;終了タグについて&quot;">​</a></h3><ul><li>終了タグの省略は行わない</li></ul><h3 id="文字コードについて" tabindex="-1">文字コードについて <a class="header-anchor" href="#文字コードについて" aria-label="Permalink to &quot;文字コードについて&quot;">​</a></h3><ul><li>UTF-8を使用 <ul><li>ファイルはBOM無しのUTF-8で保存してください<br><code>&lt;meta charset=&quot;utf-8&quot;&gt;</code></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-4-table-and-closing-tags.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14TableAndClosingTags = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14TableAndClosingTags as default
};
