import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-1. 書き出しについて","description":"","frontmatter":{},"headers":[],"relativePath":"02-images/2-1-export.md","filePath":"02-images/2-1-export.md"}');
const _sfc_main = { name: "02-images/2-1-export.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-1-書き出しについて" tabindex="-1">2-1. 書き出しについて <a class="header-anchor" href="#_2-1-書き出しについて" aria-label="Permalink to &quot;2-1. 書き出しについて&quot;">​</a></h1><ul><li>すべての画像は原則として、表示サイズの2倍の解像度で書き出し、Webpを使用してください。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02-images/2-1-export.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _21Export = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _21Export as default
};
