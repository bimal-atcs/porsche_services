//run when page first loads
$(document).ready(function () {
    keyTab();
    keyInnerTab();
	keyAccordion();
});

//run on every window resize
$(window).resize(function () {
});

// key tabbing
function keyTab() {
    $('.key-tab').click(function(){
		let tab_id = $(this).attr('data-tab');
		$('.key-tab').removeClass('key-tab-active');
		$('.key-content').removeClass('key-content-active');

		$(this).addClass('key-tab-active');
		$("#"+tab_id).addClass('key-content-active');
	});
}

// key tabbing
function keyInnerTab() {
    $('.key-inner-tab').click(function(){
		let tab_inner_id = $(this).attr('data-tab');
		$('.key-inner-tab').removeClass('key-inner-tab-active');
		$('.key-inner-content').removeClass('key-inner-content-active');

		$(this).addClass('key-inner-tab-active');
		$("#"+tab_inner_id).addClass('key-inner-content-active');
	});
}

// key accordion
function keyAccordion() {
    $('.key-accordion-link-title, .key-accordion-link-button-arrow').click(function(e) {
        e.preventDefault();
        $(this).closest('.key-accordion-link').toggleClass('key-accordion-link-active');
        $(this).closest('.key-accordion-link').next('.key-accordion-content').slideToggle(350);
    });
}