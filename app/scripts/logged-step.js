/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

    $('.section-info .btn.btn-default').on('click', function() {
      var $getClassPanel = $(this).data('id');
      console.log($getClassPanel);
      ($(this).parent().find('.btn.btn-default').hasClass('active')) ? $(this).parent().find('.btn.btn-default').removeClass('active') : '';
      $(this).addClass('active');
      ($('.section-info .tab-content .tab-pane').hasClass('active')) ? $('.section-info .tab-content .tab-pane.active').removeClass('show active') : '';
      $(this).parents('.group').find('.tab-content .tab-pane.'+$getClassPanel).addClass('show active')
      rescaleCaptcha()

    })

    function rescaleCaptcha() {
      var width = $('.g-recaptcha').parent().width();
      var scale;
      if (width < 302) {
        scale = width / 302;
      } else{
        scale = 1.0;
      }
      $('.g-recaptcha').css('transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('-webkit-transform', 'scale(' + scale + ')');
      $('.g-recaptcha').css('transform-origin', '0 0');
      $('.g-recaptcha').css('-webkit-transform-origin', '0 0');
    }
    rescaleCaptcha()
    $(window).resize( function() {
      rescaleCaptcha()
    });

  })
})(jQuery)
