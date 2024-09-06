const TwoButtons = () => {
    const btngroup = document.createElement("div")
    btngroup.className = "btngroup";

    const button1 = document.createElement("button");
    button1.className = 'button1'

    const button2 = document.createElement("button");
    button2.className = 'button2';
    button2.innerHTML = "Your Tracks";

    button1.appendChild(createCustomButton(
      width = "180px", 
      height = "40px", 
      text = "Start Editing", 
      fontSize = "14px",
      gradientColors = ["#87cefa", "#4682b4", "#4682b4", "#1e90ff"]
    ))

    

    btngroup.appendChild(button1);
    btngroup.appendChild(button2);

  return btngroup;
}