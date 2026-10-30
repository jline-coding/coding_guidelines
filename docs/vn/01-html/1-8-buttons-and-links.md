# 1-8. Về thẻ button & thẻ a

## Về thẻ `<button>`

- Sử dụng cho các phần tử tương tác bằng JavaScript (mở modal, chuyển tab, v.v.) và nút submit form.
- Tiêu chí đánh giá: Hoạt động dựa trên sự kiện click mà **không làm thay đổi URL**.

## Về thẻ `<a>`

- Sử dụng cho các trường hợp chuyển trang (tất cả những gì làm **thay đổi URL** đều dùng `<a>`).
- Bắt buộc dùng `<a>` cho các nút như "Back to top" (cuộn lên đầu trang) hoặc nút "Entry" (chuyển sang trang đăng ký/form), không sử dụng `<button>`.
- Vùng có thể click của thẻ a phải bao phủ toàn bộ khu vực của nút.
- **Quy tắc thiết lập thuộc tính `href` đúng cách và đầy đủ nhất:**
  - **Liên kết nội bộ (Internal link):**
    - Sử dụng đường dẫn tương đối từ root (Root-relative path, bắt đầu bằng `/`) để đảm bảo liên kết hoạt động chính xác ở cả trang chủ lẫn các trang con (ví dụ: `href="/about/"` thay vì `href="about/"` hoặc `href="about.html"`).
    - Phải có dấu gạch chéo cuối trang (Trailing Slash) ở cuối URL thư mục (ví dụ: `href="/contact/"` thay vì `href="/contact"`), giúp tránh việc trình duyệt phải redirect 301 không cần thiết, làm giảm hiệu suất tải trang và ảnh hưởng đến SEO.
    - Tuyệt đối không viết cứng tên miền (domain) của môi trường local hoặc staging vào link (ví dụ: cấm dùng `href="https://test-server.com/about/"`).
  - **Liên kết ngoài (External link):**
    - Phải viết đầy đủ giao thức `https://` hoặc `http://` (ví dụ: `href="https://google.com"`).
    - Bắt buộc phải có thuộc tính `target="_blank"` kèm theo `rel="noopener noreferrer"` để đảm bảo bảo mật thông tin và hiệu suất của trang web.
  - **Liên kết gọi điện thoại và gửi email (Tel & Mailto):**
    - Gọi điện: Sử dụng định dạng `href="tel:số-điện-thoại"` không chứa khoảng trắng hay ký tự đặc biệt như dấu gạch ngang (ví dụ: `href="tel:0312345678"`, kể cả khi phần text hiển thị là `03-1234-5678`).
    - Gửi email: Sử dụng định dạng `href="mailto:địa-chỉ-email"` (ví dụ: `href="mailto:info@example.com"`).
  - **Liên kết neo trong trang (Anchor link):**
    - Cùng một trang: Sử dụng `href="#id-neo"` (ví dụ: `href="#contact"`).
    - Từ trang khác trỏ đến một section của trang chủ: Sử dụng `href="/#id-neo"` (ví dụ: `href="/#contact"` hoặc `href="../#contact"` tuỳ cấu trúc).
  - **Trong môi trường phát triển WordPress:**
    - Không viết cứng URL tĩnh, bắt buộc sử dụng các hàm PHP động của WordPress để sinh liên kết:
      - Link trang chủ: `<?php echo esc_url( home_url( '/' ) ); ?>`
      - Link trang con / Bài viết động (theo ID hoặc Object): `<?php echo esc_url( get_permalink( $page_id ) ); ?>`
      - Link đến file tĩnh trong thư mục theme (ảnh, css, js): `<?php echo esc_url( get_theme_file_uri( '/assets/images/logo.svg' ) ); ?>`
