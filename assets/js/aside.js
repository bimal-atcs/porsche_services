//run when page first loads
$(document).ready(function () {
    asideTabMenu();
    aside();
    asideTab();
    asideLinkScroll();
});

//run on every window resize
$(window).resize(function () {
    asideTabMenu();
    aside();
    asideTab();
    asideLinkScroll();
});

// aside tab menu
function asideTabMenu() {
    let getWindowWidth = $(window).width();
    let getAsideMenu = $('.aside-menu');
    let getAside = $('.aside');
    let getBackDrop = $('.backdrop');

    if (getWindowWidth >= 1024) {
        if(getAsideMenu.hasClass('aside-menu-active') && getAside.hasClass('aside-show')) {
            $('html').removeAttr('style');
            getBackDrop.removeClass('backdrop-show');
            getBackDrop.addClass('backdrop-hide');
            getAside.removeClass('aside-show');
            getAsideMenu.removeClass('aside-menu-active');
        }
    } else {
        getAsideMenu.click(function() {
            if(!getAside.hasClass('aside-show')) {
                $('html').css('overflow', 'hidden');
                getBackDrop.removeClass('backdrop-hide');
                getBackDrop.addClass('backdrop-show');
                getAside.addClass('aside-show');
                $(this).addClass('aside-menu-active');
            } else if(getAside.hasClass('aside-show')) {
                $('html').removeAttr('style');
                getBackDrop.removeClass('backdrop-show');
                getBackDrop.addClass('backdrop-hide');
                getAside.removeClass('aside-show');
                $(this).removeClass('aside-menu-active');
            }
        });
    }
}

// aside navbar
function aside() {
    let windowHeight = $(window).height();
    let headerH = $('.header').height();
    let serviceContentPadding = parseInt($('.service-content').css('padding-top'));
    let serviceBlockPadding = parseInt($('.service-block').css('padding-top'));
    let serviceViewPadding = parseInt($('.service-view').css('padding-top'));
    let sum = headerH + serviceBlockPadding + serviceViewPadding;
    
    if($('.service-steps').hasClass('service-steps-sticky')) {
        let stepsH = $('.service-steps').outerHeight();

        $('.aside-nav').css('height', windowHeight - (sum + stepsH));
        $('.aside').css('top', headerH + stepsH);
    } else {
        $('.aside-nav').css('height', windowHeight - (headerH + serviceBlockPadding));
        $('.aside').css('top', headerH + serviceBlockPadding);
    }

    if($('.aside-dropdown').hasClass('dropdown-option')) {
        let asideButton = $('.aside-bottom').outerHeight();
        $('.aside-links').css('margin-bottom', asideButton);
    } else {
        $('.aside-links').css('margin-bottom', '');
    }
}

// aside tabbing
function asideTab() {
    $('.aside-tab').click(function(){
		let tab_id = $(this).attr('data-tab');
		$('.aside-tab').removeClass('aside-tab-active');
		$('.aside-content').removeClass('aside-content-active');

		$(this).addClass('aside-tab-active');
		$("#"+tab_id).addClass('aside-content-active');
	})
}

// aside link active on scroll
function asideLinkScroll() {
    if($('.aside-links').hasClass('aside-links-scroll')) {
        let headerHeight = $('.header').outerHeight();
        let stepsHeight = $('.service-steps').outerHeight();
        let slideHeaderHeight = $('.service-slide-header').outerHeight();
        let slideHeaderMargin = parseInt($('.service-slide-header').css('margin-bottom'));
        let sumHeadStepHeight = ((headerHeight + stepsHeight)/2) + (slideHeaderHeight + slideHeaderMargin);

        // scroll page
        let getSlide = $('.service-slide');
        let getSlidePadding = parseInt(getSlide.css('padding-top'));
        for(let i = 0; i < getSlide.length; i++) {
            let getSlideNum = getSlide.eq(i);
            let getSlideOffset = getSlideNum.offset().top;

            $(window).scroll(function() {
                let scrollPosition = $(window).scrollTop();
                if (scrollPosition >= getSlideOffset - (sumHeadStepHeight + (getSlidePadding/2))) {
                    $('.aside-link').removeClass('aside-link-active');
                    $('.aside-link').eq(i).addClass('aside-link-active');
                } else if(scrollPosition < ($(window).height()/2)) {
                    $('.aside-link').removeClass('aside-link-active');
                }
            });
        }
        
        // scroll link
        $('.aside-link').click(function(e) {
            e.preventDefault();
            
            $('.aside-link').removeClass('aside-link-active');
            $(this).addClass('aside-link-active');
    
            let getSection = $($(this).attr('href'));
            let scrollTo = getSection.offset().top - sumHeadStepHeight;
            $('html, body').animate({
                scrollTop: scrollTo
            }, 500);
        });
    }
}