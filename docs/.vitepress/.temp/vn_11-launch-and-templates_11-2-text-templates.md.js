import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11-2. Template các loại text","description":"","frontmatter":{},"headers":[],"relativePath":"vn/11-launch-and-templates/11-2-text-templates.md","filePath":"vn/11-launch-and-templates/11-2-text-templates.md"}');
const _sfc_main = { name: "vn/11-launch-and-templates/11-2-text-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-2-template-cac-loai-text" tabindex="-1">11-2. Template các loại text <a class="header-anchor" href="#_11-2-template-cac-loai-text" aria-label="Permalink to &quot;11-2. Template các loại text&quot;">​</a></h1><h3 id="lien-quan-đen-form" tabindex="-1">Liên quan đến form <a class="header-anchor" href="#lien-quan-đen-form" aria-label="Permalink to &quot;Liên quan đến form&quot;">​</a></h3><div class="table-wrap"><table tabindex="0"><thead><tr><th>Mục</th><th>Link download</th></tr></thead><tbody><tr><td>Text ở màn hình hoàn tất</td><td><a href="https://www.jlweb.jp/coding/assets/dl/thanks_page_text.txt" target="_blank" rel="noreferrer">Text ở màn hình hoàn tất</a></td></tr><tr><td>Mail phản hồi tự động</td><td><a href="https://www.jlweb.jp/coding/assets/dl/mail_text.txt" target="_blank" rel="noreferrer">Mail phản hồi tự động</a></td></tr><tr><td>Chính sách bảo mật</td><td><a href="https://www.jlweb.jp/coding/assets/dl/privacy_policy.txt" target="_blank" rel="noreferrer">Chính sách bảo mật</a></td></tr><tr><td>Bài đăng thông báo</td><td><a href="https://www.jlweb.jp/coding/assets/dl/news.pdf" target="_blank" rel="noreferrer">Bài đăng thông báo（PDF）</a></td></tr></tbody></table></div><h3 id="wp-manual" tabindex="-1">WP manual <a class="header-anchor" href="#wp-manual" aria-label="Permalink to &quot;WP manual&quot;">​</a></h3><p><a href="https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx" target="_blank" rel="noreferrer">Download mẫu từ đây（PPTX）</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/11-launch-and-templates/11-2-text-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _112TextTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _112TextTemplates as default
};
