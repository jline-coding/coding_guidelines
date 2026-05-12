# J-Line Web Marketing - Coding Guidelines

## Mục đích của Guideline này

Guideline này là quy định nội bộ nhằm giúp tất cả thành viên trong bộ phận Web Marketing của Công ty J-Line có thể thực hiện công việc sản xuất website một cách thống nhất, không gặp lúng túng và đảm bảo chất lượng cao trong quá trình coding.

Không chỉ đặt mục tiêu tái hiện lại design, tài liệu này còn tổng hợp các nguyên tắc và tư duy nhằm mang lại trải nghiệm thoải mái cho người dùng, cấu trúc dễ quản lý cho người cập nhật nội dung, đồng thời nâng cao năng suất làm việc của toàn bộ team.

Thông qua việc áp dụng guideline này, chúng tôi hướng tới việc đạt được các trạng thái sau:

- Đảm bảo chất lượng ổn định, bất kể ai là người phụ trách
- Loại bỏ sự phụ thuộc vào cá nhân nhờ cấu trúc rõ ràng, dễ đọc
- Giảm thiểu thời gian review và xác nhận bàn giao
- Xây dựng nền tảng vững chắc cho việc chỉnh sửa, vận hành và tái sử dụng cho các dự án trong tương lai
  
## Tư duy cơ bản

- Thực hiện markup chính xác, tuân thủ theo tiêu chuẩn HTML của W3C
- Các thẻ không mang ý nghĩa (như div, span…) chỉ sử dụng cho mục đích layout; tránh lồng (nest) quá nhiều hoặc tạo wrapper không cần thiết. Cần chú ý đến cấu trúc ngữ nghĩa của HTML và chủ động sử dụng các thẻ semantic khi phù hợp.
- Design cấu trúc không bị vỡ khi nội dung tăng hoặc giảm.
- Không chỉ tái hiện lại design, mà còn phải code theo hướng dễ cập nhật và dễ vận hành.
- Cân nhắc môi trường truy cập của người dùng, đảm bảo layout không bị vỡ theo độ rộng container.
- Khi upload bản test, phải ở trạng thái tương đương với lúc công khai chính thức.

※※ Trừ trường hợp thiếu hình ảnh chụp hoặc nội dung, khi upload bản test không được để lại dummy text hoặc dummy image.
※Nếu có khả năng phát sinh chậm tiến độ, cần báo cáo ngay cho Director phụ trách và Coding Leader.


# Các thành phần cơ bản

## Liên quan đến HTML

### Cấu trúc file

- Đối với các trang con, tạo folder riêng và đặt file index.html(index.ejs) bên trong. URL phải kết thúc bằng dấu / （ https://github.com/jline-coding/TEMPLATE_HTML/tree/master/src/pages ）
- Thêm các thư mục css, images, js, vendor bên trong thư mục assets.
  - Trong thư mục vendor, thêm các file js, css của plugin bên ngoài như slider, v.v.
- Không upload file Sass lên server.
- Xóa các file hoặc hình ảnh không cần thiết khỏi cả server và môi trường local.
- Vì toàn bộ thư mục cài đặt sẽ nằm dưới sự quản lý của WordPress, cần tạo một folder riêng cho WordPress và đặt toàn bộ vào trong đó.
  - Để đảm bảo tính quản lý, đặt index.php và .htaccess trực tiếp dưới thư mục root. Phần core của WordPress sẽ được lưu trong folder /wp-bridge2025/.
[ví dụ cấu trúc folder](https://github.com/jline-coding/TEMPLATE_WP/tree/master/src)


### Quy tắc format

- Không sử dụng chữ in hoa cho tag, class name hoặc ID. Tên class phải tuân theo quy tắc FLOCSS + BEM：
  - Dấu gạch ngang đơn `-` ：dùng để nối từ trong tên（ví dụ：`.c-global-nav`, `.p-news-list`）
  - Dấu gạch dưới kép `__` ：dùng để phân tách Element（ví dụ：`.p-news__title`）
  - Dấu gạch ngang kép `--` ：dùng để phân tách Modifier（ví dụ：`.c-button--primary`）
  - Prefix theo layer FLOCSS：`l-`（Layout）, `c-`（Component）, `p-`（Project）, `u-`（Utility）
  - Ví dụ đầy đủ：`.l-header`, `.c-global-nav`, `.p-news-list`, `.u-text-center`
  - （chi tiết xem phần「Quy tắc đặt tên Class」）
- Khi có cấu trúc lồng nhau, cần thụt lề rõ ràng để bất kỳ ai nhìn vào cũng có thể dễ dàng hiểu được cấu trúc source
- Xóa các khoảng trắng dư thừa ở cuối dòng hoặc giữa các đoạn text
- Sử dụng comment khi cần thiết
  `bắt đầu：<!-- ↓↓container↓↓ -->`  
  `kết thúc：<!-- ↑↑container↑↑ -->`


### Về markup

- Thực hiện coding theo hướng mobile-first
- Phiên bản HTML sử dụng là HTML Living Standard, trừ khi có chỉ định khác
- Thực hiện markup theo đúng content model
- Mặc định sử dụng sass （dart sass)cho phần markup styling
- Tùy theo dự án có thể sử dụng css
- Khi coding WordPress, về nguyên tắc không thực hiện trong editor của trang quản trị, mà thực hiện trong file php
  - riêng contactform7 sẽ thực hiện coding trực tiếp trong editor

[tải template HTML tại đây](https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip)  
[tải template WP tại đây](https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip)


### Danh sách markup cho từng hạng mục

#### Về table coding

- Về nguyên tắc, không thực hiện coding bằng thẻ table

#### Về thẻ đóng

- không được lược bỏ thẻ đóng

#### Về mã hóa ký tự

- Sử dụng UTF-8
  - File phải được lưu dưới dạng UTF-8 không có BOM
    `<meta charset="utf-8">`

#### Về việc chỉ định Title

- Nếu phía khách hàng không có chỉ định cụ thể, sử dụng định dạng:Tên trang｜Tên website
- Cần thống nhất cách ghi title. Nếu không có yêu cầu đặc biệt, thiết lập theo quy tắc dưới

**Trang TOP**

```html
<title>●●株式会社</title>
```

**Trang TOP recruit**

```html
<title>●●株式会社｜採用サイト</title>
```


**Trang con**

```html
<title>事業紹介(*そのページのタイトルを入力）｜●●株式会社</title>
```

#### Về meta keyword

- Do Google đã công bố rằng meta keyword không ảnh hưởng đến SEO, nên không cần thiết lập

#### Về selector và property

