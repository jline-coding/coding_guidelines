# 3-3. Về Sass

* Quy tắc sử dụng Sass phải tuân theo “Sass Manual”


**※ Cập nhật quy tắc cấu trúc SCSS áp dụng cho Template:**
- Template hiện tại đang sử dụng cấu trúc Dart Sass module (FLOCSS / 7-1 pattern) chia theo các thư mục: `foundation` (reset, base), `layout` (header, footer), `component` (các UI component), `page` (style riêng cho từng trang), `global` (biến, mixins), và `utilities`.
- **Tuyệt đối không dùng `@import`.** Thay vào đó, sử dụng `@use` và `@forward`. 
- Thư mục `global` chứa các file định nghĩa biến màu sắc (`_color.scss`), font (`_font.scss`), mixin (`_mixin.scss`), v.v... được gom lại qua file `_index.scss` bằng lệnh `@forward`. Để sử dụng các biến/mixin này, gọi `@use "../global" as *;` (hoặc đường dẫn tương đối phù hợp) ở đầu mỗi file SCSS. Việc cấu hình các biến dùng chung bắt buộc phải thực hiện trong thư mục `global` này.
- Các file cấp cao (như `common.scss` hay `top.scss`) chỉ làm nhiệm vụ nạp các module qua `@use` để compile ra CSS sạch, không viết CSS trực tiếp vào các file này.
