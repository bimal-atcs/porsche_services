//run when page first loads
$(document).ready(function () {
    headerMenu();
});

//run on every window resize
$(window).resize(function () {
    headerMenu();
});

function headerMenu() {
    if($('.page-body').hasClass('scrollbar-dynamic')) {
        $('.page-body').removeClass('page-scroll-off');
        $('.page-body').addClass('page-scroll-on');

        $('html, body').css({
            'height': '100%',
            'overflow': 'hidden'
        });
    }

    if ($(window).width() >= 1440) {
        $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
        $('.header-navbar-drawer').removeClass('header-navbar-drawer-overflow');
        $('.mega-block').removeClass('mega-block-active');
        $('.mega-back').removeClass('mega-back-active');
        $('.header-navbar-close').removeClass('header-navbar-close-active');
        $('.header-navbar-manage').removeClass('header-navbar-manage-active');
    }
    else {
        // main menu drawer
        $(".header-navbar-menu").click(function() {
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').removeClass('page-scroll-on');
                $('.page-body').addClass('page-scroll-off');
            }
            $(".header-navbar-drawer").addClass('header-navbar-drawer-active');
            $('.header-navbar-close').addClass('header-navbar-close-active');
            $('.header-navbar-manage').removeClass('header-navbar-manage-active');
        });

        $('.header-navbar-close-icon').click(function() {
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').removeClass('page-scroll-off');
                $('.page-body').addClass('page-scroll-on');
            }
            $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
            $('.mega-block').removeClass('mega-block-active');
            $('.mega-back').removeClass('mega-back-active');
            $('.header-navbar-close').removeClass('header-navbar-close-active');
        });

        // child menu drawer
        $(".mega-has-child .mega-link").click(function() {
            $(this).parents('.mega-has-child').find('.mega-block').addClass('mega-block-active');
            $(this).parents('.mega-has-child').find('.mega-back').addClass('mega-back-active');
            $(this).parents('.header-navbar-drawer').addClass('header-navbar-drawer-overflow');
        });

        $('.mega-back').click(function() {
            $(this).parents('.mega-has-child').find('.mega-block').removeClass('mega-block-active');
            $(this).parents('.mega-has-child').find('.mega-back').removeClass('mega-back-active');
            $(this).parents('.header-navbar-drawer').removeClass('header-navbar-drawer-overflow');
        });
    }

    if ($(window).width() >= 1024) {
        $('.header-navbar-manage').removeClass('header-navbar-manage-active');

        $('#header-search').click(function() {
            $('.header-navbar-inputs').addClass('header-navbar-inputs-active');
        });

        $('.header-navbar-input-close').click(function() {
            $('.header-navbar-inputs').removeClass('header-navbar-inputs-active');
        });
    }
    else {
        $('.header-navbar-inputs').removeClass('header-navbar-inputs-active');
        $('#header-search').click(function() {
            $('.header-navbar-inputs').removeClass('header-navbar-inputs-active');
        });

        // on grid icon mobile menu right side
        $('.header-navbar-setting-icon').click(function() {
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').removeClass('page-scroll-on');
                $('.page-body').addClass('page-scroll-off');
            }
            $('.header-navbar-manage').addClass('header-navbar-manage-active');
            $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
            $(".header-navbar-close").removeClass('header-navbar-close-active');
            $('.mega-block').removeClass('mega-block-active');
            $('.mega-back').removeClass('mega-back-active');
        });

        $('.header-navbar-manage-close').click(function() {
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').addClass('page-scroll-on');
                $('.page-body').removeClass('page-scroll-off');
            }
            $('.header-navbar-manage').removeClass('header-navbar-manage-active');
        });
    }
}