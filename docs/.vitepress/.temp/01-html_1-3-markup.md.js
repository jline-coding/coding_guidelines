import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-3. マークアップについて","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-3-markup.md","filePath":"01-html/1-3-markup.md"}');
const _sfc_main = { name: "01-html/1-3-markup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-3-マークアップについて" tabindex="-1">1-3. マークアップについて <a class="header-anchor" href="#_1-3-マークアップについて" aria-label="Permalink to &quot;1-3. マークアップについて&quot;">​</a></h1><ul><li>モバイルファーストでコーディングをすること</li><li>HTMLバージョンは、特に指示がない限りはHTML Living standardを使用。</li><li>content model に沿ったマークアップを行う</li><li>基本マークアップはsass使用（dart sass)</li><li>案件によってcss使用</li><li>WordPressのコーディングは管理画面のエディター内でなく原則phpファイル内で行うこと <ul><li>contactform7はエディター内でコーディングする</li></ul></li></ul><p><a href="https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">テンプレートHTML DLはこちら</a><br><a href="https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">テンプレートWP DLはこちら</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-3-markup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _13Markup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _13Markup as default
};
