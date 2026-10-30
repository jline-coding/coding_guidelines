import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-3. 画像形式について（WebP・SVG）","description":"","frontmatter":{},"headers":[],"relativePath":"02-images/2-3-formats-and-webp.md","filePath":"02-images/2-3-formats-and-webp.md"}');
const _sfc_main = { name: "02-images/2-3-formats-and-webp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-3-画像形式について-webp・svg" tabindex="-1">2-3. 画像形式について（WebP・SVG） <a class="header-anchor" href="#_2-3-画像形式について-webp・svg" aria-label="Permalink to &quot;2-3. 画像形式について（WebP・SVG）&quot;">​</a></h1><h2 id="画像形式について" tabindex="-1">画像形式について <a class="header-anchor" href="#画像形式について" aria-label="Permalink to &quot;画像形式について&quot;">​</a></h2><h3 id="webp" tabindex="-1">WebP <a class="header-anchor" href="#webp" aria-label="Permalink to &quot;WebP&quot;">​</a></h3><p>コーディングに使用する画像形式は、原則WebPを優先して使用します。</p><h3 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h3><p>ロゴや文字・アイコンなど、ベクター形式で作成された要素に限りSVGを使用します。 ※SVG内のテキストは必ずアウトライン化し、フォント依存が発生しないようにします。</p><h3 id="webp-の書き出しについて" tabindex="-1">WebP の書き出しについて <a class="header-anchor" href="#webp-の書き出しについて" aria-label="Permalink to &quot;WebP の書き出しについて&quot;">​</a></h3><p>画像のWebP変換は、テンプレートに組み込まれているビルドスクリプト（<code>sharp</code>ライブラリ使用）によって自動化されています。</p><ul><li><strong>自動変換される形式:</strong> <code>assets/images</code> ディレクトリに配置された <code>.jpg</code>, <code>.jpeg</code>, <code>.png</code> ファイルは、最適化された品質（quality: 90）で自動的に <code>.webp</code> に変換されます。</li><li><strong>そのまま保持される形式:</strong> <code>.gif</code>, <code>.svg</code>, <code>.ico</code>, <code>.webp</code> などの形式は変換されず、そのままビルドディレクトリにコピーされます。</li><li><strong>パフォーマンス最適化:</strong> このスクリプトはタイムスタンプの比較（<code>isNewer</code>）を使用し、新規追加または変更されたファイルのみを処理します。また、不要になった古いファイルは自動的に削除（<code>removeStaleFiles</code>）するため、高速なビルドとクリーンな出力を維持します。</li><li><strong>使用方法:</strong> テンプレートに用意されている start / build コマンドを実行するだけで、スクリプトが自動的に適用されます。</li></ul><h3 id="webp-のフォールバック対応" tabindex="-1">WebP のフォールバック対応 <a class="header-anchor" href="#webp-のフォールバック対応" aria-label="Permalink to &quot;WebP のフォールバック対応&quot;">​</a></h3><p>WebP非対応環境に関する指示があった場合、<code>&lt;picture&gt;</code> タグを使用し、WebP → jpg/pngの順でフォールバック表示を設定する</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;picture&gt;</span></span>
<span class="line"><span>  &lt;source srcset=&quot;image.webp&quot;&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;image.jpg&quot; alt=&quot;代替テキスト&quot;&gt;</span></span>
<span class="line"><span>&lt;/picture&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02-images/2-3-formats-and-webp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _23FormatsAndWebp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _23FormatsAndWebp as default
};
