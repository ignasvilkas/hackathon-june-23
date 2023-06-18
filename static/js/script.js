// Frontend Developers here you will write all the code for JavaScript.
// Delete the placeholder below and start coding.
// Godd Luck!

$(document).ready(function() {
  var sideNavInstance = $('.sidenav').sidenav();

  // Add event listener to close the sidenav on hamburger button click
  $('.sidenav-trigger').on('click', function() {
    sideNavInstance.sidenav('toggle');
  });

  // Add event listener to close the sidenav on overlay click, except for link clicks
  $('.sidenav-overlay').on('click', function(event) {
    if (!$(event.target).closest('a').length) {
      sideNavInstance.sidenav('close');
    }
  });
});

$(document).ready(function () {
  $('.carousel').carousel();
});