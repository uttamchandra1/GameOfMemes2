const EditButtons = (edittools, liveTextDiv) => {
  const buttonsdiv = document.createElement("div");
  buttonsdiv.className = "buttonsdiv";

  const addtextdiv = document.createElement("div");
  addtextdiv.className = "addtextdiv";

  const addTextButton = document.createElement("button");
  addTextButton.className = "addtextbutton";
  addTextButton.innerHTML = "Add Text"
  
  
  //const textbuttonimg = document.createElement("img");
  //textbuttonimg.className = "textbutton";
  //textbuttonimg.src = "./assets/addtext.svg";

  addTextButton.addEventListener("click", function () {
    console.log("clicked");

    // Create the TextArea and immediately focus on the liveTextDiv
    const textArea = TextArea(() => {
        addTextButton.style.display = "block";
      });
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
};
