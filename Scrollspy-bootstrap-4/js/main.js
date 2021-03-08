var navMain = $(".navbar-collapse"); // avoid dependency on #id
  navMain.on("click", "a:not([data-toggle])", null, function () {
  navMain.collapse('hide');
});
$('body').scrollspy({ target: '#navbarSupportedContent' })
$('a.page-scroll').on('click', function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
});