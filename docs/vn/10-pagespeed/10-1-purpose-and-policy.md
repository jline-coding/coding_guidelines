# 10-1. Mục đích, cách tiếp cận & Phương châm cơ bản

## Mục đích và cách tiếp cận đối với tốc độ hiển thị

Thiết lập “tốc độ hiển thị” làm chỉ số chất lượng của sản phẩm bàn giao, nhằm nâng cao trải nghiệm người dùng và chất lượng dịch vụ.
Tuy nhiên, vì tốc độ hiển thị chịu ảnh hưởng bởi các yếu tố bên ngoài như dưới đây, nên việc đặt ra một tiêu chuẩn số liệu cố định áp dụng chung là không thực tế.

- Cấu hình server và có hay không có CDN
- Cấu trúc và mức độ phức tạp của thiết kế
- Có hay không có animation, hiệu ứng trình diễn

Vì vậy, trong guideline này sẽ đưa ra「mức tiêu chuẩn nhất định và phương hướng cải thiện」với mục đích đảm bảo chất lượng tối thiểu và khả năng đạt được kết quả tương tự

### Bổ sung về điểm số Lighthouse và LCP

Điểm 「Performance Score」 của Google Lighthouse và giá trị LCP (Largest Contentful Paint) được đo trong môi trường thử nghiệm, giả định kết nối 4G tốc độ thấp và thiết bị có cấu hình thấp.


## Phương châm cơ bản

Ở giai đoạn đầu của quá trình xây dựng, hãy ưu tiên tốc độ cảm nhận trong môi trường thực tế (LCP) hơn là điểm số trong môi trường lab.
Điểm Lighthouse chỉ nên xem như giá trị tham khảo, và cuối cùng nên ưu tiên trải UX, tức là người dùng không cảm thấy trang web bị nặng hoặc chậm.
