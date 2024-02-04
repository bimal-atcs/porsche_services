//run when page first loads
$(document).ready(function () {
    headerMenu();
});

//run on every window resize
$(window).resize(function () {
    headerMenu();
});

function headerMenu() {
    if ($(window).width() >= 1440) {
        $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
        $('.header-navbar-drawer').removeClass('header-navbar-drawer-overflow');
        $('.mega-block').removeClass('mega-block-active');
        $('.mega-back').removeClass('mega-back-active');
        $('.header-navbar-close').removeClass('header-navbar-close-active');
        $('.page-body').removeClass('page-scroll-off');
        $('.page-body').addClass('page-scroll-on');
    }
    else {
        // main menu drawer
        $(".header-navbar-menu").click(function() {
            $(".header-navbar-drawer").addClass('header-navbar-drawer-active');
            $('.header-navbar-close').addClass('header-navbar-close-active');
            $('.page-body').removeClass('page-scroll-on');
            $('.page-body').addClass('page-scroll-off');
        });

        $('.header-navbar-close-icon').click(function() {
            $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
            $('.mega-block').removeClass('mega-block-active');
            $('.mega-back').removeClass('mega-back-active');
            $('.header-navbar-close').removeClass('header-navbar-close-active');
            $('.page-body').removeClass('page-scroll-off');
            $('.page-body').addClass('page-scroll-on');
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
}