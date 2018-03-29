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
      $(this).parents('.group').find('.tab-content .tab-pane.'+$getClassPanel).addClass('show active');
    })

    $('form .form-group input.birthday').datepicker();
  })
})(jQuery)
