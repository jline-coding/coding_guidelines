# 1-1. ファイル構成

- 下層ページはフォルダを作成しindex.html(index.ejs)を入れる。URLがスラッシュで終わるようにすること
- assetsフォルダ内にcss images js vendorをいれる
  - vendorフォルダにはスライダーなどのプラグインのjs,cssをいれる
- Sassファイルはサーバーにはアップしない
- 不要なファイルや画像はサーバー並びにローカル環境から削除する
- WordPressの設置ディレクトリは、設置配下がWordPressの管理配下となるため、WordPressフォルダを作成しその中に入れる
  - 管理性を考慮してルート直下に index.php、.htaccess を設置し、WordPress本体は「wp-bridge2025」フォルダに格納すること。

### TEMPLATE_HTMLのフォルダ構成

```text
TEMPLATE_HTML/
│
├── public/                      # 出力フォルダ（ビルド完了済みのHTML/CSS/JSコード）
│   ├── assets/                  # コンパイル・コピー済みの静的リソース
│   │   ├── css/                 # SCSSからコンパイルされたCSSファイル
│   │   ├── images/              # プロジェクトの画像
│   │   ├── js/                  # 静的JavaScriptファイル
│   │   └── vendor/              # サードパーティライブラリ（jQuery, GSAP, Swiper等）
│   ├── sample/                  # ビルド済みの下層ページ例
│   │   └── index.html
│   └── index.html               # トップページHTMLファイル（EJSからコンパイル）
│
├── src/                         # メインの作業フォルダ（開発用）
│   ├── components/              # 再利用可能なEJSの部品（Partials）
│   │   ├── _header.ejs          # サイトのヘッダー
│   │   ├── _footer.ejs          # サイトのフッター
│   │   └── _sidebar.ejs         # サイドバー
│   ├── layouts/                 # 基本レイアウトのテンプレート
│   │   └── _default.ejs         # 全ページ共通のデフォルトレイアウト（<html>,<head>,<body>等）
│   └── pages/                   # 各ページのソース（ここの.ejsが1つのHTMLに出力される）
│       ├── assets/              # 未コンパイルのソース（SCSS、JS等）
│       ├── sample/              # 下層ページフォルダ例
│       │   └── index.ejs
│       └── index.ejs            # トップページのソースコード
│
├── scripts/                     # 自動化用スクリプト（ビルド、クリーン等）
│   ├── builders/                # 各タスク処理用のスクリプト
│   │   ├── assets.js            # assetsをpublicへコピー・最適化
│   │   ├── ejs.js               # EJSからHTMLへのコンパイル
│   │   └── scss.js              # SCSSからCSSへのコンパイル
│   ├── tools/                   # スクリプト用のサポートツール
│   │   ├── config.js            # ビルド用の設定ファイル（パス、環境等）
│   │   └── utils.js             # 再利用可能なユーティリティ関数
│   ├── build.js                 # プロジェクト全体のビルド実行用エントリーポイント
│   ├── clean.js                 # 再ビルド前にpublic/を削除（クリーン）するスクリプト
│   └── link.js                  # デプロイ・シンボリックリンク作成用スクリプト
│
├── __tests__/                   # 自動テスト用フォルダ
├── .github/                     # GitHub設定（GitHub Actions CI/CD等）
├── node_modules/                # インストールされたNode.jsライブラリ
│
├── deploy-config.json           # 自動デプロイ設定（FTP/SFTP情報、パス等）
├── package.json                 # プロジェクト情報と依存関係（npmライブラリ）の管理
├── package-lock.json            # node_modules内ライブラリの正確なバージョンロック
├── README.md                    # プロジェクトの使用・インストールマニュアル
├── .env                         # 環境変数（シークレットキー、ローカル情報等）
├── .env.example                 # .envに必要な変数のリストを含むサンプルファイル
├── .editorconfig                # エディタ用コードフォーマット標準設定（タブ・スペース等）
└── .gitignore                   # Gitにプッシュしないファイル・フォルダの設定
```

### TEMPLATE_WPのフォルダ構成

