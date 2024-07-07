const  GameList = (memeTemplateUrl) => {

    const gamelist = document.createElement("div");
    gamelist.className = "gamelist"

    games.forEach((game) => {
        const gameDiv = document.createElement("div");
        gameDiv.classList.add("game");
      
        const thumbnailImg = document.createElement("img");
        thumbnailImg.src = game.thumbnail;
        thumbnailImg.alt = game.name;
      
        const namePara = document.createElement("p");
        namePara.textContent = game.name;
      
        gameDiv.appendChild(thumbnailImg);
        gameDiv.appendChild(namePara);
        gamelist.appendChild(gameDiv);
      
        gameDiv.addEventListener("click" , () => {
      
          if (memeTemplateUrl) {
            console.log("Meme template already selected, opening meme edit screen");
            changeScreen(Meme_Edit_Screen(memeTemplateUrl, game));
          } else {
            console.log("No meme template selected, opening meme page screen");
            changeScreen(Meme_Page_Screen(game));
          }
          
        });
      
      });


      return gamelist;
}