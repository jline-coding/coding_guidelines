import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"8-1. 構築方法に関して","description":"","frontmatter":{},"headers":[],"relativePath":"08-wordpress/8-1-build-method.md","filePath":"08-wordpress/8-1-build-method.md"}');
const _sfc_main = { name: "08-wordpress/8-1-build-method.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-1-構築方法に関して" tabindex="-1">8-1. 構築方法に関して <a class="header-anchor" href="#_8-1-構築方法に関して" aria-label="Permalink to &quot;8-1. 構築方法に関して&quot;">​</a></h1><ul><li><p>「wp2026」などフォルダを作成し、その中にWordpressを設置する</p></li><li><p>プロジェクトのメイン開発担当者は、WordPress管理画面用に以下の2つの管理者（Administrator）アカウントを作成してください：</p><ul><li><strong>マスターアカウント（メインアカウント）:</strong> WordPressセットアップ時に作成。 <ul><li>アカウント名（例）: <code>master-[タスク名]</code>（例：<code>master-lp-renewal</code>）</li><li>言語設定: <strong>日本語</strong>（デフォルト）</li><li>メールアドレス: <code>kensyo@j-line.co.jp</code></li></ul></li><li><strong>開発用（dev）アカウント:</strong> ベトナムチームが開発作業で使用するアカウント。 <ul><li>アカウント名（例）: <code>dev-[タスク名]</code>（例：<code>dev-lp-renewal</code>）</li><li>メールアドレス: 会社から支給された個人のメールアドレス</li><li>言語設定: 開発者が最も作業しやすい言語を自由に設定可能</li></ul></li></ul></li><li><p>指定がない限りは配布テンプレートは使用せずにオリジナルテーマを作成し、phpファイルで構築する</p></li><li><p>テーマ名は案件名を使用すること</p></li><li><p>WP管理画面のエディタにコードは記入せず、phpファイルにコードを記述すること</p><ul><li>（例）page-[ディレクトリ].php</li></ul></li><li><p>アイキャッチ画像はフルサイズ出力ではなく、デザインのサイズにあわせて中央からトリミング表示とする</p></li><li><p>アイキャッチ画像の動作確認の際は表示サイズより大きい画像と、小さい画像で確認する</p></li><li><p>サムネイル画像を一覧表示させる際、容量が多くならないようメディア設定を必ず行うこと。</p><ul><li>参考サイト：<a href="https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/" target="_blank" rel="noreferrer">https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/</a></li></ul></li><li><p>ブログなどで記事に写真がない場合はnoimageのダミー画像を入れる</p></li><li><p>ダミー画像はテンプレートページにあります</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("08-wordpress/8-1-build-method.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _81BuildMethod = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _81BuildMethod as default
};
