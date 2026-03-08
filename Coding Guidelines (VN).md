# J-Line Web Marketing - Coding Guidelines

## Mục đích của Guideline này

Guideline này là quy định nội bộ nhằm giúp tất cả thành viên trong bộ phận Web Marketing của Công ty J-Line có thể thực hiện công việc sản xuất website một cách thống nhất, không gặp lúng túng và đảm bảo chất lượng cao trong quá trình coding.

Không chỉ đặt mục tiêu tái hiện lại design, tài liệu này còn tổng hợp các nguyên tắc và tư duy nhằm mang lại trải nghiệm thoải mái cho người dùng, cấu trúc dễ quản lý cho người cập nhật nội dung, đồng thời nâng cao năng suất làm việc của toàn bộ team.

Thông qua việc áp dụng guideline này, chúng tôi hướng tới việc đạt được các trạng thái sau:

- Đảm bảo chất lượng ổn định, bất kể ai là người phụ trách
- Loại bỏ sự phụ thuộc vào cá nhân nhờ cấu trúc rõ ràng, dễ đọc
- Giảm thiểu thời gian review và xác nhận bàn giao
- Xây dựng nền tảng vững chắc cho việc chỉnh sửa・vận hành và tái sử dụng cho các dự án trong tương lai
  
## Tư duy cơ bản

- Thực hiện markup chính xác, tuân thủ theo tiêu chuẩn HTML của W3C
- Các thẻ không mang ý nghĩa (như div, span…) chỉ sử dụng cho mục đích layout; tránh lồng (nest) quá nhiều hoặc tạo wrapper không cần thiết. Cần chú ý đến cấu trúc ngữ nghĩa của HTML và chủ động sử dụng các thẻ semantic khi phù hợp.
- design cấu trúc không bị vỡ khi nội dung tăng hoặc giảm.
- Không chỉ tái hiện lại design, mà còn phải code theo hướng dễ cập nhật và dễ vận hành.
- Cân nhắc môi trường truy cập của người dùng, đảm bảo layout không bị vỡ theo độ rộng container.
- Khi upload bản test, phải ở trạng thái tương đương với lúc công khai chính thức.

※※ Trừ trường hợp thiếu hình ảnh chụp hoặc nội dung, khi upload bản test không được để lại dummy text hoặc dummy image.
※Nếu có khả năng phát sinh chậm tiến độ, cần báo cáo ngay cho Director phụ trách và Coding Leader.


# Các thành phần cơ bản

## Liên quan đến HTML

### Cấu trúc file

- Đối với các trang con, tạo folder riêng và đặt file index.html bên trong. URL phải kết thúc bằng dấu / （ https://ドメイン/○○/ ）
- Thêm các thư mục css, images, js, vender bên trong thư mục assets.
  - Trong thư mục vender, thêm các file js, css của plugin bên ngoài như slider, v.v.
- Không upload file Sass lên server.
- Xóa các file hoặc hình ảnh không cần thiết khỏi cả server và môi trường local.
- Vì toàn bộ thư mục cài đặt sẽ nằm dưới sự quản lý của WordPress, cần tạo một folder riêng cho WordPress và đặt toàn bộ vào trong đó.
  - Để đảm bảo tính quản lý, đặt index.php và .htaccess trực tiếp dưới thư mục root. Phần core của WordPress sẽ được lưu trong folder “wp-bridge2025”.
