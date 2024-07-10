const GameMeme = (game) => {

    const gamememe = document.createElement("div");
    gamememe.className = "gamememe";

    const backfloww = document.createElement("div")
    backfloww.className = "backfloww";

    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back1.svg";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Meme Templates "


    backfloww.appendChild(backimg);
    backfloww.appendChild(backtext);
    
    backimg.addEventListener("click" , ()=> {
        changeScreen(Home_Screen())
    })

    gamememe.appendChild(backfloww);
   // gamememe.appendChild(SelectedGame(game));


    return gamememe;



}