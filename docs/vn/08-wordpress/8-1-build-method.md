# 8-1. Về phương pháp xây dựng

- Tạo một thư mục như「wp2026」, sau đó cài đặt WordPress vào trong thư mục đó 

- Đối với developer thực hiện chính dự án, vui lòng tạo 2 tài khoản quản lý admin:
  - **Tài khoản master (Tài khoản chính):** Tạo khi setup WordPress.
    - Định dạng tên đăng nhập ví dụ: `master-[tên-task]` (ví dụ: `master-lp-renewal`).
    - Thiết lập ngôn ngữ mặc định là **tiếng Nhật**.
    - Sử dụng địa chỉ email của công ty: `kensyo@j-line.co.jp`.
  - **Tài khoản dev (Dành cho team Việt Nam làm việc):**
    - Định dạng tên đăng nhập ví dụ: `dev-[tên-task]` (ví dụ: `dev-lp-renewal`).
    - Sử dụng địa chỉ email cá nhân do công ty cấp để tạo.
    - Ngôn ngữ có thể set theo ngôn ngữ mà lập trình viên cảm thấy thuận tiện làm việc nhất.

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
