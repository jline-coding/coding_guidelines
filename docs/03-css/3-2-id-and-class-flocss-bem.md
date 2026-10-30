# 3-2. ID・Classの使い分け（FLOCSS + BEM）

## ID・Classの使い分け

アンカーリンクの対象となる要素を除き、原則としてClassのみを使用してスタイリングします。

### IDについて

- 基本的にスタイル指定には使用しません。
- IDはアンカーリンクのジャンプ先など、HTMLの構造的な目的に限って使用します。
- IDの値は対象となるコンテンツ名を英訳した文字列を指定します。

### Classについて

- すべてのスタイル指定はClassを使用します。
- クラス名は以下のFLOCSS（BEM-based）ルールに従って命名します。

#### Class命名ルール — FLOCSS（BEM-based）

##### FLOCSSの概要

FLOCSSはCSSを役割ごとのレイヤー（層）に分ける設計手法です。各レイヤーにはprefix（接頭辞）を付けて、クラスの範囲と目的を明確にします。

| レイヤー | Prefix | 役割 | 例 |
|---------|--------|------|----|
| Foundation | _（prefixなし）_ | リセット、ベーススタイル、タイポグラフィ — HTML要素に直接適用 | `body{}`, `a{}`, `img{}` |
| Layout | `l-` | ページ全体の大枠レイアウト | `.l-header`, `.l-footer`, `.l-main`, `.l-sidebar` |
| Component | `c-` | 再利用可能な小さなUIパーツ | `.c-button`, `.c-card`, `.c-input`, `.c-nav` |
| Project | `p-` | プロジェクト固有の複合パーツ | `.p-news`, `.p-article-list`, `.p-hero` |
| Utility | `u-` | 単一目的のヘルパークラス | `.u-mt-10`, `.u-text-center`, `.u-hidden` |

##### BEM命名規則（Block / Element / Modifier）

各FLOCSSレイヤー内で、BEM規則に従ってクラス名を付けます：

- **Block**：ルートとなるコンポーネント — `{prefix}-{block-name}`
- **Element**：Blockの子要素。`__`（ダブルアンダースコア）で区切る — `{prefix}-{block}__element`
- **Modifier**：BlockまたはElementのバリエーション。`--`（ダブルハイフン）で区切る — `{prefix}-{block}--modifier` または `{prefix}-{block}__element--modifier`
- **単語の接続**：シングルハイフン `-` を使用 — `.c-global-nav`, `.p-news-list`

⚠️ 単語の接続にシングルアンダースコア `_` を使用**しない**こと。`_` はダブルアンダースコア `__`（Element区切り）内のみ使用されます。

```
/* 構文の概要 */
.{prefix}-{block}                     /* Block */
.{prefix}-{block}__{element}           /* Element */
.{prefix}-{block}--{modifier}          /* Block Modifier */
.{prefix}-{block}__{element}--{modifier} /* Element Modifier */
```

**実例：**

```css
/* Layout */
.l-header {}
.l-header__inner {}
.l-footer {}

/* Component */
.c-button {}
.c-button__icon {}
.c-button--primary {}
.c-button--large {}

/* Project */
.p-news {}
.p-news__list {}
.p-news__item {}
.p-news__title {}

/* Utility */
.u-mt-10 {}
.u-text-center {}
```

##### HTMLでのclass記述順

FLOCSSクラスを先に、Utilityクラスを後に記述します。

```html
<div class="p-news__item u-mt-10">
```

##### 命名の原則

- クラス名は見た目（色・太さ）ではなく、目的・役割・意味に基づいて命名します。
- 予測しやすく、他の開発者が見ても理解できる名称を設定します。
- **Elementのネスト（入れ子）は絶対に行わないでください**（`Block__Element__Element`は使用不可）。フラットで柔軟な構造を保つため、Elementは常に元のBlockにのみ属するようにします。DOMが複雑になる場合は、新しいBlockとして分離してください。

##### ネスト規則 — 詳細例

**① クラス名：フラットな構造を保つ（Elementのネスト禁止）**

```css
/* ❌ NG：Elementの中にElementをネストしている（BEMのルール違反） */
.p-news__list__item {} 
.p-news__item__title {}

/* ✅ OK：すべてのElementは元のBlockに直接属する */
.p-news__list {}
.p-news__item {} /* リストの中にあるかどうかに関わらず、p-newsに属する */
.p-news__title {}
```

**② DOMが深すぎる場合：新しいBlockに分離**

```html
<!-- ❌ NG：Elementの中にElementをネストしている（BEMのルール違反） -->
<div class="p-news">
   <ul class="p-news__list">
      <li class="p-news__list__item">
         <div class="p-news__list__item__meta">
            <span class="p-news__list__item__meta__date"></span>  <!-- 完全にNG -->
         </div>
      </li>
   </ul>
</div>
```

```html
<!-- ✅ OK：新しいBlock（.c-meta）として分離し、フラットな構造（.p-news__item）を維持する -->
<div class="p-news">
   <ul class="p-news__list">
      <li class="p-news__item">
         <div class="c-meta">                     <!-- 新しいBlock -->
            <span class="c-meta__date"></span>     <!-- 新しいBlockのElement -->
         </div>
      </li>
   </ul>
</div>
```

##### HTML例

```html
<!-- ❌ NG：prefixなし、アンダースコアで単語接続、深すぎるネスト -->
<div class="news">
   <ul class="news_list">
      <li class="news_list_item">
         <h3 class="news_list_item_title"></h3>
         <p class="news_list_item_lead"></p>
      </li>
   </ul>
</div>
```

```html
<!-- ✅ OK：FLOCSS + BEM -->
<div class="p-news">
   <ul class="p-news__list">
      <li class="p-news__item">
         <h3 class="p-news__title"></h3>
         <p class="p-news__lead"></p>
      </li>
   </ul>
</div>
```

```html
<!-- ✅ 別の例：ComponentとModifier -->
<a class="c-button c-button--primary" href="/contact/">
   <span class="c-button__label">お問い合わせ</span>
   <span class="c-button__icon"></span>
</a>
```

##### JavaScriptフック

- JavaScript用のクラスには `js-` prefixを使用します。
- `js-` クラスはスタイリングに使用**しない**こと。

```html
<button class="c-button c-button--primary js-modal-open">Open</button>
```

```js
const modalTrigger = '.js-modal-open';
```
