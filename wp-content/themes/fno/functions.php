<?php

defined( 'ABSPATH' ) || exit;

define( 'FNO_THEME', '1.0' );
define( 'FNO_THEME_DIR', get_template_directory() );

/**
 * Include all PHP files in the /includes directory.
 */
$all_includes_files = glob( FNO_THEME_DIR . '/includes/*.php' );
$all_includes_dirs  = glob( FNO_THEME_DIR . '/includes/**/*.php' );
$all_includes       = array_merge( $all_includes_dirs, $all_includes_files );

foreach ( $all_includes as $file ) {
	require_once $file;
}

// Add theme support for post thumbnails.
add_theme_support( 'post-thumbnails' );

/**
 * Enqueue theme styles and scripts.
 */
function fno_theme_enqueue_style_and_scripts() {
	wp_enqueue_style(
		'fno-theme-main-css',
		get_stylesheet_uri(),
		array(),
		'1.0',
		'all'
	);

	wp_enqueue_style(
		'fno-theme-header-footer-style',
		get_template_directory_uri() . '/assets/css/header-footer.css',
		array(),
		'1.0',
		'all'
	);

	wp_enqueue_style(
		'load-fa',
		'https://use.fontawesome.com/releases/v6.5.2/css/all.css',
		array(),
		'6.5.2',
		'all'
	);

	wp_enqueue_style(
		'fno-theme-single-page-style',
		get_template_directory_uri() . '/assets/css/single-page.css',
		array(),
		'1.0',
		'all'
	);

	wp_enqueue_script(
		'header-footer-scripts',
		get_template_directory_uri() . '/assets/js/header-footer.js',
		array(),
		'1.0',
		false
	);

	wp_enqueue_script(
		'contact-form-script',
		get_template_directory_uri() . '/assets/js/contact-us.js',
		array(),
		'1.0',
		false
	);
}
add_action( 'wp_enqueue_scripts', 'fno_theme_enqueue_style_and_scripts' );

/**
 * Enqueue admin styles and scripts.
 */
function fno_theme_admin_enqueue_style_and_scripts() {
	wp_enqueue_style(
		'fno-theme-setting-style',
		get_template_directory_uri() . '/assets/css/admin-setting.css',
		array(),
		'1.0',
		'all'
	);

	wp_enqueue_script(
		'fno-theme-admin-settings',
		get_template_directory_uri() . '/assets/js/admin-setting.js',
		array( 'jquery' ),
		'1.0',
		false
	);

	if ( is_admin() ) {
		wp_enqueue_media();
	}

	// Localize script to pass variables to the admin script.
	wp_localize_script(
		'fno-theme-admin-settings',
		'fno_theme_admin_vars',
		array(
			'upload_logo_button_text' => __( 'Choose Logo', 'fno-theme-admin-menu' ),
		)
	);
}
add_action( 'admin_enqueue_scripts', 'fno_theme_admin_enqueue_style_and_scripts' );

/**
 * Register navigation menus for the theme.
 */
function fno_theme_register_menus() {
	register_nav_menus(
		array(
			'primary_menu' => __( 'Header Menu', 'fno_theme' ),
			'footer_menu'  => __( 'Footer Menu', 'fno_theme' ),
		)
	);
}
add_action( 'init', 'fno_theme_register_menus', 5 );

/**
 * Add custom classes and icons to menu items.
 *
 * @param array $items The menu items.
 * @return array Modified menu items.
 */
function fno_theme_add_menu_parent_class( $items ) {
	$parents = array();

	// Identify parent menu items.
	foreach ( $items as $item ) {
		if ( $item->menu_item_parent && $item->menu_item_parent > 0 ) {
			$parents[] = $item->menu_item_parent;
		}
	}

	// Add custom class and icon to parent menu items.
	foreach ( $items as $item ) {
		if ( in_array( $item->ID, $parents ) ) {
			$item->classes[] = 'has-children';
			$item->title    .= ' <i class="fa-solid fa-chevron-down"></i>';
		}
	}

	return $items;
}
add_action( 'wp_nav_menu_objects', 'fno_theme_add_menu_parent_class' );

/**
 * Generate a breadcrumb trail.
 *
 * @return string The HTML markup for the breadcrumb trail.
 */
function get_breadcrumb() {
	$breadcrumb = '';

	// Add link to the homepage.
	$breadcrumb .= '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'textdomain' ) . '</a>';

	if ( is_single() ) {
		// Get categories for the post.
		$categories = get_the_terms( get_the_ID(), 'fno_product_listing_category' );

		// Add categories to the breadcrumb.
		if ( $categories && ! is_wp_error( $categories ) ) {
			foreach ( $categories as $category ) {
				$category_url = home_url( '/' . $category->slug );
				$breadcrumb  .= ' <i class="fa-solid fa-chevron-right"></i> <a href="' . esc_url( $category_url ) . '">' . esc_html( $category->name ) . '</a>';
			}
		}

		// Add post title.
		$breadcrumb .= ' <i class="fa-solid fa-chevron-right"></i> <span>' . esc_html( get_the_title() ) . '</span>';
	}

	if ( is_page() || is_search() || is_404() ) {
		global $post;

		// Add parent page link if applicable.
		if ( $post->post_parent ) {
			$breadcrumb .= ' <i class="fa-solid fa-chevron-right"></i> <a href="' . esc_url( get_permalink( $post->post_parent ) ) . '">' . esc_html( get_the_title( $post->post_parent ) ) . '</a>';
		}

		// Add current page title.
		$breadcrumb .= ' <i class="fa-solid fa-chevron-right"></i> <span>' . esc_html( get_the_title() ) . '</span>';
	}

	return $breadcrumb;
}
