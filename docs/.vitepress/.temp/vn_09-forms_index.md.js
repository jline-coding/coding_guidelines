import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9. Về Form","description":"","frontmatter":{},"headers":[],"relativePath":"vn/09-forms/index.md","filePath":"vn/09-forms/index.md"}');
const _sfc_main = { name: "vn/09-forms/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-ve-form" tabindex="-1">9. Về Form <a class="header-anchor" href="#_9-ve-form" aria-label="Permalink to &quot;9. Về Form&quot;">​</a></h1><p class="text-muted text-base mb-6">Mailform pro CGI, Responsive mailform, Contact Form 7 và các cài đặt chung của form</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./9-1-mailform-pro-and-responsive" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">9-1. Mail form trên site tĩnh (Mailform pro CGI / Responsive)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./9-2-wp-forms" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">9-2. Form trên site WP (Contact Form 7)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./9-3-common-settings" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">9-3. Cài đặt chung và các lưu ý của form</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/09-forms/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
