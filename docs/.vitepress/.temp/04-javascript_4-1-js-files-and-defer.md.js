import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"4-1. JavaScriptファイルについて","description":"","frontmatter":{},"headers":[],"relativePath":"04-javascript/4-1-js-files-and-defer.md","filePath":"04-javascript/4-1-js-files-and-defer.md"}');
const _sfc_main = { name: "04-javascript/4-1-js-files-and-defer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_4-1-javascriptファイルについて" tabindex="-1">4-1. JavaScriptファイルについて <a class="header-anchor" href="#_4-1-javascriptファイルについて" aria-label="Permalink to &quot;4-1. JavaScriptファイルについて&quot;">​</a></h1><ul><li>原則htmlファイルに直接スタイルを書かない。外部ファイルとして管理する</li><li>各動作(処理)にはコメントを付けるが英語、または日本語を使用すること</li><li>JSファイルはheader.phpやfooter.phpなど共通化ファイルに記載すること（外部JavaScriptファイルの読み込みも）</li><li><strong>JSファイルの配置と<code>defer</code>属性について</strong>: <ul><li><strong>基本原則（推奨）</strong>: 外部JSファイル（<code>src</code>あり）は<code>&lt;head&gt;</code>内に記述し、<code>defer</code>属性を付与します。これによりHTMLのレンダリングをブロックせず、DOMの構築完了後に順番通りにスクリプトが実行されます。 例：<code>&lt;script src=&quot;./assets/plugins/anijs/ani.js&quot; defer&gt;&lt;/script&gt;</code></li><li><strong><code>defer</code>を使用しない例外ケース</strong>: <ul><li>HTMLのレンダリング前に即時実行させたいスクリプト（例：ダークモード時のちらつき防止、リダイレクト処理など）。 -&gt; <em><code>&lt;head&gt;</code>内に<code>defer</code>なしで記述します。</em></li><li>分析・トラッキングツール（Google Analytics, GTM, Pixelなど）。 -&gt; <em>DOMや順序に依存しないため、通常は<code>defer</code>ではなく<code>async</code>を使用します。</em></li><li>インラインスクリプト（<code>&lt;script&gt;</code>タグ内に直接記述するコード）。 -&gt; <em>インラインスクリプトの使用は極力控え、本当に必要な場合にのみ使用してください。注意：<code>defer</code>で読み込んだ外部ライブラリ（jQueryなど）に依存するインライン処理を書く場合は、ライブラリの読み込み完了を待つために必ず <code>jQuery(function($){...})</code> や <code>DOMContentLoaded</code> で囲む必要があります。</em></li></ul></li></ul></li><li>CDN利用を控える ※jQueryのCDNは稀に読み込みが遅くなって表示が崩れたりするケースがある。</li><li>全て、もしくはほとんどのページで使用するものはcommon.jsにまとめて記述する</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("04-javascript/4-1-js-files-and-defer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _41JsFilesAndDefer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _41JsFilesAndDefer as default
};
