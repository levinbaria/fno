jQuery(document).ready(function ($) {

	let searchTimeout;

	// Fetch all events initially by triggering the "All" category
	$(window).on('load', function () {
		fetchEvents(0, '');
	});

	// Add click event listener to the category links
	$('.fno-upcoming-evets__categories').on('click', '.event-category', function (event) {
		event.preventDefault();

		// Remove active class from all li elements
		$('.fno-upcoming-evets__categories li').removeClass('active');

		// Add active class to the clicked li element
		$(this).parent('li').addClass('active');
		let categoryId = $(this).data('category-id');
		let searchQuery = $('.fno-upcoming-events__event-search input[name="upcoming-events"]').val();

		fetchEvents(categoryId, searchQuery);
	});

	function fetchEvents(categoryId, searchQuery) {

		$.ajax({
			url: fnoUpcomingEventsAjax.ajaxurl,
			type: 'post',
			data: {
				action: 'fno_fetch_events_by_category',
				category_id: categoryId,
				search_query: searchQuery,
				nonce: fnoUpcomingEventsAjax.nonce
			},
			success: function (response) {
				if (response.success) {
					$('.fno-upcoming-events__events-card-wrapper').html(response.data);
				} else {
					$('.fno-upcoming-events__events-card-wrapper').html('<p>No events found.</p>');
				}
			},
			error: function () {
				$('.fno-upcoming-events__events-card-wrapper').html('<p>There was an error fetching the events. Please try again later.</p>');
			}
		});
	}

	// Submit event handler for search form
	$('.fno-upcoming-events__event-search').on('submit', function (event) {
		event.preventDefault();

		// Trigger click event on active category link to reload events with search query
		$('.fno-upcoming-evets__categories li.active a').trigger('click');
	});

	$(document).on('input', 'input[name="upcoming-events"]', function () {
		const searchQuery = $(this).val().toLowerCase();
		const categoryId = $('.fno-upcoming-evets__categories .active a').data('category-id');

		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(function () {
			fetchEvents(categoryId, searchQuery);
		}, 300); // Delay the request by 300ms to avoid excessive requests
	});

});
