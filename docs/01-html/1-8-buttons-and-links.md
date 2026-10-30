# 1-8. buttonタグ・aタグについて

## `<button>`タグに関して

- JavaScriptで動作するインタラクティブな要素（モーダルを開く、タブ切り替えなど）や、フォームの送信ボタンに使用する。
- 判断基準：クリックしても**URLが変わらない動作**であること。

## `<a>`タグについて

- ページ遷移を伴う場合は`<a>`タグを使用する（**URLが変わるもの**はすべて`<a>`）。
- TOPへ戻るボタンやエントリーボタンの構築には必ず`<a>`を使用し、`<button>`は使用しない。
- aタグのクリック領域はボタン全体にかかるようにする。
- **`href`属性の正しく完璧な設定方法:**
  - **内部リンク（Internal link）:**
    - 下層ページなどでリンク切れが発生しないよう、原則としてルート相対パス（`/`から始まるパス）を使用する（例：`href="/about/"`）。
    - URLの末尾には必ずスラッシュ（トレイリングスラッシュ）を付与する（例：`href="/contact/"`とし、`href="/contact"`は避ける）。これにより、301リダイレクトを防ぎ、表示速度とSEOの向上につながります。
    - ローカル環境やテスト環境のドメイン（例：`http://localhost/...`）を直書き（ハードコード）しないこと。
  - **外部リンク（External link）:**
    - 必ず `https://` または `http://` から始まる完全なURLを記述する（例：`href="https://google.com"`）。
    - 外部リンクには必ず `target="_blank"` と `rel="noopener noreferrer"` をセットで記述すること。
  - **電話番号・メールのリンク（Tel & Mailto）:**
    - 電話番号: `href="tel:電話番号"` の形式を使用し、スペースやハイフンを含めないこと（例：テキスト表示が `03-1234-5678` であっても、`href="tel:0312345678"` とする）。
    - メール: `href="mailto:メールアドレス"` の形式を使用する（例：`href="mailto:info@example.com"`）。
  - **ページ内アンカーリンク（Anchor link）:**
    - 同一ページ内: `href="#アンカーID"` とする（例：`href="#contact"`）。
    - 別ページから特定のセクションへ遷移させる場合: ルート相対パス＋アンカーIDとする（例：`href="/#contact"` または `href="../#contact"`）。
  - **WordPress環境での記述方法:**
    - URLをハードコードせず、必ずWordPressの動的出力関数を使用すること：
      - ホームURL: `<?php echo esc_url( home_url( '/' ) ); ?>`
      - 固定ページや記事のリンク: `<?php echo esc_url( get_permalink( $page_id ) ); ?>`
      - テーマ内の静的ファイル（画像・CSS・JSなど）: `<?php echo esc_url( get_theme_file_uri( '/assets/images/logo.svg' ) ); ?>`
