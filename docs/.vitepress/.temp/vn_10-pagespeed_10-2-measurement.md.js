import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"10-2. Cách đo giá trị thực tế (Chrome DevTools)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/10-pagespeed/10-2-measurement.md","filePath":"vn/10-pagespeed/10-2-measurement.md"}');
const _sfc_main = { name: "vn/10-pagespeed/10-2-measurement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_10-2-cach-đo-gia-tri-thuc-te-chrome-devtools" tabindex="-1">10-2. Cách đo giá trị thực tế (Chrome DevTools) <a class="header-anchor" href="#_10-2-cach-đo-gia-tri-thuc-te-chrome-devtools" aria-label="Permalink to &quot;10-2. Cách đo giá trị thực tế (Chrome DevTools)&quot;">​</a></h1><h2 id="cach-đo-gia-tri-thuc-te-su-dung-chrome-devtools" tabindex="-1">Cách đo giá trị thực tế (sử dụng Chrome DevTools) <a class="header-anchor" href="#cach-đo-gia-tri-thuc-te-su-dung-chrome-devtools" aria-label="Permalink to &quot;Cách đo giá trị thực tế (sử dụng Chrome DevTools)&quot;">​</a></h2><ol><li>Mở trang cần kiểm tra bằng Chrome</li><li>Mở tab 「Network」 → đặt Throttling thành 「Fast 4G」 và check vào Disable cache</li><li>Mở tab 「Performance」 và nhấn Record (◉)</li><li>Reload trang, sau khi tải xong thì nhấn 「Stop」</li><li>Di chuột vào marker 「LCP」 trên timeline để kiểm tra số giây</li></ol><p>LCP（mốc tham khảo khi đo thực tế）：trong vòng 4 giây （※Có thể điều chỉnh lại trong quá trình vận hành sau này）</p><p>※Trong trường hợp do cấu trúc hoặc hiệu ứng mà LCP khó tránh khỏi bị chậm (ví dụ: carousel được render bằng JS), hãy xem xét preload hoặc render trước (pre-render) hoặc áp dụng ngoại lệ với tiêu chí ưu tiên trải nghiệm cảm nhận thực tế của người dùng.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/10-pagespeed/10-2-measurement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _102Measurement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _102Measurement as default
};
