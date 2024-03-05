//run when page first loads
(function ($) {
  'use strict';
  
  $(document).ready(function () {
  
      //call ajax to setup myscp filter on job roles dropdown clicks
      $('#myscp_jobrole_filter li a').on('click', function(e) {
        e.preventDefault();
        var selectedValue = [$(this).data('value')];
        var filterType = 'jobrole';
        mySCPFilterAjaxCall(selectedValue, filterType);
      });
  
      $('#print_myscp_steps_btn').click(function (e) {
          e.preventDefault();
          printSubProcessStepsData();
      });
  
  
  });
  
  //run on every window resize
  $(window).resize(function () {
  });
  
  })(jQuery);
  
  //js ajax call to filter myscp process
  function mySCPFilterAjaxCall(selectedValue,filterType) {
    const data = {
      'action': 'myscp_process_filter',
      'selected_value': selectedValue,
      'type': filterType,
    };
  
    $.post(ajax_object.ajax_url, data, function (response) {
      console.log(response);
      $("#myscp_process_body").html(response);
    });
  }
  
  //js code to print sub process steps
  function printSubProcessStepsData()
  {
    var divToPrint = window.document.getElementsByClassName("print_sub_process_steps");
    var stepToPrint = '';
    for (var i = 0; i < divToPrint.length/2; i++) {
      var steps = divToPrint[i].innerHTML;
      stepToPrint += '<div class="print-steps">' +steps +'</div>';
    }
  
    stepToPrint += '<div class="page-footer">' +window.location.origin +'</div>';
  
    //var htmlToPrint = '<style type="text/css">div.print-steps{display: flex;flex-flow: column;align-items: center;justify-content: center;width: 100%;height: 100%;margin:0mm;}div.print-steps h2{border-bottom:3px solid #efefef;padding:20px;}div.print-steps ul{margin-top:0px}div.print-steps ul li{padding:5px; font-size:18px; font-weight:bold;}</style>';
    var htmlToPrint = '<style type="text/css">@page{margin:10mm 10mm 20mm 10mm;}@media print {div.page-footer {position: fixed;bottom: 0;right:30px;page-break-after: always;}}div.print-steps h2{padding:20px;margin-bottom:0px;}div.print-steps h2 span{border-bottom:3px solid #efefef;}div.print-steps ul{margin-top:0px}div.print-steps ul li{padding:5px; font-size:18px; font-weight:bold;}</style>';
    htmlToPrint += stepToPrint;
  
    var newWin = window.open('');
    //newWin.document.write("<h3 align='center'>Print Page</h3>");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  }