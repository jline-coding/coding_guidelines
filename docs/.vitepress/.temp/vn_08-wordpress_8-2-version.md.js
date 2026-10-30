import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8-2. Về phiên bản","description":"","frontmatter":{},"headers":[],"relativePath":"vn/08-wordpress/8-2-version.md","filePath":"vn/08-wordpress/8-2-version.md"}');
const _sfc_main = { name: "vn/08-wordpress/8-2-version.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-2-ve-phien-ban" tabindex="-1">8-2. Về phiên bản <a class="header-anchor" href="#_8-2-ve-phien-ban" aria-label="Permalink to &quot;8-2. Về phiên bản&quot;">​</a></h1><ul><li>Trừ khi có chỉ định thì phải cài đặt phiên bản mới nhất</li><li>Trường hợp renewal (làm mới website) thực hiện chuyển data WP thì nhất định phải kiểm tra phiên bản WP gốc và phiên bản PHP của server đang sử dụng rồi mới tiến hành cài đặt</li><li>Bắt buộc phải thay đổi cài đặt tự động cập nhật phiên bản. Hãy chuyển chế độ tự động cập nhật sang chỉ cập nhật bản minor (cập nhật nhỏ)：<a href="https://wordpress-web.and-ha.com/update-type-method/#:~:text=2020%E5%B9%B411%E6%9C%88%E3%81%AB,%E3%81%8A%E3%81%8F%E3%81%B9%E3%81%8D%E7%82%B9%20%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82" target="_blank" rel="noreferrer">Site tham khảo</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/08-wordpress/8-2-version.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _82Version = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _82Version as default
};
