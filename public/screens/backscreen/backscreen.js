const BackScreen = () => {

    const backscreen = document.createElement("div");
    backscreen.className = "backscreen";


    const mainbackcontainer = document.createElement("div");
    mainbackcontainer.className = "mainbackcontainer";


    const catgifdiv = document.createElement("div");
    catgifdiv.className = "catgifdiv";

    const catgifImage = document.createElement("img");
    catgifImage.src = "./assets/exitcat.gif"
    catgifImage.className = "catimage"

    catgifdiv.appendChild(catgifImage);


    const popmessage = document.createElement("div");
    popmessage.className = "popmessage";

    const popmessageImage = document.createElement("img");
    popmessageImage.className = "popmessageimage";
    popmessageImage.src = "./assets/seriously.png"

    popmessage.appendChild(popmessageImage)

    document.body.appendChild(backscreen);

    const mainmessageContainer = document.createElement("div");
    mainmessageContainer.className = "mainmessagecontainer";

    const gifDiv = document.createElement("div");
    gifDiv.className = "gifDiv";

    const maingifDiv = document.createElement("div");
    maingifDiv.className = "maingifdiv";

    

    gifDiv.appendChild(catgifdiv);
    gifDiv.appendChild(popmessage);
    maingifDiv.appendChild(gifDiv);

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
    textdiv.appendChild(paraspan);

    messagediv.appendChild(textdiv)
    

    const askButtons = document.createElement("div");
    askButtons.className = "askbuttons";

    const exitButton = document.createElement("div");
    exitButton.appendChild(NormalButton(
        width = "117px", 
        height = "35px", 
        text = "Yes, exit", 
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
      mainbackcontainer.appendChild(maingifDiv);
    mainmessageContainer.appendChild(messagediv)
    mainbackcontainer.appendChild(mainmessageContainer);
    backscreen.appendChild(mainbackcontainer);
   
    return backscreen;
}