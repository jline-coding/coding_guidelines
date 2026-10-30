import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-7. Thẻ h1～h6 & header, main, footer","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-7-headings-and-landmarks.md","filePath":"vn/01-html/1-7-headings-and-landmarks.md"}');
const _sfc_main = { name: "vn/01-html/1-7-headings-and-landmarks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-7-the-h1-h6-header-main-footer" tabindex="-1">1-7. Thẻ h1～h6 &amp; header, main, footer <a class="header-anchor" href="#_1-7-the-h1-h6-header-main-footer" aria-label="Permalink to &quot;1-7. Thẻ h1～h6 &amp; header, main, footer&quot;">​</a></h1><h2 id="ve-the-h1-h6" tabindex="-1">Về thẻ<code>&lt;h1&gt;</code>～<code>&lt;h6&gt;</code> <a class="header-anchor" href="#ve-the-h1-h6" aria-label="Permalink to &quot;Về thẻ\`&lt;h1&gt;\`～\`&lt;h6&gt;\`&quot;">​</a></h2><ul><li>Sử dụng thẻ heading<code>&lt;h1&gt;</code>～<code>&lt;h6&gt;</code> phù hợp với cấu trúc nội dung. Trong mỗi trang bắt buộc phải có ít nhất các thẻ từ<code>&lt;h1&gt;</code>～<code>&lt;h3&gt;</code></li><li>Ở trang TOP thì sử dụng thẻ h1 để bọc logo header, ở các trang con thì chuyển thành div và tiêu đề trang sẽ sử dụng thẻ h1</li><li>Nếu trong design từ phía khách hàng không có heading rõ ràng, thì sử dụng các thẻ heading trong phạm vi có thể áp dụng được</li></ul><h2 id="the-header-the-main-the-footer" tabindex="-1">thẻ <code>&lt;header&gt;</code>, thẻ <code>&lt;main&gt;</code>, thẻ <code>&lt;footer&gt;</code> <a class="header-anchor" href="#the-header-the-main-the-footer" aria-label="Permalink to &quot;thẻ \`&lt;header&gt;\`, thẻ \`&lt;main&gt;\`, thẻ \`&lt;footer&gt;\`&quot;">​</a></h2><ul><li>Mỗi trang về nguyên tắc chỉ sử dụng 1 thẻ</li><li>Phần header dùng chung của trang phải sử dụng thẻ<code>&lt;header&gt;</code></li><li>Phần footer dùng chung của trang phải sử dụng thẻ <code>&lt;footer&gt;</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-7-headings-and-landmarks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _17HeadingsAndLandmarks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _17HeadingsAndLandmarks as default
};
