import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"9-1. 静的サイトのメールフォーム（CGI / レスポンシブ）","description":"","frontmatter":{},"headers":[],"relativePath":"09-forms/9-1-mailform-pro-and-responsive.md","filePath":"09-forms/9-1-mailform-pro-and-responsive.md"}');
const _sfc_main = { name: "09-forms/9-1-mailform-pro-and-responsive.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-1-静的サイトのメールフォーム-cgi-レスポンシブ" tabindex="-1">9-1. 静的サイトのメールフォーム（CGI / レスポンシブ） <a class="header-anchor" href="#_9-1-静的サイトのメールフォーム-cgi-レスポンシブ" aria-label="Permalink to &quot;9-1. 静的サイトのメールフォーム（CGI / レスポンシブ）&quot;">​</a></h1><h2 id="メールフォームに関して" tabindex="-1">メールフォームに関して <a class="header-anchor" href="#メールフォームに関して" aria-label="Permalink to &quot;メールフォームに関して&quot;">​</a></h2><p>ジェイ・ラインでは、お問合わせや申し込みフォームを作成する際、下記システムを導入しています。</p><h3 id="メールフォームプロcgi-静的サイトで使用" tabindex="-1">メールフォームプロCGI（静的サイトで使用） <a class="header-anchor" href="#メールフォームプロcgi-静的サイトで使用" aria-label="Permalink to &quot;メールフォームプロCGI（静的サイトで使用）&quot;">​</a></h3><ul><li>Downloadサイト：<br><a href="https://www.synck.com/downloads/cgi-perl/mailformpro/index.html" target="_blank" rel="noreferrer">https://www.synck.com/downloads/cgi-perl/mailformpro/index.html</a></li><li>最新バージョンをダウンロードして使用すること</li><li>フォーム動作しない場合は、サーバのパーミッションを再度確認</li><li>使用サーバのPerlパスを確認し、<code>mailformpro.cgi</code> の1行目を変更する必要がある場合があります</li><li>複数CC宛先の設定方法：<br><a href="https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html" target="_blank" rel="noreferrer">https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html</a></li><li>reCAPTCHAの設定：<br><a href="https://www.dropbox.com/scl/fo/vuylj8e6vnucet8w3na82/ABPn2cs3VNjG8STZk2cM8xQ?rlkey=yc67cb9yur6pl7ohxumh2lrzw&amp;st=7yegcf9e&amp;dl=0" target="_blank" rel="noreferrer">Dropboxリンク</a></li><li><a href="https://www.jlweb.jp/coding/assets/dl/mailform_pro.pptx" target="_blank" rel="noreferrer">操作方法はこちら（PPTX）</a></li><li><a href="https://www.jlweb.jp/coding/assets/dl/contact.zip" target="_blank" rel="noreferrer">サンプルはこちら（ZIP）</a></li></ul><h3 id="レスポンシブメールフォーム-静的サイトで使用" tabindex="-1">レスポンシブメールフォーム（静的サイトで使用） <a class="header-anchor" href="#レスポンシブメールフォーム-静的サイトで使用" aria-label="Permalink to &quot;レスポンシブメールフォーム（静的サイトで使用）&quot;">​</a></h3><ul><li>メールフォームプロが使用できない場合のみ利用（確認画面はポップアップのみ）</li><li>確認画面付きは有料</li><li>Downloadサイト：<br><a href="https://www.1-firststep.com/archives/462" target="_blank" rel="noreferrer">https://www.1-firststep.com/archives/462</a></li><li>最新バージョンをダウンロードして使用すること</li><li>注意： <ul><li>確認画面は簡易ポップアップのみ</li><li>クライアント・ディレクターに確認画面がない旨を伝える</li><li>PHP対応サーバーでないと動作しない</li></ul></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("09-forms/9-1-mailform-pro-and-responsive.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _91MailformProAndResponsive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _91MailformProAndResponsive as default
};
