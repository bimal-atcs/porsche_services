//run when page first loads
$(document).ready(function () {
    pageContent();
});

//run on every window resize
$(window).resize(function () {
    pageContent();
});

function pageContent() {
    let footerHeight = $('.footer').outerHeight();

    $(".page-content").css({
        'margin-bottom': footerHeight
    });
}