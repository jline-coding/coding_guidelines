# 1-6. セレクタとプロパティ

- タイプセレクタ（要素名）+クラス名で記述しない。
  - bodyは除く  
    
    ```css
    /* NG */
    ul.c-global-nav{}

    /* OK */
    .c-global-nav{}
    ```
- 原則として、モジュール同士をネストするような**子孫セレクタによるスタイル指定（例: `.p-news .c-button {}`）は禁止**とする。
  - 理由: コンポーネントの独立性を損ない、詳細度（Specificity）が不要に高まるためFLOCSS/BEMの設計思想に反する。特定の場所でスタイルを変えたい場合は、Modifierクラス（例: `.c-button--news`）を使用すること。
  - **※例外として使用可能なケース:**
    1. **状態変化（State）:** JSなどで付与される `.is-active` や `.is-open` などの状態クラスを伴う場合。
    2. **CMS出力コンテンツ:** WordPressの `the_content()` など、BEMクラスを持たない生のHTMLタグが出力される箇所。親クラスで囲い、子タグを直接指定する。

    ```scss
    /* ❌ NG: モジュール同士のネスト、または冗長な指定（詳細度が上がる） */
    .p-news .c-button { ... } /* .c-buttonの独立性が失われる */
    .p-card .p-card__title { ... } /* 冗長な指定。SCSSの「&」を使うか、直接指定するべき */

    /* ✅ OK: SCSSの「&」を使った正しいBEMの書き方（コンパイル後も詳細度0,1,0を保つ） */
    .p-card {
      &__title { ... } /* コンパイル後: .p-card__title */
      &__image { ... } /* コンパイル後: .p-card__image */
    }

    /* ✅ OK: ネストの代わりとなるModifierの利用 */
    .c-button--news { ... }

    /* ✅ OK (例外 1): 状態変化 (.is-) の場合 */
    .c-button.is-active { ... } /* マルチクラス */
    .p-menu.is-open .p-menu__item { ... } /* 状態の影響範囲を限定するためのネスト */

    /* ✅ OK (例外 2): WordPressなどの動的出力コンテンツに対する指定 */
    .p-entry-content p { ... }
    .p-entry-content h2 { ... }
    ```
- すべてのプロパティの終端にはセミコロンを書く
- 別々のセレクタとプロパティは改行して書く
- 値が「0」のときは単位を省略する
