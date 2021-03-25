function toggleNavbar(){
  var x = document.getElementById("mobile-menu");
  if (x.className === "mobile-menu") {
    x.className += " active";
  } else {
    x.className = "mobile-menu";
  }
}