[ví dụ cấu trúc folder](https://docs.google.com/spreadsheets/d/1lPs7MtXUkwyGbCdF9wSgbP_I9lzZczuvFK6cSkhvAA4/edit#gid=261860441)


### Quy tắc format

- Không sử dụng chữ in hoa cho tag, class name hoặc ID. Thêm nữa, Khi nối các từ, không dùng dấu gạch ngang [-] mà sử dụng dấu gạch dưới [_]
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

[tải template tại đây](https://www.jlweb.jp/coding/assets/dl/html.zip)


### danh sách markup cho từng hạng mục

#### Về table coding

- Về nguyên tắc, không thực hiện coding bằng thẻ table

#### Về thẻ đóng

- không được lược bỏ thẻ đóng

#### Về mã hóa ký tự

- UTF-8を使用
  - File phải được lưu dưới dạng UTF-8 không có BOM
    `<meta charset="utf-8">`

#### Về việc chỉ định Title

- Nếu phía khách hàng không có chỉ định cụ thể, sử dụng định dạng:Tên trang｜Tên website
- Cần thống nhất cách ghi title. Nếu không có yêu cầu đặc biệt, thiết lập theo quy tắc dưới

**trang TOP**

```html
<title>●●株式会社</title>
```

**trang TOP recruit**

```html
<title>●●株式会社｜採用サイト</title>
```


**trang con**

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
    ul.global_nav{}

    /* OK */
    .global_nav{}
    ```
- Giảm thiểu việc sử dụng các descendant selector không cần thiết
- Tất cả các property phải kết thúc bằng dấu chấm phẩy ;
- Mỗi selector và property phải được viết trên dòng riêng
- Khi giá trị là 0, bỏ đơn vị
- color code phải viết bằng chữ thường; nếu có thể rút gọn thì sử dụng dạng rút gọn

#### Về thẻ`<h1>`～`<h6>`

- Sử dụng thẻ heading`<h1>`～`<h6>` phù hợp với cấu trúc nội dung. Trong mỗi trang bắt buộc phải có ít nhất các thẻ từ`<h1>`～`<h3>`
- Ở trang TOP: logo header sử dụng thẻ <h1> , ở các trang cấp dưới: logo header đổi sang thẻ <div> và tiêu đề trang sẽ sử dụng <h1>
- Nếu trong design từ phía khách hàng không có heading rõ ràng, thì sử dụng các thẻ heading trong phạm vi có thể áp dụng được
- 
#### thẻ `<header>`, thẻ `<main>`, thẻ`<footer>`

- Mỗi trang về nguyên tắc chỉ sử dụng 1 thẻ
- Phần header dùng chung của trang phải sử dụng thẻ`<header>`
- Phần footer dùng chung của trang phải sử dụng thẻ `<footer>`

#### Về thẻ `<button>`

- Chỉ sử dụng cho nút gửi form chẳng hạn
- Không sử dụng cho nút back to top và nút entry

####về tag  `<a>`

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
Việc chuyển đổi hình ảnh sang WebP được khuyến nghị tự động hóa bằng {{công cụ xuất file}}
{{Cách xuất file cụ thể}}
{{Thiết lập chất lượng khi xuất file}}
→ Phần này do team Vietnam đề xuất

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

### design file CSS

* Nếu website có nhiều trang, hãy tách riêng file CSS cho từng trang
* Nguyên tắc chung: không được viết style trực tiếp trong file HTML

### Chỉ định mã hóa ký tự

* File CSS phải sử dụng mã hóa UTF-8
* Phải sử dụng cùng mã hóa với file HTML để tránh lỗi hiển thị hoặc lỗi font

### Phân biệt ID và Class

Ngoại trừ các phần tử dùng làm anchor link, nguyên tắc chung là chỉ sử dụng Class để styling

#### Về Class

- Không sử dụng ID để định nghĩa style
- Chỉ sử dụng ID cho mục đích cấu trúc HTML, ví dụ: đích đến của anchor link
- Giá trị của ID phải là chuỗi tiếng Anh tương ứng với tên nội dung
- 
#### Classについて

- Tất cả các style phải được định nghĩa bằng Class
- Tên class phải tuân theo các quy tắc dưới đây

##### Quy tắc đặt tên Class

- ghi theo thứ tự class="汎用クラス オリジナルクラス" 
- Tên class không đặt theo hình thức bên ngoài (màu sắc, độ đậm…), mà phải đặt dựa trên mục đích, vai trò và ý nghĩa
- Tên class phải dễ đoán và dễ hiểu, để developer khác khi nhìn vào có thể hiểu ngay

```html
<!-- sai -->
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
<!-- OK -->
<div class="news">
   <ul class="news_list">
      <li class="news_item">
         <h3 class="news_item__title"></h3>
         <p class="news_item__lead"></p>
      </li>
   </ul>
</div>
```


### Về Sass

* Quy tắc sử dụng Sass phải tuân theo “Sass Manual”
[Manual tại đây](https://docs.google.com/spreadsheets/d/1lPs7MtXUkwyGbCdF9wSgbP_I9lzZczuvFK6cSkhvAA4/edit#gid=0)

※Do team Vietnam đề xuất Muốn cập nhật lại


## Về JavaScript


### Về file JavaScript

* Nguyên tắc chung: không viết trực tiếp JavaScript trong file HTML. Phải quản lý dưới dạng file bên ngoài
* Mỗi xử lý (function / action) phải có comment, sử dụng tiếng Anh hoặc tiếng Nhật
* File JS (bao gồm cả việc load file JS ngoài) phải được khai báo trong các file dùng chung như header.php, footer.php
* Khi load file JS phải thêm thuộc tính defer 
  ví dụ：`<script src=“./assets/plugins/anijs/ani.js” defer></script>`  
* Hạn chế sử dụng CDN ※CDN của jQuery đôi khi load chậm, có thể gây lỗi hiển thị giao diện
* Những đoạn JS được sử dụng cho toàn bộ hoặc hầu hết các trang phải được gom lại và viết trong common.js

### Về cách viết

* Cách viết phải được thống nhất, có tính đến khả năng bảo trì

```js
$(window).on(‘scroll’, function(){});
jQuery(window).on(‘scroll’,function(){})
```
※Xác nhận từ Shimada san　↑Có thể bổ sung phần giải thích rằng mục đích ở đây là gì không?

### Quy tắc const let

* Vì const là hằng số nên khi chỉ định DOM selector hoặc giá trị cố định dùng const, biến có thể thay đổi dùng let
* Khi gán DOM vào biến, nên lưu class name thay vì lưu trực tiếp jQuery object, để dễ tái sử dụng và linh hoạt hơn
  
```js
// （ví dụ）
let newsLink = $(‘.js-news-tab-btn’);

// ↓ viết lại

const newsLink = ‘.js-news-tab-btn’;
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
※Ghi chú của Shimada san：Về cách chuẩn bị data chênh lệch, hãy thay đổi theo phương pháp do team Việt Nam đề xuất

#### Công khai môi trường production（công việc công khai）

* Khi có task phát sinh, cần xác nhận các thông tin sau: thông tin FTP của khách hàng, kiểm tra kết nối, thư mục upload, xác nhận với director xem có xóa data cũ trên server hay không
* Trường hợp site tĩnh, Tạo folder [old] trên server và di chuyển data cũ vào đó. Đồng thời, backup data và tạo folder [old] trên Dropbox để lưu trữ
* Sau khi upload, dùng checklist để kiểm tra xem site có vấn đề gì không [「check list」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0)

*Trường hợp Wordpress**

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
| size SP   　| 375px- dưới 767px  |

### Về font

- Cơ bản đặt đơn vị nên dùng rem
- Khi hiển thị trên SP (smartphone), nếu design không chỉ định, không dùng font-size nhỏ hơn 12px
- font-size tối thiểu là 10px


## Về trình duyệt mục tiêu

### Tạo site sao cho layout và hoạt động đúng trên các môi trường trình duyệt sau

#### PC

**Windows（OS / Windows 10.xおよびWindows 11.x）**
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
- [Cấu trúc thư mục](https://docs.google.com/spreadsheets/d/1lPs7MtXUkwyGbCdF9wSgbP_I9lzZczuvFK6cSkhvAA4/edit#gid=261860441)参照
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
// ẩn site menu
function remove_menus() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'ID tài khoản khách hàng（ví dụ：writer-test）') {
    remove_menu_page('edit.php'); // post
    remove_menu_page('upload.php'); // media
    remove_menu_page('edit.php?post_type=page'); // pages
    remove_menu_page('edit-comments.php'); // comment
    remove_menu_page('themes.php'); // appearance
    remove_menu_page('plugins.php'); // plugin
    remove_submenu_page('index.php', 'update-core.php');
    remove_menu_page('users.php'); // user
    remove_menu_page('tools.php'); // tool
    remove_menu_page('options-general.php'); // setting
    remove_menu_page('wpcf7'); // contactform7
    remove_menu_page('ai1wm_export'); // wp migration
    remove_menu_page('cptui_main_menu'); // CPT UI
    remove_menu_page('siteguard'); // site Guard
  }
}
add_action('admin_menu', 'remove_menus');

// ẩn dashboard
function remove_dashboard_widgets() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'ID tài khoản khách hàng') {
    remove_action('admin_notices', 'update_nag', 3);
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal'); // site health status
    remove_meta_box('dashboard_activity', 'dashboard', 'normal'); // activity
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); // at a glance
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); // quick press
    remove_meta_box('dashboard_primary', 'dashboard', 'side'); // WordPress event và news
  }
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets');

