import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6. Xử lý responsive","description":"","frontmatter":{},"headers":[],"relativePath":"vn/06-responsive/index.md","filePath":"vn/06-responsive/index.md"}');
const _sfc_main = { name: "vn/06-responsive/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-xu-ly-responsive" tabindex="-1">6. Xử lý responsive <a class="header-anchor" href="#_6-xu-ly-responsive" aria-label="Permalink to &quot;6. Xử lý responsive&quot;">​</a></h1><p class="text-muted text-base mb-6">Basic Pattern, Liquid Pattern, chiều rộng nội dung, breakpoint và quy tắc font-size</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./6-1-responsive-patterns" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">6-1. Về hỗ trợ responsive (Basic &amp; Liquid Pattern)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./6-2-breakpoints" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">6-2. Chiều rộng nội dung và breakpoint</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./6-3-font-size" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">6-3. Về font</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/06-responsive/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
