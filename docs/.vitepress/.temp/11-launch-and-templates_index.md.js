import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11. 公開作業時・各種テンプレート","description":"","frontmatter":{},"headers":[],"relativePath":"11-launch-and-templates/index.md","filePath":"11-launch-and-templates/index.md"}');
const _sfc_main = { name: "11-launch-and-templates/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-公開作業時・各種テンプレート" tabindex="-1">11. 公開作業時・各種テンプレート <a class="header-anchor" href="#_11-公開作業時・各種テンプレート" aria-label="Permalink to &quot;11. 公開作業時・各種テンプレート&quot;">​</a></h1><p class="text-muted text-base mb-6">リダイレクト作業・テキスト類テンプレート・コーディングテンプレート・ダミーファイル</p><h2 id="目次" tabindex="-1">目次 <a class="header-anchor" href="#目次" aria-label="Permalink to &quot;目次&quot;">​</a></h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4"><a href="./11-1-redirect-and-ssl" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">11-1. 公開作業時（リダイレクト作業・WPプラグイン）</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./11-2-text-templates" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">11-2. テキスト類テンプレート</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a><a href="./11-3-code-and-dummy-templates" class="group block rounded-lg border border-gray-border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-light !no-underline"><div class="flex items-center justify-between"><span class="font-bold text-base group-hover:text-primary">11-3. コード・画像類テンプレート</span><span class="text-xs font-semibold text-subtle group-hover:text-primary">→</span></div></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("11-launch-and-templates/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
