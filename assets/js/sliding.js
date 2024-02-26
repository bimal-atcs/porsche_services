//run when page first loads
$(document).ready(function () {
    infoHover();
    slidingItems();
});

//run on every window resize
$(window).resize(function () {
    infoHover();
    slidingItems();
});

// info hover popup
function infoHover() {
    let winWidth = $(window).width();
    let winHeight = $(window).height();

    $('body').mousemove(function(event) {
        let xPos = event.clientX;
        let yPos = event.screenY;

        if(xPos > winWidth/2) {
            $('.sliding-card').mouseenter(function() {
                $(".info-block").removeClass('info-block-left');
                $(this).find(".info-block").addClass('info-block-show');
                $(this).find(".info-block").addClass('info-block-top');
                $(this).find(".info-block").addClass('info-block-right');
            }).mouseleave(function() {
                $(".info-block").removeClass('info-block-top');
                $(".info-block").removeClass('info-block-left');
                $(".info-block").removeClass('info-block-right');
                $(".info-block").removeClass('info-block-show');
            });
        } else {
            $('.sliding-card').mouseenter(function() {
                $(".info-block").removeClass('info-block-right');
                $(this).find(".info-block").addClass('info-block-show');
                $(this).find(".info-block").addClass('info-block-top');
                $(this).find(".info-block").addClass('info-block-left');
            }).mouseleave(function() {
                $(".info-block").removeClass('info-block-top');
                $(".info-block").removeClass('info-block-left');
                $(".info-block").removeClass('info-block-right');
                $(".info-block").removeClass('info-block-show');
            });
        }
    });
}

// sliding items
function slidingItems() {
    const slider = document.querySelector('.sliding-items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
    });
}