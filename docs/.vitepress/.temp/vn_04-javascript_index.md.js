import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"4. Về JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"vn/04-javascript/index.md","filePath":"vn/04-javascript/index.md"}');
const _sfc_main = { name: "vn/04-javascript/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-ve-javascript" tabindex="-1">4. Về JavaScript <a class="header-anchor" href="#_4-ve-javascript" aria-label="Permalink to &quot;4. Về JavaScript&quot;">​</a></h1><p class="text-muted text-base mb-6">Quản lý file JS và thuộc tính defer, cách viết chuẩn, quy tắc const/let (Cache DOM) và tốc độ animation</p><h2 id="muc-luc" tabindex="-1">Mục lục <a class="header-anchor" href="#muc-luc" aria-label="Permalink to &quot;Mục lục&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./4-1-js-files-and-defer" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-1. Về file JavaScript</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./4-2-coding-style" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-2. Về cách viết</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./4-3-const-let-and-dom-cache" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-3. Quy tắc const let</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./4-4-animation-speed" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-4. Về tốc độ animation</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/04-javascript/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
