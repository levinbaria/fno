<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php wp_title( '|', true, 'right' ); ?><?php bloginfo( 'name' ); ?></title>
	<?php
	wp_head();
	// Get the theme logo URL from the theme options
	$header_logo = esc_url( get_option( 'fno_theme_logo' ) );
	?>
</head>
<body <?php body_class(); ?>>
	<header class="fno-theme__header">
		<div class="fno-theme__header-wrapper">
			<div class="fno-theme__logo-section">
				<div class="fno-theme__logo">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<?php if ( ! empty( $header_logo ) ) : ?>
							<img src="<?php echo $header_logo; ?>" alt="<?php bloginfo( 'name' ); ?> logo" width="100" height="32">
						<?php else : ?>
							<?php bloginfo( 'name' ); // Fallback to site name if logo is not set ?>
						<?php endif; ?>
					</a>
				</div><!-- .fno-theme__logo -->

				<div class="fno-theme__logo-section-addon-functionality">
					<!-- Search Form -->
					<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
						<span><i class="fa-solid fa-magnifying-glass"></i></span>
						<input type="text" name="s" placeholder="<?php esc_attr_e( 'Search...', 'your-theme-textdomain' ); ?>">
					</form>

					<!-- Header Icons -->
					<div class="fno-theme__header-icons">
						<a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
						<a href="#"><i class="fa-regular fa-user"></i></a>
						<a href="#"><i class="fa-solid fa-globe"></i></a>
						<i class="fa-solid fa-xmark"></i>
					</div><!-- .fno-theme__header-icons -->

					<!-- Menu Icon for Mobile View -->
					<img class="fno-theme__menu-icon" src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/menu-icon.png' ); ?>" alt="<?php esc_attr_e( 'Menu Icon', 'your-theme-textdomain' ); ?>">
				</div><!-- .fno-theme__logo-section-addon-functionality -->
			</div><!-- .fno-theme__logo-section -->

			<!-- Navigation Bar -->
			<nav class="fno-theme__nav-bar-wrapper" id="navbar">
				<?php
				// Display the primary menu
				wp_nav_menu(
					array(
						'theme_location' => 'primary_menu',
						'menu_class'     => 'fno-theme__nav-bar-items',
						'container'      => false,
					)
				);
				?>
				<div class="fno-theme__contact-wrapper">
					<button class="contact-btn btn"><?php esc_html_e( 'Contact', 'your-theme-textdomain' ); ?></button>
				</div><!-- .fno-theme__contact-wrapper -->
			</nav><!-- .fno-theme__nav-bar-wrapper -->
		</div><!-- .fno-theme__header-wrapper -->
	</header><!-- .fno-theme__header -->

	<?php
	// WordPress footer hook
	wp_footer();
	?>
</body>
</html>
