const OVERLAY = document.createElement("div");
OVERLAY.className = "overlay-class";

function loadUi() {
  changeScreen(Start_Screen());

  document.body.appendChild(OVERLAY);

  // After 5 seconds, switch to the home screen
  setTimeout(() => {
    changeScreen(Home_Screen());
  }, 5000);
}

loadUi();
