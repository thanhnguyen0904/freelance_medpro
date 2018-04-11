/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    console.log($.cookie());
    if($.cookie('6') != undefined){
      $('.brb-bill-hide-1').addClass('show');
      $('.booking-right-calendar').addClass('done-cookie-6');
      $('#section-booking-45').addClass('done-cookie-6');
      $('.booking-left-menu-ordered').addClass('show');
      $('.booking-left-menu-ordered p').eq(0).find('span').text($.cookie('1'));
      $('.booking-left-menu-ordered p').eq(1).find('span').text($.cookie('3'));
      $('.booking-left-menu-ordered p').eq(2).find('span').text($.cookie('ngay1')+'/05/2018');
      $('.booking-left-menu-ordered p').eq(3).find('span').text($.cookie('4'));
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
    if($.cookie('12') != undefined){
      $('.brb-bill-hide-2').addClass('show');
      $('.booking-left-menu-ordered p').eq(0).find('span').text($.cookie('7'));
      $('.booking-left-menu-ordered p').eq(1).find('span').text($.cookie('9'));
      $('.booking-left-menu-ordered p').eq(2).find('span').text($.cookie('ngay2')+'/05/2018');
      $('.booking-left-menu-ordered p').eq(3).find('span').text($.cookie('10'));
      var $showHtml = ''
      $showHtml += '<tr>';
      $showHtml += '<td>2</td>';
      $showHtml += '<td>'+$.cookie('7')+'</td>';
      $showHtml += '<td>'+$.cookie('ngay2')+'/05/2018 <br><span>'+$.cookie('10')+'</span></td>';
      $showHtml += '<td>'+$.cookie('9')+'</td>';
      $showHtml += '<td>'+$.cookie('11')+'</td>';
      $showHtml += '<td>'+$.cookie('8')+'</td>';
      $showHtml += ' <td><button>Xóa</button></td>';
      $showHtml += '</tr>';
      $('.booking-right-info .bri-show-records tbody').append($showHtml);
    }
    if($.cookie('18') != undefined){
      $('.brb-bill-hide-3').addClass('show');
      $('.booking-left-menu-ordered p').eq(0).find('span').text($.cookie('13'));
      $('.booking-left-menu-ordered p').eq(1).find('span').text($.cookie('15'));
      $('.booking-left-menu-ordered p').eq(2).find('span').text($.cookie('ngay3')+'/05/2018');
      $('.booking-left-menu-ordered p').eq(3).find('span').text($.cookie('16'));
      var $showHtml = ''
      $showHtml += '<tr>';
      $showHtml += '<td>3</td>';
      $showHtml += '<td>'+$.cookie('13')+'</td>';
      $showHtml += '<td>'+$.cookie('ngay3')+'/05/2018 <br><span>'+$.cookie('16')+'</span></td>';
      $showHtml += '<td>'+$.cookie('15')+'</td>';
      $showHtml += '<td>'+$.cookie('17')+'</td>';
      $showHtml += '<td>'+$.cookie('14')+'</td>';
      $showHtml += ' <td><button>Xóa</button></td>';
      $showHtml += '</tr>';
      $('.booking-right-info .bri-show-records tbody').append($showHtml);
    }

    $('#section-booking-6 .booking-right-info .bri-show-records tbody button').on('click', function() {
      $(this).parents('tr').remove();
    })

    $('#section-find-doctor-1 .find-doctor-right table.table-striped td button').on('click', function(e) {
      e.preventDefault();
      $.cookie('13', $(this).parents('tr').find('td').eq(4).text());
      $.cookie('14', $(this).parents('tr').find('td').eq(6).text());
      $.cookie('15', $(this).parents('tr').find('td').eq(2).text()+' - '+$(this).parents('tr').find('td').eq(1).text());
      $.cookie('18', $(this).parents('tr').find('td').eq(5).text());
      document.location.href = $(this).data('href');
    })

    $('.brc-scroll-auto ul.table-ul-cont').on('click',function() {
      if($('.booking-right-calendar').hasClass('done-cookie-12')) {

      }else{
        if($('.booking-right-calendar').hasClass('done-cookie-6')){
          $.cookie('7', $(this).find('li:nth-last-child(3)').text());
          $.cookie('8', $(this).find('li:nth-last-child(2)').text());
          $('.brc-btn-show-btn span').text($(this).find('li:nth-last-child(3)').text()+' - '+$(this).find('li:nth-last-child(2)').text());
        }else{
          $.cookie('1', $(this).find('li:nth-last-child(3)').text());
          $.cookie('2', $(this).find('li:nth-last-child(2)').text());
          $('.brc-btn-show-btn span').text($(this).find('li:nth-last-child(3)').text()+' - '+$(this).find('li:nth-last-child(2)').text());
        }
      }
    });

    $('#section-booking-45 .brt-cont-hide ul li a').on('click', function() {
      if($('#section-booking-45').hasClass('done-cookie-6')){
        if(!$(this).hasClass('active-full')){
          $.cookie('9', $(this).parents('.brt-cont-group').find('.brt-cont-name').text());
          $.cookie('10', $(this).text());
          $.cookie('11', $(this).parents('.brt-cont-group').find('.brt-cont-code span:first-child').text());
          $.cookie('12', $(this).parents('.brt-cont-group').find('.brt-cont-code span:last-child').text());
          ($(this).parents('ul').find('li a').hasClass('active')) ? $(this).parents('ul').find('li a').removeClass('active') : '';
          $(this).addClass('active');
          $('.brc-btn-show-btn span').text($(this).parents('.brt-cont-group').find('.brt-cont-name').text()+' - '+$(this).text());
          $('.brc-btn').addClass('show');
        }
      }else{
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
          $('.brc-btn-show-btn span').text($(this).parents('.brt-cont-group').find('.brt-cont-name').text()+' - '+$(this).text());
          $('.brc-btn').addClass('show');
        }
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
      if($('.booking-right-calendar').hasClass('done-cookie-6')){
        $.cookie('ngay2', $(this).text());
      }else{
        $.cookie('ngay1', $(this).text());
      }
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
