const Start_Edit_Screen = (memeTemplateUrl , game) => {

    const starteditscreen = document.createElement("div");
    starteditscreen.className = "starteditscreen";

    const backflowdiv = document.createElement("div");
    backflowdiv.className = "backflowdiv";

    const crossbutton = document.createElement("button");
    crossbutton.className = "crossbutton";

    const crosstext = document.createElement("p");
    crosstext.className = "crosstext";
    crosstext.innerText = "Two Buttons";
   
    backflowdiv.appendChild(crossbutton)
    backflowdiv.appendChild(crosstext)

    const startbuttondiv = document.createElement("div");
    startbuttondiv.className = "startbuttondiv";

    const memecontainerstart = document.createElement("div");
    memecontainerstart.className = "memecontainerstart";


    const starteditbutton = document.createElement("button")
    starteditbutton.className = "starteditbutton"
    starteditbutton.innerHTML = "Start Editing"

   // const startbuttonimg = document.createElement("img");
    //startbuttonimg.className = "startbuttonimg"
   // startbuttonimg.src = "./assets/startedit1.svg";
    

   starteditbutton.addEventListener("click" , () => {
    changeScreen(Meme_Edit_Screen(memeTemplateUrl, game));
   })

   startbuttondiv.appendChild(starteditbutton)
    //starteditbutton.appendChild(startbuttonimg);
   starteditscreen.appendChild(backflowdiv)

    memecontainerstart.appendChild(Selected_Meme(memeTemplateUrl))
    starteditscreen.appendChild(memecontainerstart)
    starteditscreen.appendChild(startbuttondiv);
    
    


    return starteditscreen;

}
