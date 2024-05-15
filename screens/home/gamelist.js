const  GameList = () => {

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
          console.log("clicked")
          changeScreen(Meme_Page_Screen(game))
        });
      
      });


      return gamelist;
}