//run when page first loads
$(document).ready(function () {
    tabbing();
});

//run on every window resize
$(window).resize(function () {
    tabbing();
});

function tabbing() {
    $('.tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.tab-link').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})
}