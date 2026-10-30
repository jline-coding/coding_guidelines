import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"4. JavaScriptに関して","description":"","frontmatter":{},"headers":[],"relativePath":"04-javascript/index.md","filePath":"04-javascript/index.md"}');
const _sfc_main = { name: "04-javascript/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-javascriptに関して" tabindex="-1">4. JavaScriptに関して <a class="header-anchor" href="#_4-javascriptに関して" aria-label="Permalink to &quot;4. JavaScriptに関して&quot;">​</a></h1><p class="text-muted text-base mb-6">JSファイルの配置とdefer属性・記述ルール・const/letとDOMキャッシュ・アニメーション速度</p><h2 id="目次" tabindex="-1">目次 <a class="header-anchor" href="#目次" aria-label="Permalink to &quot;目次&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./4-1-js-files-and-defer" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-1. JavaScriptファイルについて</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./4-2-coding-style" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-2. 記述について</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./4-3-const-let-and-dom-cache" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-3. const / let の記述ルール</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./4-4-animation-speed" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">4-4. アニメーションスピードについて</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("04-javascript/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
