import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-4. Quy tắc đặt tên hình ảnh","description":"","frontmatter":{},"headers":[],"relativePath":"vn/02-images/2-4-naming-rules.md","filePath":"vn/02-images/2-4-naming-rules.md"}');
const _sfc_main = { name: "vn/02-images/2-4-naming-rules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-4-quy-tac-đat-ten-hinh-anh" tabindex="-1">2-4. Quy tắc đặt tên hình ảnh <a class="header-anchor" href="#_2-4-quy-tac-đat-ten-hinh-anh" aria-label="Permalink to &quot;2-4. Quy tắc đặt tên hình ảnh&quot;">​</a></h1><p>Tên file phải được đặt theo tiền tố (prefix) tương ứng với mục đích sử dụng nguyên tắc chung【{prefix}_{nội dung}.webp】</p><ul><li><p>Hình ảnh nền bg_〇〇.webp</p></li><li><p>Icon mang tính chất trang trí icon_〇〇.webp</p></li><li><p>Hình ảnh không thuộc 2 loại trên img_〇〇.webp</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/02-images/2-4-naming-rules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _24NamingRules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _24NamingRules as default
};
