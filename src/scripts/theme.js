// Include dependencies

//=require ./vendor/what-input/js/what-input.min.js

// Foundation plugins: comment out what you don't need

//=require ./vendor/foundation/js/plugins/foundation.core.js
//=require ./vendor/foundation/js/plugins/foundation.abide.js
//=require ./vendor/foundation/js/plugins/foundation.accordion.js
//=require ./vendor/foundation/js/plugins/foundation.accordionMenu.js
//=require ./vendor/foundation/js/plugins/foundation.drilldown.js
//=require ./vendor/foundation/js/plugins/foundation.dropdown.js
//=require ./vendor/foundation/js/plugins/foundation.dropdownMenu.js
//=require ./vendor/foundation/js/plugins/foundation.equalizer.js
//=require ./vendor/foundation/js/plugins/foundation.interchange.js
//=require ./vendor/foundation/js/plugins/foundation.magellan.js
//=require ./vendor/foundation/js/plugins/foundation.offcanvas.js
//=require ./vendor/foundation/js/plugins/foundation.orbit.js
//=require ./vendor/foundation/js/plugins/foundation.responsiveMenu.js
//=require ./vendor/foundation/js/plugins/foundation.responsiveToggle.js
//=require ./vendor/foundation/js/plugins/foundation.reveal.js
//=require ./vendor/foundation/js/plugins/foundation.slider.js
//=require ./vendor/foundation/js/plugins/foundation.sticky.js
//=require ./vendor/foundation/js/plugins/foundation.tabs.js
//=require ./vendor/foundation/js/plugins/foundation.toggler.js
//=require ./vendor/foundation/js/plugins/foundation.tooltip.js
//=require ./vendor/foundation/js/plugins/foundation.util.box.js
//=require ./vendor/foundation/js/plugins/foundation.util.keyboard.js
//=require ./vendor/foundation/js/plugins/foundation.util.mediaQuery.js
//=require ./vendor/foundation/js/plugins/foundation.util.motion.js
//=require ./vendor/foundation/js/plugins/foundation.util.nest.js
//=require ./vendor/foundation/js/plugins/foundation.util.timerAndImageLoader.js
//=require ./vendor/foundation/js/plugins/foundation.util.touch.js
//=require ./vendor/foundation/js/plugins/foundation.util.triggers.js
//=require ./vendor/foundation/js/plugins/foundation.zf.responsiveAccordionTabs.js

// -- Init Foundation
$(document).foundation();

$(window).on('scroll', function(){
  addNavBackround();
  arrowAnimate();
});

// Add background to main nav on scroll
function addNavBackround() {
  var currentTop = $(window).scrollTop(),
    mainHeader = $('.c-header');
  if (currentTop > 0) {
    mainHeader.removeClass('c-header--top');
  } else {
    mainHeader.addClass('c-header--top');
  }
};

// Animate arrow in hero section
function arrowAnimate() {
  var currentTop = $(window).scrollTop(),
    arrow = $('.o-bullet__arrow');
  if (currentTop > 0) {
    arrow.removeClass('o-bullet__arrow--animate');
  } else {
    arrow.addClass('o-bullet__arrow--animate');
  }
};

// Hide project
$('.o-project').each(function (e) {
  if (e >= 1) $(this).hide();
});

// Show new project
$('.o-project__moreButton').on('click', viewProject);

// Show project
function viewProject(e) {   
  var wrapper = $(this).parent(),
    viewMore = 'view more',
    noMore = 'that\'s all!',
    wrapperHeight = wrapper.height(),
    projectHeight = $('.o-project').height(),
    margin = parseInt($('.o-project').css('margin-bottom')),
    nextHeight = wrapperHeight + projectHeight + margin,
    viewable = $('.o-project:visible').length,
    totalProjects = $('.o-project').length,
    button = $(this);
  e.preventDefault();
  if ( viewable < totalProjects ) {
    wrapper.css({'height': wrapperHeight}).animate({'height': nextHeight}, function () {
      $('.o-project').eq(viewable).fadeIn();
      wrapper.removeAttr('style');
      button.removeAttr('style');
      if ( viewable + 1 >= totalProjects ) {
        button.text(noMore).addClass('c-moreButton--noMore');
      } else {
        button.text(viewMore);
      }
    });
  }
};

// Smooth scroll
$('a[href*="#"]:not([href*="/#"])').click(function(e) {
  e.preventDefault();
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length){
      var top_offset = 0;
      $('html,body').animate({
        scrollTop: target.offset().top - top_offset
      }, 800);
    }
  }
});