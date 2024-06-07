<?php

/**
 * The template for displaying a single Product details post.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package FNO
 */
get_header(); ?>


<main class="fno-product-details__main-container">
	<div class="fno-product-details__breadcrumb">
		<?php
		$breadcrumb = get_breadcrumb();
		if (!empty($breadcrumb)) {
			echo  $breadcrumb;
		}
		?>
	</div>
	<section class="fno-product-details__hero-product-container">
		<div class="fno-product-details__product-details-wrapper">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post();
					$post_id = get_the_ID();
					$product_title = get_the_title();
					$product_image = get_field('product_image', $post_id);
					$print_width = get_field('print_width', $post_id);
					$product_colors = get_field('product_colors', $post_id);
					$product_resolution = get_field('product_resolution', $post_id);
					$product_productivity = get_field('product_productivity', $post_id);
					$product_brochure = get_field('product_brochure', $post_id);
					$product_highlight_title = get_field('product_highlight_title', $post_id);
					$product_highlight_description = get_field('product_highlight_description', $post_id);
				?>
					<div class="fno-product-details__product-title">
						<h1><?php the_title(); ?></h1>
					</div>
					<div class="fno-product-details__product-image">
						<?php if ($product_image) : ?>
							<img src="<?php echo esc_url($product_image); ?>" alt="product-image" />
						<?php endif; ?>
					</div>
					<div class="fno-product-details__product-info">
						<div class="fno-product-details__product-data">
							<?php if ($print_width) : ?>
								<span class="data"><?php echo esc_html($print_width) ?> m</span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e('Maximum Fabric Width', 'fno-product-details'); ?></span>
						</div>
						<div class="fno-product-details__product-data">
							<?php if ($product_productivity) : ?>
								<span class="data"><?php echo esc_html($product_productivity) ?></span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e('Productivity', 'fno-product-details'); ?></span>
						</div>
						<div class="fno-product-details__product-data">
							<?php if ($product_resolution) : ?>
								<span class="data"><?php echo esc_html($product_resolution) ?> dpi</span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e('Resolution', 'fno-product-details'); ?></span>
						</div>
						<div class="fno-product-details__product-data">
							<?php if ($product_colors) : ?>
								<span class="data"><?php echo esc_html($product_colors) ?></span>
							<?php endif; ?>
							<span class="data-fields"><?php esc_html_e('Variable drop size', 'fno-product-details'); ?></span>
						</div>
					</div>
					<div class="fno-product-details__product-highlight-wrapper">
						<?php if ($product_highlight_title) : ?>
							<h2><?php echo esc_html($product_highlight_title) ?></h2>
						<?php endif; ?>
						<?php if ($product_highlight_description) : ?>
							<p><?php echo esc_html($product_highlight_description) ?></p>
						<?php endif; ?>
						<div class="fno-product-details__product-highlight-goto-details">
							<a href="#" class="fno-product-details__product-book-demo">Book a Demo</a>
							<a href="<?php echo $product_brochure ?>" target="_blank" class="fno-product-details__product-brochure">
								<?php esc_html_e('Download Brochure', 'fno-product-details'); ?>
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
	<?php
		$block_content = '<!-- wp:gb-final-exercise/application-slider-block {"applicationHeading":"Offer customer more high-value applications","sliderCards":[{"sliderCardImg":{"id":229,"url":"http://final-exercise.local/wp-content/uploads/2024/06/Mask-Group-41420-1.png","alt":""},
			"sliderCardTitle":"Apparel and accessories","sliderCardDescription":"If you-re developing a theme for full-site editing (FSE) with block-based templates, ensure your theme is properly set up for it:"},
			{"sliderCardImg":{"id":228,"url":"http://final-exercise.local/wp-content/uploads/2024/06/Mask-Group-41421-1.png","alt":""},"sliderCardTitle":"Apparel and accessories","sliderCardDescription":"If you-re developing a theme for full-site editing (FSE) with block-based templates, ensure your theme is properly set up for it:"},
			{"sliderCardImg":{"id":231,"url":"http://final-exercise.local/wp-content/uploads/2024/06/Mask-Group-41420.png","alt":""},"sliderCardTitle":"Full site editing.","sliderCardDescription":"If you-re developing a theme for full-site editing (FSE) with block-based templates, ensure your theme is properly set up for it:"}]} -->
			<div class="wp-block-gb-final-exercise-application-slider-block fno-application-slider" data-auto-play="true" data-pause-on-hover="true" data-slide-speed="300" data-show-arrows="true" data-show-dots="true" data-auto-play-speed="3000"><section class="fno-application-slider__main-container">
			<div class="fno-application-slider__application-wrapper"><div class="fno-application-slider__application-header"><h1 class="fno-application-slider__application-heading" style="color:#000000">Offer customer more high-value applications</h1></div><div class="fno-application-slider__cards-wrapper">
			<div class="fno-application-slider__individual-card-wrapper"><div class="fno-application-slider__individual-card-image"><img src="http://final-exercise.local/wp-content/uploads/2024/06/Mask-Group-41420-1.png" alt=""/></div><div class="fno-application-slider__slider-meta-details">
			<h4 class="fno-application-slider__individual-card-title">Apparel and accessories</h4><div class="fno-application-slider__slider-counting"><span class="current-slide">01</span>/<span class="total-slides">04</span></div></div>
			<p class="fno-application-slider__individual-card-description">If you-re developing a theme for full-site editing (FSE) with block-based templates, ensure your theme is properly set up for it:</p></div><div class="fno-application-slider__individual-card-wrapper">
			<div class="fno-application-slider__individual-card-image"><img src="http://final-exercise.local/wp-content/uploads/2024/06/Mask-Group-41421-1.png" alt=""/></div><div class="fno-application-slider__slider-meta-details">
			<h4 class="fno-application-slider__individual-card-title">Apparel and accessories</h4><div class="fno-application-slider__slider-counting">
			<span class="current-slide">01</span>/<span class="total-slides">04</span></div></div><p class="fno-application-slider__individual-card-description">If you-re developing a theme for full-site editing (FSE) with block-based templates, ensure your theme is properly set up for it:</p>
			</div><div class="fno-application-slider__individual-card-wrapper"><div class="fno-application-slider__individual-card-image">
			<img src="http://final-exercise.local/wp-content/uploads/2024/06/Mask-Group-41420.png" alt=""/></div><div class="fno-application-slider__slider-meta-details"><h4 class="fno-application-slider__individual-card-title">Full site editing.</h4><div class="fno-application-slider__slider-counting">
			<span class="current-slide">01</span>/<span class="total-slides">04</span></div></div><p class="fno-application-slider__individual-card-description">If you-re developing a theme for full-site editing (FSE) with block-based templates, ensure your theme is properly set up for it:</p>
			</div></div></div></section></div>
			<!-- /wp:gb-final-exercise/application-slider-block -->';
		echo do_blocks($block_content);
	?>
	<?php 
		$custom_story_content = '<!-- wp:gb-final-exercise/customer-story-slider {"bgImg":{"id":134,"url":"http://final-exercise.local/wp-content/uploads/2024/05/Image-197.png","alt":""},"autoplaySpeed":1000} /-->';
		echo do_blocks($custom_story_content);
	?>
</main>
<?php