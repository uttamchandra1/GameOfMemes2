const GameMeme = (game) => {


    const gamememe = document.createElement("div");
    gamememe.className = "gamememe";

    const backfloww = document.createElement("div")
    backfloww.className = "backfloww";

    const backcontrol = document.createElement("div");
    backcontrol.className = "backcontrol";
    
    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Meme Templates "


    backcontrol.appendChild(ControlButton("./assets/polygon.svg"));
    backfloww.appendChild(backcontrol);
    backfloww.appendChild(backtext);
    
    backcontrol.addEventListener("click" , ()=> {
        changeScreen(Home_Screen())
    })

    gamememe.appendChild(backfloww);
   // gamememe.appendChild(SelectedGame(game));

    
    return gamememe;



}