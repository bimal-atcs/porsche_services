//run when page first loads
$(document).ready(function () {
    homeHeroSlider();
});

//run on every window resize
$(window).resize(function () {
    homeHeroSlider();
});

function homeHeroSlider() {
    $(".hero-slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        speed: 5000,
        fade: true,
        cssEase: 'linear'
    });
}