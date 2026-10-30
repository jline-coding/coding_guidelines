# 4-1. Về file JavaScript

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
