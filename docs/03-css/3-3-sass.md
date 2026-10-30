# 3-3. Sassについて

* Sassの規則は「Sassマニュアル」に沿ってコーディングする  


**※ テンプレートに適用されるSCSS構造ルール:**
- 現在のテンプレートはDart Sassのモジュール構造（FLOCSS / 7-1パターン）を採用しており、`foundation`（リセット、ベース）、`layout`（ヘッダー、フッター）、`component`（UIコンポーネント）、`page`（ページ個別のスタイル）、`global`（変数、mixin）、`utilities` のディレクトリに分割されています。
- **`@import` は絶対に使用しないでください。** 代わりに `@use` と `@forward` を使用します。
- `global` ディレクトリには色（`_color.scss`）、フォント（`_font.scss`）、mixin（`_mixin.scss`）などが定義されており、`_index.scss` を通じて `@forward` でまとめられています。これらの変数/mixinを使用するには、各SCSSファイルの先頭で `@use "../global" as *;` のように読み込みます。共通変数の設定は必ずこの `global` 内で行ってください。
- `common.scss` や `top.scss` などの上位ファイルは、`@use` を使ってモジュールを読み込む役割のみを持ちます。これらのファイルには直接CSSを記述しないでください。
