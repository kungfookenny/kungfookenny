// -- Include dependencies
var foundation = require('./vendor/foundation/js/foundation.min.js');

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
    arrow = $('.o-bullet__arrow--animate');
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