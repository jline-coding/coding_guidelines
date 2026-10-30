import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"10-1. Mục đích, cách tiếp cận & Phương châm cơ bản","description":"","frontmatter":{},"headers":[],"relativePath":"vn/10-pagespeed/10-1-purpose-and-policy.md","filePath":"vn/10-pagespeed/10-1-purpose-and-policy.md"}');
const _sfc_main = { name: "vn/10-pagespeed/10-1-purpose-and-policy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_10-1-muc-đich-cach-tiep-can-phuong-cham-co-ban" tabindex="-1">10-1. Mục đích, cách tiếp cận &amp; Phương châm cơ bản <a class="header-anchor" href="#_10-1-muc-đich-cach-tiep-can-phuong-cham-co-ban" aria-label="Permalink to &quot;10-1. Mục đích, cách tiếp cận &amp; Phương châm cơ bản&quot;">​</a></h1><h2 id="muc-đich-va-cach-tiep-can-đoi-voi-toc-đo-hien-thi" tabindex="-1">Mục đích và cách tiếp cận đối với tốc độ hiển thị <a class="header-anchor" href="#muc-đich-va-cach-tiep-can-đoi-voi-toc-đo-hien-thi" aria-label="Permalink to &quot;Mục đích và cách tiếp cận đối với tốc độ hiển thị&quot;">​</a></h2><p>Thiết lập “tốc độ hiển thị” làm chỉ số chất lượng của sản phẩm bàn giao, nhằm nâng cao trải nghiệm người dùng và chất lượng dịch vụ. Tuy nhiên, vì tốc độ hiển thị chịu ảnh hưởng bởi các yếu tố bên ngoài như dưới đây, nên việc đặt ra một tiêu chuẩn số liệu cố định áp dụng chung là không thực tế.</p><ul><li>Cấu hình server và có hay không có CDN</li><li>Cấu trúc và mức độ phức tạp của thiết kế</li><li>Có hay không có animation, hiệu ứng trình diễn</li></ul><p>Vì vậy, trong guideline này sẽ đưa ra「mức tiêu chuẩn nhất định và phương hướng cải thiện」với mục đích đảm bảo chất lượng tối thiểu và khả năng đạt được kết quả tương tự</p><h3 id="bo-sung-ve-điem-so-lighthouse-va-lcp" tabindex="-1">Bổ sung về điểm số Lighthouse và LCP <a class="header-anchor" href="#bo-sung-ve-điem-so-lighthouse-va-lcp" aria-label="Permalink to &quot;Bổ sung về điểm số Lighthouse và LCP&quot;">​</a></h3><p>Điểm 「Performance Score」 của Google Lighthouse và giá trị LCP (Largest Contentful Paint) được đo trong môi trường thử nghiệm, giả định kết nối 4G tốc độ thấp và thiết bị có cấu hình thấp.</p><h2 id="phuong-cham-co-ban" tabindex="-1">Phương châm cơ bản <a class="header-anchor" href="#phuong-cham-co-ban" aria-label="Permalink to &quot;Phương châm cơ bản&quot;">​</a></h2><p>Ở giai đoạn đầu của quá trình xây dựng, hãy ưu tiên tốc độ cảm nhận trong môi trường thực tế (LCP) hơn là điểm số trong môi trường lab. Điểm Lighthouse chỉ nên xem như giá trị tham khảo, và cuối cùng nên ưu tiên trải UX, tức là người dùng không cảm thấy trang web bị nặng hoặc chậm.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/10-pagespeed/10-1-purpose-and-policy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _101PurposeAndPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _101PurposeAndPolicy as default
};
