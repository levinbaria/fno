<?php
/**
 * Registers the custom post type 'Upcoming Events' and its taxonomy.
 */
function fno_theme__register_upcoming_events()
{

	$labels = array(
		'name'               => _x('Upcoming Events', 'fno-upcoming-events'),
		'singular_name'      => _x('Upcoming Events', 'fno-upcoming-events'),
		'menu_name'          => esc_html__('Upcoming Events', 'fno-upcoming-events'),
		'all_items'          => esc_html__('All Upcoming Events', 'fno-upcoming-events'),
		'view_item'          => esc_html__('View Upcoming Events', 'fno-upcoming-events'),
		'add_item'           => esc_html__('Add New', 'fno-upcoming-events'),
		'add_new_item'       => esc_html__('Add Upcoming Events', 'fno-upcoming-events'),
		'edit_item'          => esc_html__('Edit Upcoming Events', 'fno-upcoming-events'),
		'update_item'        => esc_html__('Update Upcoming Events', 'fno-upcoming-events'),
		'search_items'       => esc_html__('Search Upcoming Events', 'fno-upcoming-events'),
		'not_found'          => esc_html__('Not Found', 'fno-upcoming-events'),
		'not_found_in_trash' => esc_html__('Not found in Trash', 'fno-upcoming-events'),
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
		'rest_base'           => 'fno_upcoming_events',
		'capability_type'     => 'post',
		'supports'            => array(
			'title',
			'author',
			'comments',
		),
		'menu_icon' => 'dashicons-megaphone'
	);

	// Registere Custom post type for Upcoming Events.
	register_post_type(
		'fno-upcoming-events',
		$args
	);


	// Registered category taxonomy for the cpt Upcoming Events.
	$fno_upcoming_events_category = array(
		'name' => __('Event Places', 'fno-upcoming-events'),
		'singular_name' => __('Event Places', 'fno-upcoming-events'),
		'search_items'      => __('Search Event Places', 'fno-upcoming-events'),
		'all_items'         => __('All Event Places', 'fno-upcoming-events'),
		'parent_item'       => __('Parent Type', 'fno-upcoming-events'),
		'parent_item_colon' => __('Parent Type:', 'fno-upcoming-events'),
		'edit_item'         => __('Edit Type', 'fno-upcoming-events'),
		'update_item'       => __('Update Type', 'fno-upcoming-events'),
		'add_new_item'      => __('Add New Event Places', 'fno-upcoming-events'),
		'new_item_name'     => __('New Event Places Name', 'fno-upcoming-events'),
		'menu_name'         => __('Event Places', 'fno-upcoming-events'),
	);

	$args_upcoming_events_category = array(
		'labels'            => $fno_upcoming_events_category,
		'rewrite'           => array('slug' => 'events-category'),
		'hierarchical'      => true,
		'show_ui'           => true,
		'show_admin_column' => true,
		'show_in_rest'      => true,
		'publicly_queryable' => false,
	);

	register_taxonomy('fno-upcoming-events-categories', 'fno-upcoming-events', $args_upcoming_events_category);
}

// Initialize the hook for setting cpt and CPTs Taxonomy for the Upcoming Events.
add_action('init', 'fno_theme__register_upcoming_events', 0);
