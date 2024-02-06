//run when page first loads
$(document).ready(function () {
    dropdownSCP();
});

//run on every window resize
$(window).resize(function () {
    dropdownSCP();
});


function dropdownSCP() {
    // dropdown label
    $('.dropdown-option .dropdown-label').click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown-option').toggleClass('dropdown-select-open');
    });

    // dropdowm sub items
    $('.dropdown-view-list li > .dropdown-view-label').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('dropdown-view-label-active');
    });

    // switcher
    $('.switch').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('switch-active');
    });

    // dropdown clear
    $('.dropdown-clear').click(function(e) {
        e.preventDefault();
        $('.dropdown-select:not(.dropdown-clear)').removeClass('dropdown-select-open');
        $('.dropdown-view-list li > .dropdown-view-label').removeClass('dropdown-view-label-active');
        $('.switch').removeClass('switch-active');
        $(this).removeClass('dropdown-clear-active');
    });
}