- Không viết selector theo dạng: type selector (tên thẻ) + class name
  - Ngoại trừ body
    
    ```css
    /* sai */
    ul.c-global-nav{}

    /* OK */
    .c-global-nav{}
    ```
- Giảm thiểu việc sử dụng các descendant selector không cần thiết
- Tất cả các property phải kết thúc bằng dấu chấm phẩy ;
- Mỗi selector và property phải được viết trên dòng riêng
- Khi giá trị là 0, bỏ đơn vị

#### Về thẻ`<h1>`～`<h6>`

- Sử dụng thẻ heading`<h1>`～`<h6>` phù hợp với cấu trúc nội dung. Trong mỗi trang bắt buộc phải có ít nhất các thẻ từ`<h1>`～`<h3>`
- Ở trang TOP thì sử dụng thẻ h1 để bọc logo header, ở các trang con thì chuyển thành div và tiêu đề trang sẽ sử dụng thẻ h1
- Nếu trong design từ phía khách hàng không có heading rõ ràng, thì sử dụng các thẻ heading trong phạm vi có thể áp dụng được

#### thẻ `<header>`, thẻ `<main>`, thẻ `<footer>`

- Mỗi trang về nguyên tắc chỉ sử dụng 1 thẻ
- Phần header dùng chung của trang phải sử dụng thẻ`<header>`
- Phần footer dùng chung của trang phải sử dụng thẻ `<footer>`

#### Về thẻ `<button>`

- Chỉ sử dụng cho nút gửi form chẳng hạn
- Không sử dụng cho nút back to top và nút entry

#### về tag  `<a>`

- Vùng có thể click của thẻ a phải bao phủ toàn bộ khu vực của nút
- Về cách ghi path, nguyên tắc là sử dụng relative path
- Khi liên kết ra bên ngoài và sử dụng target="_blank", cần ghi kèm rel="noopener noreferrer"
  `<a href="URL" target="_blank" rel="noopener noreferrer"> URL </a>`


### Về Interaction

