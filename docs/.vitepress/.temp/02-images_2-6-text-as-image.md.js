import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-6. フォントの画像化について","description":"","frontmatter":{},"headers":[],"relativePath":"02-images/2-6-text-as-image.md","filePath":"02-images/2-6-text-as-image.md"}');
const _sfc_main = { name: "02-images/2-6-text-as-image.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-6-フォントの画像化について" tabindex="-1">2-6. フォントの画像化について <a class="header-anchor" href="#_2-6-フォントの画像化について" aria-label="Permalink to &quot;2-6. フォントの画像化について&quot;">​</a></h1><ul><li>テキストは画像化せず、Webフォントを使用します。</li><li>Webフォントの提供がなくデザイン性が高いテキストの場合は、アウトライン化したSVG画像を使用します。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02-images/2-6-text-as-image.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _26TextAsImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _26TextAsImage as default
};
