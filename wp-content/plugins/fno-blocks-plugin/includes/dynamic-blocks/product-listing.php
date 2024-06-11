<?php

/**
 * Render callback for the product Listing block.
 *
 * @param array $attributes The block attributes.
 * @return string The HTML output.
 */
function fno_block_product_listing_render_callback($attributes)
{
	// Extract data from attributes.
	$categoryBannerImage = isset($attributes['categoryBannerImage']) ? $attributes['categoryBannerImage'] : array();
	$categoryBannerImageUrl = isset($categoryBannerImage['url']) ? esc_url($categoryBannerImage['url']) : '';
	$heading_styles = isset($attributes['headingStyles']) ? $attributes['headingStyles'] : array();
	$category_desc = isset($attributes['categoryDesc']) ? $attributes['categoryDesc'] : '';
	$category_desc_color = isset($attributes['categoryDescColor']) ? $attributes['categoryDescColor'] : '';
	$selected_category = isset($attributes['productCategories']) && is_array($attributes['productCategories']) ? array_map('intval', $attributes['productCategories']) : array();

	$heading_style = '';
	if (!empty($heading_styles)) {
		$heading_style .= 'style="';
		if (!empty($heading_styles['color'])) {
			$heading_style .= 'color: ' . esc_attr($heading_styles['color']) . '; ';
		}
		if (!empty($heading_styles['isCustomSize']) && !empty($heading_styles['fontSize'])) {
			$heading_style .= 'font-size: ' . esc_attr($heading_styles['fontSize']) . 'px; ';
		}
		$heading_style .= '"';
	}

	if (empty($selected_category)) {
		return ('Please Select the Categories');
	}

	// Start output buffering
	ob_start();
	// Initialize WP_Query arguments.
	$query_args = array(
		'post_type' => 'fno-product-listing',
		'post_status' => 'publish',
		'posts_per_page' => 5,
		'order_by' => 'title',
		'order' => 'ASC',
		'paged'       => get_query_var('paged') ? get_query_var('paged') : 1,
		'tax_query' => array(
			array(
				'taxonomy' => 'fno_product_listing_category',
				'field' => 'term_id',
				'terms' => $selected_category,
			),
		),
	);

	// Fetch Product based on the selected Categories.
	$product_query = new WP_Query($query_args);
?>


	<section class="fno-product-listing__main-container">
		<div class="fno-product-listing__category-banner-image">
			<?php if ($categoryBannerImageUrl) : ?>
				<img src="<?php echo $categoryBannerImageUrl; ?>" alt="<?php esc_attr_e('Banner Image', 'fno-product-listing'); ?>" />
			<?php endif; ?>
		</div>
		<div class="fno-theme__breadcrumb">
			<?php
			$breadcrumb = get_breadcrumb();
			if (!empty($breadcrumb)) {
				echo  $breadcrumb;
			}
			?>
		</div>
		<div class="fno-product-listing__wrapper">
			<div class="fno-product-listing__category-intro-wrapper">
				<div class="fno-product-listing__category-heading">
					<h2 <?php echo $heading_style; ?>><?php echo esc_html(get_the_title()); ?></h2>
				</div>
				<div class="fno-product-listing__category-description">
					<p style="color: <?php echo esc_attr($category_desc_color); ?>"><?php echo esc_html($category_desc); ?></p>
				</div>
			</div>
			<div class="fno-product-listing__products-card-wrapper">
				<?php if ($product_query->have_posts()) : ?>
					<?php while ($product_query->have_posts()) : $product_query->the_post(); ?>
						<?php
						// Get post ID and the Custom Fields
						$post_id = get_the_ID();
						$product_title = get_the_title();
						$product_image = get_field('product_image', $post_id);
						$print_width = get_field('print_width', $post_id);
						$product_colors = get_field('product_colors', $post_id);
						$product_resolution = get_field('product_resolution', $post_id);
						$product_productivity = get_field('product_productivity', $post_id);
						?>
						<div class="fno-product-listing__individual-product-card">
							<div class="fno-product-listing__individual-product-title">
								<?php if ($product_title) : ?>
									<h4><?php echo esc_html($product_title); ?></h4>
								<?php endif; ?>
							</div>
							<div class="fno-product-listing__individual-product-img">
								<?php if ($product_image) : ?>
									<img src="<?php echo esc_url($product_image); ?>" alt="<?php esc_attr_e('Logo Image', 'fno-customer-story'); ?>">
								<?php endif; ?>
							</div>
							<div class="fno-product-listing__individual-product-summary">
								<div class="fno-product-listing__individual-product-summary-info">
									<div class="fno-product-listing__product-info-data">
										<p><?php esc_html_e('Print Width', 'fno-product-listing'); ?></p>
										<?php if ($print_width) : ?>
											<p class="data"><?php echo esc_html($print_width) ?> m</p>
										<?php endif; ?>
									</div>
									<div class="fno-product-listing__product-info-data">
										<p><?php esc_html_e('Colors', 'fno-product-listing'); ?></p>
										<?php if ($product_colors) : ?>
											<p class="data"><?php echo esc_html($product_colors) ?></p>
										<?php endif; ?>
									</div>
								</div>
								<div class="fno-product-listing__individual-product-summary-info">
									<div class="fno-product-listing__product-info-data">
										<p><?php esc_html_e('Resolution', 'fno-product-listing'); ?></p>
										<?php if ($product_resolution) : ?>
											<p class="data"><?php echo esc_html($product_resolution) ?> DPI</p>
										<?php endif; ?>
									</div>
									<div class="fno-product-listing__product-info-data">
										<p><?php esc_html_e('Productivity', 'fno-product-listing'); ?></p>
										<?php if ($product_productivity) : ?>
											<p class="data"><?php echo esc_html($product_productivity) ?></p>
										<?php endif; ?>
									</div>
								</div>
							</div>
							<a href="<?php the_permalink(); ?>" class="fno-product-listing__product-explore">
								<?php esc_html_e('Explore', 'fno-product-listing'); ?>
								<svg fill="currentColor" height="16px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
									<path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
                                                s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
                                                c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z" />
								</svg>
							</a>
						</div>
					<?php endwhile; ?>
				<?php else : ?>
					<p><?php esc_html_e('No stories found', 'fno-customer-story'); ?></p>
				<?php endif; ?>
				<?php wp_reset_postdata(); ?>
			</div>
			<div class="fno-product-listing__pagination">
				<?php
				// Pagination.
				$big = 999999999;
				echo paginate_links(array(
					'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
					'format' => '?paged=%#%',
					'current' => max(1, get_query_var('paged')),
					'total' => $product_query->max_num_pages,
					'prev_text' => __('« Previous', 'fno-product-listing'),
					'next_text' => __('Next »', 'fno-product-listing'),
				));
				?>
			</div>
		</div>
	</section>

<?php

	return ob_get_clean();
}
