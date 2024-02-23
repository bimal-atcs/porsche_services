//run when page first loads
$(document).ready(function () {
    sliding();
    slidingCard();
    infoHover();
});

//run on every window resize
$(window).resize(function () {
    sliding();
    slidingCard();
    infoHover();
});

// sliding items height
function sliding() {
    $slideHeight = $('.flickity-viewport').css('height');
    $('.sliding-item').css('height', $slideHeight);
}

// on hover slide items
function slidingCard() {
    $('.sliding-card').mouseenter(function(e) {
        e.preventDefault();
        $(this).parents(".sliding-item").css({
            'z-index': '9'
        });
    }).mouseleave(function(e) {
        e.preventDefault();
        $(this).parents(".sliding-item").css('z-index', '');
    });
}

// info hover popup
function infoHover() {
    let winWidth = $(window).width();

    $('.sliding-card').mouseenter(function(e) {
        e.preventDefault();
        $(this).find(".info-block").addClass('info-block-show');

        let slideCardThis = $(this).offset().left;
        let getWdith = winWidth/2;
        if(slideCardThis < getWdith) {
            $(".info-block").removeClass('info-block-right');
            $(this).find(".info-block").addClass('info-block-left');
        }
        else {
            $(".info-block").removeClass('info-block-left');
            $(this).find(".info-block").addClass('info-block-right');
        }
    }).mouseleave(function(e) {
        e.preventDefault();
        $(".info-block").removeClass('info-block-show');
    });
}

// sliding drag scroll
function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var navs = document.querySelectorAll('.sliding-drag');

if (!is_touch_device()) {
    for (var i = 0, length = navs.length; i < length; i++) {
        var nav = navs[i];
        new Flickity(nav, {
            cellAlign: 'left',
            freeScroll: true,
            prevNextButtons: false,
            pageDots: false,
            contain: true
        });
    }
}