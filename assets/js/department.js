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
            $(".depart-figure-right .depart-gradient").css({
                'height': '80%'
            });
        }).mouseleave(function () {
            $(".depart-figure-right .depart-gradient").removeAttr("style");
        });

        // on hover right
        $('.depart-figure-right .depart-link').mouseenter(function() {
            $(".depart-figure-left .depart-gradient").css({
                'height': '80%'
            });
        }).mouseleave(function () {
            $(".depart-figure-left .depart-gradient").removeAttr("style");
        });
    }
    else {
        // on hover left
        $('.depart-figure-left .depart-link').mouseenter(function() {
            $(".depart-figure-right .depart-gradient").removeAttr("style");
        }).mouseleave(function () {
            $(".depart-figure-right .depart-gradient").removeAttr("style");
        });

        // on hover right
        $('.depart-figure-right .depart-link').mouseenter(function() {
            $(".depart-figure-left .depart-gradient").removeAttr("style");
        }).mouseleave(function () {
            $(".depart-figure-left .depart-gradient").removeAttr("style");
        });
    }
}