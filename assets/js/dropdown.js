//run when page first loads
$(document).ready(function () {
    dropdownDown();
});

//run on every window resize
$(window).resize(function () {
    dropdownDown();
});

// dropdown
function dropdownDown() {
    $('.dropdown').removeClass('dropdown-active');

    $(".dropdown").click(function() {
        if ($(this).hasClass("dropdown-active")) {
            $(this).removeClass("dropdown-active");
        } else if (!$(this).hasClass("dropdown-active")) {
            $(this).addClass("dropdown-active");
        }
    });
}