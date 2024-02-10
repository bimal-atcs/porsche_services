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
    $stepsH = $('.service-steps').outerHeight();
    $serviceContentPadding = parseInt($('.service-content').css('padding-top'));
    $serviceBlockPadding = parseInt($('.service-steps').css('padding-top'));
    $serviceViewPadding = parseInt($('.service-view').css('padding-top'));

    $('.aside-nav').css('height', $windowHeight - ($headerH + $stepsH + $serviceContentPadding + $serviceBlockPadding));
    $('.aside').css('top', $headerH + $stepsH + $serviceBlockPadding);

    if ($('.aside-nav').find('aside-bottom')) {
        $asideButton = $('.aside-bottom').outerHeight();
        $('.aside-links').css('margin-bottom', $asideButton);
    } else {
        $('.aside-links').css('margin-bottom', '');
    }
}