//run when page first loads
$(document).ready(function () {
    dropdownSCP();
});

//run on every window resize
$(window).resize(function () {
    dropdownSCP();
});


function dropdownSCP() {
    $('.dropdown-option .dropdown-label').click(function(e) {
        e.preventDefault();
        $(this).parents('.dropdown-option').toggleClass('dropdown-select-open');
    });

    $('.dropdown-view-list li > .dropdown-view-label').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('dropdown-view-label-active');
    });

    $('.dropdown-clear').click(function(e) {
        e.preventDefault();
        $('.dropdown-select:not(.dropdown-clear)').removeClass('dropdown-select-open');
        $('.dropdown-view-list li > .dropdown-view-label').removeClass('dropdown-view-label-active');
        $('.switch').prop("checked", false);
        $(this).removeClass('dropdown-clear-active');
    });
}