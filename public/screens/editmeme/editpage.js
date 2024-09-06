const Meme_Edit_Screen = (memeTemplateUrl, game, music) => {
  const editscreen = document.createElement("div");
  editscreen.className = "editscreen";
  editscreen.classList = "editscreen";

  const edittools = document.createElement("div");
  edittools.className = "edittools";

  const audio = music ? document.createElement("audio") : null;
  if (audio) {
    audio.src = music.path;
    audio.autoplay = true;
    audio.loop = true;
    editscreen.appendChild(audio);
  }


  editscreen.appendChild(Backflow(memeTemplateUrl, game ,audio));
  edittools.appendChild(Selected_Meme(memeTemplateUrl));
  //edittools.appendChild(AddText())
  edittools.appendChild(EditButtons(memeTemplateUrl, game, edittools , editscreen ,audio));
  edittools.appendChild(GameassetPage(game, editscreen));
  // editscreen.appendChild();
  editscreen.appendChild(edittools);

  return editscreen;
};
