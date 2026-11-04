# 1-9. Về Interaction

- Khi sử dụng link với design giống như button, không thêm gạch chân (underline) khi hover
- Nút “Back to Top” phải được cài đặt kể cả khi không có design cụ thể (sử dụng màu đang dùng trong website)
- Mỗi section cần thêm hiệu ứng fade khi scroll. Trang tham khảo： 
  [https://web-loid.net/web/scroll-effect-js/](https://web-loid.net/web/scroll-effect-js/)
  - **Đảm bảo tìm kiếm trong trang (`Ctrl + F` / Find in page):** Khi triển khai hiệu ứng xuất hiện khi cuộn trang (InView), **tuyệt đối không sử dụng `display: none` hoặc `visibility: hidden`** cho trạng thái ẩn ban đầu vì trình duyệt sẽ không thể tìm thấy nội dung chưa hiển thị trên màn hình. Bắt buộc sử dụng `opacity: 0` kết hợp `transform: translate(...)` để nội dung luôn tìm kiếm được ngay cả khi chưa cuộn tới.
- Hover action: nếu không có chỉ thị đặc biệt, mặc định sử dụng hiệu ứng “làm mờ” (thay đổi opacity)
- **Phản hồi khi chạm (Tap feedback) trên Smartphone:**
  - Trên thiết bị di động không có trạng thái `:hover`, cần bổ sung hiệu ứng `:active` cho các liên kết (`<a>`) và nút bấm (`<button>`) để người dùng dễ nhận biết thao tác chạm.
  - Lưu ý trên trình duyệt Safari (iOS), hiệu ứng `:active` mặc định không kích hoạt nếu thiếu sự kiện touch; vì vậy cần thêm thuộc tính `ontouchstart=""` vào thẻ `<body ontouchstart="">`.
- Các link trong nội dung bài viết (WordPress, v.v.) phải có gạch chân (underline)
- Cookie popup phải được triển khai mặc định trên toàn bộ website, và cần thiết lập link tới trang Privacy Policy hoặc trang thông tin cá nhân
