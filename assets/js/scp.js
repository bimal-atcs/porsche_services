//run when page first loads
$(document).ready(function () {
    gradientSCP();
});

//run on every window resize
$(window).resize(function () {
    gradientSCP();
});

// scp gradient
function gradientSCP() {
    let winWidth = $(window).width();
    let slidGrid = $('.sliding-grid');
    let slidItem = $('.sliding-item');

    if(slidItem.length > 7) {
        $('.sliding-gradient-right').removeAttr('style');
    } else {
        $('.sliding-gradient-right').css('display', 'none');
    }
}