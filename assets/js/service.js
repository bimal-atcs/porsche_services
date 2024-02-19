//run when page first loads
$(document).ready(function () {
    serviceAccordion();
    serviceWindow();
    serviceScroll();
    serviceNotifications();
});

//run on every window resize
$(window).resize(function () {
});


// user notifications header
function serviceNotifications() {
    if($('.service-hero-content').hasClass('service-user')) {
        let userDetailHeight = $('.service-user-detail').outerHeight();
        let userDetailListHeight = $('.service-user-detail-lists').outerHeight();

        if(userDetailHeight >= userDetailListHeight) {
            $('.service-user-detail').removeClass('fixed');
            $('.service-user-detail-view').removeClass('service-user-detail-view-show');
            $('.service-user-arrow').removeClass('service-user-arrow-show');
            $('.service-user-block').css('padding-right', '16px');
        } else {
            $('.service-user-block').css('padding-right', '80px');
            $('.service-user-detail').addClass('fixed');
            $('.service-user-detail-view').addClass('service-user-detail-view-show');
            $('.service-user-arrow').addClass('service-user-arrow-show');
            
            // click on arrow
            $('.service-user-arrow').click(function() {
                let getClass = $(this).parents('.service-user-block').find('.service-user-detail');
                if (getClass.hasClass('fixed')) {
                    getClass.css('max-height', '100%');
                    getClass.removeClass('fixed');

                    if($('.service-user-detail-view').hasClass('service-user-detail-view-show')) {
                        $('.service-user-detail-view').removeClass('service-user-detail-view-show');
                    }
                } else if (!getClass.hasClass('fixed')) {
                    getClass.addClass('fixed');
                    getClass.removeAttr('style');
                    if(!$('.service-user-detail-view').hasClass('service-user-detail-view-show')) {
                        $('.service-user-detail-view').addClass('service-user-detail-view-show');
                    }
                }
            });
        }
    }
}

// aside link scroll
function serviceScroll() {
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