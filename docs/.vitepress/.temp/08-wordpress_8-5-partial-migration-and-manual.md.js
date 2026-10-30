import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8-5. 情報の一部移行・WPマニュアル作成","description":"","frontmatter":{},"headers":[],"relativePath":"08-wordpress/8-5-partial-migration-and-manual.md","filePath":"08-wordpress/8-5-partial-migration-and-manual.md"}');
const _sfc_main = { name: "08-wordpress/8-5-partial-migration-and-manual.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-5-情報の一部移行・wpマニュアル作成" tabindex="-1">8-5. 情報の一部移行・WPマニュアル作成 <a class="header-anchor" href="#_8-5-情報の一部移行・wpマニュアル作成" aria-label="Permalink to &quot;8-5. 情報の一部移行・WPマニュアル作成&quot;">​</a></h1><h2 id="情報の一部移行する作業が発生した場合" tabindex="-1">情報の一部移行する作業が発生した場合 <a class="header-anchor" href="#情報の一部移行する作業が発生した場合" aria-label="Permalink to &quot;情報の一部移行する作業が発生した場合&quot;">​</a></h2><ul><li>「DeMomentSomTres Export」というプラグインを使用する</li><li>WP内の「インポート」機能では情報が全て移らないエラーが起こる可能性があるため</li></ul><p><strong>参考：</strong></p><ul><li><a href="https://naifix.com/wordpress-transfer/" target="_blank" rel="noreferrer">https://naifix.com/wordpress-transfer/</a></li><li><a href="https://easytouse.jp/2018/03/28/demomentsomtresexport/" target="_blank" rel="noreferrer">https://easytouse.jp/2018/03/28/demomentsomtresexport/</a></li></ul><h2 id="wpマニュアルの作成に関して" tabindex="-1">WPマニュアルの作成に関して <a class="header-anchor" href="#wpマニュアルの作成に関して" aria-label="Permalink to &quot;WPマニュアルの作成に関して&quot;">​</a></h2><ul><li>マニュアルサンプルを参考にしてマニュアルを作成すること。</li></ul><p><a href="https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx" target="_blank" rel="noreferrer">サンプルDLはこちら</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("08-wordpress/8-5-partial-migration-and-manual.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _85PartialMigrationAndManual = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _85PartialMigrationAndManual as default
};
