/* eslint-env browser */
(function ($) {
  'use strict'

  $(document).ready(function () {

    $('#toggle-menu').on('click', function(){
      $('#toggle-menu').toggleClass('opened')
      $('#main-menu').toggleClass('in')
      $('.nav-mobile').toggleClass('out')
    })

    $('header .nav-menu a.nav-menu-item').on('click', function() {
      ($(this).parent().find('a.nav-menu-item').hasClass('active')) ? $(this).parent().find('a.nav-menu-item').removeClass('active') : ''
      $(this).addClass('active')
    })

    $(window).scroll(function(event){
      var bannerHeight = $('.section-banner').outerHeight()
      if($(this).scrollTop() >= parseInt(bannerHeight)-110){
        $('.nav-mobile a.nav-mobile-trans-top').addClass('hidden')
        $('.nav-mobile a.nav-mobile-trans-bot').removeClass('hidden')
      }
      if($(this).scrollTop() < parseInt(bannerHeight)-400){
        $('.nav-mobile a.nav-mobile-trans-top').removeClass('hidden')
        $('.nav-mobile a.nav-mobile-trans-bot').addClass('hidden')
      }
    })

    $('.nav-mobile a.nav-mobile-trans-bot').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.section-banner').offset().top-200
      }, 1000);
    })

    // $('.nav-top-login').on('click', function() {
    //   $('#popupLogin').modal('show')
    // })

    $('.nav-top-logged').on('click', function() {
      $(this).find('.dropdown-menu').toggleClass('show')
    })

    $('.nav-top-logged-m').on('click', function() {
      $(this).parent().find('.nav-top-logged-dropdown').toggleClass('show')
    })

    $('.nav-top-logged').hover(function() {
      $(this).parent().find('.dropdown-menu').addClass('show')
    }, function() {
      $(this).parent().find('.dropdown-menu').removeClass('show')
    })


  })
})(jQuery)
