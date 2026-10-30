import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9-2. WPサイトのフォーム（Contact Form 7）","description":"","frontmatter":{},"headers":[],"relativePath":"09-forms/9-2-wp-forms.md","filePath":"09-forms/9-2-wp-forms.md"}');
const _sfc_main = { name: "09-forms/9-2-wp-forms.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-2-wpサイトのフォーム-contact-form-7" tabindex="-1">9-2. WPサイトのフォーム（Contact Form 7） <a class="header-anchor" href="#_9-2-wpサイトのフォーム-contact-form-7" aria-label="Permalink to &quot;9-2. WPサイトのフォーム（Contact Form 7）&quot;">​</a></h1><h2 id="contact-form-7-wpサイトで使用" tabindex="-1">Contact Form 7（WPサイトで使用） <a class="header-anchor" href="#contact-form-7-wpサイトで使用" aria-label="Permalink to &quot;Contact Form 7（WPサイトで使用）&quot;">​</a></h2><ul><li>確認画面は不要</li><li>入力文字数が400～500文字を超えると自動返信メールに内容が反映されない（無料版の制限）</li><li>追加ヘッダー <code>Reply-To</code> 設定： <ul><li>管理者用：ユーザー入力のメールアドレスを設定</li><li>ユーザー用：空欄のまま</li></ul></li><li><code>Reply-To</code> を設定すると返信ボタンで正しい宛先が指定される</li><li><code>Reply-To</code> を削除していると送信元アドレスが返信先に設定される</li><li>reCAPTCHAのキーを作成し、Jlineのドメインおよび顧客のドメインを追加します。</li></ul><h2 id="【開発終了】mwwpform" tabindex="-1">【開発終了】MWWPForm <a class="header-anchor" href="#【開発終了】mwwpform" aria-label="Permalink to &quot;【開発終了】MWWPForm&quot;">​</a></h2><ul><li>使用しない。適宜 Contact Form 7 に変更すること</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("09-forms/9-2-wp-forms.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _92WpForms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _92WpForms as default
};
