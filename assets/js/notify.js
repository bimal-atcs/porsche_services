$(document).ready(function() {
    videoPlayPause();
});

//run on every window resize
$(window).resize(function () {
});

function videoPlayPause() {
    // click on video icon
    $('.notify-body-video-icon').click(function() {
        $('.notify-body-video-text').css('display', 'none');
        $('.notify-body-video-overlay').css('display', 'block');
        $(this).closest('.notify').find('video').get(0).play();
        $(this).css('display', 'none');
    });

    // click on video overlay
    $('.notify-body-video-overlay').click(function() {
        $('.notify-body-video-text').removeAttr('style');
        $('.notify-body-video-icon').removeAttr('style');
        $(this).closest('.notify').find('video').get(0).pause();
        $(this).removeAttr('style');
    });

    // click on close icon
    $('.notify-icon').click(function() {
        if($('.notify').hasClass('notify-show')) {
            $('.notify-body-video-text').removeAttr('style');
            $('.notify-body-video-icon').removeAttr('style');
            $(this).closest('.notify').find('video').get(0).pause();
            $(this).closest('.notify').find('video').get(0).currentTime = 0;
            $(this).closest('.notify').removeClass('notify-show');
        }
    });
}