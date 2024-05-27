const Buttons = () => {
  const DynammicDiv = document.createElement("div");
  DynammicDiv.className = "DynammicDiv";

  const ButtonDiv = document.createElement("div");
  ButtonDiv.className = "ButtonDiv";

  const Gamelist = document.createElement("div");
  Gamelist.className = "Gamelist";

  const Popularmeme = document.createElement("div");
  Popularmeme.className = "Popularmeme";

  const PopularButton = document.createElement("button");
  PopularButton.innerHTML = "Popular";
  PopularButton.className = "Popular-Button";

  const GameWise = document.createElement("button");
  GameWise.className = "GameWise-Button";
  GameWise.innerHTML = "GameWise";

  function hideGameList() {
    Gamelist.style.display = "none";
    Popularmeme.style.display = "grid";
  }
  function showGameList() {
    Gamelist.style.display = "grid";
    Popularmeme.style.display = "none";
  }
  
  function displayPopularMeme() {
    console.log("Display Popular Games");
    PopularButton.classList.add("active");
    GameWise.classList.remove("active");
    Popularmeme.appendChild(PopularMeme())
    hideGameList();
  }

  function displayGameWiseList() {
    console.log("Display GameWise List");
    GameWise.classList.add("active");
    PopularButton.classList.remove("active");
    Gamelist.appendChild(GameList());
    showGameList();
  }

 
  PopularButton.addEventListener("click", displayPopularMeme);

  GameWise.addEventListener("click", displayGameWiseList );

  

  ButtonDiv.appendChild(PopularButton);
  ButtonDiv.appendChild(GameWise);
  DynammicDiv.appendChild(ButtonDiv);
  DynammicDiv.appendChild(Gamelist);
  DynammicDiv.appendChild(Popularmeme);

  displayGameWiseList();
  
  return DynammicDiv;
};
