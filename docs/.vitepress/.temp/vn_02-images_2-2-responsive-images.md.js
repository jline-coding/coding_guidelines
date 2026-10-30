import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-2. Về hình ảnh responsive","description":"","frontmatter":{},"headers":[],"relativePath":"vn/02-images/2-2-responsive-images.md","filePath":"vn/02-images/2-2-responsive-images.md"}');
const _sfc_main = { name: "vn/02-images/2-2-responsive-images.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-2-ve-hinh-anh-responsive" tabindex="-1">2-2. Về hình ảnh responsive <a class="header-anchor" href="#_2-2-ve-hinh-anh-responsive" aria-label="Permalink to &quot;2-2. Về hình ảnh responsive&quot;">​</a></h1><ul><li>Những hình ảnh được sử dụng cho cả PC/SP nên dùng chung một file nếu có thể</li><li>Tuy nhiên, trong các trường hợp First View hoặc Main Visual có bố cục thay đổi nhiều, hoặc là banner dạng ngang trên PC nhưng dạng dọc trên SP thì cần tách riêng hình ảnh PC/SP</li><li>Trong những trường hợp cần tách riêng, hãy sử dụng thẻ <code>&lt;picture&gt;</code> để chuyển đổi giữa PC/SP</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;picture&gt;</span></span>
<span class="line"><span>  &lt;source media=&quot;(max-width: 767px)&quot; srcset=&quot;img_kv_sp.webp&quot;&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;img_kv_pc.webp&quot; alt=&quot;ファーストビューの画像&quot;&gt;</span></span>
<span class="line"><span>&lt;/picture&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/02-images/2-2-responsive-images.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _22ResponsiveImages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _22ResponsiveImages as default
};
