import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"7. Về trình duyệt mục tiêu","description":"","frontmatter":{},"headers":[],"relativePath":"vn/07-browsers/index.md","filePath":"vn/07-browsers/index.md"}');
const _sfc_main = { name: "vn/07-browsers/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-ve-trinh-duyet-muc-tieu" tabindex="-1">7. Về trình duyệt mục tiêu <a class="header-anchor" href="#_7-ve-trinh-duyet-muc-tieu" aria-label="Permalink to &quot;7. Về trình duyệt mục tiêu&quot;">​</a></h1><p class="text-muted text-base mb-6">Môi trường trình duyệt mục tiêu trên PC / SP và cách xử lý khi hiển thị khác dự kiến</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./7-1-target-browsers" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">7-1. Môi trường trình duyệt mục tiêu (PC / SP)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./7-2-troubleshooting" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">7-2. Khác (Khi khách hàng thấy hiển thị khác dự kiến)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/07-browsers/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
