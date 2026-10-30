import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11-1. Khi thực hiện công khai website (Redirect & Plugin WP)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/11-launch-and-templates/11-1-redirect-and-ssl.md","filePath":"vn/11-launch-and-templates/11-1-redirect-and-ssl.md"}');
const _sfc_main = { name: "vn/11-launch-and-templates/11-1-redirect-and-ssl.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-1-khi-thuc-hien-cong-khai-website-redirect-plugin-wp" tabindex="-1">11-1. Khi thực hiện công khai website (Redirect &amp; Plugin WP) <a class="header-anchor" href="#_11-1-khi-thuc-hien-cong-khai-website-redirect-plugin-wp" aria-label="Permalink to &quot;11-1. Khi thực hiện công khai website (Redirect &amp; Plugin WP)&quot;">​</a></h1><h2 id="khi-thuc-hien-cong-khai-website" tabindex="-1">Khi thực hiện công khai website <a class="header-anchor" href="#khi-thuc-hien-cong-khai-website" aria-label="Permalink to &quot;Khi thực hiện công khai website&quot;">​</a></h2><h3 id="ve-cong-viec-redirect" tabindex="-1">Về công việc redirect <a class="header-anchor" href="#ve-cong-viec-redirect" aria-label="Permalink to &quot;Về công việc redirect&quot;">​</a></h3><ul><li>Về cơ bản, thiết lập redirect bằng <code>.htaccess</code></li><li>Trong trường hợp renewal website, cần thiết lập redirect cho các trang có cùng chức năng với site cũ nhưng đã thay đổi đường dẫn<br><a href="https://docs.google.com/spreadsheets/d/1tvqfKhwBKZzJ4tfdFtiqOZS0i336dTGzRyVek49CWdg/edit?gid=882195015#gid=882195015" target="_blank" rel="noreferrer">sheet sử dụng cho công việc redirect</a></li><li>Các trang có đường dẫn chỉ tồn tại trên site cũ cần được thiết lập chuyển đến trang 404</li><li>Thực hiện thiết lập redirect <code>http</code> sang <code>https</code> (cần kiểm tra xem SSL đã được thiết lập hay chưa).</li><li>Thực hiện redirect có và không có <code>www</code></li><li>Trường hợp domain mới thì thống nhất không có <code>www</code>. Trường hợp domain có sẵn thì làm theo cấu hình hiện có.</li><li>⚠️ Thực hiện công việc redirect theo yêu cầu của khách hàng</li></ul><h3 id="plugin-wp" tabindex="-1">Plugin WP <a class="header-anchor" href="#plugin-wp" aria-label="Permalink to &quot;Plugin WP&quot;">​</a></h3><div class="table-wrap"><table tabindex="0"><thead><tr><th>Mục đích sử dụng</th><th>Tên plugin</th></tr></thead><tbody><tr><td>Sử dụng khi chuyển đổi <code>http → https</code> hoặc khi xảy ra lỗi với<code>.htaccess</code></td><td><a href="https://ja.wordpress.org/plugins/really-simple-ssl/" target="_blank" rel="noreferrer">Really Simple SSL</a></td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/11-launch-and-templates/11-1-redirect-and-ssl.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _111RedirectAndSsl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _111RedirectAndSsl as default
};
