<?php

/**
 * Render callback for the Upcoming Events block.
 *
 * @param array $attributes The block attributes.
 * @return string The HTML output.
 */
function fno_upcoming_events_render_callback( $attributes ) {
	// Extract data from attributes.
	$eventBannerImage    = isset( $attributes['eventsBannerImage'] ) ? $attributes['eventsBannerImage'] : array();
	$eventBannerImageUrl = isset( $eventBannerImage['url'] ) ? esc_url( $eventBannerImage['url'] ) : '';
	$heading_styles      = isset( $attributes['headingStyles'] ) ? $attributes['headingStyles'] : array();
	$header_description  = isset( $attributes['description'] ) ? $attributes['description'] : '';
	$description_color   = isset( $attributes['descriptionColor'] ) ? $attributes['descriptionColor'] : '';

	$heading_style = '';
	if ( ! empty( $heading_styles ) ) {
		$heading_style .= 'style="';
		if ( ! empty( $heading_styles['color'] ) ) {
			$heading_style .= 'color: ' . esc_attr( $heading_styles['color'] ) . '; ';
		}
		if ( ! empty( $heading_styles['isCustomSize'] ) && ! empty( $heading_styles['fontSize'] ) ) {
			$heading_style .= 'font-size: ' . esc_attr( $heading_styles['fontSize'] ) . 'px; ';
		}
		$heading_style .= '"';
	}

	// Query for the Category List.
	$events_categories = get_terms(
		array(
			'taxonomy'   => 'fno-upcoming-events-categories',
			'type'       => 'fno-upcoming-events',
			'hide_empty' => false,
		)
	);

	/* query and displaying the post based on the seacrched values */
	$searched_items = '';
	if ( $_SERVER['REQUEST_METHOD'] == 'GET' && isset( $_GET['upcoming-events'] ) ) {
		$searched_items = strtolower( $_GET['upcoming-events'] );
	}

	ob_start();
	?>
	<main class="fno-upcoming-events__main-container">
		<div class="fno-upcoming-events__events-banner-image">
			<?php if ( $eventBannerImageUrl ) : ?>
				<img src="<?php echo $eventBannerImageUrl; ?>" alt="<?php esc_attr_e( 'Banner Image', 'fno-upcoming-events' ); ?>" />
			<?php endif; ?>
		</div>
		<div class="fno-theme__breadcrumb">
			<?php
			$breadcrumb = get_breadcrumb();
			if ( ! empty( $breadcrumb ) ) {
				echo $breadcrumb;
			}
			?>
		</div>
		<section class="fno-upcoming-events__events-hero-wrapper">
			<div class="fno-upcoming-events__upcoming-event-header">
				<div class="fno-upcoming-events__event-main-heading">
					<h2 <?php echo $heading_style; ?>><?php echo esc_html( get_the_title() ); ?></h2>
				</div>
				<div class="fno-upcoming-events__event-main-description">
					<p style="color: <?php echo esc_attr( $description_color ); ?>"><?php echo esc_html( $header_description ); ?></p>
				</div>
			</div>
			<div class="fno-upcoming-events__filter-events-wrapper">
				<div class="fno-upcoming-events__categories-list-wrapper">
					<ul class="fno-upcoming-evets__categories">
						<li class="active"><a href="#" class="event-category" data-category-id="0"><?php esc_html_e( 'All', 'fno-upcoming-events' ); ?></a></li>
						<?php foreach ( $events_categories as $category ) : ?>
							<li>
								<a href="#" class="event-category" data-category-id="<?php echo esc_attr( $category->term_id ); ?>">
									<?php echo esc_html( $category->name ); ?>
								</a>
							</li>
						<?php endforeach; ?>
					</ul>
					<form action="" method="get" class="fno-upcoming-events__event-search">
						<span class="fno-upcoming-events__search-icon"><i class="fa-solid fa-magnifying-glass search-icon dashicons dashicons-search"></i></span>
						<input type="text" name="upcoming-events" placeholder="Search..." value="<?php echo esc_attr( $searched_items ); ?>">
						<?php wp_nonce_field( 'fno_upcoming_events_nonce', 'fno_nonce' ); ?>
					</form>
				</div>
				<div class="fno-upcoming-events__events-card-wrapper">
					<!-- Display the post related to the category clicked via Ajax -->
				</div>
			</div>
		</section>
	</main>
	<?php
	return ob_get_clean();
}
?>
