import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"J-Line Web Marketing - Coding Guidelines","description":"","frontmatter":{},"headers":[],"relativePath":"intro.md","filePath":"intro.md"}');
const _sfc_main = { name: "intro.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="j-line-web-marketing-coding-guidelines" tabindex="-1">J-Line Web Marketing - Coding Guidelines <a class="header-anchor" href="#j-line-web-marketing-coding-guidelines" aria-label="Permalink to &quot;J-Line Web Marketing - Coding Guidelines&quot;">​</a></h1><h2 id="本ガイドラインの目的" tabindex="-1">本ガイドラインの目的 <a class="header-anchor" href="#本ガイドラインの目的" aria-label="Permalink to &quot;本ガイドラインの目的&quot;">​</a></h2><p>このガイドラインは、ジェイ・ライン株式会社Webマーケティング事業部におけるWeb制作業務において、誰もが迷わず、品質の高いコーディングを行えることを目的とした社内規約です。</p><p>デザインの再現だけをゴールとせず、ユーザーにとって心地よい体験、更新者にとって扱いやすい構造、チーム全体での生産性の向上を実現するためのルールと思想をまとめています。</p><p>このガイドラインを活用することで、以下のような状態の実現を目指します：</p><ul><li>誰が担当しても一定の品質を担保できる</li><li>読みやすく整った構造により、属人性を排除</li><li>レビューや納品確認の手間を削減</li><li>修正・運用に強く、将来のプロジェクトにも活用できるベースを整備</li></ul><h2 id="基本的な考え方" tabindex="-1">基本的な考え方 <a class="header-anchor" href="#基本的な考え方" aria-label="Permalink to &quot;基本的な考え方&quot;">​</a></h2><ul><li>W3CのHTML仕様に準拠した正しいマークアップを行うこと。</li><li>意味を持たないタグ（divやspanなど）は、レイアウト目的に使用し、過剰なネストや不要なラッパーは避けること。HTMLの意味構造を意識し、使える場面では semanticタグを積極的に使用する。</li><li>コンテンツの増減で崩れない構造を意識する。</li><li>デザインを再現するだけではなく、更新性のよいコーディングをすること。</li><li>ユーザーの閲覧環境を考慮し、コンテナー幅で崩れないコーディングをすること。</li><li>テストアップ時には本番公開と同様の状態でアップすること。</li></ul><p>※撮影や原稿が不足している場合を除いて、テストアップ時にはダミーテキストやダミー画像が無い状態でアップすること。 ※スケジュールに遅延の可能性が生じた場合は、速やかに担当ディレクターおよびコーディングリーダーへ報告してください。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("intro.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intro as default
};
