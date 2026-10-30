import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6-2. コンテンツ幅とブレイクポイント","description":"","frontmatter":{},"headers":[],"relativePath":"06-responsive/6-2-breakpoints.md","filePath":"06-responsive/6-2-breakpoints.md"}');
const _sfc_main = { name: "06-responsive/6-2-breakpoints.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-2-コンテンツ幅とブレイクポイント" tabindex="-1">6-2. コンテンツ幅とブレイクポイント <a class="header-anchor" href="#_6-2-コンテンツ幅とブレイクポイント" aria-label="Permalink to &quot;6-2. コンテンツ幅とブレイクポイント&quot;">​</a></h1><ul><li>ジェイ・ラインのデザインではコンテンツ幅（container）1160pxで作成している。SP時は両端20pxずつ幅を取ること</li><li>タブレット対応がある場合はブレイクポイントは下記の範囲で設定すること</li></ul><div class="table-wrap"><table tabindex="0"><thead><tr><th>種類</th><th>範囲</th></tr></thead><tbody><tr><td>タブレットサイズ</td><td>768－1024px</td></tr><tr><td>モバイルサイズ</td><td>375px-767px以下</td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("06-responsive/6-2-breakpoints.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _62Breakpoints = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _62Breakpoints as default
};
