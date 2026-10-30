import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11-2. テキスト類テンプレート","description":"","frontmatter":{},"headers":[],"relativePath":"11-launch-and-templates/11-2-text-templates.md","filePath":"11-launch-and-templates/11-2-text-templates.md"}');
const _sfc_main = { name: "11-launch-and-templates/11-2-text-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-2-テキスト類テンプレート" tabindex="-1">11-2. テキスト類テンプレート <a class="header-anchor" href="#_11-2-テキスト類テンプレート" aria-label="Permalink to &quot;11-2. テキスト類テンプレート&quot;">​</a></h1><h3 id="フォーム関連" tabindex="-1">フォーム関連 <a class="header-anchor" href="#フォーム関連" aria-label="Permalink to &quot;フォーム関連&quot;">​</a></h3><div class="table-wrap"><table tabindex="0"><thead><tr><th>項目</th><th>ダウンロードリンク</th></tr></thead><tbody><tr><td>完了画面テキスト</td><td><a href="https://www.jlweb.jp/coding/assets/dl/thanks_page_text.txt" target="_blank" rel="noreferrer">完了画面テキスト</a></td></tr><tr><td>自動返信メール</td><td><a href="https://www.jlweb.jp/coding/assets/dl/mail_text.txt" target="_blank" rel="noreferrer">自動返信メール</a></td></tr><tr><td>プライバシーポリシー</td><td><a href="https://www.jlweb.jp/coding/assets/dl/privacy_policy.txt" target="_blank" rel="noreferrer">プライバシーポリシー</a></td></tr><tr><td>お知らせ投稿</td><td><a href="https://www.jlweb.jp/coding/assets/dl/news.pdf" target="_blank" rel="noreferrer">お知らせ投稿（PDF）</a></td></tr></tbody></table></div><h3 id="wpマニュアル" tabindex="-1">WPマニュアル <a class="header-anchor" href="#wpマニュアル" aria-label="Permalink to &quot;WPマニュアル&quot;">​</a></h3><p><a href="https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx" target="_blank" rel="noreferrer">サンプルDLはこちら（PPTX）</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("11-launch-and-templates/11-2-text-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _112TextTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _112TextTemplates as default
};
