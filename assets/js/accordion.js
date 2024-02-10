$(document).ready(function() {
    accordionTab();
});

//run on every window resize
$(window).resize(function () {
});

function accordionTab() {
    $('.accordion-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('accordion-link-active');
        $(this).next('.accordion-content').slideToggle(350);

        // NOTE: below this is another way to up/down slides
        // if ($(this).next().hasClass('show')) {
        //     $(this).removeClass('accordion-link-active');
        //     $(this).next('.accordion-content').removeClass('show');
        //     $(this).next('.accordion-content').slideUp();
        // } else {
        //     $(this).addClass('accordion-link-active');
        //     $(this).next('.accordion-content').addClass('show');
        //     $(this).next('.accordion-content').slideDown();
        // }
    });
}