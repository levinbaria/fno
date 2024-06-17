<?php
/**
 * Footer template.
 *
 * @package FNO_Theme
 */
defined( 'ABSPATH' ) || exit;
// Enqueue necessary scripts and styles.
wp_footer();

// Retrieve theme options.
$footer_logo    = esc_url( get_option( 'fno_theme_logo' ) );
$short_desc     = esc_html( get_option( 'fno_theme_short_description' ) );
$social_links   = get_option( 'fno_theme_social_links', array() );
$copyright_text = esc_html( get_option( 'fno_theme_copyright_text' ) );
?>
<footer class="fno-theme__footer">
	<div class="fno-theme__footer-wrapper">
		<div class="fno-theme__footer-hero">
			<div class="fno-theme__footer-menu-wrapper">
				<div class="fno-theme__fno-short-details-wrapper">
					<div class="fno-theme__fno-intro">
						<a href="<?php echo site_url(); ?>">
							<?php if ( ! empty( $footer_logo ) ) : ?>
								<img src="<?php echo $footer_logo; ?>" alt="fno-logo" width="100px" height="32px" />
							<?php endif; ?>
						</a>
						<p class="fno-theme__fno-short-desc">
							<?php
							if ( ! empty( $short_desc ) ) {
								echo $short_desc;
							}
							?>
						</p>
					</div>
				</div>
				<nav class="fno-theme__footer-nav-bar-wrapper" id="footer-navbar">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer_menu',
							'menu_class'     => 'fno-theme__footer-nav-bar-items',
						)
					);
					?>
				</nav>
				<div class="fno-theme__footer-banner">
						<img class="footer-banner-img" src="<?php echo get_template_directory_uri() . '/assets/images/footer-banner.png'; ?>" alt="footer-banner" />
				</div>
			</div>
		</div>
		<div class="fno-theme__footer-extra-details">
			<div class="wrapper">
				<div class="fno-theme__copyright-wrapper">
				<?php if ( ! empty( $copyright_text ) ) : ?>
					<p><?php echo esc_html( $copyright_text ); ?></p>
				<?php endif; ?>
				</div>
				<div class="fno-theme__follow-us-wrapper">
					<p><?php esc_html_e( 'Follow Us', 'fno-theme-admin-menu' ); ?> <span>---</span></p>
					<ul class="fno-theme__social-icons-wrapper">
					<?php foreach ( $social_links as $social => $link ) : ?>
							<?php if ( ! empty( $link ) ) : ?>
								<li>
									<a href="<?php echo esc_url( $link ); ?>">
										<i class="fa-brands fa-<?php echo esc_attr( $social ); ?>"></i>
									</a>
								</li>
							<?php endif; ?>
						<?php endforeach; ?>
					</ul>
				</div>
			</div>
		</div>
	</div>

</footer>
