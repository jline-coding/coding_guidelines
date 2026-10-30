import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-10. Về Web Font","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-10-webfont.md","filePath":"vn/01-html/1-10-webfont.md"}');
const _sfc_main = { name: "vn/01-html/1-10-webfont.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-10-ve-web-font" tabindex="-1">1-10. Về Web Font <a class="header-anchor" href="#_1-10-ve-web-font" aria-label="Permalink to &quot;1-10. Về Web Font&quot;">​</a></h1><ul><li>Việc sử dụng Web font về nguyên tắc phải tuân theo chỉ thị design</li><li>Nếu font được chỉ định có trên Google Fonts, sử dụng trực tiếp và thiết lập phần load phù hợp</li><li>Nếu font không có trên Google Fonts, cần xác nhận điều kiện sử dụng và license với Director, và khi cần thì yêu cầu khách hàng hoặc designer cung cấp script load font</li><li>Chỉ định các weight cần thiết để giảm thiểu tải load</li><li>Nếu không có chỉ định font, hoặc không thể sử dụng font đó, cần trao đổi với Director hoặc Designer để xác nhận phương án thay thế trước khi triển khai</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-10-webfont.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _110Webfont = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _110Webfont as default
};
