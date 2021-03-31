
// Mobile navbar toggle code
function toggleNavbar(){
  var x = document.getElementById("mobile-menu");
  if (x.className === "mobile-menu") {
    x.className += " active";
  } else {
    x.className = "mobile-menu";
  }
}


// Change Content of Benefit on solar panel page 
// when width is less or equal to 600px
if (screen.width <= 600){
  document.querySelector('.benefit-l1').innerHTML = '1. Our Services are affordable and reliable.';
  document.querySelector('.benefit-l2').innerHTML = '2. We take your safety into consideration while installling your renewable energy system.';
  document.querySelector('.benefit-l3').innerHTML = '3. We provide integrity services on your systems even after installing them.';
  document.querySelector('.benefit-l4').innerHTML = '4. Quick and responsive customer support is available to all our Customers.';

}