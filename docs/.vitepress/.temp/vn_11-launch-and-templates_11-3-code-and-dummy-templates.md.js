import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11-3. Template code và hình ảnh","description":"","frontmatter":{},"headers":[],"relativePath":"vn/11-launch-and-templates/11-3-code-and-dummy-templates.md","filePath":"vn/11-launch-and-templates/11-3-code-and-dummy-templates.md"}');
const _sfc_main = { name: "vn/11-launch-and-templates/11-3-code-and-dummy-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-3-template-code-va-hinh-anh" tabindex="-1">11-3. Template code và hình ảnh <a class="header-anchor" href="#_11-3-template-code-va-hinh-anh" aria-label="Permalink to &quot;11-3. Template code và hình ảnh&quot;">​</a></h1><h3 id="template-coding" tabindex="-1">Template coding <a class="header-anchor" href="#template-coding" aria-label="Permalink to &quot;Template coding&quot;">​</a></h3><ul><li><a href="https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">HTML data（zip）</a></li><li><a href="https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">WordPress data（zip）</a></li><li>File php của custom theme trong Wordpress</li><li>Trong template có thể có những nội dung không cần thiết tùy theo từng dự án, vì vậy hãy linh hoạt xóa những phần không cần thiết</li></ul><h3 id="cac-loai-file-dummy" tabindex="-1">Các loại file dummy <a class="header-anchor" href="#cac-loai-file-dummy" aria-label="Permalink to &quot;Các loại file dummy&quot;">​</a></h3><ul><li>Data dummy dùng khi test chức năng gửi file đính kèm trong form.</li></ul><div class="table-wrap"><table tabindex="0"><thead><tr><th>Định dạng file</th><th>Link</th></tr></thead><tbody><tr><td>Excel</td><td><a href="https://www.jlweb.jp/coding/assets/dl/dummy.xlsx" target="_blank" rel="noreferrer">Dummy Excel</a></td></tr><tr><td>PDF</td><td><a href="https://www.jlweb.jp/coding/assets/dl/dummy.pdf" target="_blank" rel="noreferrer">Dummy PDF</a></td></tr><tr><td>Word</td><td><a href="https://www.jlweb.jp/coding/assets/dl/dummy.docx" target="_blank" rel="noreferrer">Dummy Docx</a></td></tr></tbody></table></div><h3 id="hinh-anh-dummy" tabindex="-1">Hình ảnh dummy <a class="header-anchor" href="#hinh-anh-dummy" aria-label="Permalink to &quot;Hình ảnh dummy&quot;">​</a></h3><ul><li><p>Hình ảnh dummy hiển thị khi không có ảnh được thiết lập, ví dụ hình eye-catch</p></li><li><p><a href="https://www.jlweb.jp/coding/assets/dl/no-image.jpg" target="_blank" rel="noreferrer">Hình dummy（no-image.jpg）</a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/11-launch-and-templates/11-3-code-and-dummy-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _113CodeAndDummyTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _113CodeAndDummyTemplates as default
};
