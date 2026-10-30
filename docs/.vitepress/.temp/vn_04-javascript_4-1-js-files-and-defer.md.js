import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"4-1. Về file JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"vn/04-javascript/4-1-js-files-and-defer.md","filePath":"vn/04-javascript/4-1-js-files-and-defer.md"}');
const _sfc_main = { name: "vn/04-javascript/4-1-js-files-and-defer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-1-ve-file-javascript" tabindex="-1">4-1. Về file JavaScript <a class="header-anchor" href="#_4-1-ve-file-javascript" aria-label="Permalink to &quot;4-1. Về file JavaScript&quot;">​</a></h1><ul><li>Nguyên tắc chung: không viết trực tiếp JavaScript trong file HTML. Phải quản lý dưới dạng file bên ngoài</li><li>Mỗi xử lý (function / action) phải có comment, sử dụng tiếng Anh hoặc tiếng Nhật</li><li>File JS (bao gồm cả việc load file JS ngoài) phải được khai báo trong các file dùng chung như header.php, footer.php</li><li><strong>Vị trí đặt file JS và thuộc tính <code>defer</code></strong>: <ul><li><strong>Mặc định (Khuyên dùng)</strong>: Đặt các thẻ gọi file JS bên ngoài (có <code>src</code>) vào bên trong <code>&lt;head&gt;</code> và thêm thuộc tính <code>defer</code>. Việc này giúp không chặn quá trình render HTML (script tải ngầm và chỉ thực thi theo đúng thứ tự sau khi DOM đã hoàn tất). ví dụ：<code>&lt;script src=&quot;./assets/plugins/anijs/ani.js&quot; defer&gt;&lt;/script&gt;</code></li><li><strong>Trường hợp KHÔNG dùng <code>defer</code></strong>: <ul><li>Các script cần chạy ngay lập tức trước khi HTML render (ví dụ: script chống chớp màn hình dark/light mode, redirect). -&gt; <em>Đặt trong <code>&lt;head&gt;</code>, không có <code>defer</code>.</em></li><li>Các công cụ Tracking/Analytics (Google Analytics, GTM, Facebook Pixel). -&gt; <em>Thường dùng thuộc tính <code>async</code> vì chúng không cần chờ DOM và thứ tự thực thi không quan trọng.</em></li><li>Inline script (Thẻ <code>&lt;script&gt;</code> viết code trực tiếp, không có <code>src</code>). -&gt; <em>Hạn chế tối đa việc sử dụng inline script, chỉ dùng khi thật sự cần thiết. Lưu ý: Nếu inline script cần sử dụng thư viện (như jQuery) đã được load bằng <code>defer</code>, thì bắt buộc code bên trong phải được bọc bởi <code>jQuery(function($){...})</code> hoặc <code>DOMContentLoaded</code> để đảm bảo thư viện đã sẵn sàng.</em></li></ul></li></ul></li><li>Hạn chế sử dụng CDN ※CDN của jQuery đôi khi load chậm, có thể gây lỗi hiển thị giao diện</li><li>Những đoạn JS được sử dụng cho toàn bộ hoặc hầu hết các trang phải được gom lại và viết trong common.js</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/04-javascript/4-1-js-files-and-defer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _41JsFilesAndDefer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _41JsFilesAndDefer as default
};
