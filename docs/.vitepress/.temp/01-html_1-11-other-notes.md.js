import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-11. その他の注意事項","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-11-other-notes.md","filePath":"01-html/1-11-other-notes.md"}');
const _sfc_main = { name: "01-html/1-11-other-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-11-その他の注意事項" tabindex="-1">1-11. その他の注意事項 <a class="header-anchor" href="#_1-11-その他の注意事項" aria-label="Permalink to &quot;1-11. その他の注意事項&quot;">​</a></h1><ul><li>属性値にはダブルクォテーションを使う</li><li>グローバルナビには<code>&lt;nav&gt;</code>タグを使用する</li><li><code>&lt;section&gt;</code>タグ直下はdivタグでも問題ありません。（hタグが推奨とされていますがレイアウト構造上divがはいってもOKです）</li><li>英語を全て大文字にすると読み上げブラウザでは文字単位で読み上げられるので、小文字で設定+text-transform: uppercase を使用し大文字とすること</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-11-other-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _111OtherNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _111OtherNotes as default
};
