# 8-3. WP管理画面のカスタマイズに関して

- お客様アカウント（編集者権限）でログインした際、不要な項目は非表示とすること。  
  必要に応じて下記を `functions.php` にて活用する

```php
// 管理機能非表示用の権限チェック関数
function is_restricted_admin_user() {
  $user = wp_get_current_user();
  if ( ! $user || ! $user->exists() ) {
    return false;
  }

  // 制限対象のRole一覧（デフォルトはEditor、ここで変更・追加可能）
  $restricted_roles = array(
    'editor',
  );

  // Roleによる判定
  if ( array_intersect( $restricted_roles, (array) $user->roles ) ) {
    return true;
  }
  return false;
}

// サイドメニューを非表示
function remove_menus() {
  if ( is_restricted_admin_user() ) {
    remove_menu_page('ai1wm_export'); // wp migration
    remove_menu_page('cptui_main_menu'); // CPT UI
    remove_menu_page('edit-comments.php'); // コメント
    remove_menu_page('edit.php'); // 投稿
    remove_menu_page('edit.php?post_type=page'); // 固定ページ
    remove_menu_page('options-general.php'); // 設定
    remove_menu_page('plugins.php'); // プラグイン
    remove_menu_page('siteguard'); // site Guard
    remove_menu_page('themes.php'); // 外観
    remove_menu_page('tools.php'); // ツール
    remove_menu_page('upload.php'); // メディア
    remove_menu_page('users.php'); // ユーザー
    remove_menu_page('wpcf7'); // contactform7
    remove_submenu_page('index.php', 'update-core.php');
  }
}
// プラグインで追加されたメニューも上書きできるように優先度を999に設定
add_action('admin_menu', 'remove_menus', 999);

// ダッシュボードを非表示
function remove_dashboard_widgets() {
  if ( is_restricted_admin_user() ) {
    remove_action('admin_notices', 'update_nag', 3);
    remove_action('network_admin_notices', 'update_nag', 3); // 標準：ネットワーク上の更新通知も非表示（マルチサイトの場合）
    remove_meta_box('dashboard_activity', 'dashboard', 'normal'); // アクティビティ
    remove_meta_box('dashboard_primary', 'dashboard', 'side'); // WordPress イベントとニュース
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); // クイックドラフト
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); // 概要
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal'); // サイトヘルスステータス
  }
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets', 999);

// 管理画面上部ツールバーに更新アイコンを非表示
function hide_adminbar_update_icon() {
  if ( is_restricted_admin_user() ) {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('updates');
  }
}
add_action('wp_before_admin_bar_render', 'hide_adminbar_update_icon', 999);

// 更新通知を非表示 (PHP 8 Safe & Standard)
function update_message_admin_only() {
  if ( is_restricted_admin_user() ) {
    // 必須：オブジェクトを返すこと。__return_nullを使用するとPHP 8+で記事保存時にJSONエラーが発生します
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

// 非表示ページへのURL直アクセスをブロック
function block_direct_access_to_hidden_pages() {
  if ( is_restricted_admin_user() ) {
    global $pagenow;

    // アクセス禁止のデフォルトファイル一覧
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

    // edit.phpの個別処理（投稿と固定ページのみ禁止）
    if ( $pagenow === 'edit.php' ) {
      $post_type = isset($_GET['post_type']) ? $_GET['post_type'] : 'post';
      if ( $post_type === 'post' || $post_type === 'page' ) {
        wp_redirect( admin_url() );
        exit;
      }
    }

    // プラグインページをブロック
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

- **新規ユーザー作成時の通知メール送信チェックボックスのデフォルトをオフにする:**
  管理画面の新規ユーザー作成画面（`user-new.php`）では、新規ユーザーへアカウント通知メールを送信するチェックボックス（`send_user_notification`）がデフォルトで有効（オン）になっています。開発環境やデータ移行時（migration）などの意図しない自動メール送信を防ぐため、下記のフックを使用して管理画面フッターにJavaScriptを挿入し、デフォルトでチェックを外す（オフにする）設定を行います：

```php
// 新規ユーザー作成時の通知メール送信チェックボックスのデフォルトをオフにする
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
