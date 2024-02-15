$(document).ready(function() {
    videoClick();
});

//run on every window resize
$(window).resize(function () {
});

function videoClick() {
    // click on video icon
    $('.hero-alert-body-video-icon').click(function() {
        $('.hero-alert-body-video-text').css('display', 'none');
        $('.hero-alert-body-video-overlay').css('display', 'block');
        $(this).parents('.hero-alert').find('video').get(0).play();
        $(this).css('display', 'none');
    });

    // click on video overlay
    $('.hero-alert-body-video-overlay').click(function() {
        $('.hero-alert-body-video-text').removeAttr('style');
        $('.hero-alert-body-video-icon').removeAttr('style');
        $(this).parents('.hero-alert').find('video').get(0).pause();
        $(this).removeAttr('style');
    });
}


// hero slider
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
    cssEase: 'linear'
});