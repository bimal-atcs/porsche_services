(function ($) {
	$(document).ready(function () {
		var adminBar = $('#wpadminbar').length;
		var headerHeight = $('.base-header').height();
		let searchValueTimeoutId;
		let scrollTimeoutId;

		function getUrlParameter(sParam) {
			var sPageURL = window.location.search.substring(1),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;

			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
				}
			}
		}

		$('.js-search-icon').on('click', function (e) {
			e.preventDefault();
			$('.search-overlay').fadeIn();
			$('.search-overlay').addClass('active');
			$('.search-overlay #s').focus();
			$('body').addClass('overflow-hidden');
		});

		$('.search-form-container .close-icon').click(function (e) {
			e.preventDefault();
			$('.search-overlay').fadeOut();
			$('.search-overlay').removeClass('active');
			$('body').removeClass('overflow-hidden');
		});

		$('html, body').on('click', '.search-overlay .close-search', function () {
			$('.search-overlay').fadeOut();
			$('.search-overlay').addClass('active');
			$('body').removeClass('overflow-hidden');
		});

		$('#searchform').submit(function (e) {
			e.preventDefault();
			const searchValue = $('#searchform #s').val();
			searchAjaxCall(searchValue);
		});

		$('#searchform #s').on('keyup', function () {
			const searchValue = $('#searchform #s').val();
			if (searchValue.length > 2) {
				searchValueTimeout(searchValue);
			}
		});

		function searchValueTimeout(searchValue) {
			if (searchValueTimeoutId) {
				clearTimeout(searchValueTimeoutId);
			}
			searchValueTimeoutId = setTimeout(function () {
				searchAjaxCall(searchValue);
			}, 500);
		}

		function searchAjaxCall(searchValue) {
			const data = {
				'action': 'search',
				'search_value': searchValue
			};

			$('.loader-outer').css({ 'display': 'flex' });
			$.post(ajax_object.ajax_url, data, function (response) {
				$('.loader-outer').css({ 'display': 'none' });
				$('.search-overlay .search-results .search-results').html(response);
			});
		}

		$('html, body').bind('mousewheel', function (event, delta, nbr) {
			if ($('.search-overlay.active').length) {

				$('.search-results.scrollbar-macosx > .scroll-element .scroll-bar').addClass('show-scroll-bar');
				if (scrollTimeoutId) {
					clearTimeout(scrollTimeoutId);
				}
				scrollTimeoutId = setTimeout(function () {
					$('.search-results.scrollbar-macosx > .scroll-element .scroll-bar').removeClass('show-scroll-bar');
				}, 600);
			} else {
				$('.site-main.scrollbar-macosx > .scroll-element .scroll-bar').addClass('show-scroll-bar');
				if (scrollTimeoutId) {
					clearTimeout(scrollTimeoutId);
				}
				scrollTimeoutId = setTimeout(function () {
					$('.site-main.scrollbar-macosx > .scroll-element .scroll-bar').removeClass('show-scroll-bar');
				}, 600);
			}
		});
    })
}(jQuery));
