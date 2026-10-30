# 1-6. Về selector và property

- Không viết selector theo dạng: type selector (tên thẻ) + class name
  - Ngoại trừ body
    
    ```css
    /* sai */
    ul.c-global-nav{}

    /* OK */
    .c-global-nav{}
    ```
- Về nguyên tắc, **nghiêm cấm việc sử dụng descendant selector (selector con cháu)** để lồng các component hoặc project vào nhau (ví dụ: `.p-news .c-button {}`).
  - Lý do: Phá vỡ tính độc lập của Component, làm tăng Specificity không cần thiết và đi ngược lại với nguyên tắc FLOCSS/BEM. Nếu cần thay đổi style của một component trong một project cụ thể, hãy sử dụng Modifier class (ví dụ: `.c-button--news`).
  - **※Ngoại lệ được phép sử dụng:**
    1. **Trạng thái (State):** Các class điều khiển trạng thái bằng JS như `.is-active`, `.is-open` (ví dụ: `.c-button.is-active` hoặc `.p-menu.is-open .p-menu__item`).
    2. **Nội dung CMS (WordPress CMS Content):** Các thẻ HTML thô được xuất ra từ trình soạn thảo của WordPress không có class BEM (ví dụ: `the_content()`). Bắt buộc bọc trong một class tổng và style các thẻ con bên trong.

    ```scss
    /* ❌ SAI: Lồng các module vào nhau hoặc viết dư thừa (tăng Specificity) */
    .p-news .c-button { ... } /* Phá vỡ tính tái sử dụng của .c-button */
    .p-card .p-card__title { ... } /* Thừa parent. Hãy dùng SCSS '&' hoặc viết trực tiếp */

    /* ✅ ĐÚNG: Sử dụng '&' trong SCSS để chuẩn BEM (biên dịch ra Specificity phẳng 0,1,0) */
    .p-card {
      &__title { ... } /* Biên dịch ra: .p-card__title */
      &__image { ... } /* Biên dịch ra: .p-card__image */
    }

    /* ✅ ĐÚNG: Modifier thay thế cho việc lồng nhau */
    .c-button--news { ... } 

    /* ✅ ĐÚNG (Ngoại lệ 1): Thay đổi trạng thái (.is-active, .has-error...) */
    .c-button.is-active { ... } /* Chaining */
    .p-menu.is-open .p-menu__item { ... } /* Lồng để giới hạn phạm vi tác động của trạng thái */

    /* ✅ ĐÚNG (Ngoại lệ 2): Nội dung thô từ WordPress */
    .p-entry-content p { ... }
    .p-entry-content h2 { ... }
    ```
- Tất cả các property phải kết thúc bằng dấu chấm phẩy ;
- Mỗi selector và property phải được viết trên dòng riêng
- Khi giá trị là 0, bỏ đơn vị
