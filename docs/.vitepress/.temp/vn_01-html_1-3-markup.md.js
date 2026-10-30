import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-3. Về markup","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-3-markup.md","filePath":"vn/01-html/1-3-markup.md"}');
const _sfc_main = { name: "vn/01-html/1-3-markup.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-3-ve-markup" tabindex="-1">1-3. Về markup <a class="header-anchor" href="#_1-3-ve-markup" aria-label="Permalink to &quot;1-3. Về markup&quot;">​</a></h1><ul><li>Thực hiện coding theo hướng mobile-first</li><li>Phiên bản HTML sử dụng là HTML Living Standard, trừ khi có chỉ định khác</li><li>Thực hiện markup theo đúng content model</li><li>Mặc định sử dụng sass （dart sass)cho phần markup styling</li><li>Tùy theo dự án có thể sử dụng css</li><li>Khi coding WordPress, về nguyên tắc không thực hiện trong editor của trang quản trị, mà thực hiện trong file php <ul><li>riêng contactform7 sẽ thực hiện coding trực tiếp trong editor</li></ul></li></ul><p><a href="https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">tải template HTML tại đây</a><br><a href="https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip" target="_blank" rel="noreferrer">tải template WP tại đây</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-3-markup.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _13Markup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _13Markup as default
};
