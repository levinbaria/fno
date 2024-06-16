<?php

defined( 'ABSPATH' ) || exit;

define( 'FNO_THEME', '1.0' );
define( 'FNO_THEME_DIR', get_template_directory() );

/**
 * Render CB files for the blocks.
 */
$all_includes_files = glob( FNO_THEME_DIR . '/includes/*.php' );
$all_includes_dirs  = glob( FNO_THEME_DIR . '/includes/**/*.php' );
$all_includes       = array_merge( $all_includes_dirs, $all_includes_files );
foreach ( $all_includes as $file ) {
	require_once $file;
}


// Added the theme support the excerpt Images.
add_theme_support( 'post-thumbnails' );

// Enqueuing the style and the script on the FNO theme.
function fno_theme_enqueue_style_and_scripts() {
	wp_enqueue_style(
		'fno-theme-main-css',
		get_stylesheet_uri(),
		array(),
		'1.0',
		'all',
	);

	wp_enqueue_style(
		'fno-theme-header-footer-style',
		get_template_directory_uri() . '/assets/css/header-footer.css',
		array(),
		'1.0',
		'all',
	);

	wp_enqueue_style(
		'load-fa',
		'https://use.fontawesome.com/releases/v6.5.2/css/all.css'
	);

	wp_enqueue_style(
		'fno-theme-single-page-style',
		get_template_directory_uri() . '/assets/css/single-page.css',
		array(),
		'1.0',
		'all',
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

function fno_theme__admin_enqueue_style_and_scripts() {
	wp_enqueue_style(
		'fno-theme-setting-style',
		get_template_directory_uri() . '/assets/css/admin-setting.css',
		array(),
		'1.0',
		'all',
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

	// Localize script to pass variables
	wp_localize_script(
		'fno-theme-admin-settings',
		'fno_theme_admin_vars',
		array(
			'upload_logo_button_text' => __( 'Choose Logo', 'fno-theme-admin-menu' ),
		)
	);
}

add_action( 'admin_enqueue_scripts', 'fno_theme__admin_enqueue_style_and_scripts' );
// Registereing the navigation menu for the FNO themes.
function fno_theme__register_menus() {
	register_nav_menus(
		array(
			'primary_menu' => __( 'Header Menu', 'fno_theme' ),
			'footer_menu'  => __( 'Footer Menu', 'fno_theme' ),
		)
	);
}

add_action( 'init', 'fno_theme__register_menus', 5 );

// Adding arrows to menu parent.
function fno_theme_add_menu_parent_class( $items ) {
	$parents = array();
	foreach ( $items as $item ) {
		if ( $item->menu_item_parent && $item->menu_item_parent > 0 ) {
			$parents[] = $item->menu_item_parent;
		}
	}

	foreach ( $items as $item ) {
		if ( in_array( $item->ID, $parents ) ) {
			$item->classes[] = 'has-children';
		}
	}

	foreach ( $items as $item ) {
		if ( in_array( $item->ID, $parents ) ) {
			$item->title .= ' <i class="fa-solid fa-chevron-down"></i>';
		}
	}

	return $items;
}
add_action( 'wp_nav_menu_objects', 'fno_theme_add_menu_parent_class' );

// Function for the BradCrumb.
/**
 * Generate a breadcrumb trail.
 *
 * @return string The HTML markup for the breadcrumb trail.
 */
function get_breadcrumb() {
	// Initialize the breadcrumb variable.
	$breadcrumb = '';

	// Add a link to the homepage.
	$breadcrumb .= '<a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'textdomain' ) . '</a>';

	// Check if the current page is a single post.
	if ( is_single() ) {
		// Get the categories associated with the post.
		$categories = get_the_terms( get_the_ID(), 'fno_product_listing_category' );

		// If there are categories and no errors, build the category part of the breadcrumb.
		if ( $categories && ! is_wp_error( $categories ) ) {
			foreach ( $categories as $category ) {
				$category_url = home_url( '/' . $category->slug );
				$breadcrumb  .= ' <i class="fa-solid fa-chevron-right"></i> <a href="' . esc_url( $category_url ) . '">' . esc_html( $category->name ) . '</a>';
			}
		}

		// Add the post title at the end of the breadcrumb.
		$breadcrumb .= ' <i class="fa-solid fa-chevron-right"></i> <span>' . esc_html( get_the_title() ) . '</span>';
	}

	// Check if the current page is a static page, search results page, or 404 error page.
	if ( is_page() || is_search() || is_404() ) {
		global $post;

		// Check if the page has a parent.
		if ( $post->post_parent ) {
			// Add a link to the parent page.
			$breadcrumb .= ' > <a href="' . esc_url( get_permalink( $post->post_parent ) ) . '">' . esc_html( get_the_title( $post->post_parent ) ) . '</a>';
		}

		// Add the current page title.
		$breadcrumb .= ' <i class="fa-solid fa-chevron-right"></i> <span>' . esc_html( get_the_title() ) . '</span>';
	}

	// Return the generated breadcrumb trail.
	return $breadcrumb;
}
