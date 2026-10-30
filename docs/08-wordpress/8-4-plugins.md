# 8-4. プラグインに関して

ジェイ・ラインでは下記のプラグインを推奨しています。

### フィールドごとに項目を分ける際

- ［Advanced Custom Fields］  
  [https://ja.wordpress.org/plugins/advanced-custom-fields/](https://ja.wordpress.org/plugins/advanced-custom-fields/)  
  Proのプラグインデータはdropboxに格納しているのでご使用ください。

### 投稿タイプを作成する際

- **Advanced Custom Fields（ACF）** に組み込まれているPost Type / Taxonomy登録機能をそのまま使用してください。プラグインの導入数を減らし、一元管理が可能になります（Custom Post Type UIは不要です）。
- phpファイルで投稿タイプを作成するでも可

### 記事・カテゴリなどの視覚的な並び替えの際

- ［Intuitive Custom Post Order］  
  [https://hijiriworld.com/web/plugins/intuitive-custom-post-order/](https://hijiriworld.com/web/plugins/intuitive-custom-post-order/)

### フォーム作成の際

- ［Contact Form 7］  
  [https://ja.wordpress.org/plugins/contact-form-7/](https://ja.wordpress.org/plugins/contact-form-7/)  
- [詳しくはこちら](https://www.jlweb.jp/coding/basic/form/)
- **［Contact Form 7 Auto Generator (import_form_cf7.php)］**
  - **目的:** 静的なHTMLフォームをContact Form 7の標準ショートコードに自動変換し、メールテンプレートも自動生成します。
  - **使用方法:**
    1. テーマ内で `import_form_cf7.php` が読み込まれていることを確認します。
    2. HTMLテンプレートファイル内で、各項目の見出しタグに `wpf-title` クラスを付与し、利用規約等の同意チェックボックスの親要素に `wpf-acceptance` クラスを付与します。
    3. WordPressの管理画面から **お問い合わせ (Contact)** 画面を開きます。
    4. 画面右上の **表示オプション (Screen Options)** を開き、「**Template Importer Tool**」にチェックを入れます。
    5. フォーム一覧の下にあるツールパネルで、以下の項目を入力・選択します:
       - **Form Name**: 作成するフォームの名前。
       - **Template File**: 変換するHTMLフォームを含むテンプレートファイル。
       - **Form Class Selector**: 変換対象となるフォームエリアのクラス名またはID。
       その後、「**Generate Form**」ボタンをクリックします。
    6. フォームとメールテンプレートが自動生成されます。生成されたショートコードをコピーし、テンプレートファイルに貼り付けて完了です。

### データの移行をする際

- ［WPvivid］  
  [https://ja.wordpress.org/plugins/wpvivid-backuprestore/](https://ja.wordpress.org/plugins/wpvivid-backuprestore/)  


### ログインセキュリティ

- 「SiteGuard WP Plugin」  
  [https://ja.wordpress.org/plugins/siteguard/](https://ja.wordpress.org/plugins/siteguard/)  
- ログインセキュリティのプラグインは必ず設置すること

### SEO/OGP関連

- 「SEO SIMPLE PACK」  
  [https://ja.wordpress.org/plugins/seo-simple-pack/](https://ja.wordpress.org/plugins/seo-simple-pack/)  
- SEO系のタグやOGPタグを設置する際に使用します。
