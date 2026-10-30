import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"1-1. Cấu trúc file","description":"","frontmatter":{},"headers":[],"relativePath":"vn/01-html/1-1-file-structure.md","filePath":"vn/01-html/1-1-file-structure.md"}');
const _sfc_main = { name: "vn/01-html/1-1-file-structure.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_1-1-cau-truc-file" tabindex="-1">1-1. Cấu trúc file <a class="header-anchor" href="#_1-1-cau-truc-file" aria-label="Permalink to &quot;1-1. Cấu trúc file&quot;">​</a></h1><ul><li>Đối với các trang con, tạo folder riêng và đặt file index.html(index.ejs) bên trong. URL phải kết thúc bằng dấu /</li><li>Thêm các thư mục css, images, js, vendor bên trong thư mục assets. <ul><li>Trong thư mục vendor, thêm các file js, css của plugin bên ngoài như slider, v.v.</li></ul></li><li>Không upload file Sass lên server.</li><li>Xóa các file hoặc hình ảnh không cần thiết khỏi cả server và môi trường local.</li><li>Vì toàn bộ thư mục cài đặt sẽ nằm dưới sự quản lý của WordPress, cần tạo một folder riêng cho WordPress và đặt toàn bộ vào trong đó. <ul><li>Để đảm bảo tính quản lý, đặt index.php và .htaccess trực tiếp dưới thư mục root. Phần core của WordPress sẽ được lưu trong folder /wp-bridge2025/.</li></ul></li></ul><h3 id="cau-truc-thu-muc-template-html" tabindex="-1">Cấu trúc thư mục TEMPLATE_HTML <a class="header-anchor" href="#cau-truc-thu-muc-template-html" aria-label="Permalink to &quot;Cấu trúc thư mục TEMPLATE_HTML&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TEMPLATE_HTML/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── public/                      # Thư mục đầu ra (Output) chứa code HTML/CSS/JS đã được build hoàn chỉnh</span></span>
<span class="line"><span>│   ├── assets/                  # Chứa các tài nguyên tĩnh đã được biên dịch hoặc copy sang</span></span>
<span class="line"><span>│   │   ├── css/                 # File .css đã được compile từ SCSS</span></span>
<span class="line"><span>│   │   ├── images/              # Hình ảnh của dự án</span></span>
<span class="line"><span>│   │   ├── js/                  # File javascript tĩnh</span></span>
<span class="line"><span>│   │   └── vendor/              # Các thư viện bên thứ 3 (jQuery, GSAP, Swiper...)</span></span>
<span class="line"><span>│   ├── sample/                  # Ví dụ một trang con đã được build</span></span>
<span class="line"><span>│   │   └── index.html</span></span>
<span class="line"><span>│   └── index.html               # File HTML trang chủ (đã được compile từ EJS)</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src/                         # Thư mục mã nguồn chính (Dành cho Development)</span></span>
<span class="line"><span>│   ├── components/              # Chứa các mảnh EJS nhỏ tái sử dụng (Partials)</span></span>
<span class="line"><span>│   │   ├── _header.ejs          # Header của trang web</span></span>
<span class="line"><span>│   │   ├── _footer.ejs          # Footer của trang web</span></span>
<span class="line"><span>│   │   └── _sidebar.ejs         # Thanh bên (Sidebar)</span></span>
<span class="line"><span>│   ├── layouts/                 # Chứa các bộ khung layout cơ bản</span></span>
<span class="line"><span>│   │   └── _default.ejs         # Layout mặc định bao bọc lấy nội dung các trang (chứa thẻ &lt;html&gt;, &lt;head&gt;, &lt;body&gt;)</span></span>
<span class="line"><span>│   └── pages/                   # Thư mục chứa các trang cụ thể (Mỗi file .ejs ở đây tương ứng với 1 trang HTML output)</span></span>
<span class="line"><span>│       ├── assets/              # Chứa file nguồn chưa biên dịch (ví dụ: SCSS, JS gốc)</span></span>
<span class="line"><span>│       ├── sample/              # Ví dụ thư mục chứa trang con</span></span>
<span class="line"><span>│       │   └── index.ejs</span></span>
<span class="line"><span>│       └── index.ejs            # File mã nguồn của trang chủ</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── scripts/                     # Thư mục chứa các lệnh/script để tự động hóa (Build, Clean)</span></span>
<span class="line"><span>│   ├── builders/                # Các script để xử lý từng tác vụ riêng biệt</span></span>
<span class="line"><span>│   │   ├── assets.js            # Xử lý việc copy/tối ưu assets sang thư mục public</span></span>
<span class="line"><span>│   │   ├── ejs.js               # Biên dịch EJS sang HTML</span></span>
<span class="line"><span>│   │   └── scss.js              # Biên dịch SCSS sang CSS</span></span>
<span class="line"><span>│   ├── tools/                   # Các công cụ hỗ trợ cho scripts</span></span>
<span class="line"><span>│   │   ├── config.js            # File cấu hình (đường dẫn, môi trường...) cho bộ build</span></span>
<span class="line"><span>│   │   └── utils.js             # Các hàm tiện ích hỗ trợ tái sử dụng</span></span>
<span class="line"><span>│   ├── build.js                 # Điểm neo chính để chạy toàn bộ quá trình build dự án</span></span>
<span class="line"><span>│   ├── clean.js                 # Script dọn dẹp (xóa) thư mục public/ trước mỗi lần build lại</span></span>
<span class="line"><span>│   └── link.js                  # Script phục vụ deploy / tạo symlink liên kết</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── __tests__/                   # Thư mục chứa các bài test kiểm thử tự động</span></span>
<span class="line"><span>├── .github/                     # Chứa cấu hình cho GitHub (GitHub Actions CI/CD)</span></span>
<span class="line"><span>├── node_modules/                # Chứa các thư viện Node.js được tải về (từ package.json)</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── deploy-config.json           # Cấu hình deploy tự động (Thông tin FTP/SFTP, path...)</span></span>
<span class="line"><span>├── package.json                 # Quản lý thông tin dự án và các dependencies (thư viện npm)</span></span>
<span class="line"><span>├── package-lock.json            # Khóa phiên bản chính xác của các thư viện trong node_modules</span></span>
<span class="line"><span>├── README.md                    # Tài liệu hướng dẫn sử dụng và cài đặt dự án</span></span>
<span class="line"><span>├── .env                         # File chứa các biến môi trường (chứa keys bí mật, thông tin local)</span></span>
<span class="line"><span>├── .env.example                 # File mẫu để cho biết .env cần những biến nào</span></span>
<span class="line"><span>├── .editorconfig                # Cấu hình chuẩn format code (như tab/space) cho mọi Editor/IDE</span></span>
<span class="line"><span>└── .gitignore                   # Các file, thư mục bị bỏ qua (không push lên Git)</span></span></code></pre></div><h3 id="cau-truc-thu-muc-template-wp" tabindex="-1">Cấu trúc thư mục TEMPLATE_WP <a class="header-anchor" href="#cau-truc-thu-muc-template-wp" aria-label="Permalink to &quot;Cấu trúc thư mục TEMPLATE_WP&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TEMPLATE_WP/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── .github/                     # Chứa các thiết lập của GitHub Actions</span></span>
<span class="line"><span>│   └── workflows/               # Các kịch bản tự động hóa (CI/CD)</span></span>
<span class="line"><span>│       ├── deploy.yml           # Script tự động deploy lên server</span></span>
<span class="line"><span>│       └── release.yml          # Script tự động tạo bản release</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── public/                      # Thư mục chứa mã nguồn WordPress core chạy trên Local</span></span>
<span class="line"><span>│   ├── wp-admin/                # Trang quản trị WP</span></span>
<span class="line"><span>│   ├── wp-content/              # Nơi chứa themes, plugins, uploads (chạy trên local)</span></span>
<span class="line"><span>│   ├── wp-includes/             # Các thư viện lõi của WordPress</span></span>
<span class="line"><span>│   ├── wp-config.php            # File cấu hình kết nối database WP</span></span>
<span class="line"><span>│   └── ...                      # Các file hệ thống khác của WP (index.php, wp-login.php,...)</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── scripts/                     # Các file thực thi (Node.js) hỗ trợ môi trường dev/build</span></span>
<span class="line"><span>│   ├── build.js                 # Biên dịch assets (như SCSS sang CSS, Minify JS...)</span></span>
<span class="line"><span>│   ├── clean.js                 # Xóa/dọn dẹp các thư mục build cũ</span></span>
<span class="line"><span>│   ├── download-wp.js           # Tự động tải mới mã nguồn WordPress lõi về thư mục public/</span></span>
<span class="line"><span>│   └── link.js                  # Tạo symlink (link ảo) đưa code từ src/ vào thư mục themes của public/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src/                         # 🌟 THƯ MỤC LÀM VIỆC CHÍNH - Chứa mã nguồn của Theme</span></span>
<span class="line"><span>│   ├── assets/                  # Các tài nguyên tĩnh chưa qua biên dịch</span></span>
<span class="line"><span>│   │   ├── images/              # Hình ảnh của theme</span></span>
<span class="line"><span>│   │   ├── js/                  # Mã nguồn JavaScript (sẽ được build)</span></span>
<span class="line"><span>│   │   ├── scss/                # Mã nguồn CSS dạng SCSS (sẽ được build sang CSS)</span></span>
<span class="line"><span>│   │   └── vendor/              # Thư viện bên thứ 3 (như jQuery, Swiper, GSAP...)</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── includes/                # Chứa các file chức năng (PHP) được tách nhỏ để dễ quản lý</span></span>
<span class="line"><span>│   │   ├── contactform.php      # Code xử lý form liên hệ</span></span>
<span class="line"><span>│   │   ├── editor-block-theme.php # Cấu hình tùy chỉnh cho Gutenberg Block Editor</span></span>
<span class="line"><span>│   │   ├── shortcode.php        # Đăng ký các custom shortcodes</span></span>
<span class="line"><span>│   │   └── styles-scripts-all.php # File khai báo load CSS/JS (wp_enqueue_scripts)</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── 404.php                  # Giao diện trang lỗi Không Tìm Thấy (404)</span></span>
<span class="line"><span>│   ├── archive.php              # Giao diện danh sách bài viết (Chuyên mục, Thẻ...)</span></span>
<span class="line"><span>│   ├── footer.php               # Giao diện chân trang (Footer) chung</span></span>
<span class="line"><span>│   ├── front-page.php           # Giao diện cho Trang Chủ</span></span>
<span class="line"><span>│   ├── functions.php            # Nơi gọi các functions và thiết lập Theme (thường include file từ thư mục includes/)</span></span>
<span class="line"><span>│   ├── header.php               # Giao diện đầu trang (Header) chung</span></span>
<span class="line"><span>│   ├── index.php                # Template dự phòng mặc định của WP</span></span>
<span class="line"><span>│   ├── page.php                 # Giao diện các trang tĩnh (Giới thiệu, Liên hệ...)</span></span>
<span class="line"><span>│   ├── search.php               # Giao diện kết quả tìm kiếm</span></span>
<span class="line"><span>│   ├── single-news.php          # Giao diện chi tiết một bài viết Custom (VD: tin tức)</span></span>
<span class="line"><span>│   ├── style.css                # File khai báo thông tin Theme (Tên theme, tác giả...)</span></span>
<span class="line"><span>│   ├── taxonomy.php             # Giao diện phân loại cho Custom Post Type</span></span>
<span class="line"><span>│   └── theme.json               # Cấu hình Global Styles cho Block Theme (Màu sắc, font chữ...)</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── node_modules/                # Các gói thư viện Node.js được cài từ package.json</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── .env                         # Các biến môi trường cá nhân (kết nối DB, URL) - KHÔNG push lên Git</span></span>
<span class="line"><span>├── .env.example                 # File mẫu chứa danh sách các biến môi trường cần có</span></span>
<span class="line"><span>├── .gitignore                   # Cấu hình những file/thư mục không đẩy lên Git (node_modules/, public/, .env...)</span></span>
<span class="line"><span>├── deploy-config.json           # Tệp chứa các cấu hình phục vụ việc Deploy lên Server</span></span>
<span class="line"><span>├── package.json                 # Khai báo thông tin project và các lệnh/scripts npm</span></span>
<span class="line"><span>├── package-lock.json            # Khóa phiên bản chính xác của các thư viện Node.js</span></span>
<span class="line"><span>└── README.md                    # Tài liệu hướng dẫn sử dụng và cài đặt dự án</span></span></code></pre></div><blockquote><p><strong>Chú ý:</strong></p><ul><li>Chỉ thực hiện code và cấu hình trong thư mục <code>src/</code>, file <code>.env</code>, và <code>deploy-config.json</code>.</li><li>Tuyệt đối không chỉnh sửa trực tiếp các file trong thư mục <code>public/</code>, <code>node_modules/</code>, <code>scripts/</code>, hoặc các file hệ thống khác để tránh mất dữ liệu khi build hoặc làm hỏng cấu trúc chuẩn của template.</li></ul></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("vn/01-html/1-1-file-structure.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11FileStructure = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11FileStructure as default
};
