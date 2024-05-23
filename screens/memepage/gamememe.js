const GameMeme = (game) => {

    const gamememe = document.createElement("div");
    gamememe.className = "gamememe";

    const backfloww = document.createElement("div")
    backfloww.className = "backfloww";

    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back.png";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Meme templates for"


    backfloww.appendChild(backimg);
    backfloww.appendChild(backtext);
    
    backimg.addEventListener("click" , ()=> {
        changeScreen(Home_Screen())
    })

    gamememe.appendChild(backfloww);
    gamememe.appendChild(SelectedGame(game));


    return gamememe;



}