$(document).ready(function() {
    backDrop();
    scrollUpButton();
    // scrollbar
    $('.scrollbar-dynamic').scrollbar();
});

//run on every window resize
$(window).resize(function () {
    scrollUpButton();
    // scrollbar
    $('.scrollbar-dynamic').scrollbar();
});

// backdrop
function backDrop() {
    $('.backdrop').click(function() {
        if($('.backdrop').hasClass('backdrop-show')) {
            // html
            $('html').removeAttr('style');
    
            // header
            $('.header').removeAttr('style');
            $('.header-navbar-alert').removeAttr('style');
            if($('.header-navbar-alert').hasClass('header-navbar-alert-show')) {
                $('.header-navbar-alert').removeClass('header-navbar-alert-show');
                $('.header-navbar-alert').addClass('header-navbar-alert-hide');
            }

            // header mega menu navbar drawer
            if($('.header-navbar-drawer').hasClass('header-navbar-drawer-active')) {
                $('.header-navbar-drawer').removeClass('header-navbar-drawer-active');

                if($('.page-body').hasClass('scrollbar-dynamic')) {
                    $('.page-body').removeClass('page-scroll-off');
                    $('.page-body').addClass('page-scroll-on');
                }
            }

            // header mega menu navbar drawer close
            if($('.header-navbar-close').hasClass('header-navbar-close-active')) {
                $('.header-navbar-close').removeClass('header-navbar-close-active');
            }

            // header user icon (iPad)
            if($('.header-navbar-manage').hasClass('header-navbar-manage-active')) {
                $('.header-navbar-manage').removeClass('header-navbar-manage-active');

                if($('.page-body').hasClass('scrollbar-dynamic')) {
                    $('.page-body').removeClass('page-scroll-off');
                    $('.page-body').addClass('page-scroll-on');
                }
            }

            // dropdown
            if($('.dropdown').hasClass('dropdown-active')) {
                $('.dropdown').removeAttr('style');
                $('.dropdown').removeClass('dropdown-active'); 
            }
            
            // dropdown scp
            $('.dropdown-group').removeAttr('style');
            $('.dropdown-option').removeClass('dropdown-select-open');
            // $('.dropdown-select-clear').removeClass('dropdown-select-clear-active');
            
            // aside
            $('.aside').css('z-index', '');
            if($('.aside-dropdown').hasClass('dropdown-option-active')) {
                $('.aside-dropdown').removeClass('dropdown-option-active');
            }
            // aside menu iPad
            $('.aside').removeClass('aside-show');
            $('.aside-menu').removeClass('aside-menu-active');
            
            // self
            $(this).removeAttr('style');
            $(this).removeClass('backdrop-show')
            $(this).addClass('backdrop-hide');
        }
    });
}

// scroll up button
function scrollUpButton() {
    if($('.scroll-up').length > 0) {
        $(window).scroll(function() {
            let windowHeight = $(window).height();
            let winScroll = $(window).scrollTop();

            if (winScroll >= windowHeight/2) {
                $('.scroll-up').addClass('scroll-up-show');
            } else {
                $('.scroll-up').removeClass('scroll-up-show');
            }
        });

        // scroll on top
        $('.scroll-up').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 900);
        });
    }
}