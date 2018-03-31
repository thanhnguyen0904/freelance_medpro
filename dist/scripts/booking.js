/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    var scope = getDaysArray(2018,3)

    var $moment = moment()
    $('.brc-top .brct-month-year span.brctGetMonth').text($moment.format('M'))
    $('.brc-top .brct-month-year span.brctGetYear').text($moment.format('Y'))

    $('.brc-top .brct-move-next').on('click', function(e) {
      e.preventDefault();
      ($(this).parent().find('.brct-move-previous').hasClass('hidden')) ? $(this).parent().find('.brct-move-previous').removeClass('hidden') : '';
      monthYearProgress($(this).parent(),parseInt($(this).parent().data('count'))+1);
    })
    $('.brc-top .brct-move-previous').on('click', function(e) {
      e.preventDefault();
      if(!$(this).hasClass('hidden')){
        monthYearProgress($(this).parent(),parseInt($(this).parent().data('count'))-1);
        ($(this).parent().data('count') == 0) ? $(this).addClass('hidden') : '';
      }else{
        alert('Bạn không thể chọn tháng trước !!!');
      }
    })
  })
  function monthYearProgress($elementParent, $number)
  {
    $('.brc-top .brct-month-year span.brctGetMonth').text(
        moment().add($number, 'months').format('M')
    );
    $('.brc-top .brct-month-year span.brctGetYear').text(
        moment().add($number, 'months').format('Y')
    );
    $elementParent.data('count',$number)
  }

  function getDaysArray(year, month) {
    let date = new Date(year, month - 1, 1);
    let result = [];
    let eqDate = 4;
    while (date.getMonth() == month - 1) {
      // eqDate =  date.getDay();
      console.log(date.getDay());
      $('.brc-calenar ul li.dates').eq(eqDate).text(date.getDate());
      eqDate = eqDate + 1;
      date.setDate(date.getDate() + 1);
    }
    return result;
  }
})(jQuery)
