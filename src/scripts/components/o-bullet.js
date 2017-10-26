(function ($) {

  $.fn.arrowAnimate = function () {
    
    return this.each(function() {
      var $this = $(this);

      function removeArrow() {
        var currentTop = $(window).scrollTop();
        var $arrow = $this.find('.o-bullet__arrow');
        if (currentTop > 0) {
          $this.removeClass('o-bullet--more');
          $arrow.removeClass('o-bullet__arrow--animate');
        } else {
          $this.addClass('o-bullet--more');
          $arrow.addClass('o-bullet__arrow--animate');
        }
      }

      $(document).ready(function(){
        removeArrow();
      });

      $(window).scroll(function() {
        removeArrow();
      });

    });

  };

  $(document).ready(function(){
    $('.o-bullet--more').arrowAnimate();
  });
  
}( jQuery ));