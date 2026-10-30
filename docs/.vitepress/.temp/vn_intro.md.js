import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"J-Line Web Marketing - Coding Guidelines","description":"","frontmatter":{},"headers":[],"relativePath":"vn/intro.md","filePath":"vn/intro.md"}');
const _sfc_main = { name: "vn/intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="j-line-web-marketing-coding-guidelines" tabindex="-1">J-Line Web Marketing - Coding Guidelines <a class="header-anchor" href="#j-line-web-marketing-coding-guidelines" aria-label="Permalink to &quot;J-Line Web Marketing - Coding Guidelines&quot;">​</a></h1><h2 id="muc-đich-cua-guideline-nay" tabindex="-1">Mục đích của Guideline này <a class="header-anchor" href="#muc-đich-cua-guideline-nay" aria-label="Permalink to &quot;Mục đích của Guideline này&quot;">​</a></h2><p>Guideline này là quy định nội bộ nhằm giúp tất cả thành viên trong bộ phận Web Marketing của Công ty J-Line có thể thực hiện công việc sản xuất website một cách thống nhất, không gặp lúng túng và đảm bảo chất lượng cao trong quá trình coding.</p><p>Không chỉ đặt mục tiêu tái hiện lại design, tài liệu này còn tổng hợp các nguyên tắc và tư duy nhằm mang lại trải nghiệm thoải mái cho người dùng, cấu trúc dễ quản lý cho người cập nhật nội dung, đồng thời nâng cao năng suất làm việc của toàn bộ team.</p><p>Thông qua việc áp dụng guideline này, chúng tôi hướng tới việc đạt được các trạng thái sau:</p><ul><li>Đảm bảo chất lượng ổn định, bất kể ai là người phụ trách</li><li>Loại bỏ sự phụ thuộc vào cá nhân nhờ cấu trúc rõ ràng, dễ đọc</li><li>Giảm thiểu thời gian review và xác nhận bàn giao</li><li>Xây dựng nền tảng vững chắc cho việc chỉnh sửa, vận hành và tái sử dụng cho các dự án trong tương lai</li></ul><h2 id="tu-duy-co-ban" tabindex="-1">Tư duy cơ bản <a class="header-anchor" href="#tu-duy-co-ban" aria-label="Permalink to &quot;Tư duy cơ bản&quot;">​</a></h2><ul><li>Thực hiện markup chính xác, tuân thủ theo tiêu chuẩn HTML của W3C</li><li>Các thẻ không mang ý nghĩa (như div, span…) chỉ sử dụng cho mục đích layout; tránh lồng (nest) quá nhiều hoặc tạo wrapper không cần thiết. Cần chú ý đến cấu trúc ngữ nghĩa của HTML và chủ động sử dụng các thẻ semantic khi phù hợp.</li><li>Design cấu trúc không bị vỡ khi nội dung tăng hoặc giảm.</li><li>Không chỉ tái hiện lại design, mà còn phải code theo hướng dễ cập nhật và dễ vận hành.</li><li>Cân nhắc môi trường truy cập của người dùng, đảm bảo layout không bị vỡ theo độ rộng container.</li><li>Khi upload bản test, phải ở trạng thái tương đương với lúc công khai chính thức.</li></ul><p>※※ Trừ trường hợp thiếu hình ảnh chụp hoặc nội dung, khi upload bản test không được để lại dummy text hoặc dummy image. ※Nếu có khả năng phát sinh chậm tiến độ, cần báo cáo ngay cho Director phụ trách và Coding Leader.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
