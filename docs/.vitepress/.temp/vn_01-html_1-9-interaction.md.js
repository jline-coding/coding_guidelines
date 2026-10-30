import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-9. Về Interaction","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-9-interaction.md","filePath":"vn/01-html/1-9-interaction.md"}');
const _sfc_main = { name: "vn/01-html/1-9-interaction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-9-ve-interaction" tabindex="-1">1-9. Về Interaction <a class="header-anchor" href="#_1-9-ve-interaction" aria-label="Permalink to &quot;1-9. Về Interaction&quot;">​</a></h1><ul><li>Khi sử dụng link với design giống như button, không thêm gạch chân (underline) khi hover</li><li>Nút “Back to Top” phải được cài đặt kể cả khi không có design cụ thể (sử dụng màu đang dùng trong website)</li><li>Mỗi section cần thêm hiệu ứng fade khi scroll. Trang tham khảo： <a href="https://web-loid.net/web/scroll-effect-js/" target="_blank" rel="noreferrer">https://web-loid.net/web/scroll-effect-js/</a></li><li>Hover action: nếu không có chỉ thị đặc biệt, mặc định sử dụng hiệu ứng “làm mờ” (thay đổi opacity)</li><li>Các link trong nội dung bài viết (WordPress, v.v.) phải có gạch chân (underline)</li><li>Cookie popup phải được triển khai mặc định trên toàn bộ website, và cần thiết lập link tới trang Privacy Policy hoặc trang thông tin cá nhân</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-9-interaction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _19Interaction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _19Interaction as default
};
