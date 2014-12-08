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
