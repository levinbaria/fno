jQuery(document).ready(function ($) {

	let offset = 6;
	let initialResultsCount = $('#total-results').text().trim();

	// Function to fetch filtered resources
	function fetchFilteredResources() {
		const productCategory = $('#product-categories').val().trim();
		const product = $('#products').val().trim();
		const resourceType = $('#resource-type').val().trim();

		// Check if all filter values are empty
		if (!productCategory && !product && !resourceType) {
			fetchMoreResources();
			return;
		}

		$.ajax({
			url: fno_load_more_params.ajax_url,
			type: 'POST',
			data: {
				action: 'fno_fetch_filtered_resources',
				product_category: productCategory,
				product: product,
				resource_type: resourceType,
				nonce: fno_load_more_params.nonce,
			},
			success: function (response) {
				if(response.success){
					$('#filtered-resources').show();
					$('#your-results').html(response.data.html);
					$('#total-results').text(response.data.total_results + ' Results');
					$('#initial-resources').hide();
					$('#load-more-resources').hide();
				}else {
					$('#your-results').text('Right now there is no Resource available for your query');
				}
			},
			error: function (xhr, status, error) {
				console.log('AJAX Error:', xhr, status, error);
			}
		});
	}

	// Function to fetch more resources
	function fetchMoreResources() {
		$.ajax({
			url: fno_load_more_params.ajax_url,
			type: 'POST',
			data: {
				action: 'fno_load_more_resources',
				offset: offset,
				posts_per_page: fno_load_more_params.posts_per_page,
				nonce: fno_load_more_params.nonce,
			},
			success: function (response) {
				if (response.success) {
					$('#initial-resources').show()
					$('#all-resources').append(response.data.html);
					offset = offset + 3;
					$('#total-results').text(response.data.total_results + ' Results');
					$('#filtered-resources').hide();
					$('#load-more-resources').show();
				} else {
					$('#load-more-resources').text('No more Resources');
					$('#load-more-resources').attr('disabled', true);
				}
			},
			error: function (xhr, status, error) {
				console.log('AJAX Error:', xhr, status, error);
			}
		});
	}

	// Event handler for filter change
	$('#product-categories, #products, #resource-type').on('change', function () {
		fetchFilteredResources();
	});

	// Event handler for load more button
	$('#load-more-resources').on('click', function () {
		fetchMoreResources();
	});

	// Event handler for clearing filters
	$('#clear-filters').on('click', function () {
		$('#product-categories, #products, #resource-type').val('');
		$('#filtered-resources').hide();
		$('#initial-resources').show();
		$('#load-more-resources').show();
		$('#total-results').text(initialResultsCount);
	});

});