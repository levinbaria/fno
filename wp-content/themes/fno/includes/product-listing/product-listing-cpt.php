<?php

function fno_theme__register_product_listing() {
	$labels = array(
		'name'               => _x( 'Product Listing', 'fno-product-listing' ),
		'singular_name'      => _x( 'Product Listing', 'fno-product-listing' ),
		'menu_name'          => esc_html__( 'Product Listing', 'fno-product-listing' ),
		'all_items'          => esc_html__( 'All Product Listing', 'fno-product-listing' ),
		'view_item'          => esc_html__( 'View Product Listing', 'fno-product-listing' ),
		'add_item'           => esc_html__( 'Add New', 'fno-product-listing' ),
		'add_new_item'       => esc_html__( 'Add Product Listing', 'fno-product-listing' ),
		'edit_item'          => esc_html__( 'Edit Product Listing', 'fno-product-listing' ),
		'update_item'        => esc_html__( 'Update Product Listing', 'fno-product-listing' ),
		'search_items'       => esc_html__( 'Search Product Listing', 'fno-product-listing' ),
		'not_found'          => esc_html__( 'Not Found', 'fno-product-listing' ),
		'not_found_in_trash' => esc_html__( 'Not found in Trash', 'fno-product-listing' ),
	);

	$args = array(
		'labels'              => $labels,
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'show_in_rest'        => true,
		'rest_base'           => 'fno_product_list',
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'author',
			'thumbnail',
			'comments',
		),
		'menu_icon'           => 'dashicons-products',
	);

	// Registered Custom post type for Product Listing.
	register_post_type(
		'fno-product-listing',
		$args
	);

	// Registered category taxonomy for the cpt Product Listing.
	$fno_product_listing_category = array(
		'name'              => __( 'Product Categories', 'fno-product-listing' ),
		'singular_name'     => __( 'Product Categories', 'fno-product-listing' ),
		'search_items'      => __( 'Search Product Categories', 'fno-product-listing' ),
		'all_items'         => __( 'All Product Categories', 'fno-product-listing' ),
		'parent_item'       => __( 'Parent Type', 'fno-product-listing' ),
		'parent_item_colon' => __( 'Parent Type:', 'fno-product-listing' ),
		'edit_item'         => __( 'Edit Type', 'fno-product-listing' ),
		'update_item'       => __( 'Update Type', 'fno-product-listing' ),
		'add_new_item'      => __( 'Add New Product Categories', 'fno-product-listing' ),
		'new_item_name'     => __( 'New Product Categories Name', 'fno-product-listing' ),
		'menu_name'         => __( 'Product Categories', 'fno-product-listing' ),
	);

	$args_product_listing_category = array(
		'labels'             => $fno_product_listing_category,
		'rewrite'            => array( 'slug' => 'product-category' ),
		'hierarchical'       => true,
		'show_ui'            => true,
		'show_admin_column'  => true,
		'show_in_rest'       => true,
		'publicly_queryable' => false,
	);

	register_taxonomy( 'fno_product_listing_category', 'fno-product-listing', $args_product_listing_category );
}

// Initialize the hook for setting cpt and CPTs Taxonomy for the product Listing.
add_action( 'init', 'fno_theme__register_product_listing', 0 );
