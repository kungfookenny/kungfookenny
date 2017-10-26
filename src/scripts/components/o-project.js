//Show project
function viewProject(e) {   
  var $wrapper = $(this).parent();
  var viewMore = 'view more';
  var noMore = 'that\'s all!';
  var wrapperHeight = $wrapper.height();
  var $projects = $('.o-project');
  var projectHeight = $projects.height();
  var margin = parseInt($projects.css('margin-bottom'));
  var nextHeight = wrapperHeight + projectHeight + margin;
  var viewable = $('.o-project.is-viewable').length;
  var totalProjects = $projects.length;
  var button = $(this);
  e.preventDefault();
  if ( viewable < totalProjects ) {
    $wrapper.css({'height': wrapperHeight}).animate({'height': nextHeight}, function () {
      $('.o-project').eq(viewable).fadeIn().addClass('is-viewable');
      $wrapper.removeAttr('style');
      button.removeAttr('style');
      if ( viewable + 1 >= totalProjects ) {
        button.text(noMore).addClass('c-moreButton--noMore');
      } else {
        button.text(viewMore);
      }
    });
  }
};

// Show new project
$('.o-project__moreButton').on('click', viewProject);

console.log(Math.random());