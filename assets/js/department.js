//run when page first loads
$(document).ready(function () {
    departOnHoverLink();
});

//run on every window resize
$(window).resize(function () {
    departOnHoverLink();
});

function departOnHoverLink() {
    if ($(window).width() >= 1280) {
        // on hover left
        $('.depart-figure-left .depart-link').mouseenter(function() {
            $(".depart-figure-right .depart-link").css({
                'opacity': '0.65'
            });
        }).mouseleave(function () {
            $(".depart-figure-right .depart-link").removeAttr("style");
        });

        // on hover right
        $('.depart-figure-right .depart-link').mouseenter(function() {
            $(".depart-figure-left .depart-link").css({
                'opacity': '0.65'
            });
        }).mouseleave(function () {
            $(".depart-figure-left .depart-link").removeAttr("style");
        });
    }
    else {
        $(".depart-figure-right .depart-link").removeAttr("style");
        $(".depart-figure-left .depart-link").removeAttr("style");
    }
}