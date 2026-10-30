import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-9. インタラクションに関して","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-9-interaction.md","filePath":"01-html/1-9-interaction.md"}');
const _sfc_main = { name: "01-html/1-9-interaction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-9-インタラクションに関して" tabindex="-1">1-9. インタラクションに関して <a class="header-anchor" href="#_1-9-インタラクションに関して" aria-label="Permalink to &quot;1-9. インタラクションに関して&quot;">​</a></h1><ul><li>リンクをボタンのようなデザインで使用する場合、hover時に下線（underline）は付けないこと。</li><li>上に戻るボタンはデザインが無くても設置すること（サイトに使われている色を使うこと）</li><li>各セクションにはスクロール時のフェード演出を付与すること。参考サイト： <a href="https://web-loid.net/web/scroll-effect-js/" target="_blank" rel="noreferrer">https://web-loid.net/web/scroll-effect-js/</a></li><li>ホバーアクションは、特別な指示がない限り「薄くなる（opacity変更）」アクションを設定する。</li><li>WordPress等の記事内テキストリンクには、下線（underline）を付けること。</li><li>cookieポップアップは全サイトで標準実装とし、プライバシーや個人情報へのリンク設定をすること。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-9-interaction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _19Interaction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _19Interaction as default
};
