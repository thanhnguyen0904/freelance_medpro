/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    if($('.booking-right-info .bri-show-records').length == 1){
      var $showHtml = ''
      $showHtml += '<tr>';
      $showHtml += '<td>1</td>';
      $showHtml += '<td>'+$.cookie('1')+'</td>';
      $showHtml += '<td>'+$.cookie('ngay1')+'/05/2018 <br><span>'+$.cookie('4')+'</span></td>';
      $showHtml += '<td>'+$.cookie('3')+'</td>';
      $showHtml += '<td>'+$.cookie('5')+'</td>';
      $showHtml += '<td>'+$.cookie('2')+'</td>';
      $showHtml += ' <td><button>Xóa</button></td>';
      $showHtml += '</tr>';
      $('.booking-right-info .bri-show-records tbody').append($showHtml);
    }

    $('.brc-scroll-auto ul.table-ul-cont').on('click',function() {
      $.cookie('1', null);
      $.cookie('2', null);
      $.cookie('1', $(this).find('li:nth-last-child(3)').text());
      $.cookie('2', $(this).find('li:nth-last-child(2)').text());
      $('.brc-btn-show-btn span').text($(this).find('li:nth-last-child(3)').text());
      $('.brc-btn-show-btn span.pri').text($(this).find('li:nth-last-child(2)').text());
    });

    $('#section-booking-45 .brt-cont-hide ul li a').on('click', function() {
      if(!$(this).hasClass('active-full')){
        $.cookie('3', null);
        $.cookie('4', null);
        $.cookie('5', null);
        $.cookie('6', null);
        $.cookie('3', $(this).parents('.brt-cont-group').find('.brt-cont-name').text());
        $.cookie('4', $(this).text());
        $.cookie('5', $(this).parents('.brt-cont-group').find('.brt-cont-code span:first-child').text());
        $.cookie('6', $(this).parents('.brt-cont-group').find('.brt-cont-code span:last-child').text());
        console.log($.cookie('3'));
        console.log($.cookie('4'));
        console.log($.cookie('5'));
        console.log($.cookie('6'));
        ($(this).parents('ul').find('li a').hasClass('active')) ? $(this).parents('ul').find('li a').removeClass('active') : '';
        $(this).addClass('active');
        $('.brc-btn-show-btn span').text($(this).parents('.brt-cont-group').find('.brt-cont-name').text());
        $('.brc-btn-show-btn span.pri').text($(this).text());
        $('.brc-btn').addClass('show');
      }
    })



    $('.brt-cont').on('click', function() {
      ($(this).parent().siblings('.brt-cont-group').find('.brt-cont-hide').hasClass('show')) ? $(this).parents('.booking-right-time').find('.brt-cont-hide').removeClass('show') : '';
      ($(this).parent().siblings('.brt-cont-group').hasClass('active')) ? $(this).parents('.booking-right-time').find('.brt-cont-group').removeClass('active') : '';
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
      // $.cookie('ngay1', null);
      $.cookie('ngay1', $(this).text());
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
