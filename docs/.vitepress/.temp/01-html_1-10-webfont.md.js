import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-10. Webフォントに関して","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-10-webfont.md","filePath":"01-html/1-10-webfont.md"}');
const _sfc_main = { name: "01-html/1-10-webfont.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-10-webフォントに関して" tabindex="-1">1-10. Webフォントに関して <a class="header-anchor" href="#_1-10-webフォントに関して" aria-label="Permalink to &quot;1-10. Webフォントに関して&quot;">​</a></h1><ul><li>Webフォントの使用については、原則としてデザイン指示に従って実装してください。</li><li>指定されたフォントがGoogle Fontsにある場合はそのまま使用し、読み込み設定を適切に行ってください。</li><li>Google Fontsにないフォントを使用する場合は、使用条件・ライセンスについてディレクターに確認のうえ、必要に応じてクライアントまたはデザイナーから読み込みスクリプトの提供を受けてください。</li><li>必要なウェイトのみを指定して、読み込みの負荷を最小限に抑えてください。</li><li>Webフォントの指定がない場合、または使用不可な場合は、ディレクターまたはデザイナーと相談し、代替案を確認のうえ実装を進めてください。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-10-webfont.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _110Webfont = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _110Webfont as default
};
