# 11-1. 公開作業時（リダイレクト作業・WPプラグイン）

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
