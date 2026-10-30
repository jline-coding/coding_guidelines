import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-1. Về xuất hình","description":"","frontmatter":{},"headers":[],"relativePath":"vn/02-images/2-1-export.md","filePath":"vn/02-images/2-1-export.md"}');
const _sfc_main = { name: "vn/02-images/2-1-export.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-1-ve-xuat-hinh" tabindex="-1">2-1. Về xuất hình <a class="header-anchor" href="#_2-1-ve-xuat-hinh" aria-label="Permalink to &quot;2-1. Về xuất hình&quot;">​</a></h1><ul><li>Nguyên tắc chung: tất cả hình ảnh phải được xuất với độ phân giải gấp 2 lần kích thước hiển thị và sử dụng định dạng WebP</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/02-images/2-1-export.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _21Export = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _21Export as default
};
