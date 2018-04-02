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
      ($(this).parents('.nav-menu').find('a.nav-menu-item').hasClass('active')) ? $(this).parents('.nav-menu').find('a.nav-menu-item').removeClass('active') : ''
      $(this).addClass('active')
    })

    $(window).scroll(function(){
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

    $('.nav-top-logged').on('click', function(e) {
      e.preventDefault();
      console.log('123123');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICQoJyN0b2dnbGUtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAkKCcjdG9nZ2xlLW1lbnUnKS50b2dnbGVDbGFzcygnb3BlbmVkJylcbiAgICAgICQoJyNtYWluLW1lbnUnKS50b2dnbGVDbGFzcygnaW4nKVxuICAgICAgJCgnLm5hdi1tb2JpbGUnKS50b2dnbGVDbGFzcygnb3V0JylcbiAgICB9KVxuXG4gICAgJCgnaGVhZGVyIC5uYXYtbWVudSBhLm5hdi1tZW51LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICgkKHRoaXMpLnBhcmVudHMoJy5uYXYtbWVudScpLmZpbmQoJ2EubmF2LW1lbnUtaXRlbScpLmhhc0NsYXNzKCdhY3RpdmUnKSkgPyAkKHRoaXMpLnBhcmVudHMoJy5uYXYtbWVudScpLmZpbmQoJ2EubmF2LW1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKSA6ICcnXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgYmFubmVySGVpZ2h0ID0gJCgnLnNlY3Rpb24tYmFubmVyJykub3V0ZXJIZWlnaHQoKVxuICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+PSBwYXJzZUludChiYW5uZXJIZWlnaHQpLTExMCl7XG4gICAgICAgICQoJy5uYXYtbW9iaWxlIGEubmF2LW1vYmlsZS10cmFucy10b3AnKS5hZGRDbGFzcygnaGlkZGVuJylcbiAgICAgICAgJCgnLm5hdi1tb2JpbGUgYS5uYXYtbW9iaWxlLXRyYW5zLWJvdCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgfVxuICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IHBhcnNlSW50KGJhbm5lckhlaWdodCktNDAwKXtcbiAgICAgICAgJCgnLm5hdi1tb2JpbGUgYS5uYXYtbW9iaWxlLXRyYW5zLXRvcCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKVxuICAgICAgICAkKCcubmF2LW1vYmlsZSBhLm5hdi1tb2JpbGUtdHJhbnMtYm90JykuYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfSlcblxuICAgICQoJy5uYXYtbW9iaWxlIGEubmF2LW1vYmlsZS10cmFucy1ib3QnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiAkKCcuc2VjdGlvbi1iYW5uZXInKS5vZmZzZXQoKS50b3AtMjAwXG4gICAgICB9LCAxMDAwKTtcbiAgICB9KVxuXG4gICAgJCgnLm5hdi10b3AtbG9nZ2VkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc29sZS5sb2coJzEyMzEyMycpO1xuICAgICAgJCh0aGlzKS5maW5kKCcuZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKCdzaG93JylcbiAgICB9KVxuXG4gICAgJCgnLm5hdi10b3AtbG9nZ2VkLW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLm5hdi10b3AtbG9nZ2VkLWRyb3Bkb3duJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKVxuICAgIH0pXG5cbiAgICAkKCcubmF2LXRvcC1sb2dnZWQnKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5hZGRDbGFzcygnc2hvdycpXG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKVxuICAgIH0pXG5cbiAgfSlcbn0pKGpRdWVyeSlcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=main.js.map
