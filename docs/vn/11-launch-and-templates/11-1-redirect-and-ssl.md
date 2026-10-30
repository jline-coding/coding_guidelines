# 11-1. Khi thực hiện công khai website (Redirect & Plugin WP)

## Khi thực hiện công khai website

### Về công việc redirect

- Về cơ bản, thiết lập redirect bằng `.htaccess`
- Trong trường hợp renewal website, cần thiết lập redirect cho các trang có cùng chức năng với site cũ nhưng đã thay đổi đường dẫn  
  [sheet sử dụng cho công việc redirect](https://docs.google.com/spreadsheets/d/1tvqfKhwBKZzJ4tfdFtiqOZS0i336dTGzRyVek49CWdg/edit?gid=882195015#gid=882195015) 
- Các trang có đường dẫn chỉ tồn tại trên site cũ cần được thiết lập chuyển đến trang 404
- Thực hiện thiết lập redirect `http` sang `https` (cần kiểm tra xem SSL đã được thiết lập hay chưa).
- Thực hiện redirect có và không có `www`
- Trường hợp domain mới thì thống nhất không có `www`. Trường hợp domain có sẵn thì làm theo cấu hình hiện có.
- ⚠️ Thực hiện công việc redirect theo yêu cầu của khách hàng

### Plugin WP

| Mục đích sử dụng | Tên plugin |
|------|---------------|
| Sử dụng khi chuyển đổi `http → https` hoặc khi xảy ra lỗi với`.htaccess` | [Really Simple SSL](https://ja.wordpress.org/plugins/really-simple-ssl/)  |
