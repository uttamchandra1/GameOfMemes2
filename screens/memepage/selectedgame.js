const SelectedGame = (game) => {

    const selectedgame = document.createElement("div");
    selectedgame.className = "selectedgame"

    const selectedimg = document.createElement("img");
    selectedimg.className = "selectedimg";

    selectedimg.src = game.thumbnail;
    selectedgame.alt = "gameThumbnail"

    const  gamename = document.createElement("p");
    gamename.className = "gamename"
    gamename.innerText = game.name;


    selectedgame.appendChild(selectedimg);
    selectedgame.appendChild(gamename);


    return selectedgame;
}