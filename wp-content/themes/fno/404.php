<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header(); ?>

<div class="fno-theme__content-area">
	<main class="fno-theme__site-main">
		<section class="fno-theme__error-404 not-found">
			<header class="fno-theme__page-header">
				<h1 class="fno-theme__page-title"><?php _e( 'Oops! That page can’t be found.', 'fno-theme-404-page' ); ?></h1>
			</header>

			<div class="fno-theme__page-content">
				<p><?php _e( 'It looks like nothing was found at this location. You can go back to the homepage by clicking the link below.', 'fno-theme-404-page' ); ?></p>
				<p><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="fno-theme__home-link"><?php _e( 'Return to Homepage', 'fno-theme-404-page' ); ?></a></p>
			</div>
		</section>
	</main>
</div>

<?php get_footer(); ?>
