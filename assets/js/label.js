//run when page first loads
$(document).ready(function () {
    labelHover();
});

//run on every window resize
$(window).resize(function () {
    labelHover();
});

function labelHover() {
    $winWidth = $(window).width();
    $winHeight = $(window).height();

    $labelProfileTop = $('.label-profile').offset().top;
    $labelProfileLeft = $('.label-profile').offset().left;

    $('.label-profile-card').removeClass('profile-card-top');
    $('.label-profile-card').removeClass('profile-card-right');
    $('.label-profile-card').removeClass('profile-card-bottom');
    $('.label-profile-card').removeClass('profile-card-left');
    $(".label-profile-card").removeClass('profile-card-show');
    
    
    if ($('.label').hasClass('label-profile')) {
        $('.label-profile').mouseenter(function(e) {
            e.preventDefault();
            $(this).find('.label-profile-card').addClass('profile-card-show');
    
            $getWidth = $winWidth/2;
            $getHeight = $winHeight/2;
            $toolTipLeft = $(this).offset().left;
            $toolTipTop = $(this).offset().top;
            
            if($toolTipTop < $getHeight) {
                $(this).find('.label-profile-card').addClass('profile-card-top');
            }
            else if($toolTipTop > $getHeight) {
                $(this).find('.label-profile-card').addClass('profile-card-bottom');
            }

            if($toolTipLeft < $getWidth) {
                $(this).find('.label-profile-card').addClass('profile-card-left');
            }
            else if($toolTipLeft > $getWidth) {
                $(this).find('.label-profile-card').addClass('profile-card-right');
            }
        }).mouseleave(function(e) {
            e.preventDefault();
            $('.label-profile-card').removeClass('profile-card-top');
            $('.label-profile-card').removeClass('profile-card-right');
            $('.label-profile-card').removeClass('profile-card-bottom');
            $('.label-profile-card').removeClass('profile-card-left');
            $(".label-profile-card").removeClass('profile-card-show');
        });
    }
}