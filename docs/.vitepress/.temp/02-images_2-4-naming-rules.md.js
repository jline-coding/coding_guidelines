import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"2-4. 画像のネーミングルール","description":"","frontmatter":{},"headers":[],"relativePath":"02-images/2-4-naming-rules.md","filePath":"02-images/2-4-naming-rules.md"}');
const _sfc_main = { name: "02-images/2-4-naming-rules.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-4-画像のネーミングルール" tabindex="-1">2-4. 画像のネーミングルール <a class="header-anchor" href="#_2-4-画像のネーミングルール" aria-label="Permalink to &quot;2-4. 画像のネーミングルール&quot;">​</a></h1><p>ファイル名は、用途に応じて以下の接頭辞を付けて命名してください。 【{識別子}_{内容}.webp】を基本とします。</p><ul><li><p>背景画像<br> bg_〇〇.webp</p></li><li><p>装飾目的のアイコン画像<br> icon_〇〇.webp</p></li><li><p>写真など、上2つの条件に当てはまらない画像<br> img_〇〇.webp</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02-images/2-4-naming-rules.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _24NamingRules = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _24NamingRules as default
};
