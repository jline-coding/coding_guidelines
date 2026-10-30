import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8. WordPressに関して","description":"","frontmatter":{},"headers":[],"relativePath":"08-wordpress/index.md","filePath":"08-wordpress/index.md"}');
const _sfc_main = { name: "08-wordpress/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-wordpressに関して" tabindex="-1">8. WordPressに関して <a class="header-anchor" href="#_8-wordpressに関して" aria-label="Permalink to &quot;8. WordPressに関して&quot;">​</a></h1><p class="text-muted text-base mb-6">構築方法・バージョン管理・管理画面カスタマイズ・推奨プラグイン・データ移行・マニュアル</p><h2 id="目次" tabindex="-1">目次 <a class="header-anchor" href="#目次" aria-label="Permalink to &quot;目次&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./8-1-build-method" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-1. 構築方法に関して</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-2-version" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-2. バージョンに関して</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-3-admin-customization" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-3. WP管理画面のカスタマイズに関して</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-4-plugins" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-4. プラグインに関して</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./8-5-partial-migration-and-manual" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">8-5. 情報の一部移行・WPマニュアル作成</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("08-wordpress/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
