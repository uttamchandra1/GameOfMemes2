const GameMeme = (game) => {

    const gamememe = document.createElement("div");
    gamememe.className = "gamememe";

    const backflow = document.createElement("div")
    backflow.className = "backflow"

    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back.png";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Meme templates for"

    const selectedgame = document.createElement("div");
    selectedgame.className = "selectedgame"

    const seledctedimg = document.createElement("img");
    seledctedimg.className = "seledctedimg";

    seledctedimg.src = game.thumbnail;
    selectedgame.alt = "gameThumbnail"

    const  gamename = document.createElement("p");
    gamename.className = "gamename"
    gamename.innerText = game.name;


    backflow.appendChild(backimg);
    backflow.appendChild(backtext);
    selectedgame.appendChild(seledctedimg);
    selectedgame.appendChild(gamename);

    gamememe.appendChild(backflow);
    gamememe.appendChild(selectedgame);


    return gamememe;



}