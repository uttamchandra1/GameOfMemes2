const GameForMeme = (meme , memeTemplateUrl) => {

    const gameformeme = document.createElement("div")
    gameformeme.className = "gameformeme"


    const upperdiv = document.createElement("div");
    upperdiv.className = "upperdiv";

    const backControl = document.createElement("div");
    backControl.appendChild(ControlButton("./assets/polygon.svg"));
    


    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Choose a Game for Template"

    backControl.addEventListener("click" , ()=> {
        changeScreen(Home_Screen())
    })


    upperdiv.appendChild(backControl);
    upperdiv.appendChild(backtext);
    gameformeme.appendChild(upperdiv);




    


    return gameformeme;

    
}