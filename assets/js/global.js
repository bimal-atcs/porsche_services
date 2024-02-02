$(document).ready(function() {
    // scrollbar
    $('.scrollbar-dynamic').scrollbar();
});

//run on every window resize
$(window).resize(function () {
    // scrollbar
    $('.scrollbar-dynamic').scrollbar();
});

// on load window loader
$(window).on('load',function(){
    setTimeout(function() {
    $('#overlayer').fadeOut('fast');
    }, 3500);
});