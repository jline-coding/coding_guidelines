import { defineConfig } from 'vitepress'
import { tableWrapPlugin } from './markdown-table-wrap.js'

export default defineConfig({
  base: '/coding_guidelines/',
  title: 'J-Line Coding Guidelines',
  description: 'J-Line Web Marketing - Coding Guidelines',
  appearance: false,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
  ],

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      title: 'J-Line Coding Guidelines',
      description: 'ジェイ・ライン株式会社 Webマーケティング事業部 コーディングガイドライン',
      themeConfig: {
        logo: { src: '/logo.png', alt: 'J-line Corporation' },
        siteTitle: false,
        nav: [
          { text: 'はじめに', link: '/intro' },
          { text: 'HTML', link: '/01-html/' },
          { text: 'CSS', link: '/03-css/' },
          { text: 'JS', link: '/04-javascript/' },
          { text: 'WordPress', link: '/08-wordpress/' },
          { text: '納品', link: '/05-delivery/' },
        ],
        sidebar: [
        {
                "text": "はじめに",
                "items": [
                        {
                                "text": "本ガイドラインの目的・基本的な考え方",
                                "link": "/intro"
                        }
                ]
        },
        {
                "text": "1. HTMLに関して",
                "collapsed": false,
                "link": "/01-html/",
                "items": [
                        {
                                "text": "1-1. ファイル構成",
                                "link": "/01-html/1-1-file-structure"
                        },
                        {
                                "text": "1-2. フォーマット規則",
                                "link": "/01-html/1-2-format-rules"
                        },
                        {
                                "text": "1-3. マークアップについて",
                                "link": "/01-html/1-3-markup"
                        },
                        {
                                "text": "1-4. Table・終了タグ・文字コード",
                                "link": "/01-html/1-4-table-and-closing-tags"
                        },
                        {
                                "text": "1-5. Titleの指定・meta keyword",
                                "link": "/01-html/1-5-title-and-meta"
                        },
                        {
                                "text": "1-6. セレクタとプロパティ",
                                "link": "/01-html/1-6-selectors-and-properties"
                        },
                        {
                                "text": "1-7. 見出し（h1～h6）・header / main / footer",
                                "link": "/01-html/1-7-headings-and-landmarks"
                        },
                        {
                                "text": "1-8. buttonタグ・aタグについて",
                                "link": "/01-html/1-8-buttons-and-links"
                        },
                        {
                                "text": "1-9. インタラクションに関して",
                                "link": "/01-html/1-9-interaction"
                        },
                        {
                                "text": "1-10. Webフォントに関して",
                                "link": "/01-html/1-10-webfont"
                        },
                        {
                                "text": "1-11. その他の注意事項",
                                "link": "/01-html/1-11-other-notes"
                        }
                ]
        },
        {
                "text": "2. 画像に関して",
                "collapsed": false,
                "link": "/02-images/",
                "items": [
                        {
                                "text": "2-1. 書き出しについて",
                                "link": "/02-images/2-1-export"
                        },
                        {
                                "text": "2-2. レスポンシブ画像について",
                                "link": "/02-images/2-2-responsive-images"
                        },
                        {
                                "text": "2-3. 画像形式について（WebP・SVG）",
                                "link": "/02-images/2-3-formats-and-webp"
                        },
                        {
                                "text": "2-4. 画像のネーミングルール",
                                "link": "/02-images/2-4-naming-rules"
                        },
                        {
                                "text": "2-5. altについて",
                                "link": "/02-images/2-5-alt-attribute"
                        },
                        {
                                "text": "2-6. フォントの画像化について",
                                "link": "/02-images/2-6-text-as-image"
                        }
                ]
        },
        {
                "text": "3. CSSに関して",
                "collapsed": false,
                "link": "/03-css/",
                "items": [
                        {
                                "text": "3-1. CSSファイルの設計・文字コードの指定",
                                "link": "/03-css/3-1-file-design-and-charset"
                        },
                        {
                                "text": "3-2. ID・Classの使い分け（FLOCSS + BEM）",
                                "link": "/03-css/3-2-id-and-class-flocss-bem"
                        },
                        {
                                "text": "3-3. Sassについて",
                                "link": "/03-css/3-3-sass"
                        }
                ]
        },
        {
                "text": "4. JavaScriptに関して",
                "collapsed": false,
                "link": "/04-javascript/",
                "items": [
                        {
                                "text": "4-1. JavaScriptファイルについて",
                                "link": "/04-javascript/4-1-js-files-and-defer"
                        },
                        {
                                "text": "4-2. 記述について",
                                "link": "/04-javascript/4-2-coding-style"
                        },
                        {
                                "text": "4-3. const / let の記述ルール",
                                "link": "/04-javascript/4-3-const-let-and-dom-cache"
                        },
                        {
                                "text": "4-4. アニメーションスピードについて",
                                "link": "/04-javascript/4-4-animation-speed"
                        }
                ]
        },
        {
                "text": "5. 納品・バックアップに関して",
                "collapsed": false,
                "link": "/05-delivery/",
                "items": [
                        {
                                "text": "5-1. 納品方法に関して・納品の仕方",
                                "link": "/05-delivery/5-1-delivery-overview"
                        },
                        {
                                "text": "5-2. データ納品・差分納品",
                                "link": "/05-delivery/5-2-data-delivery"
                        },
                        {
                                "text": "5-3. 本番公開（公開作業）",
                                "link": "/05-delivery/5-3-production-publish"
                        },
                        {
                                "text": "5-4. バックアップに関して",
                                "link": "/05-delivery/5-4-backup"
                        }
                ]
        },
        {
                "text": "6. レスポンシブ対応",
                "collapsed": false,
                "link": "/06-responsive/",
                "items": [
                        {
                                "text": "6-1. レスポンシブ対応（基本・リキッドパターン）",
                                "link": "/06-responsive/6-1-responsive-patterns"
                        },
                        {
                                "text": "6-2. コンテンツ幅とブレイクポイント",
                                "link": "/06-responsive/6-2-breakpoints"
                        },
                        {
                                "text": "6-3. フォントサイズに関して",
                                "link": "/06-responsive/6-3-font-size"
                        }
                ]
        },
        {
                "text": "7. ターゲットブラウザに関して",
                "collapsed": false,
                "link": "/07-browsers/",
                "items": [
                        {
                                "text": "7-1. 対象ブラウザ環境（PC / SP）",
                                "link": "/07-browsers/7-1-target-browsers"
                        },
                        {
                                "text": "7-2. その他（表示が違うときの対応）",
                                "link": "/07-browsers/7-2-troubleshooting"
                        }
                ]
        },
        {
                "text": "8. WordPressに関して",
                "collapsed": false,
                "link": "/08-wordpress/",
                "items": [
                        {
                                "text": "8-1. 構築方法に関して",
                                "link": "/08-wordpress/8-1-build-method"
                        },
                        {
                                "text": "8-2. バージョンに関して",
                                "link": "/08-wordpress/8-2-version"
                        },
                        {
                                "text": "8-3. WP管理画面のカスタマイズに関して",
                                "link": "/08-wordpress/8-3-admin-customization"
                        },
                        {
                                "text": "8-4. プラグインに関して",
                                "link": "/08-wordpress/8-4-plugins"
                        },
                        {
                                "text": "8-5. 情報の一部移行・WPマニュアル作成",
                                "link": "/08-wordpress/8-5-partial-migration-and-manual"
                        }
                ]
        },
        {
                "text": "9. Formに関して",
                "collapsed": false,
                "link": "/09-forms/",
                "items": [
                        {
                                "text": "9-1. 静的サイトのメールフォーム（CGI / レスポンシブ）",
                                "link": "/09-forms/9-1-mailform-pro-and-responsive"
                        },
                        {
                                "text": "9-2. WPサイトのフォーム（Contact Form 7）",
                                "link": "/09-forms/9-2-wp-forms"
                        },
                        {
                                "text": "9-3. フォーム共通設定・注意事項",
                                "link": "/09-forms/9-3-common-settings"
                        }
                ]
        },
        {
                "text": "10. ページスピードに関して",
                "collapsed": false,
                "link": "/10-pagespeed/",
                "items": [
                        {
                                "text": "10-1. 表示速度の目的と考え方・基本方針",
                                "link": "/10-pagespeed/10-1-purpose-and-policy"
                        },
                        {
                                "text": "10-2. 実測値の計測方法（Chrome DevTools使用）",
                                "link": "/10-pagespeed/10-2-measurement"
                        }
                ]
        },
        {
                "text": "11. 公開作業時・各種テンプレート",
                "collapsed": false,
                "link": "/11-launch-and-templates/",
                "items": [
                        {
                                "text": "11-1. 公開作業時（リダイレクト作業・WPプラグイン）",
                                "link": "/11-launch-and-templates/11-1-redirect-and-ssl"
                        },
                        {
                                "text": "11-2. テキスト類テンプレート",
                                "link": "/11-launch-and-templates/11-2-text-templates"
                        },
                        {
                                "text": "11-3. コード・画像類テンプレート",
                                "link": "/11-launch-and-templates/11-3-code-and-dummy-templates"
                        }
                ]
        }
],
        outline: { label: 'このページの内容', level: [2, 3] },
        docFooter: { prev: '前のページ', next: '次のページ' },
        returnToTopLabel: 'トップに戻る',
        footer: {
          message: 'J-Line Web Marketing Division - Internal Coding Standards',
          copyright: 'Copyright © J-line Corporation. All Rights Reserved.'
        }
      }
    },
    vn: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vn/',
      title: 'J-Line Coding Guidelines (VN)',
      description: 'Quy định Coding nội bộ - Bộ phận Web Marketing Công ty J-Line',
      themeConfig: {
        logo: { src: '/logo.png', alt: 'J-line Corporation' },
        siteTitle: false,
        nav: [
          { text: 'Giới thiệu', link: '/vn/intro' },
          { text: 'HTML', link: '/vn/01-html/' },
          { text: 'CSS', link: '/vn/03-css/' },
          { text: 'JS', link: '/vn/04-javascript/' },
          { text: 'WordPress', link: '/vn/08-wordpress/' },
          { text: 'Giao hàng', link: '/vn/05-delivery/' },
        ],
        sidebar: [
        {
                "text": "Giới thiệu",
                "items": [
                        {
                                "text": "Mục đích & Tư duy cơ bản",
                                "link": "/vn/intro"
                        }
                ]
        },
        {
                "text": "1. Liên quan đến HTML",
                "collapsed": false,
                "link": "/vn/01-html/",
                "items": [
                        {
                                "text": "1-1. Cấu trúc file",
                                "link": "/vn/01-html/1-1-file-structure"
                        },
                        {
                                "text": "1-2. Quy tắc format",
                                "link": "/vn/01-html/1-2-format-rules"
                        },
                        {
                                "text": "1-3. Về markup",
                                "link": "/vn/01-html/1-3-markup"
                        },
                        {
                                "text": "1-4. Table coding, thẻ đóng & mã hóa ký tự",
                                "link": "/vn/01-html/1-4-table-and-closing-tags"
                        },
                        {
                                "text": "1-5. Chỉ định Title & meta keyword",
                                "link": "/vn/01-html/1-5-title-and-meta"
                        },
                        {
                                "text": "1-6. Về selector và property",
                                "link": "/vn/01-html/1-6-selectors-and-properties"
                        },
                        {
                                "text": "1-7. Thẻ h1～h6 & header, main, footer",
                                "link": "/vn/01-html/1-7-headings-and-landmarks"
                        },
                        {
                                "text": "1-8. Về thẻ button & thẻ a",
                                "link": "/vn/01-html/1-8-buttons-and-links"
                        },
                        {
                                "text": "1-9. Về Interaction",
                                "link": "/vn/01-html/1-9-interaction"
                        },
                        {
                                "text": "1-10. Về Web Font",
                                "link": "/vn/01-html/1-10-webfont"
                        },
                        {
                                "text": "1-11. Các lưu ý khác",
                                "link": "/vn/01-html/1-11-other-notes"
                        }
                ]
        },
        {
                "text": "2. Về hình ảnh",
                "collapsed": false,
                "link": "/vn/02-images/",
                "items": [
                        {
                                "text": "2-1. Về xuất hình",
                                "link": "/vn/02-images/2-1-export"
                        },
                        {
                                "text": "2-2. Về hình ảnh responsive",
                                "link": "/vn/02-images/2-2-responsive-images"
                        },
                        {
                                "text": "2-3. Về định dạng hình ảnh (WebP / SVG)",
                                "link": "/vn/02-images/2-3-formats-and-webp"
                        },
                        {
                                "text": "2-4. Quy tắc đặt tên hình ảnh",
                                "link": "/vn/02-images/2-4-naming-rules"
                        },
                        {
                                "text": "2-5. Về thuộc tính alt",
                                "link": "/vn/02-images/2-5-alt-attribute"
                        },
                        {
                                "text": "2-6. Về việc chuyển text thành hình ảnh",
                                "link": "/vn/02-images/2-6-text-as-image"
                        }
                ]
        },
        {
                "text": "3. Về CSS",
                "collapsed": false,
                "link": "/vn/03-css/",
                "items": [
                        {
                                "text": "3-1. Design file CSS & Chỉ định mã hóa ký tự",
                                "link": "/vn/03-css/3-1-file-design-and-charset"
                        },
                        {
                                "text": "3-2. Phân biệt ID và Class (FLOCSS + BEM)",
                                "link": "/vn/03-css/3-2-id-and-class-flocss-bem"
                        },
                        {
                                "text": "3-3. Về Sass",
                                "link": "/vn/03-css/3-3-sass"
                        }
                ]
        },
        {
                "text": "4. Về JavaScript",
                "collapsed": false,
                "link": "/vn/04-javascript/",
                "items": [
                        {
                                "text": "4-1. Về file JavaScript",
                                "link": "/vn/04-javascript/4-1-js-files-and-defer"
                        },
                        {
                                "text": "4-2. Về cách viết",
                                "link": "/vn/04-javascript/4-2-coding-style"
                        },
                        {
                                "text": "4-3. Quy tắc const let",
                                "link": "/vn/04-javascript/4-3-const-let-and-dom-cache"
                        },
                        {
                                "text": "4-4. Về tốc độ animation",
                                "link": "/vn/04-javascript/4-4-animation-speed"
                        }
                ]
        },
        {
                "text": "5. Giao hàng & Backup",
                "collapsed": false,
                "link": "/vn/05-delivery/",
                "items": [
                        {
                                "text": "5-1. Phương pháp giao hàng & Cách thức giao hàng",
                                "link": "/vn/05-delivery/5-1-delivery-overview"
                        },
                        {
                                "text": "5-2. Giao data & Giao data dạng chênh lệch",
                                "link": "/vn/05-delivery/5-2-data-delivery"
                        },
                        {
                                "text": "5-3. Công khai môi trường production",
                                "link": "/vn/05-delivery/5-3-production-publish"
                        },
                        {
                                "text": "5-4. Về backup",
                                "link": "/vn/05-delivery/5-4-backup"
                        }
                ]
        },
        {
                "text": "6. Xử lý responsive",
                "collapsed": false,
                "link": "/vn/06-responsive/",
                "items": [
                        {
                                "text": "6-1. Về hỗ trợ responsive (Basic & Liquid Pattern)",
                                "link": "/vn/06-responsive/6-1-responsive-patterns"
                        },
                        {
                                "text": "6-2. Chiều rộng nội dung và breakpoint",
                                "link": "/vn/06-responsive/6-2-breakpoints"
                        },
                        {
                                "text": "6-3. Về font",
                                "link": "/vn/06-responsive/6-3-font-size"
                        }
                ]
        },
        {
                "text": "7. Về trình duyệt mục tiêu",
                "collapsed": false,
                "link": "/vn/07-browsers/",
                "items": [
                        {
                                "text": "7-1. Môi trường trình duyệt mục tiêu (PC / SP)",
                                "link": "/vn/07-browsers/7-1-target-browsers"
                        },
                        {
                                "text": "7-2. Khác (Khi khách hàng thấy hiển thị khác dự kiến)",
                                "link": "/vn/07-browsers/7-2-troubleshooting"
                        }
                ]
        },
        {
                "text": "8. Về WordPress",
                "collapsed": false,
                "link": "/vn/08-wordpress/",
                "items": [
                        {
                                "text": "8-1. Về phương pháp xây dựng",
                                "link": "/vn/08-wordpress/8-1-build-method"
                        },
                        {
                                "text": "8-2. Về phiên bản",
                                "link": "/vn/08-wordpress/8-2-version"
                        },
                        {
                                "text": "8-3. Về tùy chỉnh trang quản trị WP",
                                "link": "/vn/08-wordpress/8-3-admin-customization"
                        },
                        {
                                "text": "8-4. Về plugin",
                                "link": "/vn/08-wordpress/8-4-plugins"
                        },
                        {
                                "text": "8-5. Di chuyển một phần dữ liệu & Tạo manual WP",
                                "link": "/vn/08-wordpress/8-5-partial-migration-and-manual"
                        }
                ]
        },
        {
                "text": "9. Về Form",
                "collapsed": false,
                "link": "/vn/09-forms/",
                "items": [
                        {
                                "text": "9-1. Mail form trên site tĩnh (Mailform pro CGI / Responsive)",
                                "link": "/vn/09-forms/9-1-mailform-pro-and-responsive"
                        },
                        {
                                "text": "9-2. Form trên site WP (Contact Form 7)",
                                "link": "/vn/09-forms/9-2-wp-forms"
                        },
                        {
                                "text": "9-3. Cài đặt chung và các lưu ý của form",
                                "link": "/vn/09-forms/9-3-common-settings"
                        }
                ]
        },
        {
                "text": "10. Về Page speed",
                "collapsed": false,
                "link": "/vn/10-pagespeed/",
                "items": [
                        {
                                "text": "10-1. Mục đích, cách tiếp cận & Phương châm cơ bản",
                                "link": "/vn/10-pagespeed/10-1-purpose-and-policy"
                        },
                        {
                                "text": "10-2. Cách đo giá trị thực tế (Chrome DevTools)",
                                "link": "/vn/10-pagespeed/10-2-measurement"
                        }
                ]
        },
        {
                "text": "11. Công khai website & Các loại Template",
                "collapsed": false,
                "link": "/vn/11-launch-and-templates/",
                "items": [
                        {
                                "text": "11-1. Khi thực hiện công khai website (Redirect & Plugin WP)",
                                "link": "/vn/11-launch-and-templates/11-1-redirect-and-ssl"
                        },
                        {
                                "text": "11-2. Template các loại text",
                                "link": "/vn/11-launch-and-templates/11-2-text-templates"
                        },
                        {
                                "text": "11-3. Template code và hình ảnh",
                                "link": "/vn/11-launch-and-templates/11-3-code-and-dummy-templates"
                        }
                ]
        }
],
        outline: { label: 'Nội dung trang này', level: [2, 3] },
        docFooter: { prev: 'Trang trước', next: 'Trang tiếp' },
        returnToTopLabel: 'Lên đầu trang',
        footer: {
          message: 'Bộ phận Web Marketing - Quy định Coding nội bộ',
          copyright: 'Copyright © J-line Corporation. All Rights Reserved.'
        }
      }
    }
  },

  themeConfig: {
    logo: { src: '/logo.png', alt: 'J-line Corporation' },
    siteTitle: false,
    search: { provider: 'local' }
  },

  markdown: {
    config: (md) => {
      md.use(tableWrapPlugin)
    }
  }
})
