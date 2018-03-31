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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgICQoJyN0b2dnbGUtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAkKCcjdG9nZ2xlLW1lbnUnKS50b2dnbGVDbGFzcygnb3BlbmVkJylcbiAgICAgICQoJyNtYWluLW1lbnUnKS50b2dnbGVDbGFzcygnaW4nKVxuICAgICAgJCgnLm5hdi1tb2JpbGUnKS50b2dnbGVDbGFzcygnb3V0JylcbiAgICB9KVxuXG4gICAgJCgnaGVhZGVyIC5uYXYtbWVudSBhLm5hdi1tZW51LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICgkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2EubmF2LW1lbnUtaXRlbScpLmhhc0NsYXNzKCdhY3RpdmUnKSkgPyAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2EubmF2LW1lbnUtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKSA6ICcnXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0pXG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIHZhciBiYW5uZXJIZWlnaHQgPSAkKCcuc2VjdGlvbi1iYW5uZXInKS5vdXRlckhlaWdodCgpXG4gICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID49IHBhcnNlSW50KGJhbm5lckhlaWdodCktMTEwKXtcbiAgICAgICAgJCgnLm5hdi1tb2JpbGUgYS5uYXYtbW9iaWxlLXRyYW5zLXRvcCcpLmFkZENsYXNzKCdoaWRkZW4nKVxuICAgICAgICAkKCcubmF2LW1vYmlsZSBhLm5hdi1tb2JpbGUtdHJhbnMtYm90JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpIDwgcGFyc2VJbnQoYmFubmVySGVpZ2h0KS00MDApe1xuICAgICAgICAkKCcubmF2LW1vYmlsZSBhLm5hdi1tb2JpbGUtdHJhbnMtdG9wJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpXG4gICAgICAgICQoJy5uYXYtbW9iaWxlIGEubmF2LW1vYmlsZS10cmFucy1ib3QnKS5hZGRDbGFzcygnaGlkZGVuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnLm5hdi1tb2JpbGUgYS5uYXYtbW9iaWxlLXRyYW5zLWJvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoJy5zZWN0aW9uLWJhbm5lcicpLm9mZnNldCgpLnRvcC0yMDBcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pXG5cbiAgICAvLyAkKCcubmF2LXRvcC1sb2dpbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCgnI3BvcHVwTG9naW4nKS5tb2RhbCgnc2hvdycpXG4gICAgLy8gfSlcblxuICAgICQoJy5uYXYtdG9wLWxvZ2dlZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnNvbGUubG9nKCcxMjMxMjMnKTtcbiAgICAgICQodGhpcykuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGVDbGFzcygnc2hvdycpXG4gICAgfSlcblxuICAgICQoJy5uYXYtdG9wLWxvZ2dlZC1tJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5uYXYtdG9wLWxvZ2dlZC1kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdzaG93JylcbiAgICB9KVxuXG4gICAgJCgnLm5hdi10b3AtbG9nZ2VkJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51JykuYWRkQ2xhc3MoJ3Nob3cnKVxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdzaG93JylcbiAgICB9KVxuXG5cbiAgfSlcbn0pKGpRdWVyeSlcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=main.js.map
