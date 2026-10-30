import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"3-1. Design file CSS & Chỉ định mã hóa ký tự","description":"","frontmatter":{},"headers":[],"relativePath":"vn/03-css/3-1-file-design-and-charset.md","filePath":"vn/03-css/3-1-file-design-and-charset.md"}');
const _sfc_main = { name: "vn/03-css/3-1-file-design-and-charset.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-1-design-file-css-chi-đinh-ma-hoa-ky-tu" tabindex="-1">3-1. Design file CSS &amp; Chỉ định mã hóa ký tự <a class="header-anchor" href="#_3-1-design-file-css-chi-đinh-ma-hoa-ky-tu" aria-label="Permalink to &quot;3-1. Design file CSS &amp; Chỉ định mã hóa ký tự&quot;">​</a></h1><h2 id="design-file-css" tabindex="-1">Design file CSS <a class="header-anchor" href="#design-file-css" aria-label="Permalink to &quot;Design file CSS&quot;">​</a></h2><ul><li>Nếu website có nhiều trang, hãy tách riêng file CSS cho từng trang</li><li>Nguyên tắc chung: không được viết style trực tiếp trong file HTML</li></ul><h2 id="chi-đinh-ma-hoa-ky-tu" tabindex="-1">Chỉ định mã hóa ký tự <a class="header-anchor" href="#chi-đinh-ma-hoa-ky-tu" aria-label="Permalink to &quot;Chỉ định mã hóa ký tự&quot;">​</a></h2><ul><li>File CSS phải sử dụng mã hóa UTF-8</li><li>Phải sử dụng cùng mã hóa với file HTML để tránh lỗi hiển thị hoặc lỗi font</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/03-css/3-1-file-design-and-charset.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _31FileDesignAndCharset = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _31FileDesignAndCharset as default
};
