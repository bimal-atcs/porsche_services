$(document).ready(function() {
    linkScroll();
});

//run on every window resize
$(window).resize(function () {
});

function linkScroll() {
    $('.aside-link').removeClass('aside-link-active');
    $('.aside-link').click(function(e) {
        e.preventDefault();
        $('.aside-link').removeClass('aside-link-active');
        $(this).addClass('aside-link-active');
        var target = $($(this).attr('href'));
        if(target.length) {
            var scrollTo = target.offset().top;
            $('.page-body').animate({scrollTop: scrollTo+'px'}, 1200);
        }
    });
}