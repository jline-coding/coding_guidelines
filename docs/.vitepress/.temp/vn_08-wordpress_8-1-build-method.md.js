import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8-1. Về phương pháp xây dựng","description":"","frontmatter":{},"headers":[],"relativePath":"vn/08-wordpress/8-1-build-method.md","filePath":"vn/08-wordpress/8-1-build-method.md"}');
const _sfc_main = { name: "vn/08-wordpress/8-1-build-method.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-1-ve-phuong-phap-xay-dung" tabindex="-1">8-1. Về phương pháp xây dựng <a class="header-anchor" href="#_8-1-ve-phuong-phap-xay-dung" aria-label="Permalink to &quot;8-1. Về phương pháp xây dựng&quot;">​</a></h1><ul><li><p>Tạo một thư mục như「wp2026」, sau đó cài đặt WordPress vào trong thư mục đó</p></li><li><p>Đối với developer thực hiện chính dự án, vui lòng tạo 2 tài khoản quản lý admin:</p><ul><li><strong>Tài khoản master (Tài khoản chính):</strong> Tạo khi setup WordPress. <ul><li>Định dạng tên đăng nhập ví dụ: <code>master-[tên-task]</code> (ví dụ: <code>master-lp-renewal</code>).</li><li>Thiết lập ngôn ngữ mặc định là <strong>tiếng Nhật</strong>.</li><li>Sử dụng địa chỉ email của công ty: <code>kensyo@j-line.co.jp</code>.</li></ul></li><li><strong>Tài khoản dev (Dành cho team Việt Nam làm việc):</strong><ul><li>Định dạng tên đăng nhập ví dụ: <code>dev-[tên-task]</code> (ví dụ: <code>dev-lp-renewal</code>).</li><li>Sử dụng địa chỉ email cá nhân do công ty cấp để tạo.</li><li>Ngôn ngữ có thể set theo ngôn ngữ mà lập trình viên cảm thấy thuận tiện làm việc nhất.</li></ul></li></ul></li><li><p>Trừ khi có chỉ định, không sử dụng template có sẵn mà tạo theme gốc (original theme) và xây dựng bằng file php</p></li><li><p>Tên theme thì phải sử dụng tên dự án</p></li><li><p>Không viết code vào trong editor của trang quản trị WordPress mà phải viết code vào file php</p><ul><li>（Ví dụ）page-[đường dẫn].php</li></ul></li><li><p>Hình eye-catch thì không hiển thị full-size mà cắt từ trung tâm để hiển thị theo kích thước của design</p></li><li><p>Khi kiểm tra hoạt động của hình eye-catch thì phải kiểm tra với cả hình lớn hơn và nhỏ hơn kích thước hiển thị</p></li><li><p>Khi cho hiển thị hình thumbnail ở dạng danh sách, thì phải tiến hành cài đặt media sao cho dung lượng không trở nên quá lớn</p><ul><li>Site tham khảo：<a href="https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/" target="_blank" rel="noreferrer">https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/</a></li></ul></li><li><p>Trường hợp bài viết như blog không có hình ảnh thì thêm hình dummy no-image</p></li><li><p>Hình dummy có trong trang template</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/08-wordpress/8-1-build-method.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _81BuildMethod = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _81BuildMethod as default
};
