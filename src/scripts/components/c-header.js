(function ($) {

  $.fn.navBackround = function () {
    
    return this.each(function() {
      var $this = $(this);

      function toggleBackground() {
        var currentTop = $(window).scrollTop();
        var $hero = $('.c-homepage-hero');
        var headerHeight = $this.height();
        var $logo = $('.c-header .o-brand');
        var logoHalfHeight = $hero.find('.o-brand').height() / 2;
        var heroHeight = $('.c-homepage-hero').height(); // move this
        var logoTrigger = heroHeight / 2 + logoHalfHeight - headerHeight;
        if (currentTop > 0) {
          $this.removeClass('c-header--top');
          $logo.removeClass('o-brand--white');
        } else {
          $this.addClass('c-header--top');
          $logo.addClass('o-brand--white');
        }
        if (currentTop < logoTrigger) {
          $this.removeClass('c-header--logo');
        } else {
          $this.addClass('c-header--logo');
        }
      }

      $(document).ready(function(){
        toggleBackground();
      });

      $(window).scroll(function() {
        toggleBackground();
      });

    });

  };

  $(document).ready(function(){
    $('.c-header').navBackround();
  });
  
}( jQuery ));