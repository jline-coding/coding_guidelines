# 2-5. Về thuộc tính alt

Thuộc tính alt đóng vai trò là thông tin thay thế cho người dùng không thể nhìn thấy hình ảnh (ví dụ: trình đọc màn hình, text browser)
Việc viết alt đúng cách giúp cải thiện accessibility và cũng có lợi cho SEO

-Đối với hình ảnh mang tính trang trí (mũi tên, họa tiết, đường kẻ…), để alt rỗng（ví dụ：alt=""）。
- Đối với hình ảnh mang ý nghĩa (ảnh chụp, sơ đồ, banner…), bắt buộc phải ghi nội dung mô tả cụ thể vào alt

### Ví dụ OK

```
<img src="img_office.webp" alt="オフィス外観の写真">
```

### Ví dụ sai

```
<img src="img_office.webp" alt="画像">
<img src="img_office.webp" alt=""> <!-- 意味のある画像に空altはNG -->
```
