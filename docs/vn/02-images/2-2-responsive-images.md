# 2-2. Về hình ảnh responsive

- Những hình ảnh được sử dụng cho cả PC/SP  nên dùng chung một file nếu có thể
- Tuy nhiên, trong các trường hợp First View hoặc Main Visual có bố cục thay đổi nhiều, hoặc là banner dạng ngang trên PC nhưng dạng dọc trên SP thì cần tách riêng hình ảnh PC/SP
- Trong những trường hợp cần tách riêng, hãy sử dụng thẻ `<picture>` để chuyển đổi giữa PC/SP

```
<picture>
  <source media="(max-width: 767px)" srcset="img_kv_sp.webp">
  <img src="img_kv_pc.webp" alt="ファーストビューの画像">
</picture>
```
