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

    // switcher
    $('.switch').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('switch-active');
    });

    // sticky aside left dropdown option
    if ($('.aside-dropdown').hasClass('dropdown-option')) {
        $('.aside-dropdown .aside-button').click(function(e) {
            e.preventDefault();
            $(this).closest('.aside-dropdown').toggleClass('dropdown-option-active');
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
    
    // select dropdown label
    if ($('.dropdown-select').hasClass('dropdown-option')) {
        $('.dropdown-option .dropdown-label').click(function(e) {
            e.preventDefault();
            $(this).closest('.dropdown-option').toggleClass('dropdown-select-open');
            
            if ($('.dropdown-select').hasClass('dropdown-select-open')) {
                $(this).closest('body').find('.backdrop').removeClass('backdrop-hide');
                $(this).closest('body').find('.backdrop').addClass('backdrop-show');
                $('.dropdown-select-clear').addClass('dropdown-select-clear-active');
            } else {
                $(this).closest('body').find('.backdrop').removeClass('backdrop-show');
                $(this).closest('body').find('.backdrop').addClass('backdrop-hide');
                $('.dropdown-select-clear').removeClass('dropdown-select-clear-active');
            }
        });

        // backdrop
        $('.backdrop').click(function() {
            if($('.backdrop').hasClass('backdrop-show')) {
                $('.dropdown-select').removeClass('dropdown-select-open');
                $('.dropdown-select-clear').removeClass('dropdown-select-clear-active');
                $(this).removeClass('backdrop-show')
                $(this).addClass('backdrop-hide');
            }
        });

        // dropdown select clear
        $('.dropdown-select-clear').click(function(e) {
            e.preventDefault();
            $(this).closest('body').find('.backdrop').addClass('backdrop-hide');
            $(this).closest('body').find('.backdrop').removeClass('backdrop-show');
            $('.dropdown-select').removeClass('dropdown-select-open');
            $('.dropdown-view-label').removeClass('dropdown-view-label-active');
            $('.switch').removeClass('switch-active');
            $(this).removeClass('dropdown-select-clear-active');
        });
    } else {
        $('.dropdown-option').removeClass('.dropdown-select-open');
    }
}