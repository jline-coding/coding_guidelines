import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-5. Về thuộc tính alt","description":"","frontmatter":{},"headers":[],"relativePath":"vn/02-images/2-5-alt-attribute.md","filePath":"vn/02-images/2-5-alt-attribute.md"}');
const _sfc_main = { name: "vn/02-images/2-5-alt-attribute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-5-ve-thuoc-tinh-alt" tabindex="-1">2-5. Về thuộc tính alt <a class="header-anchor" href="#_2-5-ve-thuoc-tinh-alt" aria-label="Permalink to &quot;2-5. Về thuộc tính alt&quot;">​</a></h1><p>Thuộc tính alt đóng vai trò là thông tin thay thế cho người dùng không thể nhìn thấy hình ảnh (ví dụ: trình đọc màn hình, text browser) Việc viết alt đúng cách giúp cải thiện accessibility và cũng có lợi cho SEO</p><p>-Đối với hình ảnh mang tính trang trí (mũi tên, họa tiết, đường kẻ…), để alt rỗng（ví dụ：alt=&quot;&quot;）。</p><ul><li>Đối với hình ảnh mang ý nghĩa (ảnh chụp, sơ đồ, banner…), bắt buộc phải ghi nội dung mô tả cụ thể vào alt</li></ul><h3 id="vi-du-ok" tabindex="-1">Ví dụ OK <a class="header-anchor" href="#vi-du-ok" aria-label="Permalink to &quot;Ví dụ OK&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;img_office.webp&quot; alt=&quot;オフィス外観の写真&quot;&gt;</span></span></code></pre></div><h3 id="vi-du-sai" tabindex="-1">Ví dụ sai <a class="header-anchor" href="#vi-du-sai" aria-label="Permalink to &quot;Ví dụ sai&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&quot;img_office.webp&quot; alt=&quot;画像&quot;&gt;</span></span>
<span class="line"><span>&lt;img src=&quot;img_office.webp&quot; alt=&quot;&quot;&gt; &lt;!-- 意味のある画像に空altはNG --&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/02-images/2-5-alt-attribute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _25AltAttribute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _25AltAttribute as default
};
