//run when page first loads
$(document).ready(function () {
    dropdownDown();
});

//run on every window resize
$(window).resize(function () {
    dropdownDown();
});

// dropdown
function dropdownDown() {
    $('.dropdown').removeClass('dropdown-active');

    $(".dropdown").click(function() {
        if ($(this).hasClass("dropdown-active")) {
            $('html').removeAttr('style');
            $('.backdrop').removeClass('backdrop-show');
            $('.backdrop').addClass('backdrop-hide');
            $(this).removeAttr('style');
            $(this).removeClass("dropdown-active");
        }
        else if (!$(this).hasClass("dropdown-active")) {
            $('html').css('overflow', 'hidden');
            $('.backdrop').removeClass('backdrop-hide');
            $('.backdrop').addClass('backdrop-show');
            $(this).css('z-index', 11);
            $(this).addClass("dropdown-active");
        }
    });
}