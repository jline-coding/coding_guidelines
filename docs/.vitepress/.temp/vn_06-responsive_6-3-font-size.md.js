import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6-3. Về font","description":"","frontmatter":{},"headers":[],"relativePath":"vn/06-responsive/6-3-font-size.md","filePath":"vn/06-responsive/6-3-font-size.md"}');
const _sfc_main = { name: "vn/06-responsive/6-3-font-size.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-3-ve-font" tabindex="-1">6-3. Về font <a class="header-anchor" href="#_6-3-ve-font" aria-label="Permalink to &quot;6-3. Về font&quot;">​</a></h1><ul><li>Cơ bản đặt đơn vị nên dùng rem</li><li>Khi hiển thị trên SP (smartphone), nếu design không chỉ định, không dùng font-size nhỏ hơn 12px</li><li>font-size tối thiểu là 10px</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/06-responsive/6-3-font-size.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _63FontSize = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _63FontSize as default
};
