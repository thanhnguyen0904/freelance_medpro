/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.brt-cont').on('click', function() {
      $(this).parent().toggleClass('active')
      $(this).parent().find('.brt-cont-hide').toggleClass('show')
    })
    $('.brt-cont-hide ul li a').on('click', function (){
      $(this).toggleClass('active')
    })

    $('.booking-right-payment .brp-left .form-group .form-check-label-visa').on('click', function() {
      ($('.brp-atm-group').hasClass('show')) ? $('.brp-atm-group').removeClass('show') : '';
      (!$('.brp-visa-group').hasClass('show')) ? $('.brp-visa-group').addClass('show') : '';
      progressBar()
    })
    $('.booking-right-payment .brp-left .form-group .form-check-label-atm').on('click', function() {
      ($('.brp-visa-group').hasClass('show')) ? $('.brp-visa-group').removeClass('show') : '';
      (!$('.brp-atm-group').hasClass('show')) ? $('.brp-atm-group').addClass('show') : '';
      progressBar()
    })
  })

  function progressBar()
  {
    $('.brp-left-progress .brp-left-progress-1 li').first().addClass('active')
    $('.brp-left-progress .brp-left-progress-1 li').first().find('.fas').removeClass('fa-arrow-right').addClass('fa-check')
    $('.brp-left-progress .brp-left-progress-3 li').first().addClass('active')
  }
})(jQuery)
