//run when page first loads
$(document).ready(function() {
    // profile drawer
    profileDrawerWindow();    
});

// profile drawer
function profileDrawerWindow() {
    // add class on where window needs to open
    $('#profile-drawer').click(function(e) {
        e.preventDefault();
        $('.page-body').removeClass('page-scroll-on');
        $('.page-body').addClass('page-scroll-off');
        
        $('#profile-drawer-window').removeClass('window-close');
        $('#profile-drawer-window').addClass('window-open');

        $('#profile-drawer-window .drawer').removeClass('drawer-close');
        $('#profile-drawer-window .drawer').addClass('drawer-open');
    });

    // click on close button window modal
    $('#profile-drawer-window .drawer-close-button, #profile-drawer-window .window-blur').click(function(e) {
        e.preventDefault();
        $('.page-body').removeClass('page-scroll-off');
        $('.page-body').addClass('page-scroll-on');

        $('#profile-drawer-window').removeClass('window-open');
        $('#profile-drawer-window').addClass('window-close');

        $('#profile-drawer-window .drawer').removeClass('drawer-open');
        $('#profile-drawer-window .drawer').addClass('drawer-close');
    });
}