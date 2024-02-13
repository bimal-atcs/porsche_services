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

    // tip has attribute data-tooltip
    if($('.tip').attr('data-tooltip')) {
        $('.tip').removeClass('tip-top-left');
        $('.tip').removeClass('tip-top-right');
        $(".tip").removeClass('tip-show');
        
        $('.tip').mouseenter(function(e) {
            e.preventDefault();
            $(this).addClass('tip-show');
    
            $toolTipLeft = $(this).offset().left;
            $getWidth = $winWidth/2;
            if($toolTipLeft < $getWidth/2) {
                $(".tip").removeClass('tip-top-right');
                $(this).addClass('tip-top-left');
            }
            else if($toolTipLeft > $getWidth) {
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
    
    // tip has tip-view
    if($('.tip').hasClass('tip-view-option')) {
        $('.tip-view').removeClass('tip-view-left');
        $('.tip-view').removeClass('tip-view-right');
        $(".tip-view").removeClass('tip-view-show');
        
        $('.tip').mouseenter(function(e) {
            e.preventDefault();
            $this = $(this).find('.tip-view');
            $this.addClass('tip-view-show');
    
            $toolTipLeft = $(this).offset().left;
            $getWidth = $winWidth/2;
            if($toolTipLeft < $getWidth/2) {
                $(".tip-view").removeClass('tip-view-right');
                $this.addClass('tip-view-left');
            }
            else if($toolTipLeft > $getWidth) {
                $(".tip-view").removeClass('tip-view-left');
                $this.addClass('tip-view-right');
            }
        }).mouseleave(function(e) {
            e.preventDefault();
            $('.tip-view').removeClass('tip-view-left');
            $('.tip-view').removeClass('tip-view-right');
            $(".tip-view").removeClass('tip-view-show');
        });
    }
}