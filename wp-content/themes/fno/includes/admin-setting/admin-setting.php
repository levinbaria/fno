<?php

/**
 * Add menus to the WordPress admin.
 */
function fno_theme_add_admin_menu() {
    add_menu_page(
        esc_html__( 'FNO Setting', 'fno-theme-admin-menu' ),
        esc_html__( 'FNO Setting', 'fno-theme-admin-menu' ),
        'manage_options',
        'fno-theme-admin-menu',
        'fno_theme_custom_settings_cb',
        'dashicons-admin-generic',
        25
    );
}
add_action( 'admin_menu', 'fno_theme_add_admin_menu' );

function fno_theme_register_settings(){

	// Register Settings.
	register_setting('fno_theme_settings_group', 'fno_theme_logo');
	register_setting('fno_theme_settings_group', 'fno_theme_short_description');
	register_setting('fno_theme_settings_group', 'fno_theme_social_links', 'fno_theme_sanitize_social_links');
	 register_setting('fno_theme_settings_group', 'fno_theme_copyright_text');

	// Add a Settings section.
	add_settings_section(
		'fno_theme_settings_section',
		__('FNO Theme Settings', 'fno-theme-admin-menu'),
		'__return_false',
		'fno_theme_settings_page'
	);

	// Add settings fields.
	add_settings_field(
		'fno_theme_logo',
        '',
        'fno_theme_logo_cb',
        'fno_theme_settings_page',
        'fno_theme_settings_section'
	);

	add_settings_field(
        'fno_theme_short_description',
        '',
        'fno_theme_short_description_cb',
        'fno_theme_settings_page',
        'fno_theme_settings_section'
    );

    add_settings_field(
        'fno_theme_social_links',
        __( 'Social Media Links', 'fno-theme-admin-menu' ),
        'fno_theme_social_links_cb',
        'fno_theme_settings_page',
        'fno_theme_settings_section'
    );

	add_settings_field(
        'fno_theme_copyright_text',
        '',
        'fno_theme_copyright_text_cb',
        'fno_theme_settings_page',
        'fno_theme_settings_section'
    );
}

add_action('admin_init', 'fno_theme_register_settings');

/**
 * Sanitize social media links.
 *
 * @param mixed $value The social media links value.
 * @return mixed
 */
function fno_theme_sanitize_social_links($value){
	// Sanitize each social media link
    foreach ( $value as $key => $link ) {
        $value[ $key ] = esc_url_raw( $link );
    }
    return $value;
}

/**
 * Logo field callback.
 */
function fno_theme_logo_cb(){
	$logo = get_option( 'fno_theme_logo' );
    ?>
    <tr valign="top">
    <th scope="row"><?php esc_html_e('Logo', 'fno-theme-admin-menu'); ?></th>
    <td>
        <input type="hidden" id="fno_theme_logo" name="fno_theme_logo" value="<?php echo esc_attr($logo); ?>" />
        <div id="logo_preview">
            <?php if ($logo) : ?>
                <img src="<?php echo esc_url($logo); ?>" style="max-width:100%; height:200px;">
            <?php endif; ?>
        </div>
        <button type="button" class="button" id="upload_logo_button"><span class="dashicons dashicons-upload"></span></button>
        <button type="button" class="button" id="remove_logo_button">
    		<span class="dashicons dashicons-no"></span>
		</button>
    </td>
</tr>
	<?php
}

/**
 * Short Description field callback.
 */
function fno_theme_short_description_cb() {
    $value = get_option( 'fno_theme_short_description' );
    ?>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Short Description', 'fno-theme-admin-menu' ); ?></th>
        <td><textarea name="fno_theme_short_description" rows="5" cols="50"><?php echo esc_textarea( $value ); ?></textarea></td>
    </tr>
    <?php
}

/**
 * Social Media Links fields callback.
 */
function fno_theme_social_links_cb() {
    $social_links = get_option( 'fno_theme_social_links', array() );
    $default_social_links = array(
        'facebook'  => '',
		'instagram' => '',
        'youtube'   => '',
        'twitter'   => '',
        'linkedin'  => '',
    );
    $social_links = wp_parse_args( $social_links, $default_social_links );
    ?>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Facebook', 'fno-theme-admin-menu' ); ?></th>
        <td><input type="url" name="fno_theme_social_links[facebook]" value="<?php echo esc_url( $social_links['facebook'] ); ?>" /></td>
    </tr>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Instagram', 'fno-theme-admin-menu' ); ?></th>
        <td><input type="url" name="fno_theme_social_links[instagram]" value="<?php echo esc_url( $social_links['instagram'] ); ?>" /></td>
    </tr>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'YouTube', 'fno-theme-admin-menu' ); ?></th>
        <td><input type="url" name="fno_theme_social_links[youtube]" value="<?php echo esc_url( $social_links['youtube'] ); ?>" /></td>
    </tr>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Twitter', 'fno-theme-admin-menu' ); ?></th>
        <td><input type="url" name="fno_theme_social_links[twitter]" value="<?php echo esc_url( $social_links['twitter'] ); ?>" /></td>
    </tr>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'LinkedIn', 'fno-theme-admin-menu' ); ?></th>
        <td><input type="url" name="fno_theme_social_links[linkedin]" value="<?php echo esc_url( $social_links['linkedin'] ); ?>" /></td>
    </tr>
    <?php
}

/**
 * Copyright text fields callback.
 */
function fno_theme_copyright_text_cb() {
    $copyright_text = get_option( 'fno_theme_copyright_text' );
    ?>
    <tr valign="top">
        <th scope="row"><?php esc_html_e( 'Copyright Text', 'fno-theme-admin-menu' ); ?></th>
        <td><input type="text" name="fno_theme_copyright_text" value="<?php echo esc_attr( $copyright_text ); ?>" /></td>
    </tr>
    <?php
}


/**
 * Callback function to render the menu page.
 */
function fno_theme_custom_settings_cb() {
    if ( ! current_user_can( 'manage_options' ) ) {
        wp_die( 'You do not have sufficient permissions to access this page' );
    }
    ?>
    <div class="wrapper">
        <h1><?php esc_html_e( 'FNO Admin Settings', 'fno-theme-admin-menu' ); ?></h1>

        <form method="post" action="options.php">
            <table class="form-table">
                <?php
                // Output security fields for the registered settings
                settings_fields( 'fno_theme_settings_group' );

                // Output settings sections and their fields
                do_settings_fields( 'fno_theme_settings_page', 'fno_theme_settings_section' );
                ?>
            </table>
            <?php
            // Output save settings button
            submit_button( __( 'Save Settings', 'fno-theme-admin-menu' ) );
            ?>
        </form>
    </div>
    <?php
}
?>