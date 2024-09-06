const Buttons = () => {
  const DynammicDiv = document.createElement("div");
  DynammicDiv.className = "DynammicDiv";

  const logocontainer = document.createElement("div");
  logocontainer.className = "logocontainer"; // Assuming this contains the logo

  const fixeddiv = document.createElement("div");
  fixeddiv.className = "fixeddiv";

  const Heading = document.createElement("a");
  Heading.className = "heading";
  Heading.innerText = "Find the template for your meme";

  const HomeButtonMe = document.createElement("div");
  HomeButtonMe.className = "homebuttonme";

  const ButtonDiv = document.createElement("div");
  ButtonDiv.className = "ButtonDiv";

  const Gamelist = document.createElement("div");
  Gamelist.className = "Gamelisthome";

  const Popularmeme = document.createElement("div");
  Popularmeme.className = "Popularmeme";

  const PopularButton = document.createElement("button");
  PopularButton.innerHTML = "Popular";
  PopularButton.className = "Popular-Button";

  const GameWise = document.createElement("button");
  GameWise.className = "GameWise-Button";
  GameWise.innerHTML = "Game Wise";

  function hideGameList() {
    Gamelist.style.display = "none";
    Popularmeme.style.display = "grid";
  }
  
  function showGameList() {
    Gamelist.style.display = "grid";
    Popularmeme.style.display = "none";
  }

  function onMostPopularClick() {
    console.log("Display Popular Games");
    Popularmeme.appendChild(PopularMeme());
    hideGameList();
  }

  function onGameWiseClick() {
    Gamelist.innerHTML = ''; 
    Gamelist.appendChild(GameList());
    showGameList();
  }


  ButtonDiv.appendChild(PopularButton);
  ButtonDiv.appendChild(GameWise);
  HomeButtonMe.appendChild(ButtonMe({
    onMostPopularClick,
    onGameWiseClick,
    initialActive : 'Game Wise'
  }));
  fixeddiv.appendChild(Heading);
  fixeddiv.appendChild(HomeButtonMe);
  DynammicDiv.appendChild(logocontainer);
  DynammicDiv.appendChild(fixeddiv);
  DynammicDiv.appendChild(Gamelist);
  DynammicDiv.appendChild(Popularmeme);

  onGameWiseClick();


  return DynammicDiv;
};
