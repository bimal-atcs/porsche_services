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
    let winWidth = $(window).width();

    $(".tip").removeClass('tip-show');
    $(".tip").removeClass('tip-top-left');
    $(".tip").removeClass('tip-top-right');
    
    $('.tip').mouseenter(function(e) {
        e.preventDefault();
        $(this).addClass('tip-show');

        let toolTipLeft = $(this).offset().left;
        let getWidth = winWidth/2;
        if(toolTipLeft < getWidth/2) {
            $(".tip").removeClass('tip-top-right');
            $(this).addClass('tip-top-left');
        }
        else if(toolTipLeft > getWidth) {
            $(".tip").removeClass('tip-top-left');
            $(this).addClass('tip-top-right');
        }
    }).mouseleave(function(e) {
        e.preventDefault();
        $(".tip").removeClass('tip-show');
        $(".tip").removeClass('tip-top-left');
        $(".tip").removeClass('tip-top-right');
    });

    // tip has tip-view-option
    if($('.tip').hasClass('tip-view-option')) {
        $('.tip-view').removeClass('tip-view-left');
        $('.tip-view').removeClass('tip-view-right');
        $(".tip-view").removeClass('tip-view-show');

        $('.tip-view-option').removeClass('tip-top-left');
        $('.tip-view-option').removeClass('tip-top-right');
        $(".tip-view-option").removeClass('tip-show');

        $('.tip').mouseenter(function(e) {
            e.preventDefault();
            let tipThis = $(this).find('.tip-view');
            tipThis.addClass('tip-view-show');
    
            toolTipLeft = $(this).offset().left;
            getWidth = winWidth/2;
            if(toolTipLeft < getWidth/2) {
                $('.tip-view-option').removeClass('tip-top-left');
                $('.tip-view-option').removeClass('tip-top-right');
                $(".tip-view-option").removeClass('tip-show');

                $(".tip-view").removeClass('tip-view-right');
                tipThis.addClass('tip-view-left');
            }
            else if(toolTipLeft > getWidth) {
                $('.tip-view-option').removeClass('tip-top-left');
                $('.tip-view-option').removeClass('tip-top-right');
                $(".tip-view-option").removeClass('tip-show');

                $(".tip-view").removeClass('tip-view-left');
                tipThis.addClass('tip-view-right');
            }
        }).mouseleave(function(e) {
            e.preventDefault();
            $('.tip-view').removeClass('tip-view-left');
            $('.tip-view').removeClass('tip-view-right');
            $(".tip-view").removeClass('tip-view-show');
            
            $('.tip-view-option').removeClass('tip-top-left');
            $('.tip-view-option').removeClass('tip-top-right');
            $(".tip-view-option").removeClass('tip-show');
        });
    }
}