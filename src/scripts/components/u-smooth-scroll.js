(function ($) {

  $.fn.smoothScroll = function () {
    var $this = $(this);
    var $mainHeader = $('.c-header');
    var topOffset = $mainHeader.height();

    $this.click(function(e) {
      e.preventDefault();
      var target = $(this.hash);
      $('html,body').animate({
        scrollTop: target.offset().top - topOffset
      }, 800);
    });
  };

  $(document).ready(function(){
    $('.u-smooth-scroll').smoothScroll();
  });
  
}( jQuery ));