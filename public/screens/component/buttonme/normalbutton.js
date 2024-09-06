function NormalButton(
    width = "220px", 
    height = "40px", 
    text = "Start Editing", 
    fontSize = "18px",
    gradientColors = ["#87cefa", "#4682b4", "#4682b4", "#1e90ff"],
  ) {
    const ButtonContainer = document.createElement("div");
    ButtonContainer.className = "container";
    ButtonContainer.style.setProperty("--button-width", width);
    ButtonContainer.style.setProperty("--button-height", height);
  
    const parallelogram = document.createElement("div");
    parallelogram.className = "parallelogram";
    parallelogram.style.setProperty("--gradient-start", gradientColors[0]);
    parallelogram.style.setProperty("--gradient-mid", gradientColors[1]);
    parallelogram.style.setProperty("--gradient-end", gradientColors[3]);
  

    const textSpan = document.createElement("span");
    textSpan.classList = "text normaltext";
    textSpan.innerText = text;
    textSpan.style.setProperty("--font-size", fontSize);
  
    parallelogram.appendChild(textSpan);
    ButtonContainer.appendChild(parallelogram);
  
    return ButtonContainer;
  }
  