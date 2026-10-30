# 5-2. Giao data & Giao data dạng chênh lệch

## giao data

* Trong mọi trường hợp, data giao phải được lưu vào dropbox của JL
* Sau khi xóa các file không cần thiết
  1. tạo cấu trúc thư mục 案件名のフォルダ＞「コーディングデータ」( dịch là  folder tên dự án＞「data coding」)
  2. Bên trong folder data coding, đặt các file đúng theo cấu trúc thư mục được chỉ định.
  3. đặt tên data giao hàng như sau
     ví dụ：ver01-2026-04-01.zip
  4. Nếu sau khi nộp mà có sửa thì đặt tên thành 「ver02- ngày」 rồi lưu vào
* File phải nén thành Zip và dùng URL chia sẻ của dropbox để nộp
　Thời gian download 1 tuần、phải đặt mật khẩu khi chia sẻ

**Trường hợp giao data dạng chênh lệch**

* Nếu trong quá trình sửa chỉ cần nộp những file đã được chỉnh sửa, thì cần thực hiện thêm các bước sau
  1. Backup data trước khi sửa
  2. Vì có thể có sự chênh lệch thời gian trước khi nộp, nên phải ghi rõ file nào đã sửa, bao gồm cả thư mục img và file css 
  3. Dùng công cụ check để so sánh thư mục trước và sau khi sửa, nhằm đảm bảo không bị thiếu file khi nộp [công cụ check](https://qiita.com/frozencatpisces/items/8f998720de8f2aaa7e37) 

**※ Chuẩn bị data giao hàng bằng cơ chế tự động của Template (.github/workflows/release.yml):**
Thay vì gom file chênh lệch thủ công dễ sai sót hay phải dùng phần mềm WinMerge để so sánh, Template hiện tại đã được nâng cấp với **cơ chế tự động trích xuất file chênh lệch (Auto Diff Extraction)**.

1. Sau khi đã commit hoàn chỉnh các sửa đổi, bạn tạo một Tag mới (ví dụ: `git tag v1.0.1`) và push lên GitHub (`git push origin v1.0.1`).
2. Hệ thống GitHub Actions sẽ tự động chạy lệnh build, loại bỏ các file rác/source code (như `node_modules`, file `.scss`).
3. **Tự động đối chiếu:** Hệ thống sẽ dùng lệnh `rsync` tự động tải bản Release cũ về, đối chiếu với bản mới để nhặt ra chính xác các file bị thay đổi và tự động đóng gói.
4. Developer hoặc PM chỉ cần vào mục **Releases** trên GitHub, tải 2 file `.zip` vừa được tạo ra để gửi ngay cho khách hàng:
   - 📦 **Bản đầy đủ:** `{tên_dự_án}_{tag_name}.zip` (Chứa toàn bộ data sạch)
   - 📦 **Bản chênh lệch:** `{tên_dự_án}_diff_data_{tag_name}.zip` (Chỉ chứa các file bị thay đổi/thêm mới, dùng để giao diff data mà không lo thiếu sót)

> ⚠️ **LƯU Ý QUAN TRỌNG KHI NHẬN DATA TỪ KHÁCH HÀNG:**
> Để GitHub Actions có thể so sánh và trích xuất file chênh lệch, nó cần một mốc gốc (baseline). Do đó, ngay khi nhận source code cũ từ khách hàng và push lên Git lần đầu tiên, bạn **BẮT BUỘC PHẢI TẠO TAG (VD: `v1.0.0`) VÀ PUSH LÊN GITHUB TRƯỚC KHI CHỈNH SỬA CODE**. Nếu bạn sửa code rồi mới tạo Tag đầu tiên, hệ thống sẽ không có bản cũ để đối chiếu và không thể tạo file Diff.
