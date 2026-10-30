# J-Line Web Marketing - Coding Guidelines

ジェイ・ライン株式会社 Webマーケティング事業部におけるコーディングガイドラインです。  
Quy định coding nội bộ thuộc Bộ phận Web Marketing - Công ty J-Line.

VitePress を用いてドキュメントサイトとして構築しており、カテゴリごとに細かく分割されたMarkdownファイルとしてGitHub上でも直接閲覧可能です。  
Được xây dựng dưới dạng trang tài liệu với VitePress và chia nhỏ chi tiết theo từng danh mục để dễ dàng tra cứu trực tiếp trên GitHub.

---

## 📄 一括閲覧ファイル / File tổng hợp nguyên bản

- 🇯🇵 **日本語 (Full file):** [Coding Guidelines.md](./Coding%20Guidelines.md)
- 🇻🇳 **Tiếng Việt (Full file):** [Coding Guidelines (VN).md](./Coding%20Guidelines%20(VN).md)

---

## 📂 カテゴリ別目次（日本語） / Mục lục theo danh mục (Tiếng Việt)

### 0. はじめに / Giới thiệu
- 🇯🇵 [本ガイドラインの目的・基本的な考え方](./docs/intro.md)
- 🇻🇳 [Mục đích của Guideline này & Tư duy cơ bản](./docs/vn/intro.md)

### 1. HTMLに関して / Liên quan đến HTML
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [1. HTMLに関して（目次）](./docs/01-html/index.md) | [1. Liên quan đến HTML (Mục lục)](./docs/vn/01-html/index.md) |
| [1-1. ファイル構成（TEMPLATE_HTML / TEMPLATE_WP）](./docs/01-html/1-1-file-structure.md) | [1-1. Cấu trúc file (TEMPLATE_HTML / TEMPLATE_WP)](./docs/vn/01-html/1-1-file-structure.md) |
| [1-2. フォーマット規則](./docs/01-html/1-2-format-rules.md) | [1-2. Quy tắc format](./docs/vn/01-html/1-2-format-rules.md) |
| [1-3. マークアップについて](./docs/01-html/1-3-markup.md) | [1-3. Về markup](./docs/vn/01-html/1-3-markup.md) |
| [1-4. Table・終了タグ・文字コード](./docs/01-html/1-4-table-and-closing-tags.md) | [1-4. Table coding, thẻ đóng & mã hóa ký tự](./docs/vn/01-html/1-4-table-and-closing-tags.md) |
| [1-5. Titleの指定・meta keyword](./docs/01-html/1-5-title-and-meta.md) | [1-5. Chỉ định Title & meta keyword](./docs/vn/01-html/1-5-title-and-meta.md) |
| [1-6. セレクタとプロパティ](./docs/01-html/1-6-selectors-and-properties.md) | [1-6. Về selector và property](./docs/vn/01-html/1-6-selectors-and-properties.md) |
| [1-7. 見出し（h1～h6）・header / main / footer](./docs/01-html/1-7-headings-and-landmarks.md) | [1-7. Thẻ h1～h6 & header, main, footer](./docs/vn/01-html/1-7-headings-and-landmarks.md) |
| [1-8. buttonタグ・aタグについて](./docs/01-html/1-8-buttons-and-links.md) | [1-8. Về thẻ button & thẻ a](./docs/vn/01-html/1-8-buttons-and-links.md) |
| [1-9. インタラクションに関して](./docs/01-html/1-9-interaction.md) | [1-9. Về Interaction](./docs/vn/01-html/1-9-interaction.md) |
| [1-10. Webフォントに関して](./docs/01-html/1-10-webfont.md) | [1-10. Về Web Font](./docs/vn/01-html/1-10-webfont.md) |
| [1-11. その他の注意事項](./docs/01-html/1-11-other-notes.md) | [1-11. Các lưu ý khác](./docs/vn/01-html/1-11-other-notes.md) |

### 2. 画像に関して / Về hình ảnh
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [2. 画像に関して（目次）](./docs/02-images/index.md) | [2. Về hình ảnh (Mục lục)](./docs/vn/02-images/index.md) |
| [2-1. 書き出しについて](./docs/02-images/2-1-export.md) | [2-1. Về xuất hình](./docs/vn/02-images/2-1-export.md) |
| [2-2. レスポンシブ画像について](./docs/02-images/2-2-responsive-images.md) | [2-2. Về hình ảnh responsive](./docs/vn/02-images/2-2-responsive-images.md) |
| [2-3. 画像形式について（WebP・SVG）](./docs/02-images/2-3-formats-and-webp.md) | [2-3. Về định dạng hình ảnh (WebP / SVG)](./docs/vn/02-images/2-3-formats-and-webp.md) |
| [2-4. 画像のネーミングルール](./docs/02-images/2-4-naming-rules.md) | [2-4. Quy tắc đặt tên hình ảnh](./docs/vn/02-images/2-4-naming-rules.md) |
| [2-5. altについて](./docs/02-images/2-5-alt-attribute.md) | [2-5. Về thuộc tính alt](./docs/vn/02-images/2-5-alt-attribute.md) |
| [2-6. フォントの画像化について](./docs/02-images/2-6-text-as-image.md) | [2-6. Về việc chuyển text thành hình ảnh](./docs/vn/02-images/2-6-text-as-image.md) |

