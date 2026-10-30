# 2-3. Về định dạng hình ảnh (WebP / SVG)

## Về định dạng hình ảnh

### WebP
Nguyên tắc chung: định dạng hình ảnh sử dụng trong coding phải ưu tiên WebP

### SVG
Chỉ sử dụng SVG cho các thành phần được tạo dưới dạng vector như logo, chữ, icon, v.v.
※Văn bản bên trong SVG bắt buộc phải được convert sang outline, để tránh phụ thuộc vào font

### Về xuất file WebP
Việc chuyển đổi hình ảnh sang WebP đã được tích hợp sẵn và tự động hóa trong Template thông qua build script sử dụng thư viện `sharp`.
- **Định dạng tự động chuyển đổi:** Các file có đuôi `.jpg`, `.jpeg`, `.png` khi được đặt vào thư mục ảnh (assets/images) sẽ được tự động convert sang `.webp` với chất lượng (quality) tối ưu ở mức 90%.
- **Định dạng giữ nguyên:** Các định dạng như `.gif`, `.svg`, `.ico`, `.webp` sẽ không bị convert mà được copy trực tiếp sang thư mục build.
- **Tối ưu hiệu suất:** Script sử dụng logic kiểm tra timestamp (`isNewer`) để chỉ xử lý các file thêm mới hoặc bị thay đổi, đồng thời tự động dọn dẹp các file rác (`removeStaleFiles`) ở thư mục đích. Việc này giúp quá trình build nhanh chóng và sạch sẽ.
- **Cách sử dụng:** Bạn chỉ cần sử dụng các lệnh build có sẵn của template, script sẽ tự động thực thi.

### Về fallback cho WebP
Trong trường hợp có yêu cầu hỗ trợ môi trường không tương thích WebP, hãy sử dụng thẻ`<picture>`  và thiết lập thứ tự fallback WebP → jpg/png

```
<picture>
  <source srcset="image.webp">
  <img src="image.jpg" alt="代替テキスト">
</picture>
```
