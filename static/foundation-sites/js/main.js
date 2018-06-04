$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
      $("body").removeClass("starting")
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
      $("body").addClass("starting")
    }
  });
});

