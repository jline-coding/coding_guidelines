import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9-3. Cài đặt chung và các lưu ý của form","description":"","frontmatter":{},"headers":[],"relativePath":"vn/09-forms/9-3-common-settings.md","filePath":"vn/09-forms/9-3-common-settings.md"}');
const _sfc_main = { name: "vn/09-forms/9-3-common-settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-3-cai-đat-chung-va-cac-luu-y-cua-form" tabindex="-1">9-3. Cài đặt chung và các lưu ý của form <a class="header-anchor" href="#_9-3-cai-đat-chung-va-cac-luu-y-cua-form" aria-label="Permalink to &quot;9-3. Cài đặt chung và các lưu ý của form&quot;">​</a></h1><ul><li>Phải xây dựng màn hình lỗi và màn hình hoàn tất, không cần màn hình xác nhận</li><li>Khi test gửi form, sử dụng địa chỉ <code>kensyo@j-line</code></li><li>Sau khi đổi địa chỉ quản trị sang email của client, cần test gửi để đảm bảo nội dung được gửi đúng</li><li>Phải thiết lập email trả lời tự động (nội dung thì chuẩn bị bản dummy)</li><li>Trường có nhập mã bưu điện, cần thiết lập chức năng tự động điền địa chỉ</li><li>Màn hình xác nhận gửi cũng phải được trang trí theo thiết kế</li><li>Trên màn hình hoàn tất, phải đặt nút「Quay lại trang TOP」</li><li>Bắt buộc cài đặt reCAPTCHA</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/09-forms/9-3-common-settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _93CommonSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _93CommonSettings as default
};
