<?php

function fno_resource_center_render_callback( $attributes ) {

	// Extract data from attributes.
	$heading_styles     = isset( $attributes['headingStyles'] ) ? $attributes['headingStyles'] : array();
	$header_description = isset( $attributes['description'] ) ? $attributes['description'] : '';
	$description_color  = isset( $attributes['descriptionColor'] ) ? $attributes['descriptionColor'] : '';

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

	// Query for the Product Categories List.
	$product_categories = get_terms(
		array(
			'taxonomy'   => 'fno_resource_product_category',
			'type'       => 'fno-resource-center',
			'hide_empty' => false,
		)
	);

	// Query for the Resource type List.
	$resource_type = get_terms(
		array(
			'taxonomy'   => 'fno_resource_type',
			'type'       => 'fno-resource-center',
			'hide_empty' => false,
		)
	);

	// Query for the Products List.
	$products = get_terms(
		array(
			'taxonomy'   => 'fno_resource_products',
			'type'       => 'fno-resource-center',
			'hide_empty' => false,
		)
	);

	// Count total number of posts
	$total_posts = wp_count_posts( 'fno-resource-center' )->publish;

	// Function to render a dropdown.
	if ( ! function_exists( 'render_filters_dropdown' ) ) {
		function render_filters_dropdown( $id, $options, $value_field, $text_field ) {
			?>
			<div class="fno-resource-center__filter-dropdown">
				<select id="<?php echo esc_attr( $id ); ?>">
						<option value=""> <?php echo esc_html( ucwords( str_replace( '-', ' ', $id ) ) ); ?></option>
						<?php foreach ( $options as $option ) : ?>
							<option value="<?php echo esc_attr( $option->$value_field ); ?>"><?php echo esc_html( $option->$text_field ); ?></option>
						<?php endforeach; ?>
				</select>
			</div>
			<?php
		}
	}

	ob_start();
	?>
	<main class="fno-resource-center__main-container">
		<div class="fno-theme__breadcrumb">
				<?php
					$breadcrumb = get_breadcrumb();
				if ( ! empty( $breadcrumb ) ) {
					echo $breadcrumb;
				}
				?>
		</div>
		<section class="fno-resource-center__resource-section">
			<div class="fno-resource-center__resource-center-header">
				<?php if ( $title = get_the_title() ) : ?>
					<h2 <?php echo $heading_style; ?>><?php echo esc_html( $title ); ?></h2>
				<?php endif; ?>
				<?php if ( $header_description ) : ?>
					<p style="color: <?php echo esc_attr( $description_color ); ?>"><?php echo esc_html( $header_description ); ?></p>
				<?php endif; ?>
			</div>

			<!-- Filter Section -->
			<div class="fno-resources-center__filters-wrapper">
				<div class="fno-resource-center__filter">
					<?php
					if ( ! empty( $product_categories ) ) {
						render_filters_dropdown( 'product-categories', $product_categories, 'name', 'name' );
					}
					if ( ! empty( $products ) ) {
						render_filters_dropdown( 'products', $products, 'name', 'name' );
					}
					if ( ! empty( $resource_type ) ) {
						render_filters_dropdown( 'resource-type', $resource_type, 'name', 'name' );
					}
					?>
				</div>
				<div class="fno-resource-center__results-info">
					<span id="total-results"><?php echo $total_posts; ?> Results</span> 
					<button id="clear-filters"><i class="fa-solid fa-rotate-right"></i>Clear All</button>
				</div>
			</div>

			<!-- Resources Section -->
			<div class="fno-resource-center__resources" id="initial-resources">
				<!-- Latest Resources -->
				<div class="fno-resource-center__latest-resources">
					<h3>Latest</h3>
					<div class="fno-resource-center__resource-list" id="latest-resources">
						<?php
							$latest_resources = new WP_Query(
								array(
									'post_type'      => 'fno-resource-center',
									'post_status'    => 'publish',
									'posts_per_page' => 3,
									'orderby'        => 'date',
									'order'          => 'DESC',
								)
							);

						if ( $latest_resources->have_posts() ) :
							while ( $latest_resources->have_posts() ) :
								$latest_resources->the_post();
								?>
									<div class="fno-resource-center__resource-item">
									<?php if ( has_post_thumbnail() ) : ?>
											<div class="fno-resource-center__thumbnail">
												<?php the_post_thumbnail( 'thumbnail' ); ?>
											</div>
										<?php else : ?>
											<div class="fno-resource-center__thumbnail">
												<!-- Default image placeholder -->
												<img src="<?php echo get_template_directory_uri() . '/images/default-image.jpg'; ?>" alt="Default Image">
											</div>
										<?php endif; ?>
										<div class="fno-resource-center__content">
											<h4><?php the_title(); ?>
										<?php
											// Resource Type.
											$type_of_resource = get_the_terms( get_the_ID(), 'fno_resource_type' );
										if ( $type_of_resource && ! is_wp_error( $type_of_resource ) ) {
											echo '<span class="resource-type">';
											echo esc_html( $type_of_resource[0]->name );
											echo '</span>';
										}
										?>
											</h4>
											<p><?php the_excerpt(); ?></p>
										</div>
									</div>
									<?php
								endwhile;
							wp_reset_postdata();
							endif;
						?>
					</div>
				</div>

				<!-- All Resource -->
				<div class="fno-resource-center__all-resources">
					<h3>All Resources</h3>
					<div class="fno-resource-center__resource-list" id="all-resources">
						<?php
						$all_resources = new WP_Query(
							array(
								'post_type'      => 'fno-resource-center',
								'post_status'    => 'publish',
								'posts_per_page' => 3,
								'offset'         => 3,
							)
						);
						if ( $all_resources->have_posts() ) :
							while ( $all_resources->have_posts() ) :
								$all_resources->the_post();
								?>
								<div class="fno-resource-center__resource-item">
										<?php if ( has_post_thumbnail() ) : ?>
											<div class="fno-resource-center__thumbnail">
												<?php the_post_thumbnail( 'thumbnail' ); ?>
											</div>
										<?php else : ?>
											<div class="fno-resource-center__thumbnail">
												<!-- Default image placeholder -->
												<img src="<?php echo get_template_directory_uri() . '/images/default-image.jpg'; ?>" alt="Default Image">
											</div>
										<?php endif; ?>
										<div class="fno-resource-center__content">
											<h4><?php the_title(); ?>
											<?php
												// Resource Type.
												$type_of_resource = get_the_terms( get_the_ID(), 'fno_resource_type' );
											if ( $type_of_resource && ! is_wp_error( $type_of_resource ) ) {
												echo '<span class="resource-type">';
												echo esc_html( $type_of_resource[0]->name );
												echo '</span>';
											}
											?>
											</h4>
											<p><?php the_excerpt(); ?></p>
										</div>
									</div>
								<?php
							endwhile;
							wp_reset_postdata();
						endif;
						?>
					</div>
				</div>
			</div>
			<div id="filtered-resources" class="fno-resource-center__resources" style="display: none;">
				<div class="fno-resource-center__latest-resources">
					<h3>Your Results</h3>
					<div class="fno-resource-center__resource-list" id="your-results" >
						<!-- Filtered Resources will be appended here -->
					</div>
				</div>
			</div>
			<!-- Load More Button -->
			<div class="fno-resource-center__load-more">
				<button id="load-more-resources">Load More</button>
			</div>
		</section>
	</main>
	<?php

	return ob_get_clean();
}
?>