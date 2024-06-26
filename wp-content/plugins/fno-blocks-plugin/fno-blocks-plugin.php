<?php

/**
 * Plugin Name: FNO Blocks
 * Description: Adds  Static and Dynamic Blocks to your theme.
 * Version: 1.0
 * Author: Levin Baria
 * Author Uri: https://training-levinb.md-staging.com/mynotes/
 */

defined( 'ABSPATH' ) || exit;

define( 'FNO_BLOCK', '1.0' );
define( 'FNO_BLOCK_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

/**
 * Render CB files for the blocks.
 */
$all_includes_files = glob( FNO_BLOCK_PLUGIN_DIR . 'includes/*.php' );
$all_includes_dirs  = glob( FNO_BLOCK_PLUGIN_DIR . 'includes/**/*.php' );
$all_includes       = array_merge( $all_includes_dirs, $all_includes_files );
foreach ( $all_includes as $file ) {
	require_once $file;
}

// Creating Custom Category for FNO blocks.
function fno_blocks_custom_category_block( $categories ) {
	// Adding a new Category.
	$categories[] = array(
		'slug'  => 'fno-blocks-custom-category',
		'title' => 'FNO Blocks',
	);

	return $categories;
}

add_filter( 'block_categories', 'fno_blocks_custom_category_block' );

function fno_theme_enqueue_slick_styles() {
	// Defined the plugin directory URL
	$plugin_dir_url = plugin_dir_url( __FILE__ );

	// Enqueue Slick slider CSS
	wp_enqueue_style(
		'slick-css',
		$plugin_dir_url . 'assets/css/slick-slider/slick.css',
		array(),
		'1.0.0'
	);

	// Enqueue additional Slick slider theme CSS if needed
	wp_enqueue_style(
		'slick-theme-css',
		$plugin_dir_url . 'assets/css/slick-slider/slick-theme.css',
		array( 'slick-css' ),
		'1.0.0'
	);

	// Enqueue Slick slider JS
	wp_enqueue_script(
		'slick-js',
		$plugin_dir_url . 'assets/js/slick-slider/slick.min.js',
		array( 'jquery' ),
		'1.0.0',
		false
	);

	// Enqueue custom Slick initialization script
	wp_enqueue_script(
		'custom-slick-init',
		$plugin_dir_url . 'assets/js/slick-slider/custom-slick-init.js',
		array( 'slick-js' ),
		'1.0.0',
		false
	);
}

// Enqueue styles and scripts in both Gutenberg Editor and front end
add_action( 'enqueue_block_assets', 'fno_theme_enqueue_slick_styles' );

// Enqueue styles and scripts specifically for the Gutenberg editor
add_action( 'enqueue_block_editor_assets', 'fno_theme_enqueue_slick_styles' );

function fno_upcoming_events_enqueue_scripts() {

	// Defined the plugin directory URL
	$plugin_dir_url = plugin_dir_url( __FILE__ );

	wp_enqueue_script(
		'fno-upcoming-events-ajax',
		$plugin_dir_url . 'assets/js/ajax-handler.js',
		array( 'jquery' ),
		'1.0.0',
		false
	);

	wp_localize_script(
		'fno-upcoming-events-ajax',
		'fnoUpcomingEventsAjax',
		array(
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce'   => wp_create_nonce( 'fno_upcoming_events_nonce' ),
		)
	);

	wp_enqueue_script(
		'fno-resource-center-ajax',
		$plugin_dir_url . 'assets/js/ajax-resource.js',
		array( 'jquery' ),
		'1.0.0',
		false
	);

	wp_localize_script(
		'fno-resource-center-ajax',
		'fno_load_more_params',
		array(
			'ajax_url'       => admin_url( 'admin-ajax.php' ),
			'nonce'          => wp_create_nonce( 'fno_resource_center_nonce' ),
			'posts_per_page' => intval( 3 ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'fno_upcoming_events_enqueue_scripts' );

add_action( 'enqueue_block_assets', 'fno_upcoming_events_enqueue_scripts' );

// Enqueue styles and scripts specifically for the Gutenberg editor
add_action( 'enqueue_block_editor_assets', 'fno_upcoming_events_enqueue_scripts' );
