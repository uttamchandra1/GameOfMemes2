const GameForMeme = (meme , memeTemplateUrl) => {

    const gameformeme = document.createElement("div")
    gameformeme.className = "gameformeme"


    const upperdiv = document.createElement("div");
    upperdiv.className = "upperdiv";

    const lowerdiv = document.createElement("div");
    lowerdiv.className = "lowerdiv";

    const selectedmeme = document.createElement("img");
    selectedmeme.className = "selectedmeme";
    selectedmeme.src = memeTemplateUrl;
    selectedmeme.alt = "memeTemplateUrl";

    const selectedmemename = document.createElement("p");
    selectedmemename.className = "selectedmemename";
    selectedmemename.innerText = meme.name;


    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back.png";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Choose a game to use this template"

    backimg.addEventListener("click" , ()=> {
        changeScreen(Home_Screen())
    })


    upperdiv.appendChild(backimg);
    upperdiv.appendChild(backtext);
    lowerdiv.appendChild(selectedmeme);
    lowerdiv.appendChild(selectedmemename);

    gameformeme.appendChild(upperdiv);
    gameformeme.appendChild(lowerdiv);




    


    return gameformeme;

    
}