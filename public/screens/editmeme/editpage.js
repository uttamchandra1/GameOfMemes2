
const Meme_Edit_Screen = (memeTemplateUrl, game, music) => {
  const editscreen = document.createElement("div");
  editscreen.className = "editscreen";

  const edittools = document.createElement("div");
  edittools.className = "edittools";
 

  editscreen.appendChild(Backflow(memeTemplateUrl, game ));
  edittools.appendChild(Selected_Meme(memeTemplateUrl));
  //edittools.appendChild(AddText())
  edittools.appendChild(EditButtons(memeTemplateUrl, game, edittools ));
  edittools.appendChild(GameassetPage(game, editscreen));
  // editscreen.appendChild();
  editscreen.appendChild(edittools);

  return editscreen;
};


