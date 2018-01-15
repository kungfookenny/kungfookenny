//Show project
function viewProject(e) {   
  var $wrapper = $(this).parent();
  var viewMore = 'view another';
  var noMore = 'contact me for more!';
  var wrapperHeight = $wrapper.height();
  var $projects = $('.o-project');
  var projectHeight = $projects.height();
  var margin = parseInt($projects.css('margin-bottom'));
  var nextHeight = wrapperHeight + projectHeight + margin;
  var viewable = $('.o-project.is-viewable').length;
  var totalProjects = $projects.length;
  var $button = $(this);
  e.preventDefault();
  if ( viewable < totalProjects ) {
    $wrapper.css({'height': wrapperHeight}).animate({'height': nextHeight}, function () {
      var $newViewable = $projects.eq(viewable);
      $newViewable.fadeIn().addClass('is-viewable');
      $wrapper.removeAttr('style');
      $button.removeAttr('style');
      if ( viewable + 1 >= totalProjects ) {
        $button.attr('disabled', true).addClass('o-project__moreButton--noMore').text(noMore);
      } else {
        $button.blur().text(viewMore);
      }
    });
  }
};

// Show new project
$('.o-project__moreButton').on('click', viewProject);