# 10-2. Cách đo giá trị thực tế (Chrome DevTools)

## Cách đo giá trị thực tế (sử dụng Chrome DevTools)

1. Mở trang cần kiểm tra bằng Chrome
2. Mở tab 「Network」 → đặt Throttling thành 「Fast 4G」 và check vào Disable cache
3. Mở tab 「Performance」 và nhấn Record (◉)
4. Reload trang, sau khi tải xong thì nhấn 「Stop」
4. Di chuột vào marker 「LCP」 trên timeline để kiểm tra số giây

LCP（mốc tham khảo khi đo thực tế）：trong vòng 4 giây （※Có thể điều chỉnh lại trong quá trình vận hành sau này）

※Trong trường hợp do cấu trúc hoặc hiệu ứng mà LCP khó tránh khỏi bị chậm (ví dụ: carousel được render bằng JS), hãy xem xét preload hoặc render trước (pre-render) hoặc áp dụng ngoại lệ với tiêu chí ưu tiên trải nghiệm cảm nhận thực tế của người dùng.
