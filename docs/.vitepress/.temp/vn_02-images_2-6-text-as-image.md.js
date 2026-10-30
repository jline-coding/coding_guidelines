import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-6. Về việc chuyển text thành hình ảnh","description":"","frontmatter":{},"headers":[],"relativePath":"vn/02-images/2-6-text-as-image.md","filePath":"vn/02-images/2-6-text-as-image.md"}');
const _sfc_main = { name: "vn/02-images/2-6-text-as-image.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-6-ve-viec-chuyen-text-thanh-hinh-anh" tabindex="-1">2-6. Về việc chuyển text thành hình ảnh <a class="header-anchor" href="#_2-6-ve-viec-chuyen-text-thanh-hinh-anh" aria-label="Permalink to &quot;2-6. Về việc chuyển text thành hình ảnh&quot;">​</a></h1><ul><li>Không chuyển text thành hình ảnh, mà sử dụng Web font</li><li>Trong trường hợp không có Web font được cung cấp và phần text có tính design cao, hãy sử dụng SVG đã được outline</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/02-images/2-6-text-as-image.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _26TextAsImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _26TextAsImage as default
};
