const OVERLAY = document.createElement("div");
OVERLAY.className = "overlay-class";

function loadUi() {
  // First, display the start screen
  changeScreen(Start_Screen());
  
  // Append the overlay to the body
  document.body.appendChild(OVERLAY);


  // After 5 seconds, switch to the home screen
  setTimeout(() => {
    changeScreen(Home_Screen());
  }, 5000);
  
}


loadUi()