# J-Line Web Marketing - Coding Guidelines

## Mục đích của Guideline này

Guideline này là quy định nội bộ nhằm giúp tất cả thành viên trong bộ phận Web Marketing của Công ty J-Line có thể thực hiện công việc sản xuất website một cách thống nhất, không gặp lúng túng và đảm bảo chất lượng cao trong quá trình coding.

Không chỉ đặt mục tiêu tái hiện lại thiết kế, tài liệu này còn tổng hợp các nguyên tắc và tư duy nhằm mang lại trải nghiệm thoải mái cho người dùng, cấu trúc dễ quản lý cho người cập nhật nội dung, đồng thời nâng cao năng suất làm việc của toàn bộ team.

Thông qua việc áp dụng guideline này, chúng tôi hướng tới việc đạt được các trạng thái sau:

- Đảm bảo chất lượng ổn định, bất kể ai là người phụ trách
- Loại bỏ sự phụ thuộc vào cá nhân nhờ cấu trúc rõ ràng, dễ đọc
- Giảm thiểu thời gian review và xác nhận bàn giao
- Xây dựng nền tảng vững chắc cho việc chỉnh sửa・vận hành và tái sử dụng cho các dự án trong tương lai
  
## Tư duy cơ bản

- Thực hiện markup chính xác, tuân thủ theo tiêu chuẩn HTML của W3C
- Các thẻ không mang ý nghĩa (như div, span…) chỉ sử dụng cho mục đích layout; tránh lồng (nest) quá nhiều hoặc tạo wrapper không cần thiết. Cần chú ý đến cấu trúc ngữ nghĩa của HTML và chủ động sử dụng các thẻ semantic khi phù hợp.
- Thiết kế cấu trúc không bị vỡ khi nội dung tăng hoặc giảm.
- Không chỉ tái hiện lại thiết kế, mà còn phải code theo hướng dễ cập nhật và dễ vận hành.
- Cân nhắc môi trường truy cập của người dùng, đảm bảo layout không bị vỡ theo độ rộng container.
- Khi upload bản test, phải ở trạng thái tương đương với lúc public chính thức.

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
- Nếu trong thiết kế từ phía client không có heading rõ ràng, thì sử dụng các thẻ heading trong phạm vi có thể áp dụng được
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

