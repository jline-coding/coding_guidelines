# 4-2. Về cách viết

* Cách viết phải được thống nhất (khoảng trắng, dấu nháy đơn), ưu tiên sử dụng `$` bên trong block `jQuery(function($) { ... })` để tránh xung đột thư viện trên môi trường WordPress.

```js
/* ❌ SAI: Viết không thống nhất (lúc dùng $, lúc dùng jQuery, thiếu khoảng trắng) */
$(window).on('scroll', function(){});
jQuery(window).on('scroll',function(){})

/* ✅ ĐÚNG: Thống nhất cách viết và bọc an toàn (safe wrapper) */
jQuery(function($) {
  $(window).on('scroll', function() {
    // Xử lý sự kiện scroll
  });
});
```

### Nguyên tắc thực tế

- **Project đã base jQuery**: ưu tiên viết thống nhất bằng jQuery cho những thứ jQuery làm tốt (event, DOM, AJAX…).
- **Chỉ dùng JS thuần (Vanilla JS) khi có lý do rõ ràng**, ví dụ:
  - Tối ưu performance (ví dụ: scroll/animation nặng)
  - Dùng API mới mà jQuery không hỗ trợ tốt
  - Viết code mới hoàn toàn tách biệt, không phụ thuộc vào jQuery
