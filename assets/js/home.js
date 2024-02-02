//run when page first loads
$(document).ready(function () {
    pageContent();

    $(".hero-slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        draggable: false,
        fade: true,
        infinite: true,
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