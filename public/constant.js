let CURRENT_SCREEN = ""

function changeScreen(newScreen ) {
    OVERLAY.innerHTML = "";
    OVERLAY.appendChild(newScreen);
    CURRENT_SCREEN = newScreen;
  };

  

  