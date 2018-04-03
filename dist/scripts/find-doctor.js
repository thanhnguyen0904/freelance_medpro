/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.booking-right-calendar table.calTable tr td button').on('click', function(){
      if(!$(this).hasClass('btn-booking-calendar-disable')){
        if($(this).parents('tbody').find('td').hasClass('active')){
          $(this).parents('tbody').find('td').removeClass('active')
          $(this).parents('tbody').find('td button').removeClass('active')
          if($(this).parents('tbody').find('tr').hasClass('show')){
            $(this).parents('tbody').find('tr.show').removeClass('show')
            $(this).parents('tbody').find('tr').find('.brc-scroll-group.show').removeClass('show')
          }
        }
        $(this).toggleClass('active')
        $(this).parent().toggleClass('active')
        $(this).parents('tr').next().addClass('show')
        $(this).parents('tr').next().find('.brc-scroll-group').addClass('show')
      }
    })
  })
})(jQuery)
