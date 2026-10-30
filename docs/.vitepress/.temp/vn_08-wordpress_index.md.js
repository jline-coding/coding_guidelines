import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8. Về WordPress","description":"","frontmatter":{},"headers":[],"relativePath":"vn/08-wordpress/index.md","filePath":"vn/08-wordpress/index.md"}');
const _sfc_main = { name: "vn/08-wordpress/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-ve-wordpress" tabindex="-1">8. Về WordPress <a class="header-anchor" href="#_8-ve-wordpress" aria-label="Permalink to &quot;8. Về WordPress&quot;">​</a></h1><p class="text-muted text-base mb-6">Phương pháp xây dựng, phiên bản, tùy chỉnh trang quản trị WP, plugin khuyến nghị, di chuyển dữ liệu và tạo manual</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./8-1-build-method" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-1. Về phương pháp xây dựng</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-2-version" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-2. Về phiên bản</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-3-admin-customization" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-3. Về tùy chỉnh trang quản trị WP</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-4-plugins" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-4. Về plugin</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-5-partial-migration-and-manual" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-5. Di chuyển một phần dữ liệu &amp; Tạo manual WP</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/08-wordpress/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