```text
TEMPLATE_WP/
│
├── .github/                     # GitHub Actionsの設定ファイル
│   └── workflows/               # 自動化スクリプト（CI/CD）
│       ├── deploy.yml           # サーバーへの自動デプロイスクリプト
│       └── release.yml          # 自動リリース作成スクリプト
│
├── public/                      # ローカルで実行されるWordPressコアのソースコード
│   ├── wp-admin/                # WP管理画面
│   ├── wp-content/              # テーマ、プラグイン、アップロードファイル（ローカル実行）
│   ├── wp-includes/             # WordPressのコアライブラリ
│   ├── wp-config.php            # データベース接続設定ファイル
│   └── ...                      # その他のWPシステムファイル（index.php, wp-login.php等）
│
├── scripts/                     # 開発・ビルド環境用の実行ファイル（Node.js）
│   ├── build.js                 # アセットのコンパイル（SCSSからCSSへ、JSのミニファイ等）
│   ├── clean.js                 # 古いビルドフォルダの削除・クリーンアップ
│   ├── download-wp.js           # 新しいWordPressコアソースをpublic/に自動ダウンロード
│   └── link.js                  # src/からpublic/のテーマフォルダへシンボリックリンクを作成
│
├── src/                         # 🌟 メインの作業フォルダ - テーマのソースコード
│   ├── assets/                  # 未コンパイルの静的リソース
│   │   ├── images/              # テーマの画像
│   │   ├── js/                  # JavaScriptソースコード（ビルド対象）
│   │   ├── scss/                # SCSS形式のCSSソースコード（ビルド対象）
│   │   └── vendor/              # サードパーティライブラリ（jQuery, Swiper, GSAP等）
│   │
│   ├── includes/                # 管理しやすいよう分割された機能ファイル（PHP）
│   │   ├── contactform.php      # お問い合わせフォームの処理コード
│   │   ├── editor-block-theme.php # Gutenbergブロックエディタのカスタム設定
│   │   ├── shortcode.php        # カスタムショートコードの登録
│   │   └── styles-scripts-all.php # CSS/JS読み込みの定義（wp_enqueue_scripts）
│   │
│   ├── 404.php                  # 404 Not Found ページテンプレート
│   ├── archive.php              # 記事一覧ページテンプレート（カテゴリー、タグ等）
│   ├── footer.php               # 共通フッターテンプレート
│   ├── front-page.php           # トップページテンプレート
│   ├── functions.php            # テーマ設定と関数の定義（通常はincludes/から読み込む）
│   ├── header.php               # 共通ヘッダーテンプレート
│   ├── index.php                # WPのデフォルトフォールバックテンプレート
│   ├── page.php                 # 固定ページテンプレート（会社概要、お問い合わせ等）
│   ├── search.php               # 検索結果ページテンプレート
│   ├── single-news.php          # カスタム投稿タイプの詳細ページテンプレート（例：ニュース）
│   ├── style.css                # テーマ情報定義ファイル（テーマ名、作者等）
│   ├── taxonomy.php             # カスタム投稿タイプのタクソノミーテンプレート
│   └── theme.json               # ブロックテーマのグローバルスタイル設定（色、フォント等）
│
├── node_modules/                # package.jsonからインストールされたNode.jsライブラリ
│
├── .env                         # 個人の環境変数（DB接続、URL） - Gitにプッシュしない
├── .env.example                 # 必要な環境変数のリストを含むサンプルファイル
├── .gitignore                   # Gitにプッシュしないファイル・フォルダの設定（node_modules/, public/, .env等）
├── deploy-config.json           # サーバーへのデプロイ用設定ファイル
├── package.json                 # プロジェクト情報とnpmコマンド/スクリプトの定義
├── package-lock.json            # Node.jsライブラリの正確なバージョンロック
└── README.md                    # プロジェクトの使用・インストールマニュアル
```

> **注意:**
> - コーディングや設定の変更は、`src/` フォルダ内、`.env` ファイル、および `deploy-config.json` でのみ行ってください。
> - `public/`、`node_modules/`、`scripts/` などのフォルダやその他のシステムファイルは直接編集しないでください。ビルド時にデータが失われたり、テンプレートの標準構造が壊れる原因となります。
