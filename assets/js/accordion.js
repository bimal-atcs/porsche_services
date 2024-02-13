$(document).ready(function() {
});

//run on every window resize
$(window).resize(function () {
});

// simple accordion (just and example, not used anywhere)
function accordion() {
    $('.accordion-link').click(function(e) {
        e.preventDefault();
        if ($(this).next().hasClass('show')) {
            $(this).removeClass('accordion-link-active');
            $(this).next('.accordion-content').removeClass('show');
            $(this).next('.accordion-content').slideUp();
        } else {
            $(this).addClass('class-name-active');
            $(this).next('.accordion-content').addClass('show');
            $(this).next('.accordion-content').slideDown();
        }
    });
}