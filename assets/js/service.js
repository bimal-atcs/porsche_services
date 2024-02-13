//run when page first loads
$(document).ready(function () {
    serviceAccordion();
});

//run on every window resize
$(window).resize(function () {
});

function serviceAccordion() {
    $('.accordion-link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('accordion-link-active');
        $(this).next('.accordion-content').slideToggle(350);
    });  
}