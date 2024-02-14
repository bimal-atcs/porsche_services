//run when page first loads
$(document).ready(function () {
    aside();
});

//run on every window resize
$(window).resize(function () {
    aside();
});

function aside() {
    let windowHeight = $(window).height();
    let headerH = $('.header').height();
    let serviceContentPadding = parseInt($('.service-content').css('padding-top'));
    let serviceBlockPadding = parseInt($('.service-block').css('padding-top'));
    let serviceViewPadding = parseInt($('.service-view').css('padding-top'));
    let sum = headerH + serviceContentPadding + serviceBlockPadding + serviceViewPadding;
    
    if($('.service-steps').hasClass('service-steps-sticky')) {
        let stepsH = $('.service-steps').outerHeight();

        $('.aside-nav').css('height', windowHeight - (sum + stepsH - serviceContentPadding));
        $('.aside').css('top', headerH + stepsH + serviceBlockPadding);
    } else {
        $('.aside-nav').css('height', windowHeight - (headerH + serviceBlockPadding));
        $('.aside').css('top', headerH + serviceBlockPadding);
    }

    if($('.aside-dropdown').hasClass('dropdown-option')) {
        let asideButton = $('.aside-bottom').outerHeight();
        $('.aside-links').css('margin-bottom', asideButton);
    } else {
        $('.aside-links').css('margin-bottom', '');
    }
}