- Khi sử dụng link với thiết kế giống như button, không thêm gạch chân (underline) khi hover
- Nút “Back to Top” phải được cài đặt kể cả khi không có thiết kế cụ thể (sử dụng màu đang dùng trong website)
- Mỗi section cần thêm hiệu ứng fade khi scroll. Trang tham khảo： 
  [https://web-loid.net/web/scroll-effect-js/](https://web-loid.net/web/scroll-effect-js/)
- Hover action: nếu không có chỉ thị đặc biệt, mặc định sử dụng hiệu ứng “làm mờ” (thay đổi opacity)
- Các link trong nội dung bài viết (WordPress, v.v.) phải có gạch chân (underline)
- Cookie popup phải được triển khai mặc định trên toàn bộ website, và cần thiết lập link tới trang Privacy Policy hoặc trang thông tin cá nhân 


### Về Web Font

- Việc sử dụng Web font về nguyên tắc phải tuân theo chỉ thị thiết kế
- Nếu font được chỉ định có trên Google Fonts, sử dụng trực tiếp và thiết lập phần load phù hợp
- Nếu font không có trên Google Fonts, cần xác nhận điều kiện sử dụng và license với Director, và khi cần thì yêu cầu khách hàng hoặc designer cung cấp script load font
- Chỉ định các weight cần thiết để giảm thiểu tải load
- Nếu không có chỉ định font, hoặc không thể sử dụng font đó, cần trao đổi với Director hoặc Designer để xác nhận phương án thay thế trước khi triển khai

### Các lưu ý khác

- Giá trị của thuộc tính phải sử dụng dấu ngoặc kép
- Global navigation phải sử dụng thẻ `<nav>`
- Ngay dưới thẻ `<section>` có thể dùng thẻ div (mặc dù khuyến nghị là dùng thẻ h, nhưng về cấu trúc layout thì div vẫn được chấp nhận)
- Nếu viết toàn bộ tiếng Anh bằng chữ in hoa, trình đọc màn hình sẽ đọc từng ký tự một. Vì vậy cần viết bằng chữ thường và sử dụng text-transform: uppercase để hiển thị chữ in hoa


## 画像に関して


### 書き出しについて

- すべての画像は原則として、表示サイズの2倍の解像度で書き出し、Webpを使用してください。

### レスポンシブ画像について

- PC / SP 両方で使用される画像は、できる限り共通ファイルを使用してください。
- ただし、ファーストビューやメインビジュアルで構図が大きく変わる場合や、PC用では横長/SP用では縦長になるバナー類の場合は、レイアウト上の都合で画像を出し分けてください
- 出し分けが必要な場合は、<picture> タグでPC/SPを切り替えてください。

```
<picture>
  <source media="(max-width: 767px)" srcset="img_kv_sp.webp">
  <img src="img_kv_pc.webp" alt="ファーストビューの画像">
</picture>
```


### 画像形式について

#### WebP
コーディングに使用する画像形式は、原則WebPを優先して使用します。

#### SVG
ロゴや文字・アイコンなど、ベクター形式で作成された要素に限りSVGを使用します。
※SVG内のテキストは必ずアウトライン化し、フォント依存が発生しないようにします。

#### WebP の書き出しについて
画像のWebP変換は、{{書き出しツール}}を用いて自動化することを推奨します。
{{具体的な書き出し方法}}
{{書き出し品質の記載}}
→Vietnamチーム考案

#### WebP のフォールバック対応
WebP非対応環境に関する指示があった場合、`<picture>` タグを使用し、WebP → jpg/pngの順でフォールバック表示を設定する

```
<picture>
  <source srcset="image.webp">
  <img src="image.jpg" alt="代替テキスト">
</picture>
```

### 画像のネーミングルール

ファイル名は、用途に応じて以下の接頭辞を付けて命名してください。
【{識別子}_{内容}.webp】を基本とします。

- 背景画像  
bg_〇〇.webp

- 装飾目的のアイコン画像  
icon_〇〇.webp

- 写真など、上2つの条件に当てはまらない画像  
img_〇〇.webp

### altについて

alt属性は、視覚以外での閲覧者（読み上げブラウザ、テキストブラウザ）への代替情報として機能します。
適切に記述することで、アクセシビリティの向上・SEOにも寄与します。

- 装飾目的の画像（矢印・飾り・罫線など）には、alt属性を空にします（例：alt=""）。
- 意味を持つ画像（写真・図解・バナーなど）には、内容を具体的に記述した代替テキストを必ず記載します。

#### OK例

```
<img src="img_office.webp" alt="オフィス外観の写真">
```

#### NG例

```
<img src="img_office.webp" alt="画像">
<img src="img_office.webp" alt=""> <!-- 意味のある画像に空altはNG -->
```

### フォントの画像化について

- テキストは画像化せず、Webフォントを使用します。
- Webフォントの提供がなくデザイン性が高いテキストの場合は、アウトライン化したSVG画像を使用します。


## CSSに関して

### CSSファイルの設計

* ページ数が多い場合、各ページ専用のCSSファイルを分けて作成します。
* HTMLファイル内に直接スタイルを書くことは原則禁止します。

### 文字コードの指定

* CSSファイルの文字コードは原則 UTF-8 を使用します。
* HTMLと同一の文字コードを指定し、文字化けや表示崩れの原因を防ぎます。

### ID・Classの使い分け

アンカーリンクの対象となる要素を除き、原則としてClassのみを使用してスタイリングします。

#### IDについて

- 基本的にスタイル指定には使用しません。
- IDはアンカーリンクのジャンプ先など、HTMLの構造的な目的に限って使用します。
- IDの値は対象となるコンテンツ名を英訳した文字列を指定します。

#### Classについて

- すべてのスタイル指定はClassを使用します。
- クラス名は以下のルールに従って命名します。

##### Class命名ルール

- class="汎用クラス オリジナルクラス" の順に記述します。
- クラス名は見た目（色・太さ）ではなく、目的・役割・意味に基づいて命名します。
- 予測しやすく、他の開発者が見ても理解できる名称を設定します。

```html
<!-- NG -->
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


### Sassについて

* Sassの規則は「Sassマニュアル」に沿ってコーディングする  
[マニュアルはこちら](https://docs.google.com/spreadsheets/d/1lPs7MtXUkwyGbCdF9wSgbP_I9lzZczuvFK6cSkhvAA4/edit#gid=0)

※Vietnamチーム考案 刷新してほしい




## JavaScriptに関して


### JavaScriptファイルについて

* 原則htmlファイルに直接スタイルを書かない。外部ファイルとして管理する  
* 各動作(処理)にはコメントを付けるが英語、または日本語を使用すること
* JSファイルはheader.phpやfooter.phpなど共通化ファイルに記載すること（外部JavaScriptファイルの読み込みも）  
* JSファイルにはdeferをつける  
  例：`<script src=“./assets/plugins/anijs/ani.js” defer></script>`  
* CDN利用を控える ※jQueryのCDNは稀に読み込みが遅くなって表示が崩れたりするケースがある。  
* 全て、もしくはほとんどのページで使用するものはcommon.jsにまとめて記述する  

### 記述について

* 記述は保守を考え統一すること。

```js
$(window).on(‘scroll’, function(){});
jQuery(window).on(‘scroll’,function(){})
```
※島田から確認　↑ってどういうことをしたいか説明記載出来ますか？

### const let の記述ルール

* Constは定数なのでDOMの指定と定数、変数はletを使います  
* DOMを変数に入れる場合はjQueryオブジェクトではなく、クラス名などの方が応用しやすいです  

```js
// （例）
let newsLink = $(‘.js-news-tab-btn’);

// ↓ 書き換える

const newsLink = ‘.js-news-tab-btn’;
```

### アニメーションスピードについて

* スライダーのスピードは指示がない限り３秒で設定する  
* hoverアクションも指定がない限り `transition:0.5s all` で指定  




### 納品方法に関して

納品方法は主に2通りになる。
データのみを納品する「データ納品」
直接クライアントのサーバーにファイルをアップする「本番公開（公開作業）」
それぞれ納品方法が異なるため、予めどちらの方法で納品するのかをディレクターに確認をしておくこと。

### 納品の仕方

* データ納品・本番公開共に、納品する際は不要なファイルは含まないこと。
* 公開作業の際は[「チェックリスト」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0)を参考に確認しながら作業を進めること

#### データ納品

* いかなる時も納品データはJLのdropboxにも格納すること。
* 不要なファイルは削除したうえで
  1. 案件名のフォルダ＞「コーディングデータ」フォルダを作成
  2. 作成したコーディングデータフォルダの中に指定のディレクトリ通りにファイルを入れる
  3. 納品データの命名は以下のように設定
     例：ver01-2026-04-01.zip
  4.納品後に修正を行った場合は「ver02-日付」とし格納をすること。
* ファイルはZip圧縮し、dropboxの共有URLを使って納品する。
　ダウンロード期間は1週間、パスワードをかけて共有すること。

**差分納品の場合**

* 修正作業などで、作業したファイルのみ納品する場合は下記手順を追加  
  1. 修正前のデータのバックアップをとっておくこと  
  2. 納品までに時差が生じる場合もあるため、どのファイルを修正したか、imgフォルダやcssファイルまで明確に記録しておくこと  
  3. 修正後と修正前のフォルダを[チェックツール](https://qiita.com/frozencatpisces/items/8f998720de8f2aaa7e37)にかけ、納品漏れが無いように確認をする  
※島田記載：差分データの用意の方法についてはベトナムチームで考案した内容に変更してください。

#### 本番公開（公開作業）

* 案件発生時には以下を確認。
・クライアントのFTP情報
・接続テスト
・アップ場所
・旧データはサーバから削除するかどうかをディレクターに確認

* 静的サイトの場合、古いデータはサーバー内に[old]フォルダを作成しその中に収納する。またバックアップをとってdropboxに[old]フォルダを作成し保管する。
* アップ後、サイトに問題がないか[「チェックリスト」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0)を使って確認する

**WordPressの場合**

* 古いWPは[「WPvivid」](https://ja.wordpress.org/plugins/wpvivid-backuprestore/)データとphpファイルの両方のバックアップをとりdropboxに保管  
  * ※クライアントに確認が取れ次第、古いデータはサーバー内から削除

**クライアントのサーバーで公開作業ができる場合**

1. サイトURLを変更し公開。wpフォルダから直下へディレクトリを移す → [参考サイト](https://www.cloud9works.net/web/how-to-change-wordpress-directory/)

**ジェイ・ラインのテストサーバーで作業したものを移す場合**

1. クライアントのサーバーにWPをインストール、テストWPの情報を「WPvivid」を使って移行

### バックアップに関して

* テストアップ時のデータと公開後（納品後）のデータの2つをとり、dropboxに保管する  
* WordPressの「WPvivid」データも納品時のものを保管しておくこと  
* 納品後、都度修正が入ればdropboxに対応後のデータを格納すること（静的であれば差分データのみでよい）  





## レスポンシブ対応

### レスポンシブ対応について

- 基本パターンとリキッドパターンがあるので、キックオフの際にディレクターに確認すること
- どのウィンドウサイズでもレイアウトが崩れないようにコーディングする
- デザインサイズ以下の画面幅によってはカラム落ちで調整する等、画面幅により100%デザイン通りにならなくても問題ない。視認性を優先させる
- 基本的にはブレイクポイント768px1点を設置し、デザインによっては複数設置しても良い
- モバイル対応の下限サイズは375pxとする

### 基本パターン
・最大コンテンツ幅を設定する
・ウィンドウ幅が最大コンテンツ幅を下回る場合、コンテンツ幅はそれに応じて縮小する
・カラム幅はコンテンツ幅に対して相対的に変化する
・文字サイズは固定
　参考サイト：https://www.nippon-shooter.co.jp/

### リキッドパターン
・基本パターンに加え、文字サイズもコンテンツ幅に対して相対的に可変
　参考サイト：https://pict-adloop.com/　https://www.ohshima-showten.com/


### コンテンツ幅とブレイクポイント

- ジェイ・ラインのデザインではコンテンツ幅（container）1160pxで作成している。SP時は両端20pxずつ幅を取ること
- タブレット対応がある場合はブレイクポイントは下記の範囲で設定すること

| 種類             | 範囲             |
|-----------------|------------------|
| タブレットサイズ　 | 768－1024px      |
| モバイルサイズ   　| 375px-767px以下  |

### フォントサイズに関して

- 基本的に単位はremにすること
- SPサイズ時、デザインに指定が無ければ12px以下のfont-sizeは使わない
- font-sizeは最小10pxまでとする






## ターゲットブラウザに関して

### 以下のブラウザ環境で正しくレイアウト、動作する様に作成する

#### PC

**Windows（OS / Windows 10.xおよびWindows 11.x）**
- Microsoft Edge・Google Chrome・Firefoxの各最新版

**Mac OS(12以降)**
- Safari・Google Chrome・Firefoxの各最新版

#### SP

**iPhone**
- iOS 16以降のSafari最新版

**Android**
- Ver-11以降のスマートフォン搭載のブラウザー最新版(主にChrome)

### その他

**クライアントのブラウザ表示が違うとき**
- キャッシュのクリアを指示 [参考](https://itreat.co.jp/blog/cash#toc4)
- 複数PCで表示確認やシークレットブラウザで確認。  
- クライアントの見られてるOS・ブラウザ・各バージョンの確認をする
- それでも不具合の確認ができない場合、クライアントのルーターの再起動を依頼する


## WordPressに関して


### 構築方法に関して

- 「wp2026」などフォルダを作成し、その中にWordpressを設置する
- [フォルダ構成](https://docs.google.com/spreadsheets/d/1lPs7MtXUkwyGbCdF9wSgbP_I9lzZczuvFK6cSkhvAA4/edit#gid=261860441)参照
- 指定がない限りは配布テンプレートは使用せずにオリジナルテーマを作成し、phpファイルで構築する
- テーマ名は案件名を使用すること
- WP管理画面のエディタにコードは記入せず、phpファイルにコードを記述すること
  - （例）page-[ディレクトリ].php
- アイキャッチ画像はフルサイズ出力ではなく、デザインのサイズにあわせて中央からトリミング表示とする
- アイキャッチ画像の動作確認の際は表示サイズより大きい画像と、小さい画像で確認する
- サムネイル画像を一覧表示させる際、容量が多くならないようメディア設定を必ず行うこと。
  - 参考サイト：[https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/](https://e-senryaku.jp/wp/wp-basic/wordpress-mediasettei/)
- ブログなどで記事に写真がない場合はnoimageのダミー画像を入れる
- ダミー画像はテンプレートページにあります

### バージョンに関して

- 指定がなければ最新のバージョンをインストールして使用する
- リニューアルやWPデータの移行作業などある場合は、必ず元のWPバージョンと使用サーバのPHPバージョンを確認してからインストールすること
- バージョンの自動アップデートの設定を必ず変更。自動更新をマイナー更新に必ず切り替えること：[参考サイト](https://wordpress-web.and-ha.com/update-type-method/#:~:text=2020%E5%B9%B411%E6%9C%88%E3%81%AB,%E3%81%8A%E3%81%8F%E3%81%B9%E3%81%8D%E7%82%B9%20%E3%81%A7%E3%81%97%E3%82%87%E3%81%86%E3%80%82)


### WP管理画面のカスタマイズに関して

- お客様アカウント（編集者権限）でログインした際、不要な項目は非表示とすること。  
  必要に応じて下記を `functions.php` にて活用する

```php
// サイドメニューを非表示
function remove_menus() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'お客様アカウントID（例：writer-test）') {
    remove_menu_page('edit.php'); // 投稿
    remove_menu_page('upload.php'); // メディア
    remove_menu_page('edit.php?post_type=page'); // 固定ページ
    remove_menu_page('edit-comments.php'); // コメント
    remove_menu_page('themes.php'); // 外観
    remove_menu_page('plugins.php'); // プラグイン
    remove_submenu_page('index.php', 'update-core.php');
    remove_menu_page('users.php'); // ユーザー
    remove_menu_page('tools.php'); // ツール
    remove_menu_page('options-general.php'); // 設定
    remove_menu_page('wpcf7'); // contactform7
    remove_menu_page('ai1wm_export'); // wp migration
    remove_menu_page('cptui_main_menu'); // CPT UI
    remove_menu_page('siteguard'); // site Guard
  }
}
add_action('admin_menu', 'remove_menus');

