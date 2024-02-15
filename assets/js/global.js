$(document).ready(function() {
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