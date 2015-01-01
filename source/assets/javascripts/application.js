// -------------------------------------
//
//   Smooth Scrolling
//   -> Navigatino on overview page
//
// -------------------------------------

function smoothScroll() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
}

window.onload = function(event) {
  smoothScroll();
};

// -------------------------------------
//
//   Navigation
//   -> Controls navigation toggle
//
// -------------------------------------

$(function() {
  $(".navigation-toggle").on("click", function() {
    $(".navigation").toggleClass("is-shown");
  });
});