// ダッシュボードを非表示
function remove_dashboard_widgets() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'お客様アカウントID') {
    remove_action('admin_notices', 'update_nag', 3);
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal'); // サイトヘルスステータス
    remove_meta_box('dashboard_activity', 'dashboard', 'normal'); // アクティビティ
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); // 概要
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); // クイックドラフト
    remove_meta_box('dashboard_primary', 'dashboard', 'side'); // WordPress イベントとニュース
  }
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets');

// 管理画面上部ツールバーに更新アイコンを非表示
function hide_adminbar_update_icon() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'お客様アカウントID') {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('updates');
  }
}
add_action('wp_before_admin_bar_render', 'hide_adminbar_update_icon');

// 更新通知非表示
function update_message_admin_only() {
  global $current_user;
  get_currentuserinfo();
  if ($current_user->user_login == 'お客様アカウントID') {
    add_filter('pre_site_transient_update_core', '__return_zero');
    remove_action('wp_version_check', 'wp_version_check');
    remove_action('admin_init', '_maybe_update_core');
  }
}
add_action('admin_init', 'update_message_admin_only');
```

### プラグインに関して

ジェイ・ラインでは下記のプラグインを推奨しています。

#### フィールドごとに項目を分ける際

- ［Advanced Custom Fields］  
  [https://ja.wordpress.org/plugins/advanced-custom-fields/](https://ja.wordpress.org/plugins/advanced-custom-fields/)  
  Proのプラグインデータはdropboxに格納しているのでご使用ください。

#### 投稿タイプを作成する際

- ［Custom Post Type UI］  
  [https://ja.wordpress.org/plugins/custom-post-type-ui/](https://ja.wordpress.org/plugins/custom-post-type-ui/)  
- phpファイルで投稿タイプを作成するでも可

#### 記事・カテゴリなどの視覚的な並び替えの際

- ［Intuitive Custom Post Order］  
  [https://hijiriworld.com/web/plugins/intuitive-custom-post-order/](https://hijiriworld.com/web/plugins/intuitive-custom-post-order/)

#### フォーム作成の際

- ［Contact Form 7］  
  [https://ja.wordpress.org/plugins/contact-form-7/](https://ja.wordpress.org/plugins/contact-form-7/)  
- [詳しくはこちら](https://www.jlweb.jp/coding/basic/form/)

#### データの移行をする際

- ［WPvivid］  
  [https://ja.wordpress.org/plugins/wpvivid-backuprestore/](https://ja.wordpress.org/plugins/wpvivid-backuprestore/)  

#### データのバックアップ

- ［BackWPup – WordPress Backup Plugin］  
  [https://ja.wordpress.org/plugins/backwpup/](https://ja.wordpress.org/plugins/backwpup/)  
- デフォルト設定：保存のタイミングは月に１回、上限12ファイル
- ドメイン切り替え前のサイト等はうまくバックアップをとれないことがある（エラーが出る）ので切り替え後に設定

#### ログインセキュリティ

- 「SiteGuard WP Plugin」  
  [https://ja.wordpress.org/plugins/siteguard/](https://ja.wordpress.org/plugins/siteguard/)  
- ログインセキュリティのプラグインは必ず設置すること

#### SEO/OGP関連

- 「SEO SIMPLE PACK」  
  [https://ja.wordpress.org/plugins/seo-simple-pack/](https://ja.wordpress.org/plugins/seo-simple-pack/)  
- SEO系のタグやOGPタグを設置する際に使用します。


### 情報の一部移行する作業が発生した場合

- 「DeMomentSomTres Export」というプラグインを使用する
- WP内の「インポート」機能では情報が全て移らないエラーが起こる可能性があるため

**参考：**

- [https://naifix.com/wordpress-transfer/](https://naifix.com/wordpress-transfer/)
- [https://easytouse.jp/2018/03/28/demomentsomtresexport/](https://easytouse.jp/2018/03/28/demomentsomtresexport/)


### WPマニュアルの作成に関して

- マニュアルサンプルを参考にしてマニュアルを作成すること。

[サンプルDLはこちら](https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx)




## Formに関して

### メールフォームに関して

ジェイ・ラインでは、お問合わせや申し込みフォームを作成する際、下記システムを導入しています。

#### メールフォームプロCGI（静的サイトで使用）

- Downloadサイト：  
  [https://www.synck.com/downloads/cgi-perl/mailformpro/index.html](https://www.synck.com/downloads/cgi-perl/mailformpro/index.html)
- 最新バージョンをダウンロードして使用すること
- フォーム動作しない場合は、サーバのパーミッションを再度確認
- 使用サーバのPerlパスを確認し、`mailformpro.cgi` の1行目を変更する必要がある場合があります
- 複数CC宛先の設定方法：  
  [https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html](https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html)
- reCAPTCHAの設定：  
  [Dropboxリンク](https://www.dropbox.com/scl/fo/vuylj8e6vnucet8w3na82/ABPn2cs3VNjG8STZk2cM8xQ?rlkey=yc67cb9yur6pl7ohxumh2lrzw&st=7yegcf9e&dl=0)
- [操作方法はこちら（PPTX）](https://www.jlweb.jp/coding/assets/dl/mailform_pro.pptx)
- [サンプルはこちら（ZIP）](https://www.jlweb.jp/coding/assets/dl/contact.zip)


#### レスポンシブメールフォーム（静的サイトで使用）

- メールフォームプロが使用できない場合のみ利用（確認画面はポップアップのみ）
- 確認画面付きは有料
- Downloadサイト：  
  [https://www.1-firststep.com/archives/462](https://www.1-firststep.com/archives/462)
- 最新バージョンをダウンロードして使用すること
- 注意：
  - 確認画面は簡易ポップアップのみ
  - クライアント・ディレクターに確認画面がない旨を伝える
  - PHP対応サーバーでないと動作しない

#### Contact Form 7（WPサイトで使用）

- 確認画面は不要
- 入力文字数が400～500文字を超えると自動返信メールに内容が反映されない（無料版の制限）
- 追加ヘッダー `Reply-To` 設定：
  - 管理者用：ユーザー入力のメールアドレスを設定
  - ユーザー用：空欄のまま
- `Reply-To` を設定すると返信ボタンで正しい宛先が指定される
- `Reply-To` を削除していると送信元アドレスが返信先に設定される

#### 【開発終了】MWWPForm

- 使用しない。適宜 Contact Form 7 に変更すること

### フォーム共通設定・注意事項

- エラー画面・完了画面を実装すること、確認画面は不要
- テスト送信には `kensho@j-line` を使用すること
- 管理者アドレスをクライアントのアドレスに変更後、内容は適切に送信テストすること
- 自動返信メールを設定すること（原稿はダミーで用意）
- 郵便番号入力がある場合は住所自動入力設定を行うこと
- 送信確認画面もデザインに合わせて装飾すること
- 完了画面には「TOPに戻る」ボタンを設置すること
- reCAPTCHAの設定を必ず行うこと



## ページスピードに関して

### 表示速度の目的と考え方

納品物の品質指標として「表示スピード」を設定し、ユーザー体験とサービス品質の底上げを目指します。
ただし表示速度は以下のような外部要因に左右されるため、一律の数値基準を設けることは現実的ではありません。

- サーバースペックやCDNの有無
- デザインの構成や複雑さ
- アニメーション・演出表現の有無

よって、本ガイドラインでは「一定の基準値と改善方針」を示し、最低限の品質担保と再現性の確保を目的とします。

#### Lighthouseスコア・LCPについての補足

Google Lighthouse の「パフォーマンススコア」や LCP（Largest Contentful Paint）値は、低速4G回線・低スペック端末を想定した“ラボ環境”での測定です。
そのため、実際のユーザー環境とは大きく乖離することがあり、スコアが厳しく出ることがあります。

### 基本方針

構築初期段階においては、ラボスコアよりも実環境での体感速度（LCP）を重視してください。
Lighthouseスコアは参考値として扱い、最終的にはUXとして「重く感じない」ことを優先します。

### 実測値の計測方法 （Chrome DevTools 使用）

1. Chromeで対象ページを開く
2. 「ネットワーク」タブ → スロットリングを「Fast 4G」、キャッシュ無効化にチェック
3. 「パフォーマンス」タブを開き、「記録（◉）」をクリック
4. ページをリロードし、読み込み完了後に「停止」
4. タイムライン上の「LCP」マーカーにマウスオーバーし、秒数を確認

LCP（実測目安）：4秒以内 （※今後の運用で再調整可）

※構造や演出上どうしてもLCPが遅くなる場合（例：JS描画のカルーセルなど）は、プレロード・事前描画の検討、または体感的な快適性を重視して例外対応としてください。






## 公開作業時

### リダイレクト作業に関して

- 基本は`.htaccess`でリダイレクト設定
- リニューアルの場合、旧サイトと同じ役割で且つ、ディレクトリが変わったページのリダイレクト作業を行う  
  [リダイレクトシート活用](https://docs.google.com/spreadsheets/d/1tvqfKhwBKZzJ4tfdFtiqOZS0i336dTGzRyVek49CWdg/edit?gid=882195015#gid=882195015) 
- 旧サイトにのみあるディレクトリのページは404のエラーページへ飛ぶように設定する。
- `http`から`https`へのリダイレクト作業を行う（SSL設定がされているかどうか確認する）
- `www`あり、無しのリダイレクト作業
- 新規ドメインの場合は、`www`無しで統一。既存ドメインの場合は今の仕様に合わせる。
- ⚠️ クライアントの希望によってリダイレクト作業を実施

### WPのプラグイン

| 用途 | プラグイン名 |
|------|---------------|
| `http → https`の切り替えや`.htaccess`でエラーが出る場合に使用 | [Really Simple SSL](https://ja.wordpress.org/plugins/really-simple-ssl/)  |



## テキスト類テンプレート

### フォーム関連

| 項目 | ダウンロードリンク |
|------|-------------------|
| 完了画面テキスト | [完了画面テキスト](https://www.jlweb.jp/coding/assets/dl/thanks_page_text.txt)  |
| 自動返信メール | [自動返信メール](https://www.jlweb.jp/coding/assets/dl/mail_text.txt)  |
| プライバシーポリシー | [プライバシーポリシー](https://www.jlweb.jp/coding/assets/dl/privacy_policy.txt)  |
| お知らせ投稿 | [お知らせ投稿（PDF）](https://www.jlweb.jp/coding/assets/dl/news.pdf)  |

### WPマニュアル

[サンプルDLはこちら（PPTX）](https://www.jlweb.jp/coding/assets/dl/manual_sample.pptx) 




## コード・画像類テンプレート

### コーディングテンプレート

- [HTMLデータ（zip）](https://www.jlweb.jp/coding/assets/dl/html.zip)   
- [WordPressデータ（zip）](https://www.jlweb.jp/coding/assets/dl/wp_theme.zip)   
- Wardpressのカスタマイテーマのphpファイル  
- テンプレート内には案件によっては不要な内容もあるので臨機応変に不要なものは消してください

### ダミーファイル類

- フォームで添付機能の送信テストの際に使用するダミーデータ

| ファイル形式 | リンク |
|--------------|--------|
| Excel | [ダミーExcel](https://www.jlweb.jp/coding/assets/dl/dummy.xlsx)  |
| PDF   | [ダミーPDF](https://www.jlweb.jp/coding/assets/dl/dummy.pdf)  |
| Word  | [ダミーDocx](https://www.jlweb.jp/coding/assets/dl/dummy.docx)  |

### ダミー画像

- WPのアイキャッチなどで画像が設定されていない場合に表示するダミー画像

- [ダミー画像（no-image.jpg）](https://www.jlweb.jp/coding/assets/dl/no-image.jpg) 