- Khi sử dụng link với design giống như button, không thêm gạch chân (underline) khi hover
- Nút “Back to Top” phải được cài đặt kể cả khi không có design cụ thể (sử dụng màu đang dùng trong website)
- Mỗi section cần thêm hiệu ứng fade khi scroll. Trang tham khảo： 
  [https://web-loid.net/web/scroll-effect-js/](https://web-loid.net/web/scroll-effect-js/)
- Hover action: nếu không có chỉ thị đặc biệt, mặc định sử dụng hiệu ứng “làm mờ” (thay đổi opacity)
- Các link trong nội dung bài viết (WordPress, v.v.) phải có gạch chân (underline)
- Cookie popup phải được triển khai mặc định trên toàn bộ website, và cần thiết lập link tới trang Privacy Policy hoặc trang thông tin cá nhân 


### Về Web Font

- Việc sử dụng Web font về nguyên tắc phải tuân theo chỉ thị design
- Nếu font được chỉ định có trên Google Fonts, sử dụng trực tiếp và thiết lập phần load phù hợp
- Nếu font không có trên Google Fonts, cần xác nhận điều kiện sử dụng và license với Director, và khi cần thì yêu cầu khách hàng hoặc designer cung cấp script load font
- Chỉ định các weight cần thiết để giảm thiểu tải load
- Nếu không có chỉ định font, hoặc không thể sử dụng font đó, cần trao đổi với Director hoặc Designer để xác nhận phương án thay thế trước khi triển khai

### Các lưu ý khác

- Giá trị của thuộc tính phải sử dụng dấu ngoặc kép
- Global navigation phải sử dụng thẻ `<nav>`
- Ngay dưới thẻ `<section>` có thể dùng thẻ div (mặc dù khuyến nghị là dùng thẻ h, nhưng về cấu trúc layout thì div vẫn được chấp nhận)
- Nếu viết toàn bộ tiếng Anh bằng chữ in hoa, trình đọc màn hình sẽ đọc từng ký tự một. Vì vậy cần viết bằng chữ thường và sử dụng text-transform: uppercase để hiển thị chữ in hoa


## Về hình ảnh


### Về xuất hình

- Nguyên tắc chung: tất cả hình ảnh phải được xuất với độ phân giải gấp 2 lần kích thước hiển thị và sử dụng định dạng WebP

### Về hình ảnh responsive

- Những hình ảnh được sử dụng cho cả PC/SP  nên dùng chung một file nếu có thể
- Tuy nhiên, trong các trường hợp First View hoặc Main Visual có bố cục thay đổi nhiều, hoặc là banner dạng ngang trên PC nhưng dạng dọc trên SP thì cần tách riêng hình ảnh PC/SP
- Trong những trường hợp cần tách riêng, hãy sử dụng thẻ <picture> để chuyển đổi giữa PC/SP

```
<picture>
  <source media="(max-width: 767px)" srcset="img_kv_sp.webp">
  <img src="img_kv_pc.webp" alt="ファーストビューの画像">
</picture>
```


### Về định dạng hình ảnh

#### WebP
Nguyên tắc chung: định dạng hình ảnh sử dụng trong coding phải ưu tiên WebP

#### SVG
Chỉ sử dụng SVG cho các thành phần được tạo dưới dạng vector như logo, chữ, icon, v.v.
※Văn bản bên trong SVG bắt buộc phải được convert sang outline, để tránh phụ thuộc vào font

#### Về xuất file WebP
Việc chuyển đổi hình ảnh sang WebP đã được tích hợp sẵn và tự động hóa trong Template thông qua build script sử dụng thư viện `sharp`.
- **Định dạng tự động chuyển đổi:** Các file có đuôi `.jpg`, `.jpeg`, `.png` khi được đặt vào thư mục ảnh (assets/images) sẽ được tự động convert sang `.webp` với chất lượng (quality) tối ưu ở mức 90%.
- **Định dạng giữ nguyên:** Các định dạng như `.gif`, `.svg`, `.ico`, `.webp` sẽ không bị convert mà được copy trực tiếp sang thư mục build.
- **Tối ưu hiệu suất:** Script sử dụng logic kiểm tra timestamp (`isNewer`) để chỉ xử lý các file thêm mới hoặc bị thay đổi, đồng thời tự động dọn dẹp các file rác (`removeStaleFiles`) ở thư mục đích. Việc này giúp quá trình build nhanh chóng và sạch sẽ.
- **Cách sử dụng:** Bạn chỉ cần sử dụng các lệnh build có sẵn của template, script sẽ tự động thực thi.

#### Về fallback cho WebP
Trong trường hợp có yêu cầu hỗ trợ môi trường không tương thích WebP, hãy sử dụng thẻ`<picture>`  và thiết lập thứ tự fallback WebP → jpg/png

```
<picture>
  <source srcset="image.webp">
  <img src="image.jpg" alt="代替テキスト">
</picture>
```

### Quy tắc đặt tên hình ảnh

Tên file phải được đặt theo tiền tố (prefix) tương ứng với mục đích sử dụng
nguyên tắc chung【{prefix}_{nội dung}.webp】

- Hình ảnh nền
bg_〇〇.webp

- Icon mang tính chất trang trí
icon_〇〇.webp

- Hình ảnh không thuộc 2 loại trên
img_〇〇.webp

### Về thuộc tính alt

Thuộc tính alt đóng vai trò là thông tin thay thế cho người dùng không thể nhìn thấy hình ảnh (ví dụ: trình đọc màn hình, text browser)
Việc viết alt đúng cách giúp cải thiện accessibility và cũng có lợi cho SEO

-Đối với hình ảnh mang tính trang trí (mũi tên, họa tiết, đường kẻ…), để alt rỗng（ví dụ：alt=""）。
- Đối với hình ảnh mang ý nghĩa (ảnh chụp, sơ đồ, banner…), bắt buộc phải ghi nội dung mô tả cụ thể vào alt

#### Ví dụ OK

```
<img src="img_office.webp" alt="オフィス外観の写真">
```

#### Ví dụ sai

```
<img src="img_office.webp" alt="画像">
<img src="img_office.webp" alt=""> <!-- 意味のある画像に空altはNG -->
```

### Về việc chuyển text thành hình ảnh

- Không chuyển text thành hình ảnh, mà sử dụng Web font
- Trong trường hợp không có Web font được cung cấp và phần text có tính design cao, hãy sử dụng SVG đã được outline


## Về CSS

### Design file CSS

* Nếu website có nhiều trang, hãy tách riêng file CSS cho từng trang
* Nguyên tắc chung: không được viết style trực tiếp trong file HTML

### Chỉ định mã hóa ký tự

* File CSS phải sử dụng mã hóa UTF-8
* Phải sử dụng cùng mã hóa với file HTML để tránh lỗi hiển thị hoặc lỗi font

### Phân biệt ID và Class

Ngoại trừ các phần tử dùng làm anchor link, nguyên tắc chung là chỉ sử dụng Class để styling

#### Về ID

- Không sử dụng ID để định nghĩa style
- Chỉ sử dụng ID cho mục đích cấu trúc HTML, ví dụ: đích đến của anchor link
- Giá trị của ID phải là chuỗi tiếng Anh tương ứng với tên nội dung

#### Về Class

- Tất cả các style phải được định nghĩa bằng Class
- Tên class phải tuân theo quy tắc FLOCSS (BEM-based) được mô tả dưới đây

##### Quy tắc đặt tên Class — FLOCSS (BEM-based)

###### Tổng quan FLOCSS

FLOCSS chia CSS thành các lớp (layer) có vai trò rõ ràng. Mỗi lớp sử dụng một prefix (tiền tố) riêng để phân biệt phạm vi và mục đích của class.

| Layer | Prefix | Vai trò | Ví dụ |
|-------|--------|---------|-------|
| Foundation | _(không có prefix)_ | Reset, base styles, typography — áp dụng trực tiếp lên thẻ HTML | `body{}`, `a{}`, `img{}` |
| Layout | `l-` | Cấu trúc bố cục lớn của trang | `.l-header`, `.l-footer`, `.l-main`, `.l-sidebar` |
| Component | `c-` | Thành phần UI nhỏ, tái sử dụng được ở nhiều nơi | `.c-button`, `.c-card`, `.c-input`, `.c-nav` |
| Project | `p-` | Thành phần đặc thù theo ngữ cảnh dự án, gồm nhiều component | `.p-news`, `.p-article-list`, `.p-hero` |
| Utility | `u-` | Class tiện ích đơn mục đích, dùng để ghi đè nhỏ | `.u-mt-10`, `.u-text-center`, `.u-hidden` |

###### Quy tắc BEM (Block / Element / Modifier)

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

###### Thứ tự viết class trong HTML

Ghi class theo thứ tự: FLOCSS class trước, utility class sau

```html
<div class="p-news__item u-mt-10">
```

###### Nguyên tắc đặt tên

- Tên class không đặt theo hình thức bên ngoài (màu sắc, độ đậm…), mà phải đặt dựa trên mục đích, vai trò và ý nghĩa
- Tên class phải dễ đoán và dễ hiểu, để developer khác khi nhìn vào có thể hiểu ngay
- **Tuyệt đối không lồng Element vào Element** (không sử dụng `Block__Element__Element`). Một Element chỉ được phép trực thuộc Block gốc để giữ cấu trúc phẳng và linh hoạt. Nếu DOM quá phức tạp, hãy tách thành Block mới.

###### Quy tắc nest — ví dụ chi tiết

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

###### Ví dụ HTML

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

###### JavaScript hook

- Khi cần gán class cho xử lý JavaScript, sử dụng prefix `js-` riêng biệt
- Class `js-` **không được** dùng để styling

```html
<button class="c-button c-button--primary js-modal-open">Open</button>
```

```js
const modalTrigger = '.js-modal-open';
```


### Về Sass

* Quy tắc sử dụng Sass phải tuân theo “Sass Manual”
[Manual tại đây](https://docs.google.com/spreadsheets/d/1lPs7MtXUkwyGbCdF9wSgbP_I9lzZczuvFK6cSkhvAA4/edit#gid=0)

**※ Cập nhật quy tắc cấu trúc SCSS áp dụng cho Template:**
- Template hiện tại đang sử dụng cấu trúc Dart Sass module (FLOCSS / 7-1 pattern) chia theo các thư mục: `foundation` (reset, base), `layout` (header, footer), `component` (các UI component), `page` (style riêng cho từng trang), `global` (biến, mixins), và `utilities`.
- **Tuyệt đối không dùng `@import`.** Thay vào đó, sử dụng `@use` và `@forward`. 
- Thư mục `global` chứa các file định nghĩa biến màu sắc (`_color.scss`), font (`_font.scss`), mixin (`_mixin.scss`), v.v... được gom lại qua file `_index.scss` bằng lệnh `@forward`. Để sử dụng các biến/mixin này, gọi `@use "../global" as *;` (hoặc đường dẫn tương đối phù hợp) ở đầu mỗi file SCSS. Việc cấu hình các biến dùng chung bắt buộc phải thực hiện trong thư mục `global` này.
- Các file cấp cao (như `common.scss` hay `top.scss`) chỉ làm nhiệm vụ nạp các module qua `@use` để compile ra CSS sạch, không viết CSS trực tiếp vào các file này.


## Về JavaScript


### Về file JavaScript

* Nguyên tắc chung: không viết trực tiếp JavaScript trong file HTML. Phải quản lý dưới dạng file bên ngoài
* Mỗi xử lý (function / action) phải có comment, sử dụng tiếng Anh hoặc tiếng Nhật
* File JS (bao gồm cả việc load file JS ngoài) phải được khai báo trong các file dùng chung như header.php, footer.php
* **Vị trí đặt file JS và thuộc tính `defer`**:
  * **Mặc định (Khuyên dùng)**: Đặt các thẻ gọi file JS bên ngoài (có `src`) vào bên trong `<head>` và thêm thuộc tính `defer`. Việc này giúp không chặn quá trình render HTML (script tải ngầm và chỉ thực thi theo đúng thứ tự sau khi DOM đã hoàn tất).
    ví dụ：`<script src="./assets/plugins/anijs/ani.js" defer></script>`
  * **Trường hợp KHÔNG dùng `defer`**:
    * Các script cần chạy ngay lập tức trước khi HTML render (ví dụ: script chống chớp màn hình dark/light mode, redirect). -> *Đặt trong `<head>`, không có `defer`.*
    * Các công cụ Tracking/Analytics (Google Analytics, GTM, Facebook Pixel). -> *Thường dùng thuộc tính `async` vì chúng không cần chờ DOM và thứ tự thực thi không quan trọng.*
    * Inline script (Thẻ `<script>` viết code trực tiếp, không có `src`). -> *Hạn chế tối đa việc sử dụng inline script, chỉ dùng khi thật sự cần thiết. Lưu ý: Nếu inline script cần sử dụng thư viện (như jQuery) đã được load bằng `defer`, thì bắt buộc code bên trong phải được bọc bởi `jQuery(function($){...})` hoặc `DOMContentLoaded` để đảm bảo thư viện đã sẵn sàng.*
* Hạn chế sử dụng CDN ※CDN của jQuery đôi khi load chậm, có thể gây lỗi hiển thị giao diện
* Những đoạn JS được sử dụng cho toàn bộ hoặc hầu hết các trang phải được gom lại và viết trong common.js

### Về cách viết

* Cách viết phải được thống nhất (khoảng trắng, dấu nháy đơn), ưu tiên sử dụng `$` bên trong block `jQuery(function($) { ... })` để tránh xung đột thư viện trên môi trường WordPress.

```js
/* ❌ SAI: Viết không thống nhất (lúc dùng $, lúc dùng jQuery, thiếu khoảng trắng) */
$(window).on('scroll', function(){});
jQuery(window).on('scroll',function(){})

/* ✅ ĐÚNG: Thống nhất cách viết và bọc an toàn (safe wrapper) */
jQuery(function($) {
  $(window).on('scroll', function() {
    // Xử lý sự kiện scroll
  });
});
```

#### Nguyên tắc thực tế

- **Project đã base jQuery**: ưu tiên viết thống nhất bằng jQuery cho những thứ jQuery làm tốt (event, DOM, AJAX…).
- **Chỉ dùng JS thuần (Vanilla JS) khi có lý do rõ ràng**, ví dụ:
  - Tối ưu performance (ví dụ: scroll/animation nặng)
  - Dùng API mới mà jQuery không hỗ trợ tốt
  - Viết code mới hoàn toàn tách biệt, không phụ thuộc vào jQuery
### Quy tắc const let

* Vì const là hằng số nên khi gán đối tượng DOM hoặc giá trị cố định thì dùng `const`, với biến có thể thay đổi giá trị thì dùng `let`.
* **Bắt buộc Cache DOM:** Khi cần sử dụng một phần tử DOM nhiều lần, hãy tìm kiếm và lưu trữ đối tượng jQuery (jQuery object) vào biến ngay từ đầu để tối ưu hiệu suất (tránh việc trình duyệt phải quét lại toàn bộ cây HTML). Thêm tiền tố `$` vào trước tên biến để nhận diện biến đó chứa đối tượng jQuery.
  
```js
/* ❌ SAI: Tìm lại DOM mỗi lần sử dụng (Gây giảm hiệu suất) */
$('.js-news-tab-btn').addClass('is-active');
$('.js-news-tab-btn').show();

/* ✅ ĐÚNG: Cache DOM vào biến (Tối ưu hiệu suất) */
const $newsLink = $('.js-news-tab-btn'); // Thêm $ để nhận diện jQuery object
$newsLink.addClass('is-active');
$newsLink.show();
```

### Về tốc độ animation

* Tốc độ của slider: nếu không có chỉ thị cụ thể, thì thiết lập là 3 giây
* Hiệu ứng hover cũng vậy, nếu không có chỉ định riêng, thì dùng`transition:0.5s all` 


### Liên quan đến phương pháp giao hàng

Có 2 cách giao hàng chính
Chỉ bàn giao file data
Upload trực tiếp file lên server của khách hàng (công khai lên production（công việc công khai）)
Vì mỗi cách bàn giao có quy trình khác nhau, nên cần xác nhận trước với director xem sẽ bàn giao theo cách nào

### Cách thức giao hàng

* Dù là bàn giao data hay công khai lên server, khi bàn giao không được bao gồm các file không cần thiết.
* Khi thực hiện công khai lên server, cần tham khảo  [「checklist」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0) và kiểm tra từng bước trong khi làm

#### giao data

* Trong mọi trường hợp, data giao phải được lưu vào dropbox của JL
* Sau khi xóa các file không cần thiết
  1. tạo cấu trúc thư mục 案件名のフォルダ＞「コーディングデータ」( dịch là  folder tên dự án＞「data coding」)
  2. Bên trong folder data coding, đặt các file đúng theo cấu trúc thư mục được chỉ định.
  3. đặt tên data giao hàng như sau
     ví dụ：ver01-2026-04-01.zip
  4. Nếu sau khi nộp mà có sửa thì đặt tên thành 「ver02- ngày」 rồi lưu vào
* File phải nén thành Zip và dùng URL chia sẻ của dropbox để nộp
　Thời gian download 1 tuần、phải đặt mật khẩu khi chia sẻ

**Trường hợp giao data dạng chênh lệch**

* Nếu trong quá trình sửa chỉ cần nộp những file đã được chỉnh sửa, thì cần thực hiện thêm các bước sau
  1. Backup data trước khi sửa
  2. Vì có thể có sự chênh lệch thời gian trước khi nộp, nên phải ghi rõ file nào đã sửa, bao gồm cả thư mục img và file css 
  3. Dùng công cụ check để so sánh thư mục trước và sau khi sửa, nhằm đảm bảo không bị thiếu file khi nộp [công cụ check](https://qiita.com/frozencatpisces/items/8f998720de8f2aaa7e37) 

**※ Chuẩn bị data giao hàng bằng cơ chế tự động của Template (.github/workflows/release.yml):**
Thay vì gom file chênh lệch thủ công dễ sai sót hay phải dùng phần mềm WinMerge để so sánh, Template hiện tại đã được nâng cấp với **cơ chế tự động trích xuất file chênh lệch (Auto Diff Extraction)**.

1. Sau khi đã commit hoàn chỉnh các sửa đổi, bạn tạo một Tag mới (ví dụ: `git tag v1.0.1`) và push lên GitHub (`git push origin v1.0.1`).
2. Hệ thống GitHub Actions sẽ tự động chạy lệnh build, loại bỏ các file rác/source code (như `node_modules`, file `.scss`).
3. **Tự động đối chiếu:** Hệ thống sẽ dùng lệnh `rsync` tự động tải bản Release cũ về, đối chiếu với bản mới để nhặt ra chính xác các file bị thay đổi và tự động đóng gói.
4. Developer hoặc PM chỉ cần vào mục **Releases** trên GitHub, tải 2 file `.zip` vừa được tạo ra để gửi ngay cho khách hàng:
   - 📦 **Bản đầy đủ:** `{tên_dự_án}_{tag_name}.zip` (Chứa toàn bộ data sạch)
   - 📦 **Bản chênh lệch:** `{tên_dự_án}_diff_data_{tag_name}.zip` (Chỉ chứa các file bị thay đổi/thêm mới, dùng để giao diff data mà không lo thiếu sót)

> ⚠️ **LƯU Ý QUAN TRỌNG KHI NHẬN DATA TỪ KHÁCH HÀNG:**
> Để GitHub Actions có thể so sánh và trích xuất file chênh lệch, nó cần một mốc gốc (baseline). Do đó, ngay khi nhận source code cũ từ khách hàng và push lên Git lần đầu tiên, bạn **BẮT BUỘC PHẢI TẠO TAG (VD: `v1.0.0`) VÀ PUSH LÊN GITHUB TRƯỚC KHI CHỈNH SỬA CODE**. Nếu bạn sửa code rồi mới tạo Tag đầu tiên, hệ thống sẽ không có bản cũ để đối chiếu và không thể tạo file Diff.

#### Công khai môi trường production（công việc công khai）

* Khi có task phát sinh, cần xác nhận các thông tin sau: thông tin FTP của khách hàng, kiểm tra kết nối, thư mục upload, xác nhận với director xem có xóa data cũ trên server hay không
* Trường hợp site tĩnh, Tạo folder [old] trên server và di chuyển data cũ vào đó. Đồng thời, backup data và tạo folder [old] trên Dropbox để lưu trữ
* Sau khi upload, dùng checklist để kiểm tra xem site có vấn đề gì không [「check list」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0)

**Trường hợp WordPress**

* Backup WP cũ, bao gồm data  [「WPvivid」](https://ja.wordpress.org/plugins/wpvivid-backuprestore/) và file PHP, rồi lưu vào dropbox
  * ※Khi xác nhận với khách hàng xong, có thể xóa data cũ trên server

**Khi có thể publish trực tiếp trên server khách hàng**

1. Thay đổi URL site và công khai. Di chuyển thư mục wp từ thư mục con lên root directory → [site tham khảo](https://www.cloud9works.net/web/how-to-change-wordpress-directory/)

**Khi chuyển từ test server của JL**

1. Cài WordPress trên server, dùng 「WPvivid」để migrate

### Về backup

* Lưu 2 bản backup vào dropbox:data lúc test upload và data sau khi publish
* Data WPvivid của Wordpress dùng lúc giao hàng cũng cần lưu trữ
* Sau khi nộp, nếu có sửa thì lưu data đã sửa vào dropbox（nếu là site tĩnh → chỉ cần lưu file chênh lệch）  


## Xử lý responsive

### Về hỗ trợ responsive

- Có 2 kiểu cơ bản: Basic pattern và Liquid pattern, nên xác nhận với director trong buổi khởi động dự án
- Code sao cho layout không bị vỡ ở bất kỳ kích thước cửa sổ nào
- Nếu chiều rộng màn hình nhỏ hơn kích thước design, có thể điều chỉnh bằng cách xuống cột, Không cần phải giữ 100% giống design, ưu tiên khả năng nhìn và sử dụng
- Thông thường, đặt 1 breakpoint tại 768px, nhưng tùy design có thể đặt nhiều breakpoint
- Kích thước nhỏ nhất hỗ trợ trên mobile là 375px

### Basic Pattern
・Đặt chiều rộng tối đa của nội dung
・Nếu chiều rộng cửa sổ nhỏ hơn chiều rộng tối đa của nội dung, thì chiều rộng nội dung sẽ giảm theo
・Chiều rộng các cột thay đổi tương đối so với chiều rộng nội dung
・Kích thước chữ cố định
　site tham khảo：https://www.nippon-shooter.co.jp/

### Liquid Pattern
・Ngoài các đặc điểm của Basic Pattern, kích thước chữ cũng thay đổi tương đối theo chiều rộng nội dung
　site tham khảo : https://pict-adloop.com/　https://www.ohshima-showten.com/


### Chiều rộng nội dung và breakpoint

- Trong design của JL, chiều rộng nội dung (container) là 1160px. Khi hiển thị trên SP, đặt lề 20px mỗi bên
- Nếu có hỗ trợ tablet, các breakpoint cần được đặt trong phạm vi tương ứng

| loại             | phạm vi            |
|-----------------|------------------|
| size tablet　 | 768－1024px      |
| size SP   　| 375px- 767px trở xuống  |

### Về font

- Cơ bản đặt đơn vị nên dùng rem
- Khi hiển thị trên SP (smartphone), nếu design không chỉ định, không dùng font-size nhỏ hơn 12px
- font-size tối thiểu là 10px


## Về trình duyệt mục tiêu

### Tạo site sao cho layout và hoạt động đúng trên các môi trường trình duyệt sau

#### PC

**Windows（OS / Windows 10.x và Windows 11.x）**
- phiên bản mới nhất Microsoft Edge・Google Chrome・Firefox
  
**Mac OS(12 trở lên)**
-  phiên bản mới nhất Safari・Google Chrome・Firefox

#### SP

**iPhone**
- iOS 16 trở lên, phiên bản mới nhất

**Android**
- Trình duyệt trên smartphone từ Ver-11 trở lên (chủ yếu Chrome)

### Khác

**Nếu khách hàng thấy hiển thị khác với dự kiến**
- Hướng dẫn xóa cache [tham khảo](https://itreat.co.jp/blog/cash#toc4)
- Kiểm tra hiển thị trên nhiều PC hoặc dùng trình duyệt ẩn danh 
- Xác nhận OS, trình duyệt, phiên bản mà khách hàng đang dùng
- Nếu vẫn không xác định được lỗi, yêu cầu khách hàng khởi động lại router

## Về WordPress

### Về phương pháp xây dựng

- Tạo một thư mục như「wp2026」, sau đó cài đặt WordPress vào trong thư mục đó 
- [Cấu trúc thư mục](https://github.com/jline-coding/TEMPLATE_WP/tree/master/src)参照
- Trừ khi có chỉ định, không sử dụng template có sẵn mà tạo theme gốc (original theme) và xây dựng bằng file php
- Tên theme thì phải sử dụng tên dự án
- Không viết code vào trong editor của trang quản trị WordPress mà phải viết code vào file php
  - （Ví dụ）page-[đường dẫn].php
- Hình eye-catch thì không hiển thị full-size mà cắt từ trung tâm để hiển thị theo kích thước của design
- Khi kiểm tra hoạt động của hình eye-catch thì phải kiểm tra với cả hình lớn hơn và nhỏ hơn kích thước hiển thị
- Khi cho hiển thị hình thumbnail ở dạng danh sách, thì phải tiến hành cài đặt media sao cho dung lượng không trở nên quá lớn
  - Site tham khảo：[https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/](https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/)
- Trường hợp bài viết như blog không có hình ảnh thì thêm hình dummy no-image
- Hình dummy có trong trang template

### Về phiên bản

- Trừ khi có chỉ định thì phải cài đặt phiên bản mới nhất
- Trường hợp renewal (làm mới website) thực hiện chuyển data WP thì nhất định phải kiểm tra phiên bản WP gốc và phiên bản PHP của server đang sử dụng rồi mới tiến hành cài đặt
- Bắt buộc phải thay đổi cài đặt tự động cập nhật phiên bản. Hãy chuyển chế độ tự động cập nhật sang chỉ cập nhật bản minor (cập nhật nhỏ)：[Site tham khảo](https://wordpress-web.and-ha.com/update-type-method/#:~:text=2020%E5%B9%B411%E6%9C%88%E3%81%AB,%E3%81%8A%E3%81%8F%E3%81%B9%E3%81%8D%E7%82%B9%20%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82)


### Về tùy chỉnh trang quản trị WP

- Khi login bằng tài khoản khách hàng (quyền editor) thì phải ẩn những mục không cần thiết đi  
  Khi cần thiết hãy sử dụng những nội dung dưới đây trong `functions.php` 

```php
// Hàm kiểm tra phân quyền để ẩn các tính năng admin
function is_restricted_admin_user() {
  $user = wp_get_current_user();
  if ( ! $user || ! $user->exists() ) {
    return false;
  }

  // Danh sách Role áp dụng (Role là Editor, có thể thay đổi và thêm role khác tại đây)
  $restricted_roles = array(
    'editor',
  );

  // Kiểm tra theo Role
  if ( array_intersect( $restricted_roles, (array) $user->roles ) ) {
    return true;
  }
  return false;
}

// ẩn site menu
function remove_menus() {
  if ( is_restricted_admin_user() ) {
    remove_menu_page('ai1wm_export'); // wp migration
    remove_menu_page('cptui_main_menu'); // CPT UI
    remove_menu_page('edit-comments.php'); // comment
    remove_menu_page('edit.php'); // post
    remove_menu_page('edit.php?post_type=page'); // pages
    remove_menu_page('options-general.php'); // setting
    remove_menu_page('plugins.php'); // plugin
    remove_menu_page('siteguard'); // site Guard
    remove_menu_page('themes.php'); // appearance
    remove_menu_page('tools.php'); // tool
    remove_menu_page('upload.php'); // media
    remove_menu_page('users.php'); // user
    remove_menu_page('wpcf7'); // contactform7
    remove_submenu_page('index.php', 'update-core.php');
  }
}
// Set priority 999 để đảm bảo ghi đè được các plugin thêm menu chạy sau
add_action('admin_menu', 'remove_menus', 999);

// ẩn dashboard
function remove_dashboard_widgets() {
  if ( is_restricted_admin_user() ) {
    remove_action('admin_notices', 'update_nag', 3);
    remove_action('network_admin_notices', 'update_nag', 3); // Chuẩn: Ẩn thêm nag trên network (nếu có multisite)
    remove_meta_box('dashboard_activity', 'dashboard', 'normal'); // activity
    remove_meta_box('dashboard_primary', 'dashboard', 'side'); // WordPress event và news
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); // quick press
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); // at a glance
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal'); // site health status
  }
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets', 999);

// ẩn icon ở toolbar phía trên của trang quản trị
function hide_adminbar_update_icon() {
  if ( is_restricted_admin_user() ) {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('updates');
  }
}
add_action('wp_before_admin_bar_render', 'hide_adminbar_update_icon', 999);

// ẩn thông báo cập nhật (PHP 8 Safe & Standard)
function update_message_admin_only() {
  if ( is_restricted_admin_user() ) {
    // BẮT BUỘC TRẢ VỀ OBJECT, NẾU DÙNG __return_null SẼ BỊ LỖI JSON KHI LƯU BÀI VIẾT TRÊN PHP 8+
    add_filter('pre_site_transient_update_core', function() {
      return (object) array(
        'updates'         => array(),
        'version_checked' => get_bloginfo('version'),
        'last_checked'    => time(),
      );
    });
    remove_action('admin_init', '_maybe_update_core');
    remove_action('wp_version_check', 'wp_version_check');
  }
}
add_action('admin_init', 'update_message_admin_only', 999);

// Chặn truy cập trực tiếp bằng URL đối với các trang đã ẩn
function block_direct_access_to_hidden_pages() {
  if ( is_restricted_admin_user() ) {
    global $pagenow;

    // Danh sách các file mặc định bị cấm
    $restricted_pages = array(
      'edit-comments.php',
      'options-general.php',
      'plugins.php',
      'themes.php',
      'tools.php',
      'upload.php',
      'users.php',
      'update-core.php'
    );

    if ( in_array( $pagenow, $restricted_pages, true ) ) {
      wp_redirect( admin_url() );
      exit;
    }

    // Xử lý riêng cho edit.php (chỉ cấm truy cập Post và Page)
    if ( $pagenow === 'edit.php' ) {
      $post_type = isset($_GET['post_type']) ? $_GET['post_type'] : 'post';
      if ( $post_type === 'post' || $post_type === 'page' ) {
        wp_redirect( admin_url() );
        exit;
      }
    }

    // Chặn các trang của plugin
    if ( $pagenow === 'admin.php' && isset( $_GET['page'] ) ) {
      $restricted_plugin_pages = array(
        'ai1wm_export',
        'cptui_main_menu',
        'siteguard',
        'wpcf7'
      );
      if ( in_array( $_GET['page'], $restricted_plugin_pages, true ) ) {
        wp_redirect( admin_url() );
        exit;
      }
    }
  }
}
add_action( 'admin_init', 'block_direct_access_to_hidden_pages', 999 );
```

### Về plugin

Tại J-line chúng tôi khuyến nghị sử dụng những plugin dưới đây

#### Khi phân chia các mục theo field

- ［Advanced Custom Fields］  
  [https://ja.wordpress.org/plugins/advanced-custom-fields/](https://ja.wordpress.org/plugins/advanced-custom-fields/)  
  Data plugin bản Pro được lưu tại Dropbox, vui lòng sử dụng từ đó

#### Khi tạo post type

- Sử dụng luôn tính năng đăng ký Post Type / Taxonomy tích hợp sẵn của **Advanced Custom Fields (ACF)**. Việc này giúp giảm bớt số lượng plugin cần cài đặt và dễ quản lý hơn (không cần cài thêm Custom Post Type UI).
- Cũng có thể xây dựng post type bằng code trong file php (`functions.php`)

#### Khi sắp xếp thứ tự bài viết, category một cách trực quan

- ［Intuitive Custom Post Order］  
  [https://hijiriworld.com/web/plugins/intuitive-custom-post-order/](https://hijiriworld.com/web/plugins/intuitive-custom-post-order/)

#### Khi xây dựng form

- ［Contact Form 7］  
  [https://ja.wordpress.org/plugins/contact-form-7/](https://ja.wordpress.org/plugins/contact-form-7/)  
- [詳しくはこちら](https://www.jlweb.jp/coding/basic/form/)

#### Khi thực hiện di chuyển data

- ［WPvivid］  
  [https://ja.wordpress.org/plugins/wpvivid-backuprestore/](https://ja.wordpress.org/plugins/wpvivid-backuprestore/)  

#### Back-up data

- ［BackWPup – WordPress Backup Plugin］  
  [https://ja.wordpress.org/plugins/backwpup/](https://ja.wordpress.org/plugins/backwpup/)  
- Cài đặt mặc định: thời điểm lưu trữ là mỗi tháng 1 lần, tối đa 12 file
- Đối với các website trước khi chuyển đổi domain, đôi khi không thể backup đúng cách (xảy ra lỗi) vì vậy hãy thiết lập sau khi đã chuyển đổi domain

#### Login security

- 「SiteGuard WP Plugin」  
  [https://ja.wordpress.org/plugins/siteguard/](https://ja.wordpress.org/plugins/siteguard/)  
- Bắt buộc cài đặt plugin login security

#### Liên quan đến SEO/OGP

- 「SEO SIMPLE PACK」  
  [https://ja.wordpress.org/plugins/seo-simple-pack/](https://ja.wordpress.org/plugins/seo-simple-pack/)  
- Sử dụng khi cài đặt các thẻ liên quan đến SEO, thẻ OGP


### Khi phát sinh việc di chuyển một phần thông tin/dữ liệu

- Sử dụng plugin「DeMomentSomTres Export」
- Vì khi sử dụng chức năng「import」trong WP thì có khả năng xảy ra lỗi không chuyển được toàn bộ thông tin/dữ liệu

**Tham khảo：**

- [https://naifix.com/wordpress-transfer/](https://naifix.com/wordpress-transfer/)
- [https://easytouse.jp/2018/03/28/demomentsomtresexport/](https://easytouse.jp/2018/03/28/demomentsomtresexport/)


### Về việc tạo manual WP

- Tham khảo mẫu manual để viết manual 

[Download mẫu từ đây](https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx)




## Về Form

### Về mail form 

Tại J-line chúng tôi sử dụng những hệ thống dưới đây khi xây dựng form liên hệ hoặc form đăng kí

#### Mailform pro CGI（Sử dụng trong những site tĩnh）

- Site download：  
  [https://www.synck.com/downloads/cgi-perl/mailformpro/index.html](https://www.synck.com/downloads/cgi-perl/mailformpro/index.html)
- Phải download và sử dụng phiên bản mới nhất
- Trường hợp form không hoạt động, hãy kiểm tra lại quyền của server
- Có trường hợp cần kiểm tra đường dẫn Perl của server đang sử dụng và chỉnh sửa dòng đầu tiên của`mailformpro.cgi` 
- Cách thiết lập nhiều địa chỉ CC ：  
  [https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html](https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html)
- Cài đặt reCAPTCHA：  
  [Link Dropbox](https://www.dropbox.com/scl/fo/vuylj8e6vnucet8w3na82/ABPn2cs3VNjG8STZk2cM8xQ?rlkey=yc67cb9yur6pl7ohxumh2lrzw&st=7yegcf9e&dl=0)
- [Cách thao tác xem tại đây（PPTX）](https://www.jlweb.jp/coding/assets/dl/mailform_pro.pptx)
- [Mẫu tại đây（ZIP）](https://www.jlweb.jp/coding/assets/dl/contact.zip)


#### Responsive mailform（Sử dụng trong những site tĩnh）

- Chỉ dùng trong trường hợp không sử dụng được mailform pro（màn hình xác nhận chỉ là pop-up）
- Chức năng trang xác nhận là tính phí
- Site download：  
  [https://www.1-firststep.com/archives/462](https://www.1-firststep.com/archives/462)
- Phải download bản mới nhất để sử dụng
- Chú ý：
  - Màn hình xác nhận chỉ là pop-up đơn giản
  - Phải thông báo về việc không có trang xác nhận cho khách hàng và director
  - Không hoạt động được trên những server không hỗ trợ PHP

#### Contact Form 7（Sử dụng trên site WP）

- Không cần màn hình xác nhận
- Nếu số lượng text nhập vào vượt quá 400-500 chữ thì nội dung sẽ không được hiển thị vào mail trả lời tự động (giới hạn của bản miễn phí)
- Cài đặt ở mục 追加ヘッダー `Reply-To` ：
  - Dùng cho admin：cài đặt địa chỉ mail mà người dùng nhập vào
  - ユーザー用：để trống
- Nếu thiết lập `Reply-To`, khi nhấn nút Reply thì địa chỉ người nhận đúng sẽ được chỉ định
- Nếu xóa `Reply-To`, khi nhấn Reply thì địa chỉ người gửi (From) sẽ được chỉ định làm địa chỉ nhận phản hồi
- Tạo key reCAPTCHA và thêm domain jline cùng domain của khách hàng.

#### 【Đã ngừng phát triển】MWWPForm

- Không sử dụng. Hãy thay đổi sang Contactform 7 khi cần thiết.

### Cài đặt chung và các lưu ý của form

- Phải xây dựng màn hình lỗi và màn hình hoàn tất, không cần màn hình xác nhận
- Khi test gửi form, sử dụng địa chỉ `kensyo@j-line` 
- Sau khi đổi địa chỉ quản trị sang email của client, cần test gửi để đảm bảo nội dung được gửi đúng
- Phải thiết lập email trả lời tự động (nội dung thì chuẩn bị bản dummy)
- Trường có nhập mã bưu điện, cần thiết lập chức năng tự động điền địa chỉ
- Màn hình xác nhận gửi cũng phải được trang trí theo thiết kế
- Trên màn hình hoàn tất, phải đặt nút「Quay lại trang TOP」
- Bắt buộc cài đặt reCAPTCHA



## Về Page speed

### Mục đích và cách tiếp cận đối với tốc độ hiển thị

Thiết lập “tốc độ hiển thị” làm chỉ số chất lượng của sản phẩm bàn giao, nhằm nâng cao trải nghiệm người dùng và chất lượng dịch vụ.
Tuy nhiên, vì tốc độ hiển thị chịu ảnh hưởng bởi các yếu tố bên ngoài như dưới đây, nên việc đặt ra một tiêu chuẩn số liệu cố định áp dụng chung là không thực tế.

- Cấu hình server và có hay không có CDN
- Cấu trúc và mức độ phức tạp của thiết kế
- Có hay không có animation, hiệu ứng trình diễn

Vì vậy, trong guideline này sẽ đưa ra「mức tiêu chuẩn nhất định và phương hướng cải thiện」với mục đích đảm bảo chất lượng tối thiểu và khả năng đạt được kết quả tương tự

#### Bổ sung về điểm số Lighthouse và LCP

Điểm 「Performance Score」 của Google Lighthouse và giá trị LCP (Largest Contentful Paint) được đo trong môi trường thử nghiệm, giả định kết nối 4G tốc độ thấp và thiết bị có cấu hình thấp.


### Phương châm cơ bản

Ở giai đoạn đầu của quá trình xây dựng, hãy ưu tiên tốc độ cảm nhận trong môi trường thực tế (LCP) hơn là điểm số trong môi trường lab.
Điểm Lighthouse chỉ nên xem như giá trị tham khảo, và cuối cùng nên ưu tiên trải UX, tức là người dùng không cảm thấy trang web bị nặng hoặc chậm.

### Cách đo giá trị thực tế (sử dụng Chrome DevTools)

1. Mở trang cần kiểm tra bằng Chrome
2. Mở tab 「Network」 → đặt Throttling thành 「Fast 4G」 và check vào Disable cache
3. Mở tab 「Performance」 và nhấn Record (◉)
4. Reload trang, sau khi tải xong thì nhấn 「Stop」
4. Di chuột vào marker 「LCP」 trên timeline để kiểm tra số giây

LCP（mốc tham khảo khi đo thực tế）：trong vòng 4 giây （※Có thể điều chỉnh lại trong quá trình vận hành sau này）

※Trong trường hợp do cấu trúc hoặc hiệu ứng mà LCP khó tránh khỏi bị chậm (ví dụ: carousel được render bằng JS), hãy xem xét preload hoặc render trước (pre-render) hoặc áp dụng ngoại lệ với tiêu chí ưu tiên trải nghiệm cảm nhận thực tế của người dùng.





## Khi thực hiện công khai website

### Về công việc redirect

- Về cơ bản, thiết lập redirect bằng `.htaccess`
- Trong trường hợp renewal website, cần thiết lập redirect cho các trang có cùng chức năng với site cũ nhưng đã thay đổi đường dẫn  
  [sheet sử dụng cho công việc redirect](https://docs.google.com/spreadsheets/d/1tvqfKhwBKZzJ4tfdFtiqOZS0i336dTGzRyVek49CWdg/edit?gid=882195015#gid=882195015) 
- Các trang có đường dẫn chỉ tồn tại trên site cũ cần được thiết lập chuyển đến trang 404
- Thực hiện thiết lập redirect `http` sang `https` (cần kiểm tra xem SSL đã được thiết lập hay chưa).
- Thực hiện redirect có và không có `www`
- Trường hợp domain mới thì thống nhất không có `www`. Trường hợp domain có sẵn thì làm theo cấu hình hiện có.
- ⚠️ Thực hiện công việc redirect theo yêu cầu của khách hàng

### Plugin WP

| Mục đích sử dụng | Tên plugin |
|------|---------------|
| Sử dụng khi chuyển đổi `http → https` hoặc khi xảy ra lỗi với`.htaccess` | [Really Simple SSL](https://ja.wordpress.org/plugins/really-simple-ssl/)  |



## Template các loại text

### Liên quan đến form

| Mục | Link download |
|------|-------------------|
| Text ở màn hình hoàn tất | [Text ở màn hình hoàn tất](https://www.jlweb.jp/coding/assets/dl/thanks_page_text.txt)  |
| Mail phản hồi tự động | [Mail phản hồi tự động](https://www.jlweb.jp/coding/assets/dl/mail_text.txt)  |
| Chính sách bảo mật | [Chính sách bảo mật](https://www.jlweb.jp/coding/assets/dl/privacy_policy.txt)  |
| Bài đăng thông báo | [Bài đăng thông báo（PDF）](https://www.jlweb.jp/coding/assets/dl/news.pdf)  |

### WP manual

[Download mẫu từ đây（PPTX）](https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx) 




## Template code và hình ảnh

### Template coding

- [HTML data（zip）](https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip)   
- [WordPress data（zip）](https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip)   
- File php của custom theme trong Wordpress 
- Trong template có thể có những nội dung không cần thiết tùy theo từng dự án, vì vậy hãy linh hoạt xóa những phần không cần thiết

### Các loại file dummy

- Data dummy dùng khi test chức năng gửi file đính kèm trong form.

| Định dạng file | Link |
|--------------|--------|
| Excel | [Dummy Excel](https://www.jlweb.jp/coding/assets/dl/dummy.xlsx)  |
| PDF   | [Dummy PDF](https://www.jlweb.jp/coding/assets/dl/dummy.pdf)  |
| Word  | [Dummy Docx](https://www.jlweb.jp/coding/assets/dl/dummy.docx)  |

### Hình ảnh dummy

- Hình ảnh dummy hiển thị khi không có ảnh được thiết lập, ví dụ hình eye-catch

- [Hình dummy（no-image.jpg）](https://www.jlweb.jp/coding/assets/dl/no-image.jpg) 
