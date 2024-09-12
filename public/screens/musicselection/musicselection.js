const Music_Selection = (memeTemplateUrl, game) => {
  const musicselectionpage = document.createElement("div");
  musicselectionpage.className = "musicselection";

  const musicselectionBack = document.createElement("div");
  musicselectionBack.className = "musicselectionback"

  const doneButtoncontainer = document.createElement("div");
  doneButtoncontainer.className =  "doneButtoncontainer";

  const doneButton = document.createElement("div");
  doneButton.appendChild(NormalButton(
    width = "328px", 
    height = "48px", 
    text = "Done", 
    fontSize = "18px",
    gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"],
  ));
  doneButtoncontainer.appendChild(doneButton);

  musicselectionBack.appendChild(
    BackflowComponent((BackText = "Generate Your Own Track"))
  );

  musicselectionBack.addEventListener("click" , () => {
    changeScreen(Meme_Edit_Screen(memeTemplateUrl, game))
  })

  musicselectionpage.appendChild(musicselectionBack);
  musicselectionpage.appendChild(
    OPTIONS_CONTAINER()
  );
  musicselectionpage.appendChild(doneButtoncontainer);

  return musicselectionpage;
};
