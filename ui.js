const OVERLAY = document.createElement("div");
OVERLAY.className = "overlay-class";

function loadUi() {
  changeScreen(Home_Screen());
  // Append the overlay to the body
  document.body.appendChild(OVERLAY);
  
}


loadUi()