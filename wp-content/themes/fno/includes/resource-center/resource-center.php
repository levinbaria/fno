<?php

function fno_theme_register_resource_center() {

	$labels = array(
		'name'               => _x( 'Resource Center', 'fno-resource-center' ),
		'singular_name'      => _x( 'Resource Center', 'fno-resource-center' ),
		'menu_name'          => esc_html__( 'Resource Center', 'fno-resource-center' ),
		'all_items'          => esc_html__( 'All Resource Center', 'fno-resource-center' ),
		'view_item'          => esc_html__( 'View Resource Center', 'fno-resource-center' ),
		'add_item'           => esc_html__( 'Add New', 'fno-resource-center' ),
		'add_new_item'       => esc_html__( 'Add Resource Center', 'fno-resource-center' ),
		'edit_item'          => esc_html__( 'Edit Resource Center', 'fno-resource-center' ),
		'update_item'        => esc_html__( 'Update Resource Center', 'fno-resource-center' ),
		'search_items'       => esc_html__( 'Search Resource Center', 'fno-resource-center' ),
		'not_found'          => esc_html__( 'Not Found', 'fno-resource-center' ),
		'not_found_in_trash' => esc_html__( 'Not found in Trash', 'fno-resource-center' ),
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
		'rest_base'           => 'fno_resource_center',
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'author',
			'thumbnail',
			'comments',
			'excerpt',
		),
		'menu_icon'           => 'dashicons-admin-links',
	);

	// Registered CPT for the Resource Center.
	register_post_type(
		'fno-resource-center',
		$args
	);

	// Registered Resource type taxonomy for the cpt Resource Center.
	$fno_resource_center_type = array(
		'name'              => esc_html__( 'Resource Type', 'fno-resource-center' ),
		'singular_name'     => esc_html__( 'Resource Type', 'fno-resource-center' ),
		'search_items'      => esc_html__( 'Search Resource Type', 'fno-resource-center' ),
		'all_items'         => esc_html__( 'All Resource Type', 'fno-resource-center' ),
		'parent_item'       => esc_html__( 'Parent Type', 'fno-resource-center' ),
		'parent_item_colon' => esc_html__( 'Parent Type:', 'fno-resource-center' ),
		'edit_item'         => esc_html__( 'Edit Type', 'fno-resource-center' ),
		'update_item'       => esc_html__( 'Update Type', 'fno-resource-center' ),
		'add_new_item'      => esc_html__( 'Add New Resource Type', 'fno-resource-center' ),
		'new_item_name'     => esc_html__( 'New Resource Type Name', 'fno-resource-center' ),
		'menu_name'         => esc_html__( 'Resource Type', 'fno-resource-center' ),
	);

	$args_resource_center_type = array(
		'labels'             => $fno_resource_center_type,
		'rewrite'            => array( 'slug' => 'resource-type' ),
		'hierarchical'       => true,
		'show_ui'            => true,
		'show_admin_column'  => true,
		'show_in_rest'       => true,
		'publicly_queryable' => false,
	);

	register_taxonomy( 'fno_resource_type', 'fno-resource-center', $args_resource_center_type );

	// Registered Product Categories taxonomy for the cpt Resource Center.
	$fno_resource_center_product_category = array(
		'name'              => esc_html__( 'Resource Product Category', 'fno-resource-center' ),
		'singular_name'     => esc_html__( 'Resource Product Category', 'fno-resource-center' ),
		'search_items'      => esc_html__( 'Search Resource Product Category', 'fno-resource-center' ),
		'all_items'         => esc_html__( 'All Resource Product Category', 'fno-resource-center' ),
		'parent_item'       => esc_html__( 'Parent Type', 'fno-resource-center' ),
		'parent_item_colon' => esc_html__( 'Parent Type:', 'fno-resource-center' ),
		'edit_item'         => esc_html__( 'Edit Type', 'fno-resource-center' ),
		'update_item'       => esc_html__( 'Update Type', 'fno-resource-center' ),
		'add_new_item'      => esc_html__( 'Add New Resource Product Category', 'fno-resource-center' ),
		'new_item_name'     => esc_html__( 'New Resource Product Category Name', 'fno-resource-center' ),
		'menu_name'         => esc_html__( 'Resource Product Category', 'fno-resource-center' ),
	);

	$args_resource_center_product_category = array(
		'labels'             => $fno_resource_center_product_category,
		'rewrite'            => array( 'slug' => 'resource-product-category' ),
		'hierarchical'       => true,
		'show_ui'            => true,
		'show_admin_column'  => true,
		'show_in_rest'       => true,
		'publicly_queryable' => false,
	);

	register_taxonomy( 'fno_resource_product_category', 'fno-resource-center', $args_resource_center_product_category );

	// Registered Product  taxonomy for the cpt Resource Center.
	$fno_resource_center_product = array(
		'name'              => esc_html__( 'Resource Products', 'fno-resource-center' ),
		'singular_name'     => esc_html__( 'Resource Products', 'fno-resource-center' ),
		'search_items'      => esc_html__( 'Search Resource Products', 'fno-resource-center' ),
		'all_items'         => esc_html__( 'All Resource Products', 'fno-resource-center' ),
		'parent_item'       => esc_html__( 'Parent Type', 'fno-resource-center' ),
		'parent_item_colon' => esc_html__( 'Parent Type:', 'fno-resource-center' ),
		'edit_item'         => esc_html__( 'Edit Type', 'fno-resource-center' ),
		'update_item'       => esc_html__( 'Update Type', 'fno-resource-center' ),
		'add_new_item'      => esc_html__( 'Add New Resource Products', 'fno-resource-center' ),
		'new_item_name'     => esc_html__( 'New Resource Products Name', 'fno-resource-center' ),
		'menu_name'         => esc_html__( 'Resource Products', 'fno-resource-center' ),
	);

	$args_resource_center_product = array(
		'labels'             => $fno_resource_center_product,
		'rewrite'            => array( 'slug' => 'resource-products' ),
		'hierarchical'       => true,
		'show_ui'            => true,
		'show_admin_column'  => true,
		'show_in_rest'       => true,
		'publicly_queryable' => false,
	);

	register_taxonomy( 'fno_resource_products', 'fno-resource-center', $args_resource_center_product );
}

add_action( 'init', 'fno_theme_register_resource_center', 0 );
