//run when page first loads
$(document).ready(function () {
    slideGradient();
    slideCardHover();
    slidingItems();
});

//run on every window resize
$(window).resize(function () {
    slideCardHover();
    slidingItems();
});

// gradient
function slideGradient() {
    let winHeight = $(window).height();
    let getGradRight = $('.sliding-gradient-right');
    let getGradLeft = $('.sliding-gradient-left');
    let getGradBottom = $('.sliding-gradient-bottom');
    let getSlideItems = $('.sliding-items');
    let getSlideItem = $('.sliding-item');

    // bottom gradient
    if(getSlideItems.height() > winHeight) {
        getGradBottom.css('display', 'block');
    } else {
        getGradBottom.css('display', 'none');
    }
    
    // right gradient
    if(getSlideItem.length > 7) {
        getGradRight.css('display', 'block');
    } else {
        getGradRight.css('display', 'none');
    }
    
    // on scoll gradients hide and show
    getSlideItems.scroll(function() {
        let slideScroll = getSlideItems.scrollLeft();
    
        if (slideScroll > 500) {
            getGradLeft.css('display', 'block');
            getGradRight.css('display', 'none');
        } else {
            getGradLeft.css('display', 'none');
            getGradRight.css('display', 'block');
        }
    });
}

// slide info hover popup
function slideCardHover() {
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