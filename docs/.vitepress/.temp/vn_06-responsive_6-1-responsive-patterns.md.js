import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6-1. Về hỗ trợ responsive (Basic & Liquid Pattern)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/06-responsive/6-1-responsive-patterns.md","filePath":"vn/06-responsive/6-1-responsive-patterns.md"}');
const _sfc_main = { name: "vn/06-responsive/6-1-responsive-patterns.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-1-ve-ho-tro-responsive-basic-liquid-pattern" tabindex="-1">6-1. Về hỗ trợ responsive (Basic &amp; Liquid Pattern) <a class="header-anchor" href="#_6-1-ve-ho-tro-responsive-basic-liquid-pattern" aria-label="Permalink to &quot;6-1. Về hỗ trợ responsive (Basic &amp; Liquid Pattern)&quot;">​</a></h1><h2 id="ve-ho-tro-responsive" tabindex="-1">Về hỗ trợ responsive <a class="header-anchor" href="#ve-ho-tro-responsive" aria-label="Permalink to &quot;Về hỗ trợ responsive&quot;">​</a></h2><ul><li>Có 2 kiểu cơ bản: Basic pattern và Liquid pattern, nên xác nhận với director trong buổi khởi động dự án</li><li>Code sao cho layout không bị vỡ ở bất kỳ kích thước cửa sổ nào</li><li>Nếu chiều rộng màn hình nhỏ hơn kích thước design, có thể điều chỉnh bằng cách xuống cột, Không cần phải giữ 100% giống design, ưu tiên khả năng nhìn và sử dụng</li><li>Thông thường, đặt 1 breakpoint tại 768px, nhưng tùy design có thể đặt nhiều breakpoint</li><li>Kích thước nhỏ nhất hỗ trợ trên mobile là 375px</li></ul><h2 id="basic-pattern" tabindex="-1">Basic Pattern <a class="header-anchor" href="#basic-pattern" aria-label="Permalink to &quot;Basic Pattern&quot;">​</a></h2><p>・Đặt chiều rộng tối đa của nội dung ・Nếu chiều rộng cửa sổ nhỏ hơn chiều rộng tối đa của nội dung, thì chiều rộng nội dung sẽ giảm theo ・Chiều rộng các cột thay đổi tương đối so với chiều rộng nội dung ・Kích thước chữ cố định 　site tham khảo：<a href="https://www.nippon-shooter.co.jp/" target="_blank" rel="noreferrer">https://www.nippon-shooter.co.jp/</a></p><h2 id="liquid-pattern" tabindex="-1">Liquid Pattern <a class="header-anchor" href="#liquid-pattern" aria-label="Permalink to &quot;Liquid Pattern&quot;">​</a></h2><p>・Ngoài các đặc điểm của Basic Pattern, kích thước chữ cũng thay đổi tương đối theo chiều rộng nội dung 　site tham khảo : <a href="https://pict-adloop.com/" target="_blank" rel="noreferrer">https://pict-adloop.com/</a> , <a href="https://www.ohshima-showten.com/" target="_blank" rel="noreferrer">https://www.ohshima-showten.com/</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/06-responsive/6-1-responsive-patterns.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _61ResponsivePatterns = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _61ResponsivePatterns as default
};
