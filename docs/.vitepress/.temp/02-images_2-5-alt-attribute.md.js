import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-5. altについて","description":"","frontmatter":{},"headers":[],"relativePath":"02-images/2-5-alt-attribute.md","filePath":"02-images/2-5-alt-attribute.md"}');
const _sfc_main = { name: "02-images/2-5-alt-attribute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-5-altについて" tabindex="-1">2-5. altについて <a class="header-anchor" href="#_2-5-altについて" aria-label="Permalink to &quot;2-5. altについて&quot;">​</a></h1><p>alt属性は、視覚以外での閲覧者（読み上げブラウザ、テキストブラウザ）への代替情報として機能します。 適切に記述することで、アクセシビリティの向上・SEOにも寄与します。</p><ul><li>装飾目的の画像（矢印・飾り・罫線など）には、alt属性を空にします（例：alt=&quot;&quot;）。</li><li>意味を持つ画像（写真・図解・バナーなど）には、内容を具体的に記述した代替テキストを必ず記載します。</li></ul><h3 id="ok例" tabindex="-1">OK例 <a class="header-anchor" href="#ok例" aria-label="Permalink to &quot;OK例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;img_office.webp&quot; alt=&quot;オフィス外観の写真&quot;&gt;</span></span></code></pre></div><h3 id="ng例" tabindex="-1">NG例 <a class="header-anchor" href="#ng例" aria-label="Permalink to &quot;NG例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;img_office.webp&quot; alt=&quot;画像&quot;&gt;</span></span>
<span class="line"><span>&lt;img src=&quot;img_office.webp&quot; alt=&quot;&quot;&gt; &lt;!-- 意味のある画像に空altはNG --&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02-images/2-5-alt-attribute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _25AltAttribute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _25AltAttribute as default
};
