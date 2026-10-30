import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6-3. フォントサイズに関して","description":"","frontmatter":{},"headers":[],"relativePath":"06-responsive/6-3-font-size.md","filePath":"06-responsive/6-3-font-size.md"}');
const _sfc_main = { name: "06-responsive/6-3-font-size.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-3-フォントサイズに関して" tabindex="-1">6-3. フォントサイズに関して <a class="header-anchor" href="#_6-3-フォントサイズに関して" aria-label="Permalink to &quot;6-3. フォントサイズに関して&quot;">​</a></h1><ul><li>基本的に単位はremにすること</li><li>SPサイズ時、デザインに指定が無ければ12px以下のfont-sizeは使わない</li><li>font-sizeは最小10pxまでとする</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("06-responsive/6-3-font-size.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _63FontSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _63FontSize as default
};
