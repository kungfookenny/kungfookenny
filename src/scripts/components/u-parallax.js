(function ($) {

  $.fn.parallax = function () {
    var windowWidth = $(window).width();

    return this.each(function() {
      var $this = $(this);
      function updateParallax(initial) {
        var containerHeight;
        var $media = $this.children('.u-parallax__item');
        if (windowWidth < 640) {
          containerHeight = ($this.height() > 0) ? $this.height() : $media.height();
        }
        else {
          containerHeight = ($this.height() > 0) ? $this.height() : 500;
        }
        var mediaHeight = $media.height();
        var parallaxDist = mediaHeight - containerHeight;
        var bottom = $this.offset().top + containerHeight;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
        var parallax = Math.round((parallaxDist * percentScrolled));

        if (initial) {
          $media.css('display', 'block');
        }
        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
          $media.css('transform', 'translate3D(0,' + parallax + 'px, 0)');
        }

      }

      $(document).ready(function(){
        updateParallax(true);
      });

      $(window).scroll(function() {
        windowWidth = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function() {
        windowWidth = $(window).width();
        updateParallax(false);
      });

    });

  };

  $(function() {
    $('.u-parallax').parallax();
  });

}( jQuery ));