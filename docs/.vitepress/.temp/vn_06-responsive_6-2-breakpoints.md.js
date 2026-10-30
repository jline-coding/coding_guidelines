import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6-2. Chiều rộng nội dung và breakpoint","description":"","frontmatter":{},"headers":[],"relativePath":"vn/06-responsive/6-2-breakpoints.md","filePath":"vn/06-responsive/6-2-breakpoints.md"}');
const _sfc_main = { name: "vn/06-responsive/6-2-breakpoints.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-2-chieu-rong-noi-dung-va-breakpoint" tabindex="-1">6-2. Chiều rộng nội dung và breakpoint <a class="header-anchor" href="#_6-2-chieu-rong-noi-dung-va-breakpoint" aria-label="Permalink to &quot;6-2. Chiều rộng nội dung và breakpoint&quot;">​</a></h1><ul><li>Trong design của JL, chiều rộng nội dung (container) là 1160px. Khi hiển thị trên SP, đặt lề 20px mỗi bên</li><li>Nếu có hỗ trợ tablet, các breakpoint cần được đặt trong phạm vi tương ứng</li></ul><div class="table-wrap"><table tabindex="0"><thead><tr><th>loại</th><th>phạm vi</th></tr></thead><tbody><tr><td>size tablet</td><td>768－1024px</td></tr><tr><td>size SP</td><td>375px- 767px trở xuống</td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/06-responsive/6-2-breakpoints.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _62Breakpoints = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _62Breakpoints as default
};
