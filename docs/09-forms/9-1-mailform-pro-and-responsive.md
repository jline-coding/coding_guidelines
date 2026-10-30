# 9-1. 静的サイトのメールフォーム（CGI / レスポンシブ）

## メールフォームに関して

ジェイ・ラインでは、お問合わせや申し込みフォームを作成する際、下記システムを導入しています。

### メールフォームプロCGI（静的サイトで使用）

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


### レスポンシブメールフォーム（静的サイトで使用）

- メールフォームプロが使用できない場合のみ利用（確認画面はポップアップのみ）
- 確認画面付きは有料
- Downloadサイト：  
  [https://www.1-firststep.com/archives/462](https://www.1-firststep.com/archives/462)
- 最新バージョンをダウンロードして使用すること
- 注意：
  - 確認画面は簡易ポップアップのみ
  - クライアント・ディレクターに確認画面がない旨を伝える
  - PHP対応サーバーでないと動作しない
