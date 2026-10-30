# 4-3. const / let の記述ルール

* 定数やDOMオブジェクトの割り当てには `const` を使用し、値が変更される変数には `let` を使用します。
* **DOMのキャッシュ:** 同じDOM要素を複数回操作する場合は、パフォーマンス最適化のため（ブラウザがHTML全体を再検索するのを防ぐため）、最初に検索したjQueryオブジェクトを変数に格納（キャッシュ）してください。jQueryオブジェクトを格納する変数名の先頭には、識別しやすいよう `$` を付けます。

```js
/* ❌ NG：使用するたびにDOMを再検索している（パフォーマンスの低下） */
$('.js-news-tab-btn').addClass('is-active');
$('.js-news-tab-btn').show();

/* ✅ OK：DOMを変数にキャッシュする（パフォーマンスの最適化） */
const $newsLink = $('.js-news-tab-btn'); // jQueryオブジェクトであることが分かるよう$を付ける
$newsLink.addClass('is-active');
$newsLink.show();
```
