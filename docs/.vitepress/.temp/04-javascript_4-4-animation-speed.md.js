import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"4-4. アニメーションスピードについて","description":"","frontmatter":{},"headers":[],"relativePath":"04-javascript/4-4-animation-speed.md","filePath":"04-javascript/4-4-animation-speed.md"}');
const _sfc_main = { name: "04-javascript/4-4-animation-speed.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-4-アニメーションスピードについて" tabindex="-1">4-4. アニメーションスピードについて <a class="header-anchor" href="#_4-4-アニメーションスピードについて" aria-label="Permalink to &quot;4-4. アニメーションスピードについて&quot;">​</a></h1><ul><li>スライダーのスピードは指示がない限り３秒で設定する</li><li>hoverアクションも指定がない限り <code>transition:0.5s all</code> で指定</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("04-javascript/4-4-animation-speed.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _44AnimationSpeed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _44AnimationSpeed as default
};
