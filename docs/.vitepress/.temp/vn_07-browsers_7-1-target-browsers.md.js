import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"7-1. Môi trường trình duyệt mục tiêu (PC / SP)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/07-browsers/7-1-target-browsers.md","filePath":"vn/07-browsers/7-1-target-browsers.md"}');
const _sfc_main = { name: "vn/07-browsers/7-1-target-browsers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-1-moi-truong-trinh-duyet-muc-tieu-pc-sp" tabindex="-1">7-1. Môi trường trình duyệt mục tiêu (PC / SP) <a class="header-anchor" href="#_7-1-moi-truong-trinh-duyet-muc-tieu-pc-sp" aria-label="Permalink to &quot;7-1. Môi trường trình duyệt mục tiêu (PC / SP)&quot;">​</a></h1><h2 id="tao-site-sao-cho-layout-va-hoat-đong-đung-tren-cac-moi-truong-trinh-duyet-sau" tabindex="-1">Tạo site sao cho layout và hoạt động đúng trên các môi trường trình duyệt sau <a class="header-anchor" href="#tao-site-sao-cho-layout-va-hoat-đong-đung-tren-cac-moi-truong-trinh-duyet-sau" aria-label="Permalink to &quot;Tạo site sao cho layout và hoạt động đúng trên các môi trường trình duyệt sau&quot;">​</a></h2><h3 id="pc" tabindex="-1">PC <a class="header-anchor" href="#pc" aria-label="Permalink to &quot;PC&quot;">​</a></h3><p><strong>Windows（OS / Windows 10.x và Windows 11.x）</strong></p><ul><li>phiên bản mới nhất Microsoft Edge・Google Chrome・Firefox</li></ul><p><strong>Mac OS(12 trở lên)</strong></p><ul><li>phiên bản mới nhất Safari・Google Chrome・Firefox</li></ul><h3 id="sp" tabindex="-1">SP <a class="header-anchor" href="#sp" aria-label="Permalink to &quot;SP&quot;">​</a></h3><p><strong>iPhone</strong></p><ul><li>iOS 16 trở lên, phiên bản mới nhất</li></ul><p><strong>Android</strong></p><ul><li>Trình duyệt trên smartphone từ Ver-11 trở lên (chủ yếu Chrome)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/07-browsers/7-1-target-browsers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _71TargetBrowsers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _71TargetBrowsers as default
};
