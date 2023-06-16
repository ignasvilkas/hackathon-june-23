// Frontend Developers here you will write all the code for JavaScript.
// Delete the placeholder below and start coding.
// Godd Luck!

$(document).ready(function() {
  var sideNavInstance = $('.sidenav').sidenav();

  // Add event listener to close the sidenav on link click
  $('#mobile-demo li a').on('click', function() {
    sideNavInstance.sidenav('close');
  });
});
