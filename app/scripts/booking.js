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

    $('.booking-right-calendar table.table td button').on('click', function() {
      $(this).addClass('active');
      $(this).parent().addClass('active');
      $(this).parents('tr.btn-booking-tr').siblings().addClass('hidden');
      $('.brc-scroll-group').addClass('show');
      $('.brc-take-off').removeClass('show');
    });

    $('.brc-scroll-group .brc-scroll-group-btn .btn.btn-info').on('click', function() {
      $(this).parents('.brc-scroll-group').removeClass('show');
      ($('.booking-right-calendar table.table td').hasClass('active')) ? $('.booking-right-calendar table.table td').removeClass('active') : '';
      ($('.booking-right-calendar table.table td button').hasClass('active')) ? $('.booking-right-calendar table.table td button').removeClass('active') : '';
      ($('.booking-right-calendar table.table tr.btn-booking-tr').hasClass('hidden')) ? $('.booking-right-calendar table.table tr.btn-booking-tr').removeClass('hidden') : '';
      $('.brc-take-off').addClass('show');
      ($('.brc-btn').hasClass('show')) ? $('.brc-btn').removeClass('show') : '';
    })

    $('.brc-scroll-group ul.table-ul-cont').on('click', function(){
      ($(this).parent().find('ul.table-ul-cont').hasClass('active')) ? $(this).parent().find('ul.table-ul-cont').removeClass('active') : '';
      $(this).addClass('active');
      (!$('.brc-btn').hasClass('show')) ? $('.brc-btn').addClass('show') : '';
    })
  })

  function progressBar()
  {
    $('.brp-left-progress .brp-left-progress-1 li').first().addClass('active')
    $('.brp-left-progress .brp-left-progress-1 li').first().find('.fas').removeClass('fa-arrow-right').addClass('fa-check')
    $('.brp-left-progress .brp-left-progress-3 li').first().addClass('active')
  }
})(jQuery)
