//run when page first loads
(function ($) {
'use strict';

$(document).ready(function () {

    $('.sub-steps-horizontal').click(function (e) {
      e.preventDefault();
      var child_class = $(this).data('value') +"-child-substep-box";
      $('.' +child_class).toggle();
    });

    $('.sub-steps-vertical').click(function (e) {
      e.preventDefault();
      var child_class = $(this).data('value') +"-child-step-box";
      $('.' +child_class).toggle();
    });

});

})(jQuery);