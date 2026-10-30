import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"3-3. Về Sass","description":"","frontmatter":{},"headers":[],"relativePath":"vn/03-css/3-3-sass.md","filePath":"vn/03-css/3-3-sass.md"}');
const _sfc_main = { name: "vn/03-css/3-3-sass.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-3-ve-sass" tabindex="-1">3-3. Về Sass <a class="header-anchor" href="#_3-3-ve-sass" aria-label="Permalink to &quot;3-3. Về Sass&quot;">​</a></h1><ul><li>Quy tắc sử dụng Sass phải tuân theo “Sass Manual”</li></ul><p><strong>※ Cập nhật quy tắc cấu trúc SCSS áp dụng cho Template:</strong></p><ul><li>Template hiện tại đang sử dụng cấu trúc Dart Sass module (FLOCSS / 7-1 pattern) chia theo các thư mục: <code>foundation</code> (reset, base), <code>layout</code> (header, footer), <code>component</code> (các UI component), <code>page</code> (style riêng cho từng trang), <code>global</code> (biến, mixins), và <code>utilities</code>.</li><li><strong>Tuyệt đối không dùng <code>@import</code>.</strong> Thay vào đó, sử dụng <code>@use</code> và <code>@forward</code>.</li><li>Thư mục <code>global</code> chứa các file định nghĩa biến màu sắc (<code>_color.scss</code>), font (<code>_font.scss</code>), mixin (<code>_mixin.scss</code>), v.v... được gom lại qua file <code>_index.scss</code> bằng lệnh <code>@forward</code>. Để sử dụng các biến/mixin này, gọi <code>@use &quot;../global&quot; as *;</code> (hoặc đường dẫn tương đối phù hợp) ở đầu mỗi file SCSS. Việc cấu hình các biến dùng chung bắt buộc phải thực hiện trong thư mục <code>global</code> này.</li><li>Các file cấp cao (như <code>common.scss</code> hay <code>top.scss</code>) chỉ làm nhiệm vụ nạp các module qua <code>@use</code> để compile ra CSS sạch, không viết CSS trực tiếp vào các file này.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/03-css/3-3-sass.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _33Sass = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _33Sass as default
};
