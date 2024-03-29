//run when page first loads
$(document).ready(function () {
    headerMenu();
    headerAlert();
});

//run on every window resize
$(window).resize(function () {
    headerMenu();
});

// header alert
function headerAlert() {
    if($('.header-navbar-icon').hasClass('header-navbar-icon-alert')) {
        $('.header-navbar-icon-alert').click(function() {
            let gerWinHeight = $(window).height();
            let getHeaderHeight = $('.header').outerHeight();
            let getAlert = $('.header-navbar-alert');
            let getAlertBorder = parseInt(getAlert.css('border'));
            let getAlertHeaderHeight = $('.header-navbar-alert-header').outerHeight();
            let getAlertFooterHeight = $('.header-navbar-alert-footer').outerHeight();
            let getAlertBodyPadding = parseInt($('.header-navbar-alert-body').css('padding'));
            let getListHeight = $('.header-navbar-alert-lists').outerHeight();
            let getListsLength = $('.header-navbar-alert-lists > li').length;
            
            // alert lists
            if(getListsLength >= 5) {
                getAlert.css('height', '500px')
            } else {
                if($('.header-navbar-alert').hasClass('header-navbar-alert-hide')) {
                    getAlert.css({
                        'height': getAlertHeaderHeight + getAlertFooterHeight + getListHeight + ((getAlertBodyPadding * 2) + (getAlertBorder * 2))
                    });
                } else {
                    getAlert.removeAttr('style');
                }
            }

            // has class
            if($('.header-navbar-alert').hasClass('header-navbar-alert-hide')) {
                $(this).closest('.header').css('z-index', 11);
                
                if($(window).width() >= 1024) {
                    $('.backdrop').css({
                        'z-index': 10,
                        'top': getHeaderHeight,
                        'height': gerWinHeight - getHeaderHeight
                    });
                }
                
                $('html').css('overflow', 'hidden');
                $('.backdrop').removeClass('backdrop-hide');
                $('.backdrop').addClass('backdrop-show');
                $(this).next('.header-navbar-alert').removeClass('header-navbar-alert-hide');
                $(this).next('.header-navbar-alert').addClass('header-navbar-alert-show');
            }
            else if ($('.header-navbar-alert').hasClass('header-navbar-alert-show')) {
                $(this).closest('.header').removeAttr('style');
                $('.backdrop').removeAttr('style');
                $('html').removeAttr('style');
                $('.backdrop').addClass('backdrop-hide');
                $('.backdrop').removeClass('backdrop-show');
                $(this).next('.header-navbar-alert').addClass('header-navbar-alert-hide');
                $(this).next('.header-navbar-alert').removeClass('header-navbar-alert-show');
            }
        });
           
        // click on close
        $('.header-navbar-alert-close').click(function() {
            $('.header').removeAttr('style');
            $(this).closest('.header-navbar-alert').removeClass('header-navbar-alert-show');
            $(this).closest('.header-navbar-alert').addClass('header-navbar-alert-hide');
            $(this).closest('.header-navbar-alert').removeAttr('style');

            if($(window).width() >= 1024) {
                if($('.backdrop').hasClass('backdrop-show')) {
                    $('html').removeAttr('style');
                    $('.backdrop').removeAttr('style');
                    $('.backdrop').removeClass('backdrop-show')
                    $('.backdrop').addClass('backdrop-hide');
                }
            }
        });
    }
}

// header menu
function headerMenu() {
    let getWinWidth = $(window).width();
    let getBackdrop = $('.backdrop');
    let getHeaderNavDrawWidth = $('.header-navbar-drawer').outerWidth();
    let getHeaderNavManWidth = $('.header-navbar-manage').outerWidth();

    if($('.page-body').hasClass('scrollbar-dynamic')) {
        $('.page-body').removeClass('page-scroll-off');
        $('.page-body').addClass('page-scroll-on');

        $('html, body').css({
            'height': '100%',
            'overflow': 'hidden'
        });
    }

    if ($(window).width() >= 1280) {
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
            $('html').css('overflow', 'hidden');
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').removeClass('page-scroll-on');
                $('.page-body').addClass('page-scroll-off');
            }
            $(".header-navbar-drawer").addClass('header-navbar-drawer-active');
            $('.header-navbar-close').addClass('header-navbar-close-active');
            $('.header-navbar-manage').removeClass('header-navbar-manage-active');
            
            getBackdrop.css({
                'left': getHeaderNavDrawWidth,
                'width': getWinWidth - getHeaderNavDrawWidth
            });
            if(getBackdrop.hasClass('backdrop-hide')) {
                getBackdrop.removeClass('backdrop-hide');
                getBackdrop.addClass('backdrop-show');
            }
        });

        $('.header-navbar-close-icon').click(function() {
            $('html').removeAttr('style');
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').removeClass('page-scroll-off');
                $('.page-body').addClass('page-scroll-on');
            }
            $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
            $('.mega-block').removeClass('mega-block-active');
            $('.mega-back').removeClass('mega-back-active');
            $('.header-navbar-close').removeClass('header-navbar-close-active');

            if(getBackdrop.hasClass('backdrop-show')) {
                getBackdrop.removeClass('backdrop-show');
                getBackdrop.addClass('backdrop-hide');
            }
        });

        // child menu drawer
        $(".mega-has-child .mega-link").click(function() {
            $(this).closest('.mega-has-child').find('.mega-block').addClass('mega-block-active');
            $(this).closest('.mega-has-child').find('.mega-back').addClass('mega-back-active');
            $(this).closest('.header-navbar-drawer').addClass('header-navbar-drawer-overflow');
        });

        $('.mega-back').click(function() {
            $(this).closest('.mega-has-child').find('.mega-block').removeClass('mega-block-active');
            $(this).closest('.mega-has-child').find('.mega-back').removeClass('mega-back-active');
            $(this).closest('.header-navbar-drawer').removeClass('header-navbar-drawer-overflow');
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
            $('html').css('overflow', 'hidden');
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').removeClass('page-scroll-on');
                $('.page-body').addClass('page-scroll-off');
            }
            $('.header-navbar-manage').addClass('header-navbar-manage-active');
            $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
            $(".header-navbar-close").removeClass('header-navbar-close-active');
            $('.mega-block').removeClass('mega-block-active');
            $('.mega-back').removeClass('mega-back-active');

            getBackdrop.css({
                'right': getHeaderNavManWidth,
                'width': getWinWidth - getHeaderNavManWidth
            });
            if(getBackdrop.hasClass('backdrop-hide')) {
                getBackdrop.removeClass('backdrop-hide');
                getBackdrop.addClass('backdrop-show');
            }
        });

        $('.header-navbar-manage-close').click(function() {
            $('html').removeAttr('style');
            if($('.page-body').hasClass('scrollbar-dynamic')) {
                $('.page-body').addClass('page-scroll-on');
                $('.page-body').removeClass('page-scroll-off');
            }
            $('.header-navbar-manage').removeClass('header-navbar-manage-active');

            if(getBackdrop.hasClass('backdrop-show')) {
                getBackdrop.removeClass('backdrop-show');
                getBackdrop.addClass('backdrop-hide');
            }
        });
    }
}