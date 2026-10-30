import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-2. Quy tắc format","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-2-format-rules.md","filePath":"vn/01-html/1-2-format-rules.md"}');
const _sfc_main = { name: "vn/01-html/1-2-format-rules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-2-quy-tac-format" tabindex="-1">1-2. Quy tắc format <a class="header-anchor" href="#_1-2-quy-tac-format" aria-label="Permalink to &quot;1-2. Quy tắc format&quot;">​</a></h1><ul><li>Không sử dụng chữ in hoa cho tag, class name hoặc ID. Tên class phải tuân theo quy tắc FLOCSS + BEM： <ul><li>Dấu gạch ngang đơn <code>-</code> ：dùng để nối từ trong tên（ví dụ：<code>.c-global-nav</code>, <code>.p-news-list</code>）</li><li>Dấu gạch dưới kép <code>__</code> ：dùng để phân tách Element（ví dụ：<code>.p-news__title</code>）</li><li>Dấu gạch ngang kép <code>--</code> ：dùng để phân tách Modifier（ví dụ：<code>.c-button--primary</code>）</li><li>Prefix theo layer FLOCSS：<code>l-</code>（Layout）, <code>c-</code>（Component）, <code>p-</code>（Project）, <code>u-</code>（Utility）</li><li>Ví dụ đầy đủ：<code>.l-header</code>, <code>.c-global-nav</code>, <code>.p-news-list</code>, <code>.u-text-center</code></li><li>（chi tiết xem phần「Quy tắc đặt tên Class」）</li></ul></li><li>Khi có cấu trúc lồng nhau, cần thụt lề rõ ràng để bất kỳ ai nhìn vào cũng có thể dễ dàng hiểu được cấu trúc source</li><li>Xóa các khoảng trắng dư thừa ở cuối dòng hoặc giữa các đoạn text</li><li>Sử dụng comment khi cần thiết <code>bắt đầu：&lt;!-- ↓↓container↓↓ --&gt;</code><br><code>kết thúc：&lt;!-- ↑↑container↑↑ --&gt;</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-2-format-rules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12FormatRules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12FormatRules as default
};
