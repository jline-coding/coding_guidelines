# 4-2. 記述について

* 記述は保守を考え統一すること（スペース、クォーテーションなど）。WordPress環境での競合を避けるため、`jQuery(function($) { ... })` の中で `$` を使用する書き方で統一します。

```js
/* ❌ NG：記述が不統一（$とjQueryの混在、スペースの有無） */
$(window).on('scroll', function(){});
jQuery(window).on('scroll',function(){})

/* ✅ OK：記述を統一し、安全なラッパー（safe wrapper）を使用 */
jQuery(function($) {
  $(window).on('scroll', function() {
    // スクロール処理
  });
});
```

### 実践的な原則

- **プロジェクトがjQueryベースの場合**：jQueryが得意とする処理（イベント、DOM操作、AJAXなど）は、一貫してjQueryで記述することを優先します。
- **Vanilla JS（ピュアなJavaScript）は、明確な理由がある場合にのみ使用します**。例：
  - パフォーマンスの最適化（重いスクロール処理やアニメーションなど）
  - jQueryが十分にサポートしていない新しいAPIを使用する場合
  - jQueryに依存しない独立した新規コードを書く場合
