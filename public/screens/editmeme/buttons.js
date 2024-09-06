
const EditButtons = (memeTemplateUrl, game, edittools, liveTextDiv , audio) => {
  const buttonsdiv = document.createElement("div");
  buttonsdiv.className = "buttonsdiv";

  const addtextdiv = document.createElement("div");
  addtextdiv.className = "addtextdiv";

  addtextdiv.addEventListener("click", function () {
    console.log("clicked");

    // Create the TextArea and immediately focus on the liveTextDiv
    const textArea = TextArea(() => {});
    const liveTextDiv = textArea.querySelector(".liveTextDiv");
    const settings = textArea.querySelector(".settings");
    // Append the textArea to edittools and focus on the liveTextDiv
    edittools.appendChild(textArea);
    liveTextDiv.focus();
    liveTextDiv.contentEditable = true; // Ensure it's editable
    settings.style.display = "flex";
  });

  const addMusicdiv = document.createElement("div");
  addMusicdiv.className = "addmusicdiv";

  addMusicdiv.addEventListener("click", () => {
    openMusicOverlay(memeTemplateUrl, game);

    if (!audio) {
      
      addMusicdiv.innerHTML = ""; 
      addMusicdiv.appendChild(
        EdiToolsButton(
          edittoolIconSrc = "./assets/soundwave.gif",
          edittoolIconClass = "soundwaveimg",
          gradientColors = ["#A5E7FF", "#61AFFF", "#61AFFF", "#1D77FF"],
          width = "125px",
          elementType = "img",  
          elementClass = "crossbuttontool", 
          elementContent = "./assets/crossbuttontools.png"  
        )
      );
    }
  });

    addMusicdiv.appendChild(
      EdiToolsButton(
        edittoolIconSrc = "./assets/musicvector.png",
        edittoolIconClass = "edittolsicon",
        gradientColors = ["#A5E7FF", "#61AFFF", "#61AFFF", "#1D77FF"],
        width = "125px",
        elementType = "span",  
       elementClass = "edittoolstext", 
       elementContent = "Add Music"  
      )
    );
  
  addtextdiv.appendChild(
    EdiToolsButton(
      edittoolIconSrc = "./assets/textvector.png",
      edittoolIconClass = "edittolsicon",
      gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"],
      width = "118px",
      elementType = "span",  
      elementClass = "edittoolstext", 
      elementContent = "Add Text"  
    )
  );
  buttonsdiv.appendChild(addtextdiv);
  buttonsdiv.appendChild(addMusicdiv);

  return buttonsdiv;
};
