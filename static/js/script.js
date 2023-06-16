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