### 3. CSSに関して / Về CSS
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [3. CSSに関して（目次）](./docs/03-css/index.md) | [3. Về CSS (Mục lục)](./docs/vn/03-css/index.md) |
| [3-1. CSSファイルの設計・文字コードの指定](./docs/03-css/3-1-file-design-and-charset.md) | [3-1. Design file CSS & Chỉ định mã hóa ký tự](./docs/vn/03-css/3-1-file-design-and-charset.md) |
| [3-2. ID・Classの使い分け（FLOCSS + BEM）](./docs/03-css/3-2-id-and-class-flocss-bem.md) | [3-2. Phân biệt ID và Class (FLOCSS + BEM)](./docs/vn/03-css/3-2-id-and-class-flocss-bem.md) |
| [3-3. Sassについて](./docs/03-css/3-3-sass.md) | [3-3. Về Sass](./docs/vn/03-css/3-3-sass.md) |

### 4. JavaScriptに関して / Về JavaScript
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [4. JavaScriptに関して（目次）](./docs/04-javascript/index.md) | [4. Về JavaScript (Mục lục)](./docs/vn/04-javascript/index.md) |
| [4-1. JavaScriptファイルについて](./docs/04-javascript/4-1-js-files-and-defer.md) | [4-1. Về file JavaScript](./docs/vn/04-javascript/4-1-js-files-and-defer.md) |
| [4-2. 記述について](./docs/04-javascript/4-2-coding-style.md) | [4-2. Về cách viết](./docs/vn/04-javascript/4-2-coding-style.md) |
| [4-3. const / let の記述ルール](./docs/04-javascript/4-3-const-let-and-dom-cache.md) | [4-3. Quy tắc const let](./docs/vn/04-javascript/4-3-const-let-and-dom-cache.md) |
| [4-4. アニメーションスピードについて](./docs/04-javascript/4-4-animation-speed.md) | [4-4. Về tốc độ animation](./docs/vn/04-javascript/4-4-animation-speed.md) |

### 5. 納品・バックアップに関して / Giao hàng & Backup
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [5. 納品・バックアップに関して（目次）](./docs/05-delivery/index.md) | [5. Giao hàng & Backup (Mục lục)](./docs/vn/05-delivery/index.md) |
| [5-1. 納品方法に関して・納品の仕方](./docs/05-delivery/5-1-delivery-overview.md) | [5-1. Phương pháp giao hàng & Cách thức giao hàng](./docs/vn/05-delivery/5-1-delivery-overview.md) |
| [5-2. データ納品・差分納品](./docs/05-delivery/5-2-data-delivery.md) | [5-2. Giao data & Giao data dạng chênh lệch](./docs/vn/05-delivery/5-2-data-delivery.md) |
| [5-3. 本番公開（公開作業）](./docs/05-delivery/5-3-production-publish.md) | [5-3. Công khai môi trường production](./docs/vn/05-delivery/5-3-production-publish.md) |
| [5-4. バックアップに関して](./docs/05-delivery/5-4-backup.md) | [5-4. Về backup](./docs/vn/05-delivery/5-4-backup.md) |

### 6. レスポンシブ対応 / Xử lý responsive
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [6. レスポンシブ対応（目次）](./docs/06-responsive/index.md) | [6. Xử lý responsive (Mục lục)](./docs/vn/06-responsive/index.md) |
| [6-1. レスポンシブ対応（基本・リキッドパターン）](./docs/06-responsive/6-1-responsive-patterns.md) | [6-1. Về hỗ trợ responsive (Basic & Liquid Pattern)](./docs/vn/06-responsive/6-1-responsive-patterns.md) |
| [6-2. コンテンツ幅とブレイクポイント](./docs/06-responsive/6-2-breakpoints.md) | [6-2. Chiều rộng nội dung và breakpoint](./docs/vn/06-responsive/6-2-breakpoints.md) |
| [6-3. フォントサイズに関して](./docs/06-responsive/6-3-font-size.md) | [6-3. Về font](./docs/vn/06-responsive/6-3-font-size.md) |

### 7. ターゲットブラウザに関して / Về trình duyệt mục tiêu
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [7. ターゲットブラウザに関して（目次）](./docs/07-browsers/index.md) | [7. Về trình duyệt mục tiêu (Mục lục)](./docs/vn/07-browsers/index.md) |
| [7-1. 対象ブラウザ環境（PC / SP）](./docs/07-browsers/7-1-target-browsers.md) | [7-1. Môi trường trình duyệt mục tiêu (PC / SP)](./docs/vn/07-browsers/7-1-target-browsers.md) |
| [7-2. その他（表示が違うときの対応）](./docs/07-browsers/7-2-troubleshooting.md) | [7-2. Khác (Khi khách hàng thấy hiển thị khác dự kiến)](./docs/vn/07-browsers/7-2-troubleshooting.md) |

