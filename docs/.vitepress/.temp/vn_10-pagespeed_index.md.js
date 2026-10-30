import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"10. Về Page speed","description":"","frontmatter":{},"headers":[],"relativePath":"vn/10-pagespeed/index.md","filePath":"vn/10-pagespeed/index.md"}');
const _sfc_main = { name: "vn/10-pagespeed/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_10-ve-page-speed" tabindex="-1">10. Về Page speed <a class="header-anchor" href="#_10-ve-page-speed" aria-label="Permalink to &quot;10. Về Page speed&quot;">​</a></h1><p class="text-muted text-base mb-6">Mục đích và cách tiếp cận tốc độ hiển thị, điểm Lighthouse &amp; LCP, cách đo bằng Chrome DevTools</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./10-1-purpose-and-policy" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">10-1. Mục đích, cách tiếp cận &amp; Phương châm cơ bản</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./10-2-measurement" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">10-2. Cách đo giá trị thực tế (Chrome DevTools)</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/10-pagespeed/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
