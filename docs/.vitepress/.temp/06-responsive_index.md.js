import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6. レスポンシブ対応","description":"","frontmatter":{},"headers":[],"relativePath":"06-responsive/index.md","filePath":"06-responsive/index.md"}');
const _sfc_main = { name: "06-responsive/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-レスポンシブ対応" tabindex="-1">6. レスポンシブ対応 <a class="header-anchor" href="#_6-レスポンシブ対応" aria-label="Permalink to &quot;6. レスポンシブ対応&quot;">​</a></h1><p class="text-muted text-base mb-6">基本パターン・リキッドパターン・コンテンツ幅とブレイクポイント・フォントサイズ</p><h2 id="目次" tabindex="-1">目次 <a class="header-anchor" href="#目次" aria-label="Permalink to &quot;目次&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./6-1-responsive-patterns" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">6-1. レスポンシブ対応（基本・リキッドパターン）</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./6-2-breakpoints" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">6-2. コンテンツ幅とブレイクポイント</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./6-3-font-size" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">6-3. フォントサイズに関して</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("06-responsive/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
