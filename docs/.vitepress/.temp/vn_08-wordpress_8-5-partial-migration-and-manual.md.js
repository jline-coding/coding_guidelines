import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8-5. Di chuyển một phần dữ liệu & Tạo manual WP","description":"","frontmatter":{},"headers":[],"relativePath":"vn/08-wordpress/8-5-partial-migration-and-manual.md","filePath":"vn/08-wordpress/8-5-partial-migration-and-manual.md"}');
const _sfc_main = { name: "vn/08-wordpress/8-5-partial-migration-and-manual.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-5-di-chuyen-mot-phan-du-lieu-tao-manual-wp" tabindex="-1">8-5. Di chuyển một phần dữ liệu &amp; Tạo manual WP <a class="header-anchor" href="#_8-5-di-chuyen-mot-phan-du-lieu-tao-manual-wp" aria-label="Permalink to &quot;8-5. Di chuyển một phần dữ liệu &amp; Tạo manual WP&quot;">​</a></h1><h2 id="khi-phat-sinh-viec-di-chuyen-mot-phan-thong-tin-du-lieu" tabindex="-1">Khi phát sinh việc di chuyển một phần thông tin/dữ liệu <a class="header-anchor" href="#khi-phat-sinh-viec-di-chuyen-mot-phan-thong-tin-du-lieu" aria-label="Permalink to &quot;Khi phát sinh việc di chuyển một phần thông tin/dữ liệu&quot;">​</a></h2><ul><li>Sử dụng plugin「DeMomentSomTres Export」</li><li>Vì khi sử dụng chức năng「import」trong WP thì có khả năng xảy ra lỗi không chuyển được toàn bộ thông tin/dữ liệu</li></ul><p><strong>Tham khảo：</strong></p><ul><li><a href="https://naifix.com/wordpress-transfer/" target="_blank" rel="noreferrer">https://naifix.com/wordpress-transfer/</a></li><li><a href="https://easytouse.jp/2018/03/28/demomentsomtresexport/" target="_blank" rel="noreferrer">https://easytouse.jp/2018/03/28/demomentsomtresexport/</a></li></ul><h2 id="ve-viec-tao-manual-wp" tabindex="-1">Về việc tạo manual WP <a class="header-anchor" href="#ve-viec-tao-manual-wp" aria-label="Permalink to &quot;Về việc tạo manual WP&quot;">​</a></h2><ul><li>Tham khảo mẫu manual để viết manual</li></ul><p><a href="https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx" target="_blank" rel="noreferrer">Download mẫu từ đây</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/08-wordpress/8-5-partial-migration-and-manual.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _85PartialMigrationAndManual = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _85PartialMigrationAndManual as default
};
