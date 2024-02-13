//run when page first loads
$(document).ready(function () {
    keyTab();
	keyAccordion();
});

//run on every window resize
$(window).resize(function () {
});

// key tabbing
function keyTab() {
    $('.key-tab').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.key-tab').removeClass('key-tab-active');
		$('.key-content').removeClass('key-content-active');

		$(this).addClass('key-tab-active');
		$("#"+tab_id).addClass('key-content-active');
	})
}

// key accordion
function keyAccordion() {
    $('.key-accordion-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('key-accordion-link-active');
        $(this).next('.key-accordion-content').slideToggle(350);
    });
}