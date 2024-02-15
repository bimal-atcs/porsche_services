//run when page first loads
$(document).ready(function () {
    labelHover();
});

//run on every window resize
$(window).resize(function () {
    labelHover();
});

function labelHover() {
    let winWidth = $(window).width();
    let winHeight = $(window).height();

    $('.label-profile-card').removeClass('profile-card-top');
    $('.label-profile-card').removeClass('profile-card-right');
    $('.label-profile-card').removeClass('profile-card-bottom');
    $('.label-profile-card').removeClass('profile-card-left');
    $(".label-profile-card").removeClass('profile-card-show');
    
    
    if ($('.label').hasClass('label-profile')) {
        $('.label-profile').mouseenter(function(e) {
            e.preventDefault();
            $(this).find('.label-profile-card').addClass('profile-card-show');
            $(this).find('.label-profile-card').addClass('profile-card-bottom');

            let getWidth = winWidth/2;
            let labelTipLeft = $(this).offset().left;

            // from left
            if(labelTipLeft < getWidth) {
                $(this).find('.label-profile-card').addClass('profile-card-left');
            }
            else if(labelTipLeft > getWidth) {
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