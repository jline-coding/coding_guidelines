import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"3. Về CSS","description":"","frontmatter":{},"headers":[],"relativePath":"vn/03-css/index.md","filePath":"vn/03-css/index.md"}');
const _sfc_main = { name: "vn/03-css/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-ve-css" tabindex="-1">3. Về CSS <a class="header-anchor" href="#_3-ve-css" aria-label="Permalink to &quot;3. Về CSS&quot;">​</a></h1><p class="text-muted text-base mb-6">Thiết kế file CSS, mã hóa ký tự, phân biệt ID/Class (FLOCSS + BEM) và cấu trúc Dart Sass</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./3-1-file-design-and-charset" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">3-1. Design file CSS &amp; Chỉ định mã hóa ký tự</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./3-2-id-and-class-flocss-bem" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">3-2. Phân biệt ID và Class (FLOCSS + BEM)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./3-3-sass" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">3-3. Về Sass</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/03-css/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
