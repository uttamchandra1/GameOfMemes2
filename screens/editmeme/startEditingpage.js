const Start_Edit_Screen = (memeTemplateUrl , game) => {

    const starteditscreen = document.createElement("div");
    starteditscreen.className = "starteditscreen";

    const startbuttondiv = document.createElement("div");
    startbuttondiv.className = "startbuttondiv";


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
    starteditscreen.appendChild(Backflow(memeTemplateUrl))
    starteditscreen.appendChild(Selected_Meme(memeTemplateUrl))
    starteditscreen.appendChild(startbuttondiv);
    
    
    



    return starteditscreen;

}
