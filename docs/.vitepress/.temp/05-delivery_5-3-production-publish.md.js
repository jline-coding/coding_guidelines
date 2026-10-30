import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"5-3. 本番公開（公開作業）","description":"","frontmatter":{},"headers":[],"relativePath":"05-delivery/5-3-production-publish.md","filePath":"05-delivery/5-3-production-publish.md"}');
const _sfc_main = { name: "05-delivery/5-3-production-publish.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_5-3-本番公開-公開作業" tabindex="-1">5-3. 本番公開（公開作業） <a class="header-anchor" href="#_5-3-本番公開-公開作業" aria-label="Permalink to &quot;5-3. 本番公開（公開作業）&quot;">​</a></h1><ul><li><p>案件発生時には以下を確認。 ・クライアントのFTP情報 ・接続テスト ・アップ場所 ・旧データはサーバから削除するかどうかをディレクターに確認</p></li><li><p>静的サイトの場合、古いデータはサーバー内に[old]フォルダを作成しその中に収納する。またバックアップをとってdropboxに[old]フォルダを作成し保管する。</p></li><li><p>アップ後、サイトに問題がないか<a href="https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0" target="_blank" rel="noreferrer">「チェックリスト」</a>を使って確認する</p></li></ul><p><strong>WordPressの場合</strong></p><ul><li>古いWPは<a href="https://ja.wordpress.org/plugins/wpvivid-backuprestore/" target="_blank" rel="noreferrer">「WPvivid」</a>データとphpファイルの両方のバックアップをとりdropboxに保管 <ul><li>※クライアントに確認が取れ次第、古いデータはサーバー内から削除</li></ul></li></ul><p><strong>クライアントのサーバーで公開作業ができる場合</strong></p><ol><li>サイトURLを変更し公開。wpフォルダから直下へディレクトリを移す → <a href="https://www.cloud9works.net/web/how-to-change-wordpress-directory/" target="_blank" rel="noreferrer">参考サイト</a></li></ol><p><strong>ジェイ・ラインのテストサーバーで作業したものを移す場合</strong></p><ol><li>クライアントのサーバーにWPをインストール、テストWPの情報を「WPvivid」を使って移行</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05-delivery/5-3-production-publish.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _53ProductionPublish = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _53ProductionPublish as default
};
