# 8-3. Về tùy chỉnh trang quản trị WP

- Khi login bằng tài khoản khách hàng (quyền editor) thì phải ẩn những mục không cần thiết đi  
  Khi cần thiết hãy sử dụng những nội dung dưới đây trong `functions.php` 

```php
// Hàm kiểm tra phân quyền để ẩn các tính năng admin
function is_restricted_admin_user() {
  $user = wp_get_current_user();
  if ( ! $user || ! $user->exists() ) {
    return false;
  }

  // Danh sách Role áp dụng (Role là Editor, có thể thay đổi và thêm role khác tại đây)
  $restricted_roles = array(
    'editor',
  );

  // Kiểm tra theo Role
  if ( array_intersect( $restricted_roles, (array) $user->roles ) ) {
    return true;
  }
  return false;
}

// ẩn site menu
function remove_menus() {
  if ( is_restricted_admin_user() ) {
    remove_menu_page('ai1wm_export'); // wp migration
    remove_menu_page('cptui_main_menu'); // CPT UI
    remove_menu_page('edit-comments.php'); // comment
    remove_menu_page('edit.php'); // post
    remove_menu_page('edit.php?post_type=page'); // pages
    remove_menu_page('options-general.php'); // setting
    remove_menu_page('plugins.php'); // plugin
    remove_menu_page('siteguard'); // site Guard
    remove_menu_page('themes.php'); // appearance
    remove_menu_page('tools.php'); // tool
    remove_menu_page('upload.php'); // media
    remove_menu_page('users.php'); // user
    remove_menu_page('wpcf7'); // contactform7
    remove_submenu_page('index.php', 'update-core.php');
  }
}
// Set priority 999 để đảm bảo ghi đè được các plugin thêm menu chạy sau
add_action('admin_menu', 'remove_menus', 999);

// ẩn dashboard
function remove_dashboard_widgets() {
  if ( is_restricted_admin_user() ) {
    remove_action('admin_notices', 'update_nag', 3);
    remove_action('network_admin_notices', 'update_nag', 3); // Chuẩn: Ẩn thêm nag trên network (nếu có multisite)
    remove_meta_box('dashboard_activity', 'dashboard', 'normal'); // activity
    remove_meta_box('dashboard_primary', 'dashboard', 'side'); // WordPress event và news
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); // quick press
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); // at a glance
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal'); // site health status
  }
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets', 999);

// ẩn icon ở toolbar phía trên của trang quản trị
function hide_adminbar_update_icon() {
  if ( is_restricted_admin_user() ) {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('updates');
  }
}
add_action('wp_before_admin_bar_render', 'hide_adminbar_update_icon', 999);

// ẩn thông báo cập nhật (PHP 8 Safe & Standard)
function update_message_admin_only() {
  if ( is_restricted_admin_user() ) {
    // BẮT BUỘC TRẢ VỀ OBJECT, NẾU DÙNG __return_null SẼ BỊ LỖI JSON KHI LƯU BÀI VIẾT TRÊN PHP 8+
    add_filter('pre_site_transient_update_core', function() {
      return (object) array(
        'updates'         => array(),
        'version_checked' => get_bloginfo('version'),
        'last_checked'    => time(),
      );
    });
    remove_action('admin_init', '_maybe_update_core');
    remove_action('wp_version_check', 'wp_version_check');
  }
}
add_action('admin_init', 'update_message_admin_only', 999);

// Chặn truy cập trực tiếp bằng URL đối với các trang đã ẩn
function block_direct_access_to_hidden_pages() {
  if ( is_restricted_admin_user() ) {
    global $pagenow;

    // Danh sách các file mặc định bị cấm
    $restricted_pages = array(
      'edit-comments.php',
      'options-general.php',
      'plugins.php',
      'themes.php',
      'tools.php',
      'upload.php',
      'users.php',
      'update-core.php'
    );

    if ( in_array( $pagenow, $restricted_pages, true ) ) {
      wp_redirect( admin_url() );
      exit;
    }

    // Xử lý riêng cho edit.php (chỉ cấm truy cập Post và Page)
    if ( $pagenow === 'edit.php' ) {
      $post_type = isset($_GET['post_type']) ? $_GET['post_type'] : 'post';
      if ( $post_type === 'post' || $post_type === 'page' ) {
        wp_redirect( admin_url() );
        exit;
      }
    }

    // Chặn các trang của plugin
    if ( $pagenow === 'admin.php' && isset( $_GET['page'] ) ) {
      $restricted_plugin_pages = array(
        'ai1wm_export',
        'cptui_main_menu',
        'siteguard',
        'wpcf7'
      );
      if ( in_array( $_GET['page'], $restricted_plugin_pages, true ) ) {
        wp_redirect( admin_url() );
        exit;
      }
    }
  }
}
add_action( 'admin_init', 'block_direct_access_to_hidden_pages', 999 );
```

- **Mặc định bỏ chọn checkbox gửi email thông báo cho user mới:**
  Khi tạo mới một tài khoản user trong trang quản trị (trang `user-new.php`), mặc định checkbox "Gửi email thông báo cho người dùng mới" (`send_user_notification`) sẽ được bật. Để tránh việc WordPress tự động gửi email không mong muốn trong quá trình phát triển hoặc chuyển giao (migration), sử dụng hook dưới đây để tự động bỏ chọn (uncheck) checkbox này bằng JavaScript được chèn ở footer trang:

```php
// Mặc định bỏ chọn checkbox gửi email thông báo cho user mới
add_action( 'admin_footer-user-new.php', function() {
	?>
	<script>
	( function() {
		const checkbox = document.getElementById( 'send_user_notification' );

		if ( checkbox ) {
			checkbox.checked = false;
		}
	}() );
	</script>
	<?php
} );
```
