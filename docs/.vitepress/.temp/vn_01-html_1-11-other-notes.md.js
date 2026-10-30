import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-11. Các lưu ý khác","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-11-other-notes.md","filePath":"vn/01-html/1-11-other-notes.md"}');
const _sfc_main = { name: "vn/01-html/1-11-other-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-11-cac-luu-y-khac" tabindex="-1">1-11. Các lưu ý khác <a class="header-anchor" href="#_1-11-cac-luu-y-khac" aria-label="Permalink to &quot;1-11. Các lưu ý khác&quot;">​</a></h1><ul><li>Giá trị của thuộc tính phải sử dụng dấu ngoặc kép</li><li>Global navigation phải sử dụng thẻ <code>&lt;nav&gt;</code></li><li>Ngay dưới thẻ <code>&lt;section&gt;</code> có thể dùng thẻ div (mặc dù khuyến nghị là dùng thẻ h, nhưng về cấu trúc layout thì div vẫn được chấp nhận)</li><li>Nếu viết toàn bộ tiếng Anh bằng chữ in hoa, trình đọc màn hình sẽ đọc từng ký tự một. Vì vậy cần viết bằng chữ thường và sử dụng text-transform: uppercase để hiển thị chữ in hoa</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-11-other-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _111OtherNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _111OtherNotes as default
};
