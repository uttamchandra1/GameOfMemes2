const Meme_Edit_Screen = (memeTemplateUrl , game) => {

    const editscreen = document.createElement("div");
    editscreen.className = "editscreen";
    editscreen.classList = "editscreen";

    const edittools = document.createElement("div");
    edittools.className="edittools";




    editscreen.appendChild(Backflow(memeTemplateUrl))
    edittools.appendChild(Selected_Meme(memeTemplateUrl))
   edittools.appendChild(AddText())
   edittools.appendChild(GameassetPage(game , editscreen))
   // editscreen.appendChild();
    editscreen.appendChild(edittools);
    



    return editscreen;

}
