import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"6-1. レスポンシブ対応（基本・リキッドパターン）","description":"","frontmatter":{},"headers":[],"relativePath":"06-responsive/6-1-responsive-patterns.md","filePath":"06-responsive/6-1-responsive-patterns.md"}');
const _sfc_main = { name: "06-responsive/6-1-responsive-patterns.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-1-レスポンシブ対応-基本・リキッドパターン" tabindex="-1">6-1. レスポンシブ対応（基本・リキッドパターン） <a class="header-anchor" href="#_6-1-レスポンシブ対応-基本・リキッドパターン" aria-label="Permalink to &quot;6-1. レスポンシブ対応（基本・リキッドパターン）&quot;">​</a></h1><h2 id="レスポンシブ対応について" tabindex="-1">レスポンシブ対応について <a class="header-anchor" href="#レスポンシブ対応について" aria-label="Permalink to &quot;レスポンシブ対応について&quot;">​</a></h2><ul><li>基本パターンとリキッドパターンがあるので、キックオフの際にディレクターに確認すること</li><li>どのウィンドウサイズでもレイアウトが崩れないようにコーディングする</li><li>デザインサイズ以下の画面幅によってはカラム落ちで調整する等、画面幅により100%デザイン通りにならなくても問題ない。視認性を優先させる</li><li>基本的にはブレイクポイント768px1点を設置し、デザインによっては複数設置しても良い</li><li>モバイル対応の下限サイズは375pxとする</li></ul><h2 id="基本パターン" tabindex="-1">基本パターン <a class="header-anchor" href="#基本パターン" aria-label="Permalink to &quot;基本パターン&quot;">​</a></h2><p>・最大コンテンツ幅を設定する ・ウィンドウ幅が最大コンテンツ幅を下回る場合、コンテンツ幅はそれに応じて縮小する ・カラム幅はコンテンツ幅に対して相対的に変化する ・文字サイズは固定 　参考サイト：<a href="https://www.nippon-shooter.co.jp/" target="_blank" rel="noreferrer">https://www.nippon-shooter.co.jp/</a></p><h2 id="リキッドパターン" tabindex="-1">リキッドパターン <a class="header-anchor" href="#リキッドパターン" aria-label="Permalink to &quot;リキッドパターン&quot;">​</a></h2><p>・基本パターンに加え、文字サイズもコンテンツ幅に対して相対的に可変 　参考サイト：<a href="https://pict-adloop.com/" target="_blank" rel="noreferrer">https://pict-adloop.com/</a> , <a href="https://www.ohshima-showten.com/" target="_blank" rel="noreferrer">https://www.ohshima-showten.com/</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("06-responsive/6-1-responsive-patterns.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _61ResponsivePatterns = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _61ResponsivePatterns as default
};
