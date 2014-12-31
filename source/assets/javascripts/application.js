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

function toggleNav(event) {
  var clicked = event.target;
  var nav = document.getElementsByClassName('navigation')[0];
  var toggleA = document.getElementsByClassName('navigation-toggle')[0];
  var toggleB = document.getElementsByClassName('navigation-toggle')[1];

  if (clicked == toggleA || clicked == toggleB) {
    nav.classList.toggle('is-shown');
    event.preventDefault();
  }
};

window.onclick = function(event) {
  toggleNav(event);
};
