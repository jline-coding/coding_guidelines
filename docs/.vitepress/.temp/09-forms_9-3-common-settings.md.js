import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9-3. フォーム共通設定・注意事項","description":"","frontmatter":{},"headers":[],"relativePath":"09-forms/9-3-common-settings.md","filePath":"09-forms/9-3-common-settings.md"}');
const _sfc_main = { name: "09-forms/9-3-common-settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-3-フォーム共通設定・注意事項" tabindex="-1">9-3. フォーム共通設定・注意事項 <a class="header-anchor" href="#_9-3-フォーム共通設定・注意事項" aria-label="Permalink to &quot;9-3. フォーム共通設定・注意事項&quot;">​</a></h1><ul><li>エラー画面・完了画面を実装すること、確認画面は不要</li><li>テスト送信には <code>kensho@j-line</code> を使用すること</li><li>管理者アドレスをクライアントのアドレスに変更後、内容は適切に送信テストすること</li><li>自動返信メールを設定すること（原稿はダミーで用意）</li><li>郵便番号入力がある場合は住所自動入力設定を行うこと</li><li>送信確認画面もデザインに合わせて装飾すること</li><li>完了画面には「TOPに戻る」ボタンを設置すること</li><li>reCAPTCHAの設定を必ず行うこと</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("09-forms/9-3-common-settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _93CommonSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _93CommonSettings as default
};
