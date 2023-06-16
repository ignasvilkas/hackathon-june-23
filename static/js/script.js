// Frontend Developers here you will write all the code for JavaScript.
// Delete the placeholder below and start coding.
// Godd Luck!

$(document).ready(function(){
  $('.sidenav').sidenav();
});

function changeButton() {
  var button = document.querySelector(".my-button");

  // Change color
  button.style.backgroundColor = "red";

  // Change text
  button.innerHTML = "Javascript works :)";
}

document.addEventListener('DOMContentLoaded', function() {
  // Get references to the sidenav and the sidenav links
  var sidenav = document.querySelector('.sidenav');
  var sidenavLinks = document.querySelectorAll('#mobile-demo a');

  // Add event listeners to the sidenav links
  sidenavLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Close the sidenav after a link is clicked (optional)
      var sidenavInstance = M.Sidenav.getInstance(sidenav);
      sidenavInstance.close();

      // Prevent the default link behavior
      event.preventDefault();

      // Get the target URL from the link's href attribute
      var targetUrl = link.getAttribute('href');

      // Navigate to the target URL
      window.location.href = targetUrl;
    });
  });
});
