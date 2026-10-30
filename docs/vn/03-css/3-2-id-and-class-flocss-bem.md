# 3-2. Phân biệt ID và Class (FLOCSS + BEM)

## Phân biệt ID và Class

Ngoại trừ các phần tử dùng làm anchor link, nguyên tắc chung là chỉ sử dụng Class để styling

### Về ID

- Không sử dụng ID để định nghĩa style
- Chỉ sử dụng ID cho mục đích cấu trúc HTML, ví dụ: đích đến của anchor link
- Giá trị của ID phải là chuỗi tiếng Anh tương ứng với tên nội dung

### Về Class

- Tất cả các style phải được định nghĩa bằng Class
- Tên class phải tuân theo quy tắc FLOCSS (BEM-based) được mô tả dưới đây

#### Quy tắc đặt tên Class — FLOCSS (BEM-based)

##### Tổng quan FLOCSS

FLOCSS chia CSS thành các lớp (layer) có vai trò rõ ràng. Mỗi lớp sử dụng một prefix (tiền tố) riêng để phân biệt phạm vi và mục đích của class.

| Layer | Prefix | Vai trò | Ví dụ |
|-------|--------|---------|-------|
| Foundation | _(không có prefix)_ | Reset, base styles, typography — áp dụng trực tiếp lên thẻ HTML | `body{}`, `a{}`, `img{}` |
| Layout | `l-` | Cấu trúc bố cục lớn của trang | `.l-header`, `.l-footer`, `.l-main`, `.l-sidebar` |
| Component | `c-` | Thành phần UI nhỏ, tái sử dụng được ở nhiều nơi | `.c-button`, `.c-card`, `.c-input`, `.c-nav` |
| Project | `p-` | Thành phần đặc thù theo ngữ cảnh dự án, gồm nhiều component | `.p-news`, `.p-article-list`, `.p-hero` |
| Utility | `u-` | Class tiện ích đơn mục đích, dùng để ghi đè nhỏ | `.u-mt-10`, `.u-text-center`, `.u-hidden` |

##### Quy tắc BEM (Block / Element / Modifier)

Trong mỗi lớp FLOCSS, áp dụng quy tắc BEM để đặt tên class:

- **Block**: Thành phần gốc — `{prefix}-{block-name}`
- **Element**: Thành phần con của Block, phân tách bằng `__` (double underscore) — `{prefix}-{block}__element`
- **Modifier**: Biến thể của Block hoặc Element, phân tách bằng `--` (double hyphen) — `{prefix}-{block}--modifier` hoặc `{prefix}-{block}__element--modifier`
- **Nối từ**: Dùng dấu gạch ngang đơn `-` (single hyphen) — `.c-global-nav`, `.p-news-list`

⚠️ **KHÔNG** dùng underscore đơn `_` để nối từ. Dấu `_` chỉ xuất hiện trong cặp `__` (double underscore) để phân tách Element.

```
/* Cú pháp tổng quát */
.{prefix}-{block}                     /* Block */
.{prefix}-{block}__{element}           /* Element */
.{prefix}-{block}--{modifier}          /* Block Modifier */
.{prefix}-{block}__{element}--{modifier} /* Element Modifier */
```

**Ví dụ thực tế:**

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

##### Thứ tự viết class trong HTML

Ghi class theo thứ tự: FLOCSS class trước, utility class sau

```html
<div class="p-news__item u-mt-10">
```

##### Nguyên tắc đặt tên

- Tên class không đặt theo hình thức bên ngoài (màu sắc, độ đậm…), mà phải đặt dựa trên mục đích, vai trò và ý nghĩa
- Tên class phải dễ đoán và dễ hiểu, để developer khác khi nhìn vào có thể hiểu ngay
- **Tuyệt đối không lồng Element vào Element** (không sử dụng `Block__Element__Element`). Một Element chỉ được phép trực thuộc Block gốc để giữ cấu trúc phẳng và linh hoạt. Nếu DOM quá phức tạp, hãy tách thành Block mới.

##### Quy tắc nest — ví dụ chi tiết

**① Tên class: Cấu trúc phẳng, không lồng Element**

```css
/* ❌ SAI: Lồng Element vào Element (vi phạm chuẩn BEM) */
.p-news__list__item {} 
.p-news__item__title {}

/* ✅ ĐÚNG: Mọi Element chỉ trực thuộc Block gốc */
.p-news__list {}
.p-news__item {} /* Trực thuộc p-news, không quan tâm nó nằm trong list hay không */
.p-news__title {}
```

**② Khi DOM lồng quá sâu: tách thành Block mới**

```html
<!-- ❌ SAI: Lồng Element vào Element (Sai quy tắc BEM) -->
<div class="p-news">
   <ul class="p-news__list">
      <li class="p-news__list__item">
         <div class="p-news__list__item__meta">
            <span class="p-news__list__item__meta__date"></span>  <!-- Sai hoàn toàn -->
         </div>
      </li>
   </ul>
</div>
```

```html
<!-- ✅ ĐÚNG: Tách thành Block mới (.c-meta) và giữ Element phẳng (.p-news__item) -->
<div class="p-news">
   <ul class="p-news__list">
      <li class="p-news__item">
         <div class="c-meta">                     <!-- Đã tách thành Block mới -->
            <span class="c-meta__date"></span>     <!-- Element của Block mới -->
         </div>
      </li>
   </ul>
</div>
```

##### Ví dụ HTML

```html
<!-- ❌ SAI: thiếu prefix, dùng underscore nối từ, nest quá sâu -->
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
<!-- ✅ OK: FLOCSS + BEM -->
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
<!-- ✅ Ví dụ khác: Component với Modifier -->
<a class="c-button c-button--primary" href="/contact/">
   <span class="c-button__label">お問い合わせ</span>
   <span class="c-button__icon"></span>
</a>
```

##### JavaScript hook

- Khi cần gán class cho xử lý JavaScript, sử dụng prefix `js-` riêng biệt
- Class `js-` **không được** dùng để styling

```html
<button class="c-button c-button--primary js-modal-open">Open</button>
```

```js
const modalTrigger = '.js-modal-open';
```
