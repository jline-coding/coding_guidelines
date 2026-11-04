# 5-1. Phương pháp giao hàng & Cách thức giao hàng

## Liên quan đến phương pháp giao hàng

Có 2 cách giao hàng chính
Chỉ bàn giao file data
Upload trực tiếp file lên server của khách hàng (công khai lên production（công việc công khai）)
Vì mỗi cách bàn giao có quy trình khác nhau, nên cần xác nhận trước với director xem sẽ bàn giao theo cách nào

## Cách thức giao hàng

* Dù là bàn giao data hay công khai lên server, khi bàn giao không được bao gồm các file không cần thiết.
* Tuyệt đối không đưa các file không cần thiết cho môi trường công khai như file `.map` (Source Map), `.scss`, `.env`, `node_modules` vào dữ liệu bàn giao hoặc upload lên server.
* **Quy tắc bàn giao đối với các dự án sử dụng Build Template (`TEMPLATE_HTML` / `TEMPLATE_WP`):**
  * Trước khi bắt đầu dự án, bắt buộc đọc kỹ file `README.md` để nắm rõ cấu trúc và cách thức vận hành của template.
  * Trước khi bàn giao dữ liệu cho phía Nhật Bản, bắt buộc phải chạy **build** và kiểm tra kỹ dữ liệu đầu ra (giao diện, liên kết, đảm bảo không phát sinh file thừa như `.map`) rồi mới bàn giao.
* Khi thực hiện công khai lên server, cần tham khảo  [「checklist」](https://docs.google.com/spreadsheets/d/1_iD95RWSG4_AlToFlA80eeN0c0eMDW0rgP1ahh_aWuo/edit?gid=0#gid=0) và kiểm tra từng bước trong khi làm
