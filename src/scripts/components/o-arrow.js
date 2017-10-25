(function ($) {

  $.fn.arrowAnimate = function () {
    
    return this.each(function() {
      var $this = $(this);

      function removeArrow() {
        var currentTop = $(window).scrollTop();
        var $arrow = $this.find('.o-bullet__arrow');
        if (currentTop > 0) {
          $arrow.removeClass('o-bullet__arrow--animate');
        } else {
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
    $('.o-bullet').arrowAnimate();
  });
  
}( jQuery ));