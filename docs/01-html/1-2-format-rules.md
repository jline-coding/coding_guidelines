# 1-2. フォーマット規則

- タグ、class名やID名に大文字を使用しない。クラス名はFLOCSS + BEMの命名規則に従うこと：
  - シングルハイフン `-` ：単語間の区切りに使用（例：`.c-global-nav`, `.p-news-list`）
  - ダブルアンダースコア `__` ：Elementの区切りに使用（例：`.p-news__title`）
  - ダブルハイフン `--` ：Modifierの区切りに使用（例：`.c-button--primary`）
  - FLOCSSレイヤーのprefix：`l-`（Layout）, `c-`（Component）, `p-`（Project）, `u-`（Utility）
  - 例：`.l-header`, `.c-global-nav`, `.p-news-list`, `.u-text-center`
  - （詳細は「Class命名ルール」セクションを参照）
- 入れ子時は字下げし、誰が見ても構造を理解しやすいソースにする
- 文末やテキスト間の余計なスペースは削除する
- 必要に応じてコメントを活用する  
  `開始時：<!-- ↓↓container↓↓ -->`  
  `終了時：<!-- ↑↑container↑↑ -->`
