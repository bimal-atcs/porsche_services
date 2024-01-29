//run when page first loads
$(document).ready(function () {
    pageContent();

    $(".hero-slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

//run on every window resize
$(window).resize(function () {
    pageContent();
});

function pageContent() {
    $headerHeight = $('.header').outerHeight();
    $footerHeight = $('.footer').outerHeight();

    $(".page-content").css({
        'margin-bottom': $footerHeight
    });
}