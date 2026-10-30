import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5. 納品・バックアップに関して","description":"","frontmatter":{},"headers":[],"relativePath":"05-delivery/index.md","filePath":"05-delivery/index.md"}');
const _sfc_main = { name: "05-delivery/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-納品・バックアップに関して" tabindex="-1">5. 納品・バックアップに関して <a class="header-anchor" href="#_5-納品・バックアップに関して" aria-label="Permalink to &quot;5. 納品・バックアップに関して&quot;">​</a></h1><p class="text-muted text-base mb-6">納品方法・データ納品（自動差分抽出 release.yml）・本番公開作業・バックアップ</p><h2 id="目次" tabindex="-1">目次 <a class="header-anchor" href="#目次" aria-label="Permalink to &quot;目次&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./5-1-delivery-overview" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">5-1. 納品方法に関して・納品の仕方</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./5-2-data-delivery" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">5-2. データ納品・差分納品</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./5-3-production-publish" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">5-3. 本番公開（公開作業）</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./5-4-backup" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">5-4. バックアップに関して</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05-delivery/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