### 8. WordPressに関して / Về WordPress
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [8. WordPressに関して（目次）](./docs/08-wordpress/index.md) | [8. Về WordPress (Mục lục)](./docs/vn/08-wordpress/index.md) |
| [8-1. 構築方法に関して](./docs/08-wordpress/8-1-build-method.md) | [8-1. Về phương pháp xây dựng](./docs/vn/08-wordpress/8-1-build-method.md) |
| [8-2. バージョンに関して](./docs/08-wordpress/8-2-version.md) | [8-2. Về phiên bản](./docs/vn/08-wordpress/8-2-version.md) |
| [8-3. WP管理画面のカスタマイズに関して](./docs/08-wordpress/8-3-admin-customization.md) | [8-3. Về tùy chỉnh trang quản trị WP](./docs/vn/08-wordpress/8-3-admin-customization.md) |
| [8-4. プラグインに関して](./docs/08-wordpress/8-4-plugins.md) | [8-4. Về plugin](./docs/vn/08-wordpress/8-4-plugins.md) |
| [8-5. 情報の一部移行・WPマニュアル作成](./docs/08-wordpress/8-5-partial-migration-and-manual.md) | [8-5. Di chuyển một phần dữ liệu & Tạo manual WP](./docs/vn/08-wordpress/8-5-partial-migration-and-manual.md) |

### 9. Formに関して / Về Form
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [9. Formに関して（目次）](./docs/09-forms/index.md) | [9. Về Form (Mục lục)](./docs/vn/09-forms/index.md) |
| [9-1. 静的サイトのメールフォーム（CGI / レスポンシブ）](./docs/09-forms/9-1-mailform-pro-and-responsive.md) | [9-1. Mail form trên site tĩnh (Mailform pro CGI / Responsive)](./docs/vn/09-forms/9-1-mailform-pro-and-responsive.md) |
| [9-2. WPサイトのフォーム（Contact Form 7）](./docs/09-forms/9-2-wp-forms.md) | [9-2. Form trên site WP (Contact Form 7)](./docs/vn/09-forms/9-2-wp-forms.md) |
| [9-3. フォーム共通設定・注意事項](./docs/09-forms/9-3-common-settings.md) | [9-3. Cài đặt chung và các lưu ý của form](./docs/vn/09-forms/9-3-common-settings.md) |

### 10. ページスピードに関して / Về Page speed
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [10. ページスピードに関して（目次）](./docs/10-pagespeed/index.md) | [10. Về Page speed (Mục lục)](./docs/vn/10-pagespeed/index.md) |
| [10-1. 表示速度の目的と考え方・基本方針](./docs/10-pagespeed/10-1-purpose-and-policy.md) | [10-1. Mục đích, cách tiếp cận & Phương châm cơ bản](./docs/vn/10-pagespeed/10-1-purpose-and-policy.md) |
| [10-2. 実測値の計測方法（Chrome DevTools使用）](./docs/10-pagespeed/10-2-measurement.md) | [10-2. Cách đo giá trị thực tế (Chrome DevTools)](./docs/vn/10-pagespeed/10-2-measurement.md) |

### 11. 公開作業時・各種テンプレート / Công khai website & Các loại Template
| 🇯🇵 日本語 | 🇻🇳 Tiếng Việt |
| :--- | :--- |
| [11. 公開作業時・各種テンプレート（目次）](./docs/11-launch-and-templates/index.md) | [11. Công khai website & Các loại Template (Mục lục)](./docs/vn/11-launch-and-templates/index.md) |
| [11-1. 公開作業時（リダイレクト作業・WPプラグイン）](./docs/11-launch-and-templates/11-1-redirect-and-ssl.md) | [11-1. Khi thực hiện công khai website (Redirect & Plugin WP)](./docs/vn/11-launch-and-templates/11-1-redirect-and-ssl.md) |
| [11-2. テキスト類テンプレート](./docs/11-launch-and-templates/11-2-text-templates.md) | [11-2. Template các loại text](./docs/vn/11-launch-and-templates/11-2-text-templates.md) |
| [11-3. コード・画像類テンプレート](./docs/11-launch-and-templates/11-3-code-and-dummy-templates.md) | [11-3. Template code và hình ảnh](./docs/vn/11-launch-and-templates/11-3-code-and-dummy-templates.md) |

---

## 🚀 ローカルでの起動・ビルド / Chạy và Build trên Local (VitePress)

### 前提 / Yêu cầu
- Node.js (LTS)
- npm

### セットアップ / Cài đặt
```bash
npm install
```

### 開発サーバー起動 / Chạy môi trường Dev
```bash
npm run docs:dev
```

### ビルド・プレビュー / Build & Xem trước
```bash
npm run docs:build
npm run docs:preview
```
