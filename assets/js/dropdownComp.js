//run when page first loads
$(document).ready(function () {
    dropdownComp();
});

//run on every window resize
$(window).resize(function () {
});

function dropdownComp() {
    // dropdowm sub items
    $('.dropdown-view-label').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('dropdown-view-label-active');
    });

    // switcher toggle
    $('.switch').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('switch-active');
    });

    // sticky aside left dropdown option
    if ($('.aside-dropdown').hasClass('dropdown-option')) {
        $('.aside-dropdown .aside-button').click(function(e) {
            e.preventDefault();
            if(!$('.aside-dropdown').hasClass('dropdown-option-active')) {
                $('html').css('overflow', 'hidden');
                $(this).closest('.aside').css('z-index', 11);
                $(this).closest('.aside-dropdown').addClass('dropdown-option-active');

                if($('.backdrop').hasClass('backdrop-hide')) {
                    $('.backdrop').removeClass('backdrop-hide');
                    $('.backdrop').addClass('backdrop-show');
                }
            }
            else if($('.aside-dropdown').hasClass('dropdown-option-active')) {
                $('html').removeAttr('style');
                $(this).closest('.aside').css('z-index', '');
                $(this).closest('.aside-dropdown').removeClass('dropdown-option-active');

                if($('.backdrop').hasClass('backdrop-show')) {
                    $('.backdrop').removeClass('backdrop-show');
                    $('.backdrop').addClass('backdrop-hide');
                }
            }
        });

        // dropdown clear
        $('.dropdown-clear').click(function(e) {
            e.preventDefault();
            $('.dropdown-view-label').removeClass('dropdown-view-label-active');
            $('.switch').removeClass('switch-active');
        });
    } else {
        $('.dropdown-option').removeClass('.dropdown-option-active');
    }
    
    // select dropdown label scp page
    if ($('.dropdown-select').hasClass('dropdown-option')) {
        $('.dropdown-option .dropdown-label').click(function(e) {
            e.preventDefault();
            $(this).closest('.dropdown-option').toggleClass('dropdown-select-open');
            
            if ($('.dropdown-select').hasClass('dropdown-select-open')) {
                $('html').css('overflow', 'hidden');
                $(this).closest('body').find('.backdrop').removeClass('backdrop-hide');
                $(this).closest('body').find('.backdrop').addClass('backdrop-show');
                $('.dropdown-group').css('z-index', 11);
                $('.dropdown-select-clear').addClass('dropdown-select-clear-active');
            } else {
                $('html').removeAttr('style');
                $(this).closest('body').find('.backdrop').removeClass('backdrop-show');
                $(this).closest('body').find('.backdrop').addClass('backdrop-hide');
                $('.dropdown-group').removeAttr('style');
                $('.dropdown-select-clear').removeClass('dropdown-select-clear-active');
            }
        });

        // dropdown select clear
        $('.dropdown-select-clear').click(function(e) {
            e.preventDefault();
            $('html').removeAttr('style');
            $(this).closest('body').find('.backdrop').addClass('backdrop-hide');
            $(this).closest('body').find('.backdrop').removeClass('backdrop-show');
            $('.dropdown-group').removeAttr('style');
            $('.dropdown-select').removeClass('dropdown-select-open');
            $('.dropdown-view-label').removeClass('dropdown-view-label-active');
            $('.switch').removeClass('switch-active');
            $(this).removeClass('dropdown-select-clear-active');
        });
    } else {
        $('.dropdown-option').removeClass('.dropdown-select-open');
    }
}