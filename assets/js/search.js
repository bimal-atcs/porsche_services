(function ($) {
	$(document).ready(function () {
		let searchValueTimeoutId;

		$('#header-search').on('click', function (e) {
			e.preventDefault();
			$('.header-search-overlay').fadeIn();
			$('.header-search-overlay').addClass('active');
			$('.header-navbar-inputs #s').focus();
			$('.header-navbar-inputs #s').attr("autocomplete", "off");

			$('.page-body').removeClass('page-scroll-on');
            $('.page-body').addClass('page-scroll-off');
		});

		$('#search-close').click(function (e) {
			e.preventDefault();
			close_search_layout();
		});

		$('html, body').on('click', '.header-search-overlay .close-search', function () {
			$('.header-navbar-inputs').removeClass('header-navbar-inputs-active');
			close_search_layout();
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
			}else{
				$('.header-search-overlay .header-search-results .layout').html("");
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

			$('.loader-outer').show();
			$.post(ajax_object.ajax_url, data, function (response) {
				$('.loader-outer').hide();
				$('.header-search-overlay .header-search-results .layout').html(response);
			});
		}

		function close_search_layout(){
			$('.header-search-overlay').fadeOut();
			$('.header-search-overlay').removeClass('active');

			$('.page-body').removeClass('page-scroll-off');
            $('.page-body').addClass('page-scroll-on');
		}
    })
}(jQuery));
