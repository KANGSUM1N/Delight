
$(document).ready(function () {

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.menu_flex').addClass('header-scrolled');
    } else {
      $('.menu_flex').removeClass('header-scrolled');
    }
  })

});
