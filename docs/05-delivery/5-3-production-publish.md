# 5-3. 本番公開（公開作業）

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
