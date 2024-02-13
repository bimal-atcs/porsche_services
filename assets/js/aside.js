//run when page first loads
$(document).ready(function () {
    aside();
});

//run on every window resize
$(window).resize(function () {
    aside();
});

function aside() {
    $windowHeight = $(window).height();
    $headerH = $('.header').height();
    $serviceContentPadding = parseInt($('.service-content').css('padding-top'));
    $serviceBlockPadding = parseInt($('.service-block').css('padding-top'));
    $serviceViewPadding = parseInt($('.service-view').css('padding-top'));
    $sum = $headerH + $serviceContentPadding + $serviceBlockPadding + $serviceViewPadding;
    
    if($('.service-steps').hasClass('service-steps-sticky')) {
        $stepsH = $('.service-steps').outerHeight();

        $('.aside-nav').css('height', $windowHeight - ($sum + $stepsH - $serviceContentPadding));
        $('.aside').css('top', $headerH + $stepsH + $serviceBlockPadding);
    } else {
        $('.aside-nav').css('height', $windowHeight - ($headerH + $serviceBlockPadding));
        $('.aside').css('top', $headerH + $serviceBlockPadding);
    }

    if($('.aside-dropdown').hasClass('dropdown-option')) {
        $asideButton = $('.aside-bottom').outerHeight();
        $('.aside-links').css('margin-bottom', $asideButton);
    } else {
        $('.aside-links').css('margin-bottom', '');
    }
}