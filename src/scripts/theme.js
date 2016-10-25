// -- Include dependencies
var foundation = require('./vendor/foundation/js/foundation.min.js');

// -- Init Foundation
$(document).foundation();

// Hide nav

var mainHeader = $('.c-header'),
  arrow = $('.o-bullet__arrow--animate'),
  scrolling = false,
  previousTop = 0,
  currentTop = 0,
  scrollDelta = 10,
  scrollOffset = 150;

$(window).on('scroll', function(){
  if( !scrolling ) {
    scrolling = true;
    addNavBackround();
    arrowAnimate();
    (!window.requestAnimationFrame)
      ? setTimeout(autoHideHeader, 250)
      : requestAnimationFrame(autoHideHeader);
  }
});

function autoHideHeader() {
  var currentTop = $(window).scrollTop();
  checkSimpleNavigation(currentTop);
  previousTop = currentTop;
  scrolling = false;
}

function checkSimpleNavigation(currentTop) {
  if (previousTop - currentTop > scrollDelta) {
    mainHeader.removeClass('is--hidden');
  } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
    mainHeader.addClass('is--hidden');
  }
}

function addNavBackround(currentTop) {
  var currentTop = $(window).scrollTop();
  if (currentTop > 0) {
    mainHeader.removeClass('c-header--top');
  } else {
    mainHeader.addClass('c-header--top');
  }
}

function arrowAnimate(currentTop) {
  var currentTop = $(window).scrollTop();
  if (currentTop > 0) {
    arrow.removeClass('o-bullet__arrow--animate');
  } else {
    arrow.addClass('o-bullet__arrow--animate');
  }
}

// Show project
viewProject = function (e) {   
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

// Hide project
$('.o-project').each(function (e) {
  if (e >= 1) $(this).hide();
});

// Show new project
$('.o-project__moreButton').on('click', viewProject);

// -- Smooth scroll
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