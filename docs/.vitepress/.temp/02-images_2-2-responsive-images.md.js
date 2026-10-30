import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-2. レスポンシブ画像について","description":"","frontmatter":{},"headers":[],"relativePath":"02-images/2-2-responsive-images.md","filePath":"02-images/2-2-responsive-images.md"}');
const _sfc_main = { name: "02-images/2-2-responsive-images.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-2-レスポンシブ画像について" tabindex="-1">2-2. レスポンシブ画像について <a class="header-anchor" href="#_2-2-レスポンシブ画像について" aria-label="Permalink to &quot;2-2. レスポンシブ画像について&quot;">​</a></h1><ul><li>PC / SP 両方で使用される画像は、できる限り共通ファイルを使用してください。</li><li>ただし、ファーストビューやメインビジュアルで構図が大きく変わる場合や、PC用では横長/SP用では縦長になるバナー類の場合は、レイアウト上の都合で画像を出し分けてください</li><li>出し分けが必要な場合は、<code>&lt;picture&gt;</code> タグでPC/SPを切り替えてください。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;picture&gt;</span></span>
<span class="line"><span>  &lt;source media=&quot;(max-width: 767px)&quot; srcset=&quot;img_kv_sp.webp&quot;&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;img_kv_pc.webp&quot; alt=&quot;ファーストビューの画像&quot;&gt;</span></span>
<span class="line"><span>&lt;/picture&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02-images/2-2-responsive-images.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _22ResponsiveImages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _22ResponsiveImages as default
};
