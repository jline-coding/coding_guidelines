import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-4. Table coding, thẻ đóng & mã hóa ký tự","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-4-table-and-closing-tags.md","filePath":"vn/01-html/1-4-table-and-closing-tags.md"}');
const _sfc_main = { name: "vn/01-html/1-4-table-and-closing-tags.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-4-table-coding-the-đong-ma-hoa-ky-tu" tabindex="-1">1-4. Table coding, thẻ đóng &amp; mã hóa ký tự <a class="header-anchor" href="#_1-4-table-coding-the-đong-ma-hoa-ky-tu" aria-label="Permalink to &quot;1-4. Table coding, thẻ đóng &amp; mã hóa ký tự&quot;">​</a></h1><h2 id="danh-sach-markup-cho-tung-hang-muc" tabindex="-1">Danh sách markup cho từng hạng mục <a class="header-anchor" href="#danh-sach-markup-cho-tung-hang-muc" aria-label="Permalink to &quot;Danh sách markup cho từng hạng mục&quot;">​</a></h2><h3 id="ve-table-coding" tabindex="-1">Về table coding <a class="header-anchor" href="#ve-table-coding" aria-label="Permalink to &quot;Về table coding&quot;">​</a></h3><ul><li>Về nguyên tắc, không thực hiện coding bằng thẻ table</li></ul><h3 id="ve-the-đong" tabindex="-1">Về thẻ đóng <a class="header-anchor" href="#ve-the-đong" aria-label="Permalink to &quot;Về thẻ đóng&quot;">​</a></h3><ul><li>không được lược bỏ thẻ đóng</li></ul><h3 id="ve-ma-hoa-ky-tu" tabindex="-1">Về mã hóa ký tự <a class="header-anchor" href="#ve-ma-hoa-ky-tu" aria-label="Permalink to &quot;Về mã hóa ký tự&quot;">​</a></h3><ul><li>Sử dụng UTF-8 <ul><li>File phải được lưu dưới dạng UTF-8 không có BOM <code>&lt;meta charset=&quot;utf-8&quot;&gt;</code></li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-4-table-and-closing-tags.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14TableAndClosingTags = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14TableAndClosingTags as default
};
