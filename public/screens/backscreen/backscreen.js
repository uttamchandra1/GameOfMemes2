const BackScreen = () => {

    const backscreen = document.createElement("div");
    backscreen.className = "backscreen";


    const mainbackcontainer = document.createElement("div");
    mainbackcontainer.className = "mainbackcontainer";


    const catgifdiv = document.createElement("div");
    catgifdiv.className = "catgifdiv";

    document.body.appendChild(backscreen);

    const mainmessageContainer = document.createElement("div");
    mainmessageContainer.className = "mainmessagecontainer";

    const messagediv = document.createElement("div");
    messagediv.className = "messagediv";

    const textdiv = document.createElement("div");
    textdiv.className = "textdiv"

    const headingspan = document.createElement("span");
    headingspan.className = "headingspan";
    headingspan.innerHTML = 'Are you sure you want to exit <span class="highlight">editing this template</span>?';

    const paraspan = document.createElement("div");
    paraspan.className = "paraspan";
    paraspan.innerHTML = "Your changes won’t be saved!";

    textdiv.appendChild(headingspan);
    textdiv.appendChild(paraspan)
    messagediv.appendChild(textdiv)
    

    const askButtons = document.createElement("div");
    askButtons.className = "askbuttons";

    const exitButton = document.createElement("div");
    exitButton.appendChild(NormalButton(
        width = "117px", 
        height = "35px", 
        text = "Yes,exit", 
        fontSize = "12px",
        gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"],
      ))
    askButtons.appendChild(exitButton)
    
    exitButton.addEventListener("click" , () => {
        document.body.removeChild(backscreen)
        changeScreen(Home_Screen())
    })

    const stayButton = document.createElement("div");
    stayButton.appendChild(NormalButton(
        width = "117px", 
        height = "35px", 
        text = "No", 
        fontSize = "12px",
        gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"],
      )) 

      stayButton.addEventListener("click" , () => {
        document.body.removeChild(backscreen)
    })

    askButtons.appendChild(stayButton)

      messagediv.appendChild(askButtons)

    mainmessageContainer.appendChild(messagediv)
    mainbackcontainer.appendChild(mainmessageContainer);
    backscreen.appendChild(mainbackcontainer);
   
    return backscreen;
}