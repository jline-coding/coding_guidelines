# 9-1. Mail form trên site tĩnh (Mailform pro CGI / Responsive)

## Về mail form 

Tại J-line chúng tôi sử dụng những hệ thống dưới đây khi xây dựng form liên hệ hoặc form đăng kí

### Mailform pro CGI（Sử dụng trong những site tĩnh）

- Site download：  
  [https://www.synck.com/downloads/cgi-perl/mailformpro/index.html](https://www.synck.com/downloads/cgi-perl/mailformpro/index.html)
- Phải download và sử dụng phiên bản mới nhất
- Trường hợp form không hoạt động, hãy kiểm tra lại quyền của server
- Có trường hợp cần kiểm tra đường dẫn Perl của server đang sử dụng và chỉnh sửa dòng đầu tiên của`mailformpro.cgi` 
- Cách thiết lập nhiều địa chỉ CC ：  
  [https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html](https://www.synck.com/downloads/faq/mailform/thread_tCvQ2v9RXHdq4m-UF88S3Q.html)
- Cài đặt reCAPTCHA：  
  [Link Dropbox](https://www.dropbox.com/scl/fo/vuylj8e6vnucet8w3na82/ABPn2cs3VNjG8STZk2cM8xQ?rlkey=yc67cb9yur6pl7ohxumh2lrzw&st=7yegcf9e&dl=0)
- [Cách thao tác xem tại đây（PPTX）](https://www.jlweb.jp/coding/assets/dl/mailform_pro.pptx)
- [Mẫu tại đây（ZIP）](https://www.jlweb.jp/coding/assets/dl/contact.zip)


### Responsive mailform（Sử dụng trong những site tĩnh）

- Chỉ dùng trong trường hợp không sử dụng được mailform pro（màn hình xác nhận chỉ là pop-up）
- Chức năng trang xác nhận là tính phí
- Site download：  
  [https://www.1-firststep.com/archives/462](https://www.1-firststep.com/archives/462)
- Phải download bản mới nhất để sử dụng
- Chú ý：
  - Màn hình xác nhận chỉ là pop-up đơn giản
  - Phải thông báo về việc không có trang xác nhận cho khách hàng và director
  - Không hoạt động được trên những server không hỗ trợ PHP
