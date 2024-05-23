const GameSelection_Page = (meme , memeTemplateUrl) => {

    const gameselctionpage = document.createElement("div");
    gameselctionpage.className = "gameselctionpage";


    const gamelistdiv = document.createElement("div");
    gamelistdiv.className = "gamelistdiv";
    gamelistdiv.appendChild(GameList(memeTemplateUrl));

    gameselctionpage.appendChild(GameForMeme(meme ,  memeTemplateUrl));
    gameselctionpage.appendChild(gamelistdiv);

    return gameselctionpage;
    
}