// ẩn icon ở toolbar phía trên của trang quản trị
function hide_adminbar_update_icon() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'ID tài khoản khách hàng') {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('updates');
  }
}
add_action('wp_before_admin_bar_render', 'hide_adminbar_update_icon');

// ẩn thông báo cập nhật
function update_message_admin_only() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'ID tài khoản khách hàng') {
    add_filter('pre_site_transient_update_core', '__return_zero');
    remove_action('wp_version_check', 'wp_version_check');
    remove_action('admin_init', '_maybe_update_core');
  }
}
add_action('admin_init', 'update_message_admin_only');
```

### Về plugin

Tại J-line chúng tôi khuyến nghị sử dụng những plugin dưới đây

#### Khi phân chia các mục theo field

- ［Advanced Custom Fields］  
  [https://ja.wordpress.org/plugins/advanced-custom-fields/](https://ja.wordpress.org/plugins/advanced-custom-fields/)  
  Data plugin bản Pro được lưu tại Dropbox, vui lòng sử dụng từ đó

#### Khi tạo post type

- ［Custom Post Type UI］  
  [https://ja.wordpress.org/plugins/custom-post-type-ui/](https://ja.wordpress.org/plugins/custom-post-type-ui/)  
- Cũng có thể xây dựng post type bằng file php

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

- [HTML data（zip）](https://www.jlweb.jp/coding/assets/dl/html.zip)   
- [WordPress data（zip）](https://www.jlweb.jp/coding/assets/dl/wp_theme.zip)   
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
