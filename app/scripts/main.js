/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

    $('#toggle-menu').on('click', function(){
      $('#toggle-menu').toggleClass('opened')
      $('#main-menu').toggleClass('in')
      $('.nav-mobile').toggleClass('out')
    })

  })
})(jQuery)
