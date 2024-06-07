<?php

function fno_theme_register_custom_story()
{
	$labels = array(
		'name'               => _x('Customer story', 'fno-customer-story'),
		'singular_name'      => _x('Customer story', 'fno-customer-story'),
		'menu_name'          => esc_html__('Customer story', 'fno-customer-story'),
		'all_items'          => esc_html__('All Customer story', 'fno-customer-story'),
		'view_item'          => esc_html__('View Customer story', 'fno-customer-story'),
		'add_item'           => esc_html__('Add New', 'fno-customer-story'),
		'add_new_item'       => esc_html__('Add Customer story', 'fno-customer-story'),
		'edit_item'          => esc_html__('Edit Customer story', 'fno-customer-story'),
		'update_item'        => esc_html__('Update Customer story', 'fno-customer-story'),
		'search_items'       => esc_html__('Search Customer story', 'fno-customer-story'),
		'not_found'          => esc_html__('Not Found', 'fno-customer-story'),
		'not_found_in_trash' => esc_html__('Not found in Trash', 'fno-customer-story'),
	);

	$args = array(
		'labels'              => $labels,
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'has_archive'         => true,
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'show_in_rest'        => true,
		'rest_base'           => 'fno_customer_story',
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'author',
			'thumbnail',
			'comments',
		),
		'menu_icon' => 'dashicons-testimonial'
	);
	// Registere Custom post type for Custom Stories.
	register_post_type(
		'fno-customer-stories',
		$args
	);

	// Registered category taxonomy for the cpt Customer Story.
	$fno_customer_story_category = array(
		'name' => __('Story Category', 'fno-customer-story'),
		'singular_name' => __('Story Category', 'fno-customer-story'),
		'search_items'      => __('Search Story Category', 'fno-customer-story'),
		'all_items'         => __('All Story Category', 'fno-customer-story'),
		'parent_item'       => __('Parent Type', 'fno-customer-story'),
		'parent_item_colon' => __('Parent Type:', 'fno-customer-story'),
		'edit_item'         => __('Edit Type', 'fno-customer-story'),
		'update_item'       => __('Update Type', 'fno-customer-story'),
		'add_new_item'      => __('Add New Story Category', 'fno-customer-story'),
		'new_item_name'     => __('New Story Category Name', 'fno-customer-story'),
		'menu_name'         => __('Story Category', 'fno-customer-story'),
	);

	$args_customer_story_category = array(
		'labels'            => $fno_customer_story_category,
		'rewrite'           => array('slug' => 'story-category'),
		'hierarchical'      => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'publicly_queryable'  => false,
	);

	register_taxonomy('fno_customer_story_category', 'fno-customer-stories', $args_customer_story_category);
}

// Initialize the hook for setting cpt and CPTs Taxonomy.
add_action('init', 'fno_theme_register_custom_story', 0);