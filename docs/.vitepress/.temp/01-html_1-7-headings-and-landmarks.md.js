import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-7. 見出し（h1～h6）・header / main / footer","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-7-headings-and-landmarks.md","filePath":"01-html/1-7-headings-and-landmarks.md"}');
const _sfc_main = { name: "01-html/1-7-headings-and-landmarks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-7-見出し-h1-h6-・header-main-footer" tabindex="-1">1-7. 見出し（h1～h6）・header / main / footer <a class="header-anchor" href="#_1-7-見出し-h1-h6-・header-main-footer" aria-label="Permalink to &quot;1-7. 見出し（h1～h6）・header / main / footer&quot;">​</a></h1><h2 id="h1-h6-タグについて" tabindex="-1"><code>&lt;h1&gt;</code>～<code>&lt;h6&gt;</code>タグについて <a class="header-anchor" href="#h1-h6-タグについて" aria-label="Permalink to &quot;\`&lt;h1&gt;\`～\`&lt;h6&gt;\`タグについて&quot;">​</a></h2><ul><li><code>&lt;h1&gt;</code>～<code>&lt;h6&gt;</code>文章の構造に合わせて使用する。また1ページに<code>&lt;h1&gt;</code>～<code>&lt;h3&gt;</code>は必ず使用する。</li><li>TOPページではヘッダーロゴをh1タグで囲み、下層ページではdivタグに変更し、下層ページタイトルにはh1タグを使用すること。</li><li>クライアントからのデザインで、見出しが見当たらない場合は使用できる分だけ使う</li></ul><h2 id="header-タグ、-main-タグ、-footer-タグ" tabindex="-1"><code>&lt;header&gt;</code>タグ、<code>&lt;main&gt;</code>タグ、<code>&lt;footer&gt;</code>タグ <a class="header-anchor" href="#header-タグ、-main-タグ、-footer-タグ" aria-label="Permalink to &quot;\`&lt;header&gt;\`タグ、\`&lt;main&gt;\`タグ、\`&lt;footer&gt;\`タグ&quot;">​</a></h2><ul><li>各ページ毎原則1つだけ。</li><li>ページ共通部分のヘッダーには<code>&lt;header&gt;</code>タグを使用する</li><li>ページ共通部分のフッターには<code>&lt;footer&gt;</code>タグを使用する</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-7-headings-and-landmarks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _17HeadingsAndLandmarks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _17HeadingsAndLandmarks as default
};
