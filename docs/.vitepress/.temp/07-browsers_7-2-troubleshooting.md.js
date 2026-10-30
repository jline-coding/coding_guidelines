import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"7-2. その他（表示が違うときの対応）","description":"","frontmatter":{},"headers":[],"relativePath":"07-browsers/7-2-troubleshooting.md","filePath":"07-browsers/7-2-troubleshooting.md"}');
const _sfc_main = { name: "07-browsers/7-2-troubleshooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-2-その他-表示が違うときの対応" tabindex="-1">7-2. その他（表示が違うときの対応） <a class="header-anchor" href="#_7-2-その他-表示が違うときの対応" aria-label="Permalink to &quot;7-2. その他（表示が違うときの対応）&quot;">​</a></h1><h2 id="その他" tabindex="-1">その他 <a class="header-anchor" href="#その他" aria-label="Permalink to &quot;その他&quot;">​</a></h2><p><strong>クライアントのブラウザ表示が違うとき</strong></p><ul><li>キャッシュのクリアを指示 <a href="https://itreat.co.jp/blog/cash#toc4" target="_blank" rel="noreferrer">参考</a></li><li>複数PCで表示確認やシークレットブラウザで確認。</li><li>クライアントの見られてるOS・ブラウザ・各バージョンの確認をする</li><li>それでも不具合の確認ができない場合、クライアントのルーターの再起動を依頼する</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("07-browsers/7-2-troubleshooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _72Troubleshooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _72Troubleshooting as default
};
