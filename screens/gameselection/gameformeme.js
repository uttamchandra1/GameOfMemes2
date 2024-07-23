const GameForMeme = (meme , memeTemplateUrl) => {

    const gameformeme = document.createElement("div")
    gameformeme.className = "gameformeme"


    const upperdiv = document.createElement("div");
    upperdiv.className = "upperdiv";


    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back1.svg";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Choose a Game for Template"

    backimg.addEventListener("click" , ()=> {
        changeScreen(Home_Screen())
    })


    upperdiv.appendChild(backimg);
    upperdiv.appendChild(backtext);
    gameformeme.appendChild(upperdiv);




    


    return gameformeme;

    
}