function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var navs = document.querySelectorAll('.sliding-drag');

if (!is_touch_device()) {
    for (var i = 0, length = navs.length; i < length; i++) {
        var nav = navs[i];
        new Flickity(nav, {
            cellAlign: 'left',
            freeScroll: true,
            prevNextButtons: false,
            pageDots: false,
            contain: true
        });
    }
}