const EditButtons = () => {

    const buttonsdiv = document.createElement("div");
    buttonsdiv.className="buttonsdiv"


    const addtextdiv = document.createElement("div");
    addtextdiv.className = "addtextdiv";

    const addTextButton = document.createElement("button");
    addTextButton.className = "addtextbutton";
    addTextButton.innerText = "Add Text"

    //const textbuttonimg = document.createElement("img");
    //textbuttonimg.className = "textbutton";
    //textbuttonimg.src = "./assets/addtext.svg";

    addTextButton.addEventListener("click", function() {
        console.log("clicked");
        
        addtextdiv.appendChild(TextArea(() => {
            
            addTextButton.style.display = "block"
        }));
        addTextButton.style.display = "none"
    });


    const addMusicdiv = document.createElement("div");
    addMusicdiv.className = "addmusicdiv";

    const addMusicButton = document.createElement("button");
    addMusicButton.className = "addmusicbutton";
    addMusicButton.innerText = "Add Music";

 //   const musicbuttonimg = document.createElement("img");
   // musicbuttonimg.className = "textbutton";
   // musicbuttonimg.src = "./assets/addmusic.svg";

   // addMusicButton.appendChild(musicbuttonimg);
    addMusicdiv.appendChild(addMusicButton);

   // addTextButton.appendChild(textbuttonimg);
    addtextdiv.appendChild(addTextButton);
    buttonsdiv.appendChild(addtextdiv);
    buttonsdiv.appendChild(addMusicButton);



    return buttonsdiv;

}