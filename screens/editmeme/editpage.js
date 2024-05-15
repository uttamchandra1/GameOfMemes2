const Meme_Edit_Screen = (memeTemplateUrl) => {

    const editscreen = document.createElement("div");
    editscreen.className = "editscreen";


    editscreen.appendChild(Backflow())
    editscreen.appendChild(Selected_Meme(memeTemplateUrl));
    editscreen.appendChild(AddText());

    return editscreen;

}