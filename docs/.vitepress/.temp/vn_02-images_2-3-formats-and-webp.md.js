import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-3. Về định dạng hình ảnh (WebP / SVG)","description":"","frontmatter":{},"headers":[],"relativePath":"vn/02-images/2-3-formats-and-webp.md","filePath":"vn/02-images/2-3-formats-and-webp.md"}');
const _sfc_main = { name: "vn/02-images/2-3-formats-and-webp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-3-ve-đinh-dang-hinh-anh-webp-svg" tabindex="-1">2-3. Về định dạng hình ảnh (WebP / SVG) <a class="header-anchor" href="#_2-3-ve-đinh-dang-hinh-anh-webp-svg" aria-label="Permalink to &quot;2-3. Về định dạng hình ảnh (WebP / SVG)&quot;">​</a></h1><h2 id="ve-đinh-dang-hinh-anh" tabindex="-1">Về định dạng hình ảnh <a class="header-anchor" href="#ve-đinh-dang-hinh-anh" aria-label="Permalink to &quot;Về định dạng hình ảnh&quot;">​</a></h2><h3 id="webp" tabindex="-1">WebP <a class="header-anchor" href="#webp" aria-label="Permalink to &quot;WebP&quot;">​</a></h3><p>Nguyên tắc chung: định dạng hình ảnh sử dụng trong coding phải ưu tiên WebP</p><h3 id="svg" tabindex="-1">SVG <a class="header-anchor" href="#svg" aria-label="Permalink to &quot;SVG&quot;">​</a></h3><p>Chỉ sử dụng SVG cho các thành phần được tạo dưới dạng vector như logo, chữ, icon, v.v. ※Văn bản bên trong SVG bắt buộc phải được convert sang outline, để tránh phụ thuộc vào font</p><h3 id="ve-xuat-file-webp" tabindex="-1">Về xuất file WebP <a class="header-anchor" href="#ve-xuat-file-webp" aria-label="Permalink to &quot;Về xuất file WebP&quot;">​</a></h3><p>Việc chuyển đổi hình ảnh sang WebP đã được tích hợp sẵn và tự động hóa trong Template thông qua build script sử dụng thư viện <code>sharp</code>.</p><ul><li><strong>Định dạng tự động chuyển đổi:</strong> Các file có đuôi <code>.jpg</code>, <code>.jpeg</code>, <code>.png</code> khi được đặt vào thư mục ảnh (assets/images) sẽ được tự động convert sang <code>.webp</code> với chất lượng (quality) tối ưu ở mức 90%.</li><li><strong>Định dạng giữ nguyên:</strong> Các định dạng như <code>.gif</code>, <code>.svg</code>, <code>.ico</code>, <code>.webp</code> sẽ không bị convert mà được copy trực tiếp sang thư mục build.</li><li><strong>Tối ưu hiệu suất:</strong> Script sử dụng logic kiểm tra timestamp (<code>isNewer</code>) để chỉ xử lý các file thêm mới hoặc bị thay đổi, đồng thời tự động dọn dẹp các file rác (<code>removeStaleFiles</code>) ở thư mục đích. Việc này giúp quá trình build nhanh chóng và sạch sẽ.</li><li><strong>Cách sử dụng:</strong> Bạn chỉ cần sử dụng các lệnh build có sẵn của template, script sẽ tự động thực thi.</li></ul><h3 id="ve-fallback-cho-webp" tabindex="-1">Về fallback cho WebP <a class="header-anchor" href="#ve-fallback-cho-webp" aria-label="Permalink to &quot;Về fallback cho WebP&quot;">​</a></h3><p>Trong trường hợp có yêu cầu hỗ trợ môi trường không tương thích WebP, hãy sử dụng thẻ<code>&lt;picture&gt;</code> và thiết lập thứ tự fallback WebP → jpg/png</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;picture&gt;</span></span>
<span class="line"><span>  &lt;source srcset=&quot;image.webp&quot;&gt;</span></span>
<span class="line"><span>  &lt;img src=&quot;image.jpg&quot; alt=&quot;代替テキスト&quot;&gt;</span></span>
<span class="line"><span>&lt;/picture&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/02-images/2-3-formats-and-webp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _23FormatsAndWebp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _23FormatsAndWebp as default
};
