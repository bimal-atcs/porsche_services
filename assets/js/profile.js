//run when page first loads
$(document).ready(function() {
    // profile drawer
    profileDrawerWindow();    
    changeInstanceWindow();
    switchDepartmentWindow();  
});

// profile drawer
function profileDrawerWindow() {
    // add class on where window needs to open
    $('#profile-drawer').click(function(e) {
        e.preventDefault();

        $('html, body').css('overflow', 'hidden');

        if($('.page-body').hasClass('scrollbar-dynamic')) {
            $('.page-body').removeClass('page-scroll-on');
            $('.page-body').addClass('page-scroll-off');
        }

        $('#profile-drawer-window').removeClass('window-close');
        $('#profile-drawer-window').addClass('window-open');

        $('#profile-drawer-window .drawer').removeClass('drawer-close');
        $('#profile-drawer-window .drawer').addClass('drawer-open');

        $(".header-navbar-drawer").removeClass('header-navbar-drawer-active');
        $(".header-navbar-close").removeClass('header-navbar-close-active');
        $('.mega-block').removeClass('mega-block-active');
        $('.mega-back').removeClass('mega-back-active');
        $('.header-navbar-manage').removeClass('header-navbar-manage-active');
    });

    // click on close button window modal
    $('#profile-drawer-window .drawer-close-button, #profile-drawer-window .window-blur').click(function(e) {
        e.preventDefault();

        $('html, body').css('overflow', '');

        if($('.page-body').hasClass('scrollbar-dynamic')) {
            $('.page-body').removeClass('page-scroll-off');
            $('.page-body').addClass('page-scroll-on');
            $('html, body').css('overflow', 'hidden');
        }

        $('#profile-drawer-window').removeClass('window-open');
        $('#profile-drawer-window').addClass('window-close');

        $('#profile-drawer-window .drawer').removeClass('drawer-open');
        $('#profile-drawer-window .drawer').addClass('drawer-close');
    });
}

// change instance drawer
function changeInstanceWindow() {
    // add class on where window needs to open
    $('#change-instance-drawer').click(function(e) {
        e.preventDefault();
        $('#change-instance-window').removeClass('window-close');
        $('#change-instance-window').addClass('window-open');
    });

    // click on close button window modal
    $('#change-instance-window .window-header-close, #change-instance-window .window-blur').click(function(e) {
        e.preventDefault();
        $('#change-instance-window').removeClass('window-open');
        $('#change-instance-window').addClass('window-close');
    });
}

// switch department drawer
function switchDepartmentWindow() {
    // add class on where window needs to open
    $('#switch-department-drawer').click(function(e) {
        e.preventDefault();
        
        $('#switch-department-window').removeClass('window-close');
        $('#switch-department-window').addClass('window-open');
    });

    // click on close button window modal
    $('#switch-department-window .window-header-close, #switch-department-window .window-blur').click(function(e) {
        e.preventDefault();

        $('#switch-department-window').removeClass('window-open');
        $('#switch-department-window').addClass('window-close');
    });
}