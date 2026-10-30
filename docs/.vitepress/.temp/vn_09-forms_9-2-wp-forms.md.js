import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9-2. Form trên site WP (Contact Form 7)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/09-forms/9-2-wp-forms.md","filePath":"vn/09-forms/9-2-wp-forms.md"}');
const _sfc_main = { name: "vn/09-forms/9-2-wp-forms.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-2-form-tren-site-wp-contact-form-7" tabindex="-1">9-2. Form trên site WP (Contact Form 7) <a class="header-anchor" href="#_9-2-form-tren-site-wp-contact-form-7" aria-label="Permalink to &quot;9-2. Form trên site WP (Contact Form 7)&quot;">​</a></h1><h2 id="contact-form-7-su-dung-tren-site-wp" tabindex="-1">Contact Form 7（Sử dụng trên site WP） <a class="header-anchor" href="#contact-form-7-su-dung-tren-site-wp" aria-label="Permalink to &quot;Contact Form 7（Sử dụng trên site WP）&quot;">​</a></h2><ul><li>Không cần màn hình xác nhận</li><li>Nếu số lượng text nhập vào vượt quá 400-500 chữ thì nội dung sẽ không được hiển thị vào mail trả lời tự động (giới hạn của bản miễn phí)</li><li>Cài đặt ở mục 追加ヘッダー <code>Reply-To</code> ： <ul><li>Dùng cho admin：cài đặt địa chỉ mail mà người dùng nhập vào</li><li>ユーザー用：để trống</li></ul></li><li>Nếu thiết lập <code>Reply-To</code>, khi nhấn nút Reply thì địa chỉ người nhận đúng sẽ được chỉ định</li><li>Nếu xóa <code>Reply-To</code>, khi nhấn Reply thì địa chỉ người gửi (From) sẽ được chỉ định làm địa chỉ nhận phản hồi</li><li>Tạo key reCAPTCHA và thêm domain jline cùng domain của khách hàng.</li></ul><h2 id="【đa-ngung-phat-trien】mwwpform" tabindex="-1">【Đã ngừng phát triển】MWWPForm <a class="header-anchor" href="#【đa-ngung-phat-trien】mwwpform" aria-label="Permalink to &quot;【Đã ngừng phát triển】MWWPForm&quot;">​</a></h2><ul><li>Không sử dụng. Hãy thay đổi sang Contactform 7 khi cần thiết.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/09-forms/9-2-wp-forms.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _92WpForms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _92WpForms as default
};
