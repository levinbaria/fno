<?php
function fno_fetch_events_by_category()
{
	check_ajax_referer('fno_upcoming_events_nonce', 'nonce');

	$category_id = isset($_POST['category_id']) ? intval($_POST['category_id']) : 0;
	$search_query = isset($_POST['search_query']) ? sanitize_text_field($_POST['search_query']) : '';

	$query_args = array(
		'post_type' => 'fno-upcoming-events',
		'post_status' => 'publish',
		'posts_per_page' => 10,
		'order_by' => 'title',
		'order' => 'ASC',
		'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
	);

	// Apply search query if it exists
	if (!empty($search_query)) {
		$query_args['s'] = $search_query;
	}

	if ($category_id !== 0) {
		$query_args['tax_query'] = array(
			array(
				'taxonomy' => 'fno-upcoming-events-categories',
				'field'    => 'term_id',
				'terms'    => $category_id,
			),
		);
	}

	$posts = new WP_Query($query_args);

	$html = render_events_cards($posts);

	wp_send_json_success($html);
}

add_action('wp_ajax_fno_fetch_events_by_category', 'fno_fetch_events_by_category');
add_action('wp_ajax_nopriv_fno_fetch_events_by_category', 'fno_fetch_events_by_category');


/**
 * Helper function to render events.
 *
 * @param array $posts Array of WP_Post objects.
 * @return string HTML output of the events.
 */
function render_events_cards($posts)
{
	ob_start();
	$current_date = new DateTime(current_time('Y-m-d'));

	$has_upcoming_events = false;

	foreach ($posts->posts as $post) : setup_postdata($post);
		$event_title = get_the_title($post->ID);
		$event_banner_image = get_field('event_banner_image', $post->ID);
		$event_place_name = get_field('event_place_name', $post->ID);
		$event_address = get_field('event_address', $post->ID);
		$event_date = get_field('event_date', $post->ID);

		$start_date = $end_date = null;

		// Parse the event date range
		if (preg_match('/(\w+ \d{1,2})-(\d{1,2}), (\d{4})/', $event_date, $matches)) {
			// Example: "August 15-20, 2024"
			$start_date_str = $matches[1] . ', ' . $matches[3]; // "August 15, 2024"
			$end_date_str = $matches[1]; // "August"
			$end_date_str = preg_replace('/\d{1,2}/', $matches[2], $end_date_str) . ', ' . $matches[3]; // "August 20, 2024"

			$start_date = new DateTime($start_date_str);
			$end_date = new DateTime($end_date_str);
		} elseif (preg_match('/(\w+ \d{1,2}), (\d{4})/', $event_date, $matches)) {
			// Example: "August 15, 2024"
			$start_date_str = $matches[1] . ', ' . $matches[2]; // "August 15, 2024"
			$start_date = new DateTime($start_date_str);
			$end_date = $start_date;
		} else {
			continue; // Skip if date format is not recognized
		}

		// Skip the event if the end date is before the current date
		if ($end_date < $current_date) {
			continue;
		}

		// If we reach here, it means there is at least one upcoming event
		$has_upcoming_events = true;
?>
		<div class="fno-upcoming-events__individual-event-card">
			<div class="fno-upcoming-events__individual-event-img">
				<?php if ($event_banner_image) : ?>
					<img src="<?php echo esc_url($event_banner_image); ?>" alt="<?php esc_attr_e('Event Banner Image', 'fno-upcoming-events'); ?>">
				<?php endif; ?>
			</div>
			<div class="fno-upcoming-events__events-summary-wrapper">
				<div class="fno-upcoming-events__individual-event-title">
					<?php if ($event_title) : ?>
						<h4><?php echo esc_html($event_title); ?></h4>
					<?php endif; ?>
				</div>
				<div class="fno-upcoming-events__event-address">
					<?php if ($event_place_name) : ?>
						<p>
							<?php echo esc_html($event_place_name); ?>
						</p>
					<?php endif; ?>
					<?php if ($event_address) : ?>
						<p>
							<?php echo esc_html($event_address); ?>
						</p>
					<?php endif; ?>
				</div>
				<div class="fno-upcoming-events__event-date">
					<span><i class="fa-regular fa-calendar"></i></span>
					<?php if ($event_date) : ?>
						<p>
							<?php echo esc_html($event_date); ?>
						</p>
					<?php endif; ?>
				</div>
			</div>
			<a href="<?php the_permalink(); ?>" class="fno-upcoming-events__event-explore">
				<?php esc_html_e('Visit Website', 'fno-upcoming-events'); ?>
				<svg fill="currentColor" height="16px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
					<path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
						s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
						c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z" />
				</svg>
			</a>
		</div>
<?php endforeach;

	if (!$has_upcoming_events) {
		echo '<p>' . esc_html__('No upcoming events.', 'fno-upcoming-events') . '</p>';
	}

	wp_reset_postdata();
	return ob_get_clean();
}

?>