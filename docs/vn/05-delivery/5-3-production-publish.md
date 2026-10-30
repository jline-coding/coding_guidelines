# 5-3. Công khai môi trường production

## Công khai môi trường production（công việc công khai）

* Khi có task phát sinh, cần xác nhận các thông tin sau: thông tin FTP của khách hàng, kiểm tra kết nối, thư mục upload, xác nhận với director xem có xóa data cũ trên server hay không
* Trường hợp site tĩnh, Tạo folder [old] trên server và di chuyển data cũ vào đó. Đồng thời, backup data và tạo folder [old] trên Dropbox để lưu trữ
* Sau khi upload, dùng checklist để kiểm tra xem site có vấn đề gì không [「check list」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0)

**Trường hợp WordPress**

* Backup WP cũ, bao gồm data  [「WPvivid」](https://ja.wordpress.org/plugins/wpvivid-backuprestore/) và file PHP, rồi lưu vào dropbox
  * ※Khi xác nhận với khách hàng xong, có thể xóa data cũ trên server

**Khi có thể publish trực tiếp trên server khách hàng**

1. Thay đổi URL site và công khai. Di chuyển thư mục wp từ thư mục con lên root directory → [site tham khảo](https://www.cloud9works.net/web/how-to-change-wordpress-directory/)

**Khi chuyển từ test server của JL**

1. Cài WordPress trên server, dùng 「WPvivid」để migrate
