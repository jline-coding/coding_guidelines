import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-4. Về backup","description":"","frontmatter":{},"headers":[],"relativePath":"vn/05-delivery/5-4-backup.md","filePath":"vn/05-delivery/5-4-backup.md"}');
const _sfc_main = { name: "vn/05-delivery/5-4-backup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-4-ve-backup" tabindex="-1">5-4. Về backup <a class="header-anchor" href="#_5-4-ve-backup" aria-label="Permalink to &quot;5-4. Về backup&quot;">​</a></h1><ul><li>Lưu 2 bản backup vào dropbox:data lúc test upload và data sau khi publish</li><li>Data WPvivid của Wordpress dùng lúc giao hàng cũng cần lưu trữ</li><li>Sau khi nộp, nếu có sửa thì lưu data đã sửa vào dropbox（nếu là site tĩnh → chỉ cần lưu file chênh lệch）</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/05-delivery/5-4-backup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _54Backup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _54Backup as default
};
