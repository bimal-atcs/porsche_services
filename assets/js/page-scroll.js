//run when page first loads
$(document).ready(function () {
    dataScroll();
});

//run on every window resize
$(window).resize(function () {
});

// page scroll to section
function dataScroll() {
    $('.service-hero-item').removeClass('service-hero-item-active');
    $('.service-hero-item').click(function(e) {
        e.preventDefault();
        let headerHeight = $('.header').outerHeight();

        $('.service-hero-item').removeClass('service-hero-item-active');
        $(this).addClass('service-hero-item-active');

        let getSection = $($(this).attr('href'));
        let scrollTo = getSection.offset().top - headerHeight;
        $('html, body').animate({
            scrollTop: scrollTo
        }, 700);
    });
}