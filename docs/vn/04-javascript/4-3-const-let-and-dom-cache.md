# 4-3. Quy tắc const let

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
