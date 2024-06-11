<?php

/**
 * Render callback for the customer story slider block.
 *
 * @param array $attributes The block attributes.
 * @return string The HTML output.
 */
function fno_block_customer_story_slider_render_callback($attributes)
{
	// Extract selected categories from attributes
	$selected_category = isset($attributes['storyCategories']) && is_array($attributes['storyCategories']) ? array_map('intval', $attributes['storyCategories']) : array();

	// Extract slider settings from attributes
	$autoplay = isset($attributes['autoplay']) ? $attributes['autoplay'] : true;
	$pauseOnHover = isset($attributes['pauseOnHover']) ? $attributes['pauseOnHover'] : true;
	$autoplaySpeed = isset($attributes['autoplaySpeed']) ? $attributes['autoplaySpeed'] : 3000;


	// Extract background image information
	$bgImg = isset($attributes['bgImg']) ? $attributes['bgImg'] : array();
	$wrapper_styles = !empty($bgImg) && isset($bgImg['url']) ? "background-image: url(" . esc_url($bgImg['url']) . "); background-size: cover; background-position: center; background-repeat: no-repeat" : '';

	// Function to truncate text to a specific number of words.
	function truncate_text($text, $num_words)
	{
		$words = explode(' ', $text);
		if (count($words) > $num_words) {
			$words = array_slice($words, 0, $num_words);
			return implode(' ', $words) . '...';
		}
		return $text;
	}

	// Start output buffering
	ob_start();

	// Initialize WP_Query arguments
	$query_args = array(
		'post_type' => 'fno-customer-stories',
		'order_by' => 'date',
		'order' => 'DESC',
		'posts_per_page' => 4,
	);

	if (!empty($selected_category)) {
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'fno_customer_story_category',
				'field' => 'term_id',
				'terms' => $selected_category,
			),
		);
	}

	// Fetch customer stories
	$story_query = new WP_Query($query_args);
?>

	<section class="fno-customer-story__main-container">
		<div class="fno-customer-story__wrapper" style="<?php echo esc_attr($wrapper_styles); ?>">
			<div class="fno-customer-story__background-overlay"></div>
			<div class="fno-customer-story__heading">
				<h4><?php esc_html_e('Customer Story', 'fno-customer-story'); ?></h4>
			</div>
			<div class="fno-customer-story__slider-wrapper" data-autoplay="<?php echo esc_attr($autoplay); ?>" data-pause-on-hover="<?php echo esc_attr($pauseOnHover); ?>" data-autoplay-speed="<?php echo esc_attr($autoplaySpeed); ?>">
				<?php if ($story_query->have_posts()) : ?>
					<?php while ($story_query->have_posts()) : $story_query->the_post(); ?>
						<?php
						// Get post ID and custom fields
						$post_id = get_the_ID();
						$story_logo_image = get_field('company_logo', $post_id);
						$story_title = get_field('story_title', $post_id);
						$story_description = get_field('story_description', $post_id);
						$story_author_image = get_field('story_author_image', $post_id);
						$story_author_name = get_field('story_author_name', $post_id);
						$story_author_position = get_field('story_author_position', $post_id);
						$story_video_url = get_field('story_video_url', $post_id);
						?>
						<div class="fno-customer-story__story-slide">
							<div class="fno-customer-story__story-meta-info">
								<?php if ($story_logo_image) : ?>
									<img src="<?php echo esc_url($story_logo_image); ?>" alt="<?php esc_attr_e('Logo Image', 'fno-customer-story'); ?>">
								<?php endif; ?>
								<?php if ($story_title) : ?>
									<h4><?php echo esc_html(truncate_text($story_title, 30)); ?></h4>
								<?php endif; ?>
							</div>
							<div class="fno-customer-story__slider-summary-info">
								<div class="fno-customer-story__story-short-desc">
									<?php if ($story_description) : ?>
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
											<?php echo esc_html(truncate_text($story_description, 30)); ?>
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
										<?php if ($story_author_image) : ?>
											<img src="<?php echo esc_url($story_author_image); ?>" alt="<?php esc_attr_e('Author Image', 'fno-customer-story'); ?>">
										<?php endif; ?>
										<div class="fno-customer-story__author-meta-details">
											<?php if ($story_author_name) : ?>
												<span><?php echo esc_html($story_author_name); ?></span>
											<?php endif; ?>
											<?php if ($story_author_position) : ?>
												<span><?php echo esc_html($story_author_position); ?></span>
											<?php endif; ?>
										</div>
									</div>
									<div class="fno-customer-story__story-video-details">
										<?php if ($story_video_url) : ?>
											<a href="<?php echo esc_url($story_video_url); ?>" target="_blank" rel="noopener noreferrer">
												<svg width="30.000000" height="30.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
													<defs />
													<path id="Path 10450" d="M16 1C7.72 1 1 7.72 1 16C1 24.27 7.72 31 16 31C24.27 31 31 24.27 31 16C31 7.72 24.27 1 16 1ZM12.69 22L12.69 10L21.69 16L12.69 22Z" fill="#000000" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 10450" d="M1 16C1 24.27 7.72 31 16 31C24.27 31 31 24.27 31 16C31 7.72 24.27 1 16 1C7.72 1 1 7.72 1 16ZM12.69 10L21.69 16L12.69 22L12.69 10Z" stroke="#E66728" stroke-opacity="1.000000" stroke-width="2.000000" />
													<path id="Path 10450" d="M12.69 22L12.69 10L21.69 16L12.69 22Z" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero" />
													<path id="Path 10450" d="M12.69 10L21.69 16L12.69 22L12.69 10Z" stroke="#E66728" stroke-opacity="1.000000" stroke-width="2.000000" />
												</svg>
												<span>
													<?php esc_html_e('Watch Video', 'fno-customer-story'); ?></a>
											</span>
										<?php endif; ?>
									</div>
									<div class="fno-customer-story__story-more-details">
										<a href="#">
											<?php esc_html_e('Read the Story', 'fno-customer-story'); ?>
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
					<p><?php esc_html_e('No stories found', 'fno-customer-story'); ?></p>
				<?php endif; ?>
			</div>
		</div>
	</section>

<?php
	return ob_get_clean();
}
