import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11-1. 公開作業時（リダイレクト作業・WPプラグイン）","description":"","frontmatter":{},"headers":[],"relativePath":"11-launch-and-templates/11-1-redirect-and-ssl.md","filePath":"11-launch-and-templates/11-1-redirect-and-ssl.md"}');
const _sfc_main = { name: "11-launch-and-templates/11-1-redirect-and-ssl.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-1-公開作業時-リダイレクト作業・wpプラグイン" tabindex="-1">11-1. 公開作業時（リダイレクト作業・WPプラグイン） <a class="header-anchor" href="#_11-1-公開作業時-リダイレクト作業・wpプラグイン" aria-label="Permalink to &quot;11-1. 公開作業時（リダイレクト作業・WPプラグイン）&quot;">​</a></h1><h2 id="公開作業時" tabindex="-1">公開作業時 <a class="header-anchor" href="#公開作業時" aria-label="Permalink to &quot;公開作業時&quot;">​</a></h2><h3 id="リダイレクト作業に関して" tabindex="-1">リダイレクト作業に関して <a class="header-anchor" href="#リダイレクト作業に関して" aria-label="Permalink to &quot;リダイレクト作業に関して&quot;">​</a></h3><ul><li>基本は<code>.htaccess</code>でリダイレクト設定</li><li>リニューアルの場合、旧サイトと同じ役割で且つ、ディレクトリが変わったページのリダイレクト作業を行う<br><a href="https://docs.google.com/spreadsheets/d/1tvqfKhwBKZzJ4tfdFtiqOZS0i336dTGzRyVek49CWdg/edit?gid=882195015#gid=882195015" target="_blank" rel="noreferrer">リダイレクトシート活用</a></li><li>旧サイトにのみあるディレクトリのページは404のエラーページへ飛ぶように設定する。</li><li><code>http</code>から<code>https</code>へのリダイレクト作業を行う（SSL設定がされているかどうか確認する）</li><li><code>www</code>あり、無しのリダイレクト作業</li><li>新規ドメインの場合は、<code>www</code>無しで統一。既存ドメインの場合は今の仕様に合わせる。</li><li>⚠️ クライアントの希望によってリダイレクト作業を実施</li></ul><h3 id="wpのプラグイン" tabindex="-1">WPのプラグイン <a class="header-anchor" href="#wpのプラグイン" aria-label="Permalink to &quot;WPのプラグイン&quot;">​</a></h3><div class="table-wrap"><table tabindex="0"><thead><tr><th>用途</th><th>プラグイン名</th></tr></thead><tbody><tr><td><code>http → https</code>の切り替えや<code>.htaccess</code>でエラーが出る場合に使用</td><td><a href="https://ja.wordpress.org/plugins/really-simple-ssl/" target="_blank" rel="noreferrer">Really Simple SSL</a></td></tr></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("11-launch-and-templates/11-1-redirect-and-ssl.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _111RedirectAndSsl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _111RedirectAndSsl as default
};
