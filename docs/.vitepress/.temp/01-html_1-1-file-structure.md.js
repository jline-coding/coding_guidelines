import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-1. ファイル構成","description":"","frontmatter":{},"headers":[],"relativePath":"01-html/1-1-file-structure.md","filePath":"01-html/1-1-file-structure.md"}');
const _sfc_main = { name: "01-html/1-1-file-structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-1-ファイル構成" tabindex="-1">1-1. ファイル構成 <a class="header-anchor" href="#_1-1-ファイル構成" aria-label="Permalink to &quot;1-1. ファイル構成&quot;">​</a></h1><ul><li>下層ページはフォルダを作成しindex.html(index.ejs)を入れる。URLがスラッシュで終わるようにすること</li><li>assetsフォルダ内にcss images js vendorをいれる <ul><li>vendorフォルダにはスライダーなどのプラグインのjs,cssをいれる</li></ul></li><li>Sassファイルはサーバーにはアップしない</li><li>不要なファイルや画像はサーバー並びにローカル環境から削除する</li><li>WordPressの設置ディレクトリは、設置配下がWordPressの管理配下となるため、WordPressフォルダを作成しその中に入れる <ul><li>管理性を考慮してルート直下に index.php、.htaccess を設置し、WordPress本体は「wp-bridge2025」フォルダに格納すること。</li></ul></li></ul><h3 id="template-htmlのフォルダ構成" tabindex="-1">TEMPLATE_HTMLのフォルダ構成 <a class="header-anchor" href="#template-htmlのフォルダ構成" aria-label="Permalink to &quot;TEMPLATE_HTMLのフォルダ構成&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TEMPLATE_HTML/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── public/                      # 出力フォルダ（ビルド完了済みのHTML/CSS/JSコード）</span></span>
<span class="line"><span>│   ├── assets/                  # コンパイル・コピー済みの静的リソース</span></span>
<span class="line"><span>│   │   ├── css/                 # SCSSからコンパイルされたCSSファイル</span></span>
<span class="line"><span>│   │   ├── images/              # プロジェクトの画像</span></span>
<span class="line"><span>│   │   ├── js/                  # 静的JavaScriptファイル</span></span>
<span class="line"><span>│   │   └── vendor/              # サードパーティライブラリ（jQuery, GSAP, Swiper等）</span></span>
<span class="line"><span>│   ├── sample/                  # ビルド済みの下層ページ例</span></span>
<span class="line"><span>│   │   └── index.html</span></span>
<span class="line"><span>│   └── index.html               # トップページHTMLファイル（EJSからコンパイル）</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src/                         # メインの作業フォルダ（開発用）</span></span>
<span class="line"><span>│   ├── components/              # 再利用可能なEJSの部品（Partials）</span></span>
<span class="line"><span>│   │   ├── _header.ejs          # サイトのヘッダー</span></span>
<span class="line"><span>│   │   ├── _footer.ejs          # サイトのフッター</span></span>
<span class="line"><span>│   │   └── _sidebar.ejs         # サイドバー</span></span>
<span class="line"><span>│   ├── layouts/                 # 基本レイアウトのテンプレート</span></span>
<span class="line"><span>│   │   └── _default.ejs         # 全ページ共通のデフォルトレイアウト（&lt;html&gt;,&lt;head&gt;,&lt;body&gt;等）</span></span>
<span class="line"><span>│   └── pages/                   # 各ページのソース（ここの.ejsが1つのHTMLに出力される）</span></span>
<span class="line"><span>│       ├── assets/              # 未コンパイルのソース（SCSS、JS等）</span></span>
<span class="line"><span>│       ├── sample/              # 下層ページフォルダ例</span></span>
<span class="line"><span>│       │   └── index.ejs</span></span>
<span class="line"><span>│       └── index.ejs            # トップページのソースコード</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── scripts/                     # 自動化用スクリプト（ビルド、クリーン等）</span></span>
<span class="line"><span>│   ├── builders/                # 各タスク処理用のスクリプト</span></span>
<span class="line"><span>│   │   ├── assets.js            # assetsをpublicへコピー・最適化</span></span>
<span class="line"><span>│   │   ├── ejs.js               # EJSからHTMLへのコンパイル</span></span>
<span class="line"><span>│   │   └── scss.js              # SCSSからCSSへのコンパイル</span></span>
<span class="line"><span>│   ├── tools/                   # スクリプト用のサポートツール</span></span>
<span class="line"><span>│   │   ├── config.js            # ビルド用の設定ファイル（パス、環境等）</span></span>
<span class="line"><span>│   │   └── utils.js             # 再利用可能なユーティリティ関数</span></span>
<span class="line"><span>│   ├── build.js                 # プロジェクト全体のビルド実行用エントリーポイント</span></span>
<span class="line"><span>│   ├── clean.js                 # 再ビルド前にpublic/を削除（クリーン）するスクリプト</span></span>
<span class="line"><span>│   └── link.js                  # デプロイ・シンボリックリンク作成用スクリプト</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── __tests__/                   # 自動テスト用フォルダ</span></span>
<span class="line"><span>├── .github/                     # GitHub設定（GitHub Actions CI/CD等）</span></span>
<span class="line"><span>├── node_modules/                # インストールされたNode.jsライブラリ</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── deploy-config.json           # 自動デプロイ設定（FTP/SFTP情報、パス等）</span></span>
<span class="line"><span>├── package.json                 # プロジェクト情報と依存関係（npmライブラリ）の管理</span></span>
<span class="line"><span>├── package-lock.json            # node_modules内ライブラリの正確なバージョンロック</span></span>
<span class="line"><span>├── README.md                    # プロジェクトの使用・インストールマニュアル</span></span>
<span class="line"><span>├── .env                         # 環境変数（シークレットキー、ローカル情報等）</span></span>
<span class="line"><span>├── .env.example                 # .envに必要な変数のリストを含むサンプルファイル</span></span>
<span class="line"><span>├── .editorconfig                # エディタ用コードフォーマット標準設定（タブ・スペース等）</span></span>
<span class="line"><span>└── .gitignore                   # Gitにプッシュしないファイル・フォルダの設定</span></span></code></pre></div><h3 id="template-wpのフォルダ構成" tabindex="-1">TEMPLATE_WPのフォルダ構成 <a class="header-anchor" href="#template-wpのフォルダ構成" aria-label="Permalink to &quot;TEMPLATE_WPのフォルダ構成&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TEMPLATE_WP/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── .github/                     # GitHub Actionsの設定ファイル</span></span>
<span class="line"><span>│   └── workflows/               # 自動化スクリプト（CI/CD）</span></span>
<span class="line"><span>│       ├── deploy.yml           # サーバーへの自動デプロイスクリプト</span></span>
<span class="line"><span>│       └── release.yml          # 自動リリース作成スクリプト</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── public/                      # ローカルで実行されるWordPressコアのソースコード</span></span>
<span class="line"><span>│   ├── wp-admin/                # WP管理画面</span></span>
<span class="line"><span>│   ├── wp-content/              # テーマ、プラグイン、アップロードファイル（ローカル実行）</span></span>
<span class="line"><span>│   ├── wp-includes/             # WordPressのコアライブラリ</span></span>
<span class="line"><span>│   ├── wp-config.php            # データベース接続設定ファイル</span></span>
<span class="line"><span>│   └── ...                      # その他のWPシステムファイル（index.php, wp-login.php等）</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── scripts/                     # 開発・ビルド環境用の実行ファイル（Node.js）</span></span>
<span class="line"><span>│   ├── build.js                 # アセットのコンパイル（SCSSからCSSへ、JSのミニファイ等）</span></span>
<span class="line"><span>│   ├── clean.js                 # 古いビルドフォルダの削除・クリーンアップ</span></span>
<span class="line"><span>│   ├── download-wp.js           # 新しいWordPressコアソースをpublic/に自動ダウンロード</span></span>
<span class="line"><span>│   └── link.js                  # src/からpublic/のテーマフォルダへシンボリックリンクを作成</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src/                         # 🌟 メインの作業フォルダ - テーマのソースコード</span></span>
<span class="line"><span>│   ├── assets/                  # 未コンパイルの静的リソース</span></span>
<span class="line"><span>│   │   ├── images/              # テーマの画像</span></span>
<span class="line"><span>│   │   ├── js/                  # JavaScriptソースコード（ビルド対象）</span></span>
<span class="line"><span>│   │   ├── scss/                # SCSS形式のCSSソースコード（ビルド対象）</span></span>
<span class="line"><span>│   │   └── vendor/              # サードパーティライブラリ（jQuery, Swiper, GSAP等）</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── includes/                # 管理しやすいよう分割された機能ファイル（PHP）</span></span>
<span class="line"><span>│   │   ├── contactform.php      # お問い合わせフォームの処理コード</span></span>
<span class="line"><span>│   │   ├── editor-block-theme.php # Gutenbergブロックエディタのカスタム設定</span></span>
<span class="line"><span>│   │   ├── shortcode.php        # カスタムショートコードの登録</span></span>
<span class="line"><span>│   │   └── styles-scripts-all.php # CSS/JS読み込みの定義（wp_enqueue_scripts）</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── 404.php                  # 404 Not Found ページテンプレート</span></span>
<span class="line"><span>│   ├── archive.php              # 記事一覧ページテンプレート（カテゴリー、タグ等）</span></span>
<span class="line"><span>│   ├── footer.php               # 共通フッターテンプレート</span></span>
<span class="line"><span>│   ├── front-page.php           # トップページテンプレート</span></span>
<span class="line"><span>│   ├── functions.php            # テーマ設定と関数の定義（通常はincludes/から読み込む）</span></span>
<span class="line"><span>│   ├── header.php               # 共通ヘッダーテンプレート</span></span>
<span class="line"><span>│   ├── index.php                # WPのデフォルトフォールバックテンプレート</span></span>
<span class="line"><span>│   ├── page.php                 # 固定ページテンプレート（会社概要、お問い合わせ等）</span></span>
<span class="line"><span>│   ├── search.php               # 検索結果ページテンプレート</span></span>
<span class="line"><span>│   ├── single-news.php          # カスタム投稿タイプの詳細ページテンプレート（例：ニュース）</span></span>
<span class="line"><span>│   ├── style.css                # テーマ情報定義ファイル（テーマ名、作者等）</span></span>
<span class="line"><span>│   ├── taxonomy.php             # カスタム投稿タイプのタクソノミーテンプレート</span></span>
<span class="line"><span>│   └── theme.json               # ブロックテーマのグローバルスタイル設定（色、フォント等）</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── node_modules/                # package.jsonからインストールされたNode.jsライブラリ</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── .env                         # 個人の環境変数（DB接続、URL） - Gitにプッシュしない</span></span>
<span class="line"><span>├── .env.example                 # 必要な環境変数のリストを含むサンプルファイル</span></span>
<span class="line"><span>├── .gitignore                   # Gitにプッシュしないファイル・フォルダの設定（node_modules/, public/, .env等）</span></span>
<span class="line"><span>├── deploy-config.json           # サーバーへのデプロイ用設定ファイル</span></span>
<span class="line"><span>├── package.json                 # プロジェクト情報とnpmコマンド/スクリプトの定義</span></span>
<span class="line"><span>├── package-lock.json            # Node.jsライブラリの正確なバージョンロック</span></span>
<span class="line"><span>└── README.md                    # プロジェクトの使用・インストールマニュアル</span></span></code></pre></div><blockquote><p><strong>注意:</strong></p><ul><li>コーディングや設定の変更は、<code>src/</code> フォルダ内、<code>.env</code> ファイル、および <code>deploy-config.json</code> でのみ行ってください。</li><li><code>public/</code>、<code>node_modules/</code>、<code>scripts/</code> などのフォルダやその他のシステムファイルは直接編集しないでください。ビルド時にデータが失われたり、テンプレートの標準構造が壊れる原因となります。</li></ul></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01-html/1-1-file-structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11FileStructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11FileStructure as default
};
