import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"10-1. 表示速度の目的と考え方・基本方針","description":"","frontmatter":{},"headers":[],"relativePath":"10-pagespeed/10-1-purpose-and-policy.md","filePath":"10-pagespeed/10-1-purpose-and-policy.md"}');
const _sfc_main = { name: "10-pagespeed/10-1-purpose-and-policy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_10-1-表示速度の目的と考え方・基本方針" tabindex="-1">10-1. 表示速度の目的と考え方・基本方針 <a class="header-anchor" href="#_10-1-表示速度の目的と考え方・基本方針" aria-label="Permalink to &quot;10-1. 表示速度の目的と考え方・基本方針&quot;">​</a></h1><h2 id="表示速度の目的と考え方" tabindex="-1">表示速度の目的と考え方 <a class="header-anchor" href="#表示速度の目的と考え方" aria-label="Permalink to &quot;表示速度の目的と考え方&quot;">​</a></h2><p>納品物の品質指標として「表示スピード」を設定し、ユーザー体験とサービス品質の底上げを目指します。 ただし表示速度は以下のような外部要因に左右されるため、一律の数値基準を設けることは現実的ではありません。</p><ul><li>サーバースペックやCDNの有無</li><li>デザインの構成や複雑さ</li><li>アニメーション・演出表現の有無</li></ul><p>よって、本ガイドラインでは「一定の基準値と改善方針」を示し、最低限の品質担保と再現性の確保を目的とします。</p><h3 id="lighthouseスコア・lcpについての補足" tabindex="-1">Lighthouseスコア・LCPについての補足 <a class="header-anchor" href="#lighthouseスコア・lcpについての補足" aria-label="Permalink to &quot;Lighthouseスコア・LCPについての補足&quot;">​</a></h3><p>Google Lighthouse の「パフォーマンススコア」や LCP（Largest Contentful Paint）値は、低速4G回線・低スペック端末を想定した“ラボ環境”での測定です。 そのため、実際のユーザー環境とは大きく乖離することがあり、スコアが厳しく出ることがあります。</p><h2 id="基本方針" tabindex="-1">基本方針 <a class="header-anchor" href="#基本方針" aria-label="Permalink to &quot;基本方針&quot;">​</a></h2><p>構築初期段階においては、ラボスコアよりも実環境での体感速度（LCP）を重視してください。 Lighthouseスコアは参考値として扱い、最終的にはUXとして「重く感じない」ことを優先します。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("10-pagespeed/10-1-purpose-and-policy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _101PurposeAndPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _101PurposeAndPolicy as default
};
