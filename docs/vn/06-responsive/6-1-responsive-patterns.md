# 6-1. Về hỗ trợ responsive (Basic & Liquid Pattern)

## Về hỗ trợ responsive

- Có 2 kiểu cơ bản: Basic pattern và Liquid pattern, nên xác nhận với director trong buổi khởi động dự án
- Code sao cho layout không bị vỡ ở bất kỳ kích thước cửa sổ nào
- Nếu chiều rộng màn hình nhỏ hơn kích thước design, có thể điều chỉnh bằng cách xuống cột, Không cần phải giữ 100% giống design, ưu tiên khả năng nhìn và sử dụng
- Thông thường, đặt 1 breakpoint tại 768px, nhưng tùy design có thể đặt nhiều breakpoint
- Kích thước nhỏ nhất hỗ trợ trên mobile là 375px

## Basic Pattern
・Đặt chiều rộng tối đa của nội dung
・Nếu chiều rộng cửa sổ nhỏ hơn chiều rộng tối đa của nội dung, thì chiều rộng nội dung sẽ giảm theo
・Chiều rộng các cột thay đổi tương đối so với chiều rộng nội dung
・Kích thước chữ cố định
　site tham khảo：https://www.nippon-shooter.co.jp/

## Liquid Pattern
・Ngoài các đặc điểm của Basic Pattern, kích thước chữ cũng thay đổi tương đối theo chiều rộng nội dung
　site tham khảo : <https://pict-adloop.com/> , <https://www.ohshima-showten.com/>
