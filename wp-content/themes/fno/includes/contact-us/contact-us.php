<?php
/**
 * Registers the REST API endpoint for submitting contact form data.
 */
function fno_register_contact_form_endpoint() {
	 // Register REST route for submitting contact form
	register_rest_route(
		'contact-form/v1',
		'/submit',
		array(
			'methods'             => 'POST',
			'callback'            => 'fno_handle_contact_form_submission',
			'permission_callback' => '__return_true',
		)
	);
}

/**
 * Handles the submission of the contact form.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response|WP_Error The response or error object.
 */
function fno_handle_contact_form_submission( WP_REST_Request $request ) {
	// Retrieve form data from JSON request body.
	$params = $request->get_json_params();

	$first_name         = isset( $params['firstName'] ) ? sanitize_text_field( $params['firstName'] ) : '';
	$last_name          = isset( $params['lastName'] ) ? sanitize_text_field( $params['lastName'] ) : '';
	$contact_email      = isset( $params['contactEmail'] ) ? sanitize_email( $params['contactEmail'] ) : '';
	$contact_work_phone = isset( $params['contactWorkPhone'] ) ? sanitize_text_field( $params['contactWorkPhone'] ) : '';
	$contact_company    = isset( $params['contactCompany'] ) ? sanitize_text_field( $params['contactCompany'] ) : '';
	$product_area       = isset( $params['productArea'] ) ? sanitize_text_field( $params['productArea'] ) : '';
	$country            = isset( $params['country'] ) ? sanitize_text_field( $params['country'] ) : '';
	$comment            = isset( $params['comment'] ) ? sanitize_textarea_field( $params['comment'] ) : '';

	// Validate required fields
	$errors = array();

	// Validate first name
	if ( empty( $first_name ) || strlen( $first_name ) < 3 || ! preg_match( '/^[a-zA-Z]+$/', $first_name ) ) {
		$errors['firstName'] = 'First name is required and must be at least 3 characters long, and contain only letters.';
	}

	// Validate last name
	if ( empty( $last_name ) || strlen( $last_name ) < 3 || ! preg_match( '/^[a-zA-Z]+$/', $last_name ) ) {
		$errors['lastName'] = 'Last name is required and must be at least 3 characters long, and contain only letters.';
	}

	// Validate email
	if ( empty( $contact_email ) || ! is_email( $contact_email ) ) {
		$errors['contactEmail'] = 'A valid email address is required.';
	}

	// Validate work phone
	if ( empty( $contact_work_phone ) || ! preg_match( '/^[0-9]{10}$/', $contact_work_phone ) ) {
		$errors['contactWorkPhone'] = 'Work phone is required and must be a 10-digit number.';
	}

	// Validate company
	if ( empty( $contact_company ) || strlen( $contact_company ) < 3 || ! preg_match( '/^[a-zA-Z]+$/', $contact_company ) ) {
		$errors['contactCompany'] = 'Company is required and must be at least 3 characters long, and contain only letters.';
	}

	// Validate product area
	if ( empty( $product_area ) ) {
		$errors['productArea'] = 'Product area is required.';
	}

	// Validate country
	if ( empty( $country ) ) {
		$errors['country'] = 'Country is required.';
	}

	// Validate comment
	if ( empty( $comment ) ) {
		$errors['comment'] = 'Comment is required.';
	}

	// If there are errors, return them.
	if ( ! empty( $errors ) ) {
		return new WP_Error(
			'invalid_form',
			'Invalid form submission',
			array(
				'status' => 400,
				'errors' => $errors,
			)
		);
	}

	global $wpdb;
	$table_name = $wpdb->prefix . 'contact_form_submissions';

	$result = $wpdb->insert(
		$table_name,
		array(
			'first_name'         => $first_name,
			'last_name'          => $last_name,
			'contact_email'      => $contact_email,
			'contact_work_phone' => $contact_work_phone,
			'contact_company'    => $contact_company,
			'product_area'       => $product_area,
			'country'            => $country,
			'comment'            => $comment,
			'submitted_at'       => current_time( 'mysql' ),
		)
	);

	if ( $result === false ) {
		return new WP_REST_Response(
			array(
				'success' => false,
				'message' => 'Database error occurred',
			),
			500
		);
	}

	return new WP_REST_Response(
		array(
			'success' => true,
			'message' => 'Form submitted successfully',
		),
		200
	);
}

add_action( 'rest_api_init', 'fno_register_contact_form_endpoint' );

/**
 * Creates the custom database table for storing contact form submissions.
 */
function fno_create_contact_form_table() {

	global $wpdb;
	// Define table name with WordPress prefix
	$table_name      = $wpdb->prefix . 'contact_form_submissions';
	$charset_collate = $wpdb->get_charset_collate();

	// SQL query for creating the table
	$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		first_name tinytext NOT NULL,
		last_name tinytext NOT NULL,
		contact_email text NOT NULL,
		contact_work_phone text NOT NULL,
		contact_company text NOT NULL,
		product_area text NOT NULL,
		country text NOT NULL,
		comment text NOT NULL,
		submitted_at datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";

	require_once ABSPATH . 'wp-admin/includes/upgrade.php';
	dbDelta( $sql );
}

/**
 * Initializes theme setup tasks.
 */
function fno_theme_setup() {
	// Run the table creation function
	fno_create_contact_form_table();
}
// Hook the theme setup function to run after theme setup
add_action( 'after_setup_theme', 'fno_theme_setup' );
