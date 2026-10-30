import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"7-2. Khác (Khi khách hàng thấy hiển thị khác dự kiến)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/07-browsers/7-2-troubleshooting.md","filePath":"vn/07-browsers/7-2-troubleshooting.md"}');
const _sfc_main = { name: "vn/07-browsers/7-2-troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-2-khac-khi-khach-hang-thay-hien-thi-khac-du-kien" tabindex="-1">7-2. Khác (Khi khách hàng thấy hiển thị khác dự kiến) <a class="header-anchor" href="#_7-2-khac-khi-khach-hang-thay-hien-thi-khac-du-kien" aria-label="Permalink to &quot;7-2. Khác (Khi khách hàng thấy hiển thị khác dự kiến)&quot;">​</a></h1><h2 id="khac" tabindex="-1">Khác <a class="header-anchor" href="#khac" aria-label="Permalink to &quot;Khác&quot;">​</a></h2><p><strong>Nếu khách hàng thấy hiển thị khác với dự kiến</strong></p><ul><li>Hướng dẫn xóa cache <a href="https://itreat.co.jp/blog/cash#toc4" target="_blank" rel="noreferrer">tham khảo</a></li><li>Kiểm tra hiển thị trên nhiều PC hoặc dùng trình duyệt ẩn danh</li><li>Xác nhận OS, trình duyệt, phiên bản mà khách hàng đang dùng</li><li>Nếu vẫn không xác định được lỗi, yêu cầu khách hàng khởi động lại router</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/07-browsers/7-2-troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _72Troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _72Troubleshooting as default
};
