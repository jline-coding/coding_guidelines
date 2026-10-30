import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"10-2. 実測値の計測方法（Chrome DevTools使用）","description":"","frontmatter":{},"headers":[],"relativePath":"10-pagespeed/10-2-measurement.md","filePath":"10-pagespeed/10-2-measurement.md"}');
const _sfc_main = { name: "10-pagespeed/10-2-measurement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_10-2-実測値の計測方法-chrome-devtools使用" tabindex="-1">10-2. 実測値の計測方法（Chrome DevTools使用） <a class="header-anchor" href="#_10-2-実測値の計測方法-chrome-devtools使用" aria-label="Permalink to &quot;10-2. 実測値の計測方法（Chrome DevTools使用）&quot;">​</a></h1><ol><li>Chromeで対象ページを開く</li><li>「ネットワーク」タブ → スロットリングを「Fast 4G」、キャッシュ無効化にチェック</li><li>「パフォーマンス」タブを開き、「記録（◉）」をクリック</li><li>ページをリロードし、読み込み完了後に「停止」</li><li>タイムライン上の「LCP」マーカーにマウスオーバーし、秒数を確認</li></ol><p>LCP（実測目安）：4秒以内 （※今後の運用で再調整可）</p><p>※構造や演出上どうしてもLCPが遅くなる場合（例：JS描画のカルーセルなど）は、プレロード・事前描画の検討、または体感的な快適性を重視して例外対応としてください。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("10-pagespeed/10-2-measurement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _102Measurement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _102Measurement as default
};
