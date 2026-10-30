# 1-1. Cấu trúc file

- Đối với các trang con, tạo folder riêng và đặt file index.html(index.ejs) bên trong. URL phải kết thúc bằng dấu /
- Thêm các thư mục css, images, js, vendor bên trong thư mục assets.
  - Trong thư mục vendor, thêm các file js, css của plugin bên ngoài như slider, v.v.
- Không upload file Sass lên server.
- Xóa các file hoặc hình ảnh không cần thiết khỏi cả server và môi trường local.
- Vì toàn bộ thư mục cài đặt sẽ nằm dưới sự quản lý của WordPress, cần tạo một folder riêng cho WordPress và đặt toàn bộ vào trong đó.
  - Để đảm bảo tính quản lý, đặt index.php và .htaccess trực tiếp dưới thư mục root. Phần core của WordPress sẽ được lưu trong folder /wp-bridge2025/.

### Cấu trúc thư mục TEMPLATE_HTML

```text
TEMPLATE_HTML/
│
├── public/                      # Thư mục đầu ra (Output) chứa code HTML/CSS/JS đã được build hoàn chỉnh
│   ├── assets/                  # Chứa các tài nguyên tĩnh đã được biên dịch hoặc copy sang
│   │   ├── css/                 # File .css đã được compile từ SCSS
│   │   ├── images/              # Hình ảnh của dự án
│   │   ├── js/                  # File javascript tĩnh
│   │   └── vendor/              # Các thư viện bên thứ 3 (jQuery, GSAP, Swiper...)
│   ├── sample/                  # Ví dụ một trang con đã được build
│   │   └── index.html
│   └── index.html               # File HTML trang chủ (đã được compile từ EJS)
│
├── src/                         # Thư mục mã nguồn chính (Dành cho Development)
│   ├── components/              # Chứa các mảnh EJS nhỏ tái sử dụng (Partials)
│   │   ├── _header.ejs          # Header của trang web
│   │   ├── _footer.ejs          # Footer của trang web
│   │   └── _sidebar.ejs         # Thanh bên (Sidebar)
│   ├── layouts/                 # Chứa các bộ khung layout cơ bản
│   │   └── _default.ejs         # Layout mặc định bao bọc lấy nội dung các trang (chứa thẻ <html>, <head>, <body>)
│   └── pages/                   # Thư mục chứa các trang cụ thể (Mỗi file .ejs ở đây tương ứng với 1 trang HTML output)
│       ├── assets/              # Chứa file nguồn chưa biên dịch (ví dụ: SCSS, JS gốc)
│       ├── sample/              # Ví dụ thư mục chứa trang con
│       │   └── index.ejs
│       └── index.ejs            # File mã nguồn của trang chủ
│
├── scripts/                     # Thư mục chứa các lệnh/script để tự động hóa (Build, Clean)
│   ├── builders/                # Các script để xử lý từng tác vụ riêng biệt
│   │   ├── assets.js            # Xử lý việc copy/tối ưu assets sang thư mục public
│   │   ├── ejs.js               # Biên dịch EJS sang HTML
│   │   └── scss.js              # Biên dịch SCSS sang CSS
│   ├── tools/                   # Các công cụ hỗ trợ cho scripts
│   │   ├── config.js            # File cấu hình (đường dẫn, môi trường...) cho bộ build
│   │   └── utils.js             # Các hàm tiện ích hỗ trợ tái sử dụng
│   ├── build.js                 # Điểm neo chính để chạy toàn bộ quá trình build dự án
│   ├── clean.js                 # Script dọn dẹp (xóa) thư mục public/ trước mỗi lần build lại
│   └── link.js                  # Script phục vụ deploy / tạo symlink liên kết
│
├── __tests__/                   # Thư mục chứa các bài test kiểm thử tự động
├── .github/                     # Chứa cấu hình cho GitHub (GitHub Actions CI/CD)
├── node_modules/                # Chứa các thư viện Node.js được tải về (từ package.json)
│
├── deploy-config.json           # Cấu hình deploy tự động (Thông tin FTP/SFTP, path...)
├── package.json                 # Quản lý thông tin dự án và các dependencies (thư viện npm)
├── package-lock.json            # Khóa phiên bản chính xác của các thư viện trong node_modules
├── README.md                    # Tài liệu hướng dẫn sử dụng và cài đặt dự án
├── .env                         # File chứa các biến môi trường (chứa keys bí mật, thông tin local)
├── .env.example                 # File mẫu để cho biết .env cần những biến nào
├── .editorconfig                # Cấu hình chuẩn format code (như tab/space) cho mọi Editor/IDE
└── .gitignore                   # Các file, thư mục bị bỏ qua (không push lên Git)
```

