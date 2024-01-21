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
            $(this).addClass("depart-link--hover");
            $(".depart-figure-left").addClass("depart-figure--hover");
            $(".depart-figure-right .depart-link").addClass("depart-link--opacity");
        }).mouseleave(function () {
            $(this).removeClass("depart-link--hover");
            $(".depart-figure-left").removeClass("depart-figure--hover");
            $(".depart-figure-right .depart-link").removeClass("depart-link--opacity");
        });

        // on hover right
        $('.depart-figure-right .depart-link').mouseenter(function() {
            $(this).addClass("depart-link--hover");
            $(".depart-figure-right").addClass("depart-figure--hover");
            $(".depart-figure-left .depart-link").addClass("depart-link--opacity");
        }).mouseleave(function () {
            $(this).removeClass("depart-link--hover");
            $(".depart-figure-right").removeClass("depart-figure--hover");
            $(".depart-figure-left .depart-link").removeClass("depart-link--opacity");
        });
    }
    else {
        // on hover left
        $('.depart-figure-left .depart-link').mouseenter(function() {
            $(this).removeClass("depart-link--hover");
            $(".depart-figure-left").removeClass("depart-figure--hover");
            $(".depart-figure-right .depart-link").removeClass("depart-link--opacity");
        }).mouseleave(function () {
            $(this).removeClass("depart-link--hover");
            $(".depart-figure-left").removeClass("depart-figure--hover");
            $(".depart-figure-right .depart-link").removeClass("depart-link--opacity");
        });

        // on hover right
        $('.depart-figure-right .depart-link').mouseenter(function() {
            $(this).removeClass("depart-link--hover");
            $(".depart-figure-right").removeClass("depart-figure--hover");
            $(".depart-figure-left .depart-link").removeClass("depart-link--opacity");
        }).mouseleave(function () {
            $(this).removeClass("depart-link--hover");
            $(".depart-figure-right").removeClass("depart-figure--hover");
            $(".depart-figure-left .depart-link").removeClass("depart-link--opacity");
        });
    }
}