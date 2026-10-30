import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"3-1. CSSファイルの設計・文字コードの指定","description":"","frontmatter":{},"headers":[],"relativePath":"03-css/3-1-file-design-and-charset.md","filePath":"03-css/3-1-file-design-and-charset.md"}');
const _sfc_main = { name: "03-css/3-1-file-design-and-charset.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-1-cssファイルの設計・文字コードの指定" tabindex="-1">3-1. CSSファイルの設計・文字コードの指定 <a class="header-anchor" href="#_3-1-cssファイルの設計・文字コードの指定" aria-label="Permalink to &quot;3-1. CSSファイルの設計・文字コードの指定&quot;">​</a></h1><h2 id="cssファイルの設計" tabindex="-1">CSSファイルの設計 <a class="header-anchor" href="#cssファイルの設計" aria-label="Permalink to &quot;CSSファイルの設計&quot;">​</a></h2><ul><li>ページ数が多い場合、各ページ専用のCSSファイルを分けて作成します。</li><li>HTMLファイル内に直接スタイルを書くことは原則禁止します。</li></ul><h2 id="文字コードの指定" tabindex="-1">文字コードの指定 <a class="header-anchor" href="#文字コードの指定" aria-label="Permalink to &quot;文字コードの指定&quot;">​</a></h2><ul><li>CSSファイルの文字コードは原則 UTF-8 を使用します。</li><li>HTMLと同一の文字コードを指定し、文字化けや表示崩れの原因を防ぎます。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03-css/3-1-file-design-and-charset.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _31FileDesignAndCharset = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _31FileDesignAndCharset as default
};
