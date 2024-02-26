//run when page first loads
$(document).ready(function () {
    aside();
    asideTab();
    asideLinkScroll();
});

//run on every window resize
$(window).resize(function () {
    aside();
    asideTab();
    asideLinkScroll();
});

// aside navbar
function aside() {
    let windowHeight = $(window).height();
    let headerH = $('.header').height();
    let serviceContentPadding = parseInt($('.service-content').css('padding-top'));
    let serviceBlockPadding = parseInt($('.service-block').css('padding-top'));
    let serviceViewPadding = parseInt($('.service-view').css('padding-top'));
    let sum = headerH + serviceContentPadding + serviceBlockPadding + serviceViewPadding;
    
    if($('.service-steps').hasClass('service-steps-sticky')) {
        let stepsH = $('.service-steps').outerHeight();

        $('.aside-nav').css('height', windowHeight - (sum + stepsH - serviceContentPadding));
        $('.aside').css('top', headerH + stepsH + serviceBlockPadding);
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

// aside link scroll
function asideLinkScroll() {
    if($('.aside-links').hasClass('aside-links-scroll')) {
        let headerHeight = $('.header').outerHeight();
        let stepsHeight = $('.service-steps').outerHeight();
        let sumHeadStepHeight = headerHeight + stepsHeight;
        
        // scroll page
        let getSlide = $('.service-slide');
        let getSlidePadding = parseInt($('.service-slide').css('padding-top'));
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
            }, 700);
        });
    }
}