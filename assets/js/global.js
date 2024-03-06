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

            // dropdown
            if($('.dropdown').hasClass('dropdown-active')) {
               $('.dropdown').removeClass('dropdown-active'); 
            }
            
            // dropdown scp
            $('.dropdown-group').removeAttr('style');
            $('.dropdown-option').removeClass('dropdown-select-open');
            $('.dropdown-select-clear').removeClass('dropdown-select-clear-active');
            
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