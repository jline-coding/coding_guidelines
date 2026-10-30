# 9-2. Form trên site WP (Contact Form 7)

## Contact Form 7（Sử dụng trên site WP）

- Không cần màn hình xác nhận
- Nếu số lượng text nhập vào vượt quá 400-500 chữ thì nội dung sẽ không được hiển thị vào mail trả lời tự động (giới hạn của bản miễn phí)
- Cài đặt ở mục 追加ヘッダー `Reply-To` ：
  - Dùng cho admin：cài đặt địa chỉ mail mà người dùng nhập vào
  - ユーザー用：để trống
- Nếu thiết lập `Reply-To`, khi nhấn nút Reply thì địa chỉ người nhận đúng sẽ được chỉ định
- Nếu xóa `Reply-To`, khi nhấn Reply thì địa chỉ người gửi (From) sẽ được chỉ định làm địa chỉ nhận phản hồi
- Tạo key reCAPTCHA và thêm domain jline cùng domain của khách hàng.

## 【Đã ngừng phát triển】MWWPForm

- Không sử dụng. Hãy thay đổi sang Contactform 7 khi cần thiết.
