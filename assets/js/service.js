//run when page first loads
$(document).ready(function () {
    serviceAccordion();
    serviceWindow();
    serviceScroll();
});

//run on every window resize
$(window).resize(function () {
});

// aside scroll service
function serviceScroll() {
    $('.aside-link').removeClass('aside-link-active');
    $('.aside-link').click(function(e) {
        e.preventDefault();
        let headerHeight = $('.header').outerHeight();
        let stepsHeight = $('.service-steps').outerHeight();

        $('.aside-link').removeClass('aside-link-active');
        $(this).addClass('aside-link-active');

        let getSection = $($(this).attr('href'));
        let scrollTo = getSection.offset().top - (headerHeight + stepsHeight);
        $('html, body').animate({
            scrollTop: scrollTo
        }, 700);
    });
}

// service accordion
function serviceAccordion() {
    $('.accordion-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('accordion-link-active');
        $(this).next('.accordion-content').slideToggle(350);
    });  
}

// service window modal
function serviceWindow() {
    $('.service-hero-item').click(function(e) {
        e.preventDefault();
        let dataModalAttr = $($(this).attr('href'));

        if($(dataModalAttr).hasClass('window-close')) {
            $('html, body').css('overflow', 'hidden');
            $(dataModalAttr).removeClass('window-close');
            $(dataModalAttr).addClass('window-open');

            $('.window-header-close, .window-blur').click(function() {
                $('html, body').removeAttr('style');
                $(this).parents(dataModalAttr).removeClass('window-open');
                $(this).parents(dataModalAttr).addClass('window-close');
            });
        }
    });
}