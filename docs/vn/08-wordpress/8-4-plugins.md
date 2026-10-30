# 8-4. Về plugin

Tại J-line chúng tôi khuyến nghị sử dụng những plugin dưới đây

### Khi phân chia các mục theo field

- ［Advanced Custom Fields］  
  [https://ja.wordpress.org/plugins/advanced-custom-fields/](https://ja.wordpress.org/plugins/advanced-custom-fields/)  
  Data plugin bản Pro được lưu tại Dropbox, vui lòng sử dụng từ đó

### Khi tạo post type

- Sử dụng luôn tính năng đăng ký Post Type / Taxonomy tích hợp sẵn của **Advanced Custom Fields (ACF)**. Việc này giúp giảm bớt số lượng plugin cần cài đặt và dễ quản lý hơn (không cần cài thêm Custom Post Type UI).
- Cũng có thể xây dựng post type bằng code trong file php (`functions.php`)

### Khi sắp xếp thứ tự bài viết, category một cách trực quan

- ［Intuitive Custom Post Order］  
  [https://hijiriworld.com/web/plugins/intuitive-custom-post-order/](https://hijiriworld.com/web/plugins/intuitive-custom-post-order/)

### Khi xây dựng form

- ［Contact Form 7］  
  [https://ja.wordpress.org/plugins/contact-form-7/](https://ja.wordpress.org/plugins/contact-form-7/)  
- [詳しくはこちら](https://www.jlweb.jp/coding/basic/form/)
- **［Contact Form 7 Auto Generator (import_form_cf7.php)］**
  - **Mục đích:** Tự động hóa quá trình chuyển đổi HTML form tĩnh thành Contact Form 7 chuẩn và tự động sinh template gửi mail.
  - **Cách sử dụng:**
    1. Đảm bảo file `import_form_cf7.php` đã được include trong theme.
    2. Trong file HTML template, thêm class `wpf-title` vào các thẻ tiêu đề của field và class `wpf-acceptance` vào thẻ bọc checkbox đồng ý điều khoản.
    3. Truy cập màn hình quản trị **Contact (お問い合わせ)** của WordPress.
    4. Mở **Screen Options (表示オプション)** ở góc trên cùng bên phải, tích chọn **Template Importer Tool**.
    5. Ở khung công cụ dưới danh sách form, bạn cần nhập/chọn:
       - **Form Name**: Tên của Contact Form sẽ được tạo.
       - **Template File**: File giao diện chứa mã HTML tĩnh của form.
       - **Form Class Selector**: Class hoặc ID bọc ngoài khu vực form bạn muốn convert.
       Sau đó ấn nút **Generate Form**.
    6. Hệ thống sẽ tự tạo Form và tự cấu hình Mail. Bạn chỉ cần copy mã shortcode sinh ra và dán ngược lại vào file template.

### Khi thực hiện di chuyển data

- ［WPvivid］  
  [https://ja.wordpress.org/plugins/wpvivid-backuprestore/](https://ja.wordpress.org/plugins/wpvivid-backuprestore/)  


### Login security

- 「SiteGuard WP Plugin」  
  [https://ja.wordpress.org/plugins/siteguard/](https://ja.wordpress.org/plugins/siteguard/)  
- Bắt buộc cài đặt plugin login security

### Liên quan đến SEO/OGP

- 「SEO SIMPLE PACK」  
  [https://ja.wordpress.org/plugins/seo-simple-pack/](https://ja.wordpress.org/plugins/seo-simple-pack/)  
- Sử dụng khi cài đặt các thẻ liên quan đến SEO, thẻ OGP
