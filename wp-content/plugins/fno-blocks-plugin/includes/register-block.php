<?php

/**
 * Register blocks
 *
 * @package FNO_Blocks
 */

/**
 * Register blocks
 */
function fno_blocks_register_blocks() {
	$all_blocks = array(
		array(
			'name'    => 'home-page-banner',
			'options' => array(),
		),
		array(
			'name'    => 'customer-story-slider',
			'options' => array(
				'render_callback' => 'fno_block_customer_story_slider_render_callback',
			),
		),
		array(
			'name'    => 'application-slider-block',
			'options' => array(),
		),
		array(
			'name'    => 'contact-us-block',
			'options' => array(),
		),
		array(
			'name'    => 'product-listing-block',
			'options' => array(
				'render_callback' => 'fno_block_product_listing_render_callback',
			),
		),
		array(
			'name'    => 'upcoming-events-block',
			'options' => array(
				'render_callback' => 'fno_upcoming_events_render_callback',
			),
		),
		array(
			'name'    => 'resource-center-block',
			'options' => array(
				'render_callback' => 'fno_resource_center_render_callback',
			),
		),
	);

	foreach ( $all_blocks as $block ) {
		register_block_type(
			FNO_BLOCK_PLUGIN_DIR . 'assets/build/blocks/' . $block['name'] . '/block.json',
			isset( $block['options'] ) ? $block['options'] : array()
		);
	}
}
add_action( 'init', 'fno_blocks_register_blocks' );
