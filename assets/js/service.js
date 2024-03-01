//run when page first loads
$(document).ready(function () {
    serviceAccordion();
    serviceNotifications();
});

//run on every window resize
$(window).resize(function () {
});


// user notifications page
function serviceNotifications() {
    if($('.service-hero-content').hasClass('service-user')) {
        let userDetailHeight = $('.service-user-detail').outerHeight();
        let userDetailListHeight = $('.service-user-detail-lists').outerHeight();

        if(userDetailHeight >= userDetailListHeight) {
            $('.service-user-detail').removeClass('fixed');
            $('.service-user-detail-view').removeClass('service-user-detail-view-show');
            $('.service-user-arrow').removeClass('service-user-arrow-show');
        } else {
            $('.service-user-block').css('padding-right', '70px');
            $('.service-user-detail').addClass('fixed');
            $('.service-user-detail-view').addClass('service-user-detail-view-show');
            $('.service-user-arrow').addClass('service-user-arrow-show');
            
            // click on arrow
            $('.service-user-arrow').click(function() {
                $(this).toggleClass('service-user-arrow-active');
                
                let getClass = $(this).closest('.service-user-block').find('.service-user-detail');
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

// service accordion service page
function serviceAccordion() {
    $('.accordion-link').removeClass('accordion-link-active');
    $('.accordion-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('accordion-link-active');
        $(this).next('.accordion-content').slideToggle(350);
    });  
}