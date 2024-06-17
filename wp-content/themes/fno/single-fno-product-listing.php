<?php

/**
 * The template for displaying a single Product details post.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package FNO
 */
get_header(); ?>
<!-- Main Container for the Single Product Page -->
<main class="fno-product-details__main-container">
	<!-- Breadcrumb for the single Page -->
	<div class="fno-product-details__breadcrumb">
		<?php
		$breadcrumb = get_breadcrumb();
		if ( ! empty( $breadcrumb ) ) {
			echo $breadcrumb;
		}
		?>
	</div>
	<!-- Section for the Product Details -->
	<section class="fno-product-details__hero-product-container">
		<div class="fno-product-details__product-details-wrapper">
			<?php if ( have_posts() ) : ?>
				<?php
				while ( have_posts() ) :
					the_post();
					$post_id                       = get_the_ID();
					$product_title                 = get_the_title();
					$product_image                 = get_field( 'product_image', $post_id );
					$print_width                   = get_field( 'print_width', $post_id );
					$product_colors                = get_field( 'product_colors', $post_id );
					$product_resolution            = get_field( 'product_resolution', $post_id );
					$product_productivity          = get_field( 'product_productivity', $post_id );
					$product_brochure              = get_field( 'product_brochure', $post_id );
					$product_highlight_title       = get_field( 'product_highlight_title', $post_id );
					$product_highlight_description = get_field( 'product_highlight_description', $post_id );
					?>
					<!-- Product Heading -->
					<div class="fno-product-details__product-title">
						<h1><?php the_title(); ?></h1>
					</div>
					<!-- Product Image -->
					<div class="fno-product-details__product-image">
						<?php if ( $product_image ) : ?>
							<img src="<?php echo esc_url( $product_image ); ?>" alt="product-image" />
						<?php endif; ?>
					</div>
					<!-- Product Meta Info -->
					<div class="fno-product-details__product-info">
						<div class="fno-product-details__product-data">
							<?php if ( $print_width ) : ?>
								<span class="data"><?php echo esc_html( $print_width ); ?> m</span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e( 'Maximum Fabric Width', 'fno-product-details' ); ?></span>
						</div>
						<div class="fno-product-details__product-data">
							<?php if ( $product_productivity ) : ?>
								<span class="data"><?php echo esc_html( $product_productivity ); ?></span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e( 'Productivity', 'fno-product-details' ); ?></span>
						</div>
						<div class="fno-product-details__product-data">
							<?php if ( $product_resolution ) : ?>
								<span class="data"><?php echo esc_html( $product_resolution ); ?> dpi</span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e( 'Resolution', 'fno-product-details' ); ?></span>
						</div>
						<div class="fno-product-details__product-data">
							<?php if ( $product_colors ) : ?>
								<span class="data"><?php echo esc_html( $product_colors ); ?></span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e( 'Colors', 'fno-product-details' ); ?></span>
						</div>
					</div>
					<!-- Product Highlight -->
					<div class="fno-product-details__product-highlight-wrapper">
						<?php if ( $product_highlight_title ) : ?>
							<h2><?php echo esc_html( $product_highlight_title ); ?></h2>
						<?php endif; ?>
						<?php if ( $product_highlight_description ) : ?>
							<p><?php echo esc_html( $product_highlight_description ); ?></p>
						<?php endif; ?>
						<div class="fno-product-details__product-highlight-goto-details">
							<a href="#" class="fno-product-details__product-book-demo">Book a Demo</a>
							<a href="<?php echo $product_brochure; ?>" target="_blank" class="fno-product-details__product-brochure">
								<?php esc_html_e( 'Download Brochure', 'fno-product-details' ); ?>
								<svg width="16px" height="16px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
									<path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#1C274C" />
									<path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#1C274C" />
								</svg>
							</a>
						</div>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</section>
	<!-- Block for the Application Slider -->
	<?php
		$block_content = '<!-- wp:gb-final-exercise/application-slider-block {"applicationHeading":"Offer customer more high-value applications","sliderCards":[{"sliderCardImg":{"id":63,"url":"https://training-exercise-levinb.md-staging.com/wp-content/uploads/2024/06/Mask-Group-41420-1.png","alt":""},"sliderCardTitle":"Apparal and Accessories","sliderCardDescription":"Using FNO white ink, leading the industry in brightness and opacity, and multi-layer printing with the ability to print up to five layers that is a very adorable and a true eyes catching things to do with."},{"sliderCardImg":{"id":62,"url":"https://training-exercise-levinb.md-staging.com/wp-content/uploads/2024/06/Mask-Group-41421-1.png","alt":""},"sliderCardTitle":"Home Decor","sliderCardDescription":"Using FNO white ink, leading the industry in brightness and opacity, and multi-layer printing with the ability to print up to five layers in a very adorable and a true eyes catching things to do with."},{"sliderCardImg":{"id":64,"url":"https://training-exercise-levinb.md-staging.com/wp-content/uploads/2024/06/Mask-Group-41421.png","alt":""},"sliderCardTitle":"Decorative Walls","sliderCardDescription":"Using FNO white ink, leading the industry in brightness and opacity, and multi-layer printing with the ability to print up to five layers in a very adorable and a true eyes catching things to do with."}],"sliderMode":false} -->
						<div class="wp-block-gb-final-exercise-application-slider-block fno-application-slider" data-auto-play="true" data-pause-on-hover="true" data-slide-speed="300" data-show-arrows="true" data-show-dots="true" data-auto-play-speed="3000">
						<section class="fno-application-slider__main-container"><div class="fno-application-slider__application-wrapper">
						<div class="fno-application-slider__application-header"><h1 class="fno-application-slider__application-heading" style="color:#000000">Offer customer more high-value applications</h1></div>
						<div class="fno-application-slider__cards-wrapper"><div class="fno-application-slider__individual-card-wrapper">
						<div class="fno-application-slider__individual-card-image"><img src="https://training-exercise-levinb.md-staging.com/wp-content/uploads/2024/06/Mask-Group-41420-1.png" alt=""/></div>
						<div class="fno-application-slider__slider-meta-details"><h4 class="fno-application-slider__individual-card-title">Apparal and Accessories</h4><div class="fno-application-slider__slider-counting"><span class="current-slide">01</span>/<span class="total-slides">04</span></div></div>
						<p class="fno-application-slider__individual-card-description">Using FNO white ink, leading the industry in brightness and opacity, and multi-layer printing with the ability to print up to five layers that is a ve...</p></div>
						<div class="fno-application-slider__individual-card-wrapper"><div class="fno-application-slider__individual-card-image"><img src="https://training-exercise-levinb.md-staging.com/wp-content/uploads/2024/06/Mask-Group-41421-1.png" alt=""/></div>
						<div class="fno-application-slider__slider-meta-details"><h4 class="fno-application-slider__individual-card-title">Home Decor</h4><div class="fno-application-slider__slider-counting"><span class="current-slide">01</span>/<span class="total-slides">04</span></div></div>
						<p class="fno-application-slider__individual-card-description">Using FNO white ink, leading the industry in brightness and opacity, and multi-layer printing with the ability to print up to five layers in a very ad...</p></div><div class="fno-application-slider__individual-card-wrapper">
						<div class="fno-application-slider__individual-card-image"><img src="https://training-exercise-levinb.md-staging.com/wp-content/uploads/2024/06/Mask-Group-41421.png" alt=""/></div>
						<div class="fno-application-slider__slider-meta-details"><h4 class="fno-application-slider__individual-card-title">Decorative Walls</h4>
						<div class="fno-application-slider__slider-counting"><span class="current-slide">01</span>/<span class="total-slides">04</span></div></div>
						<p class="fno-application-slider__individual-card-description">Using FNO white ink, leading the industry in brightness and opacity, and multi-layer printing with the ability to print up to five layers in a very ad...</p></div></div></div></section></div>
						<!-- /wp:gb-final-exercise/application-slider-block -->';
		echo do_blocks( $block_content );
	?>


	<!-- Customer Story Slider based on the Products -->
	<?php
	// Function to truncate text to a specific number of words
	function truncate_text( $text, $num_words ) {
		$words = explode( ' ', $text );
		if ( count( $words ) > $num_words ) {
			$words = array_slice( $words, 0, $num_words );
			return implode( ' ', $words ) . '...';
		}
		return $text;
	}
	// Initialize WP_Query arguments
	$product_title               = get_the_title();
	$matching_stories_query_args = array(
		'post_type'      => 'fno-customer-stories',
		'tax_query'      => array(
			array(
				'taxonomy' => 'fno_customer_story_product_tags',
				'field'    => 'name',
				'terms'    => $product_title,
			),
		),
		'posts_per_page' => 2,
		'orderby'        => 'date',
		'order'          => 'DESC',
	);

	// Fetch customer stories
	$story_query = new WP_Query( $matching_stories_query_args );

	// Check if there are no posts in the initial query
	if ( ! $story_query->have_posts() ) {
		// If no posts found, fetch the latest 4 stories
		$latest_stories_query_args = array(
			'post_type'      => 'fno-customer-stories',
			'posts_per_page' => 4,
			'orderby'        => 'date',
			'order'          => 'DESC',
		);

		// Perform the latest stories query
		$story_query = new WP_Query( $latest_stories_query_args );
	}
	?>
	<section class="fno-customer-story__main-container">
		<h1 class="fno-customer-story__section-heading">Leading print providers choose FNO</h1>
		<div class="fno-customer-story__wrapper">
			<div class="fno-customer-story__background-overlay"></div>
			<div class="fno-customer-story__heading">
				<h4><?php esc_html_e( 'Customer Story', 'fno-customer-story' ); ?></h4>
			</div>
			<div class="fno-customer-story__slider-wrapper" data-autoplay="true" data-pause-on-hover="true" data-auto-play-speed="2000">
				<?php if ( $story_query->have_posts() ) : ?>
					<?php
					while ( $story_query->have_posts() ) :
						$story_query->the_post();
						?>
						<?php
						// Get post ID and custom fields
						$post_id               = get_the_ID();
						$story_logo_image      = get_field( 'company_logo', $post_id );
						$story_title           = get_field( 'story_title', $post_id );
						$story_description     = get_field( 'story_description', $post_id );
						$story_author_image    = get_field( 'story_author_image', $post_id );
						$story_author_name     = get_field( 'story_author_name', $post_id );
						$story_author_position = get_field( 'story_author_position', $post_id );
						$story_video_url       = get_field( 'story_video_url', $post_id );
						?>
						<!-- Story Slider -->
						<div class="fno-customer-story__story-slide">
							<div class="fno-customer-story__story-meta-info">
								<?php if ( $story_logo_image ) : ?>
									<img src="<?php echo esc_url( $story_logo_image ); ?>" alt="<?php esc_attr_e( 'Logo Image', 'fno-customer-story' ); ?>">
								<?php endif; ?>
								<?php if ( $story_title ) : ?>
									<h4><?php echo esc_html( truncate_text( $story_title, 30 ) ); ?></h4>
								<?php endif; ?>
							</div>
							<div class="fno-customer-story__slider-summary-info">
								<div class="fno-customer-story__story-short-desc">
									<?php if ( $story_description ) : ?>
										<p>
											<span class="quote-start">
												<svg width="30.001953" height="22.109375" viewBox="0 0 30.002 22.1094" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
													<defs />
													<path id="Path 1001" d="M11.23 0L0 11.08L0 22.1L11.23 22.1L11.23 0Z" fill="#003383" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 1001" d="M2 11.92L2 20.1L9.23 20.1L9.23 4.78L2 11.92ZM9.23 1.97L0 11.08L0 22.1L11.23 22.1L11.23 0L9.23 1.97Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd" />
													<path id="Path 1002" d="M30 0L18.76 11.08L18.76 22.1L30 22.1L30 0Z" fill="#003383" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 1002" d="M20.76 11.92L20.76 20.1L28 20.1L28 4.78L20.76 11.92ZM28 1.97L18.76 11.08L18.76 22.1L30 22.1L30 0L28 1.97Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd" />
												</svg>
											</span>
											<?php echo esc_html( truncate_text( $story_description, 35 ) ); ?>
											<span class="quote-end">
												<svg width="30.000000" height="22.109375" viewBox="0 0 30 22.1094" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
													<defs />
													<path id="Path 1001" d="M18.76 22.1L30 11.01L30 0L18.76 0L18.76 22.1Z" fill="#003383" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 1001" d="M30 11.01L20.76 20.13L18.76 22.1L18.76 0L30 0L30 11.01ZM28 10.18L20.76 17.32L20.76 2L28 2L28 10.18Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd" />
													<path id="Path 1002" d="M0 22.1L11.23 11.01L11.23 0L0 0L0 22.1Z" fill="#003383" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 1002" d="M11.23 11.01L2 20.13L0 22.1L0 0L11.23 0L11.23 11.01ZM9.23 10.18L2 17.32L2 2L9.23 2L9.23 10.18Z" fill="#000000" fill-opacity="1.000000" fill-rule="evenodd" />
												</svg>
											</span>
										</p>
									<?php endif; ?>
								</div>
								<div class="fno-customer-story__story-extra-details">
									<div class="fno-customer-story__story-author-details">
										<?php if ( $story_author_image ) : ?>
											<img src="<?php echo esc_url( $story_author_image ); ?>" alt="<?php esc_attr_e( 'Author Image', 'fno-customer-story' ); ?>">
										<?php endif; ?>
										<div class="fno-customer-story__author-meta-details">
											<?php if ( $story_author_name ) : ?>
												<span><?php echo esc_html( $story_author_name ); ?></span>
											<?php endif; ?>
											<?php if ( $story_author_position ) : ?>
												<span><?php echo esc_html( $story_author_position ); ?></span>
											<?php endif; ?>
										</div>
									</div>
									<div class="fno-customer-story__story-video-details">
										<?php if ( $story_video_url ) : ?>
											<a href="<?php echo esc_url( $story_video_url ); ?>" target="_blank" rel="noopener noreferrer">
												<svg width="30.000000" height="30.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
													<defs />
													<path id="Path 10450" d="M16 1C7.72 1 1 7.72 1 16C1 24.27 7.72 31 16 31C24.27 31 31 24.27 31 16C31 7.72 24.27 1 16 1ZM12.69 22L12.69 10L21.69 16L12.69 22Z" fill="#000000" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 10450" d="M1 16C1 24.27 7.72 31 16 31C24.27 31 31 24.27 31 16C31 7.72 24.27 1 16 1C7.72 1 1 7.72 1 16ZM12.69 10L21.69 16L12.69 22L12.69 10Z" stroke="#E66728" stroke-opacity="1.000000" stroke-width="2.000000" />
													<path id="Path 10450" d="M12.69 22L12.69 10L21.69 16L12.69 22Z" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 10450" d="M12.69 10L21.69 16L12.69 22L12.69 10Z" stroke="#E66728" stroke-opacity="1.000000" stroke-width="2.000000" />
												</svg>
												<span>
													<?php esc_html_e( 'Watch Video', 'fno-customer-story' ); ?></a>
											</span>
										<?php endif; ?>
									</div>
									<div class="fno-customer-story__story-more-details">
										<a href="#">
											<?php esc_html_e( 'Read the Story', 'fno-customer-story' ); ?>
											<svg fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
												<path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
												s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
												c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z" />
											</svg>
										</a>
									</div>
								</div>
								<div class="fno-customer-story__story-slider-details">
									<div class="fno-customer-story__slider-counting">
										<span class="current-slide">01</span>
										/
										<span class="total-slides">04</span>
									</div>
								</div>
							</div>
						</div>
					<?php endwhile; ?>
					<?php wp_reset_postdata(); ?>
				<?php else : ?>
					<p><?php esc_html_e( 'No stories found', 'fno-customer-story' ); ?></p>
				<?php endif; ?>
			</div>
		</div>
	</section>
</main>
<?php