### Cấu trúc thư mục TEMPLATE_WP

```text
TEMPLATE_WP/
│
├── .github/                     # Chứa các thiết lập của GitHub Actions
│   └── workflows/               # Các kịch bản tự động hóa (CI/CD)
│       ├── deploy.yml           # Script tự động deploy lên server
│       └── release.yml          # Script tự động tạo bản release
│
├── public/                      # Thư mục chứa mã nguồn WordPress core chạy trên Local
│   ├── wp-admin/                # Trang quản trị WP
│   ├── wp-content/              # Nơi chứa themes, plugins, uploads (chạy trên local)
│   ├── wp-includes/             # Các thư viện lõi của WordPress
│   ├── wp-config.php            # File cấu hình kết nối database WP
│   └── ...                      # Các file hệ thống khác của WP (index.php, wp-login.php,...)
│
├── scripts/                     # Các file thực thi (Node.js) hỗ trợ môi trường dev/build
│   ├── build.js                 # Biên dịch assets (như SCSS sang CSS, Minify JS...)
│   ├── clean.js                 # Xóa/dọn dẹp các thư mục build cũ
│   ├── download-wp.js           # Tự động tải mới mã nguồn WordPress lõi về thư mục public/
│   └── link.js                  # Tạo symlink (link ảo) đưa code từ src/ vào thư mục themes của public/
│
├── src/                         # 🌟 THƯ MỤC LÀM VIỆC CHÍNH - Chứa mã nguồn của Theme
│   ├── assets/                  # Các tài nguyên tĩnh chưa qua biên dịch
│   │   ├── images/              # Hình ảnh của theme
│   │   ├── js/                  # Mã nguồn JavaScript (sẽ được build)
│   │   ├── scss/                # Mã nguồn CSS dạng SCSS (sẽ được build sang CSS)
│   │   └── vendor/              # Thư viện bên thứ 3 (như jQuery, Swiper, GSAP...)
│   │
│   ├── includes/                # Chứa các file chức năng (PHP) được tách nhỏ để dễ quản lý
│   │   ├── contactform.php      # Code xử lý form liên hệ
│   │   ├── editor-block-theme.php # Cấu hình tùy chỉnh cho Gutenberg Block Editor
│   │   ├── shortcode.php        # Đăng ký các custom shortcodes
│   │   └── styles-scripts-all.php # File khai báo load CSS/JS (wp_enqueue_scripts)
│   │
│   ├── 404.php                  # Giao diện trang lỗi Không Tìm Thấy (404)
│   ├── archive.php              # Giao diện danh sách bài viết (Chuyên mục, Thẻ...)
│   ├── footer.php               # Giao diện chân trang (Footer) chung
│   ├── front-page.php           # Giao diện cho Trang Chủ
│   ├── functions.php            # Nơi gọi các functions và thiết lập Theme (thường include file từ thư mục includes/)
│   ├── header.php               # Giao diện đầu trang (Header) chung
│   ├── index.php                # Template dự phòng mặc định của WP
│   ├── page.php                 # Giao diện các trang tĩnh (Giới thiệu, Liên hệ...)
│   ├── search.php               # Giao diện kết quả tìm kiếm
│   ├── single-news.php          # Giao diện chi tiết một bài viết Custom (VD: tin tức)
│   ├── style.css                # File khai báo thông tin Theme (Tên theme, tác giả...)
│   ├── taxonomy.php             # Giao diện phân loại cho Custom Post Type
│   └── theme.json               # Cấu hình Global Styles cho Block Theme (Màu sắc, font chữ...)
│
├── node_modules/                # Các gói thư viện Node.js được cài từ package.json
│
├── .env                         # Các biến môi trường cá nhân (kết nối DB, URL) - KHÔNG push lên Git
├── .env.example                 # File mẫu chứa danh sách các biến môi trường cần có
├── .gitignore                   # Cấu hình những file/thư mục không đẩy lên Git (node_modules/, public/, .env...)
├── deploy-config.json           # Tệp chứa các cấu hình phục vụ việc Deploy lên Server
├── package.json                 # Khai báo thông tin project và các lệnh/scripts npm
├── package-lock.json            # Khóa phiên bản chính xác của các thư viện Node.js
└── README.md                    # Tài liệu hướng dẫn sử dụng và cài đặt dự án
```

> **Chú ý:**
> - Chỉ thực hiện code và cấu hình trong thư mục `src/`, file `.env`, và `deploy-config.json`.
> - Tuyệt đối không chỉnh sửa trực tiếp các file trong thư mục `public/`, `node_modules/`, `scripts/`, hoặc các file hệ thống khác để tránh mất dữ liệu khi build hoặc làm hỏng cấu trúc chuẩn của template.
