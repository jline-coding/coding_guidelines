# 1-2. Quy tắc format

- Không sử dụng chữ in hoa cho tag, class name hoặc ID. Tên class phải tuân theo quy tắc FLOCSS + BEM：
  - Dấu gạch ngang đơn `-` ：dùng để nối từ trong tên（ví dụ：`.c-global-nav`, `.p-news-list`）
  - Dấu gạch dưới kép `__` ：dùng để phân tách Element（ví dụ：`.p-news__title`）
  - Dấu gạch ngang kép `--` ：dùng để phân tách Modifier（ví dụ：`.c-button--primary`）
  - Prefix theo layer FLOCSS：`l-`（Layout）, `c-`（Component）, `p-`（Project）, `u-`（Utility）
  - Ví dụ đầy đủ：`.l-header`, `.c-global-nav`, `.p-news-list`, `.u-text-center`
  - （chi tiết xem phần「Quy tắc đặt tên Class」）
- Khi có cấu trúc lồng nhau, cần thụt lề rõ ràng để bất kỳ ai nhìn vào cũng có thể dễ dàng hiểu được cấu trúc source
- Xóa các khoảng trắng dư thừa ở cuối dòng hoặc giữa các đoạn text
- Sử dụng comment khi cần thiết
  `bắt đầu：<!-- ↓↓container↓↓ -->`  
  `kết thúc：<!-- ↑↑container↑↑ -->`
