//run when page first loads
$(document).ready(function () {
    toolTipHover();
});

//run on every window resize
$(window).resize(function () {
    toolTipHover();
});

// tool tip hover
function toolTipHover() {
    $winWidth = $(window).width();

    $('.tip').removeClass('tip-top-left');
    $('.tip').removeClass('tip-top-right');
    
    $('.tip').mouseenter(function(e) {
        e.preventDefault();
        $(this).addClass('tip-show');

        $toolTipThis = $(this).offset().left;
        $getWdith = $winWidth/2;
        if($toolTipThis < $getWdith/2) {
            $(".tip").removeClass('tip-top-right');
            $(this).addClass('tip-top-left');
        }
        else if($toolTipThis > $getWdith) {
            $(".tip").removeClass('tip-top-left');
            $(this).addClass('tip-top-right');
        }
    }).mouseleave(function(e) {
        e.preventDefault();
        $('.tip').removeClass('tip-top-left');
        $('.tip').removeClass('tip-top-right');
        $(".tip").removeClass('tip-show');
    });
}