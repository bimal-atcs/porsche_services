//run when page first loads
$(document).ready(function () {
    pageScrollWindow();
});

//run on every window resize
$(window).resize(function () {
});

// page scroll to section
function pageScrollWindow() {
    $('.service-hero-item').removeClass('service-hero-item-active');

    // item has scrolling page
    if($('.service-hero-item').hasClass('service-hero-item-scroll')) {
        // remove active class on scroll
        $(window).scroll(function() {
            let headerHeight = $('.header').outerHeight();
            let winScroll = $(window).scrollTop();
            let serviceSlidesTop = $('.service-slides').offset().top;
        
            if (winScroll >= serviceSlidesTop - headerHeight) {
                $('.service-hero-item').removeClass('service-hero-item-active');
            }
        });

        // scroll to ID section
        $('.service-hero-item-scroll').click(function(e) {
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

    // item has window modal
    if($('.service-hero-item').hasClass('service-hero-item-window')) {
        $('.service-hero-item-window').click(function(e) {
            e.preventDefault();
            let dataModalAttr = $($(this).attr('href'));
    
            if(dataModalAttr.hasClass('window-close')) {
                $('html, body').css('overflow', 'hidden');
                dataModalAttr.removeClass('window-close');
                dataModalAttr.addClass('window-open');
    
                $('.window-header-close, .window-blur').click(function() {
                    $('html, body').removeAttr('style');
                    $(this).closest(dataModalAttr).removeClass('window-open');
                    $(this).closest(dataModalAttr).addClass('window-close');
                });
            }
        });
    }
}