import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"7-1. 対象ブラウザ環境（PC / SP）","description":"","frontmatter":{},"headers":[],"relativePath":"07-browsers/7-1-target-browsers.md","filePath":"07-browsers/7-1-target-browsers.md"}');
const _sfc_main = { name: "07-browsers/7-1-target-browsers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-1-対象ブラウザ環境-pc-sp" tabindex="-1">7-1. 対象ブラウザ環境（PC / SP） <a class="header-anchor" href="#_7-1-対象ブラウザ環境-pc-sp" aria-label="Permalink to &quot;7-1. 対象ブラウザ環境（PC / SP）&quot;">​</a></h1><h2 id="以下のブラウザ環境で正しくレイアウト、動作する様に作成する" tabindex="-1">以下のブラウザ環境で正しくレイアウト、動作する様に作成する <a class="header-anchor" href="#以下のブラウザ環境で正しくレイアウト、動作する様に作成する" aria-label="Permalink to &quot;以下のブラウザ環境で正しくレイアウト、動作する様に作成する&quot;">​</a></h2><h3 id="pc" tabindex="-1">PC <a class="header-anchor" href="#pc" aria-label="Permalink to &quot;PC&quot;">​</a></h3><p><strong>Windows（OS / Windows 10.xおよびWindows 11.x）</strong></p><ul><li>Microsoft Edge・Google Chrome・Firefoxの各最新版</li></ul><p><strong>Mac OS(12以降)</strong></p><ul><li>Safari・Google Chrome・Firefoxの各最新版</li></ul><h3 id="sp" tabindex="-1">SP <a class="header-anchor" href="#sp" aria-label="Permalink to &quot;SP&quot;">​</a></h3><p><strong>iPhone</strong></p><ul><li>iOS 16以降のSafari最新版</li></ul><p><strong>Android</strong></p><ul><li>Ver-11以降のスマートフォン搭載のブラウザー最新版(主にChrome)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("07-browsers/7-1-target-browsers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _71TargetBrowsers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _71TargetBrowsers as default
};
