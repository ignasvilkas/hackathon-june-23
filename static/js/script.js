// Frontend Developers here you will write all the code for JavaScript.
// Delete the placeholder below and start coding.
// Godd Luck!

function changeButton() {
  var button = document.querySelector(".my-button");

  // Change color
  button.style.backgroundColor = "red";

  // Change text
  button.innerHTML = "Javascript works :)";
}

function closeSideNav() {
    var sidenavInstance = M.Sidenav.getInstance(document.getElementById('mobile-nav'));
    sidenavInstance.close();
  }

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });