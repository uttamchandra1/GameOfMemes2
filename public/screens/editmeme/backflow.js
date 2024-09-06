const Backflow = (memeTemplateUrl , game , audio) => {
  const backflow = document.createElement("div");
  backflow.className = "backflow";

  const backdiv = document.createElement("div");
  backdiv.className = "backdiv";

  const twobuttons = document.createElement("div");
  twobuttons.className = "twobuttons"


  const backbutton = document.createElement("div");
  
  backbutton.appendChild(ControlButton("./assets/polygon.svg"))

  backbutton.addEventListener("click", () => {

    BackScreen()
    //changeScreen(Start_Edit_Screen(memeTemplateUrl , game));
  });

  const homebutton = document.createElement("div");
  homebutton.appendChild(ControlButton("./assets/homevector.svg"));

  homebutton.addEventListener("click", () => {
    changeScreen(Home_Screen());
  });

  const sharebutton = document.createElement("div");
  sharebutton.appendChild(ControlButton("./assets/sharevector.svg"))
  

  sharebutton.addEventListener("click" , () => {
    createAndDownloadMeme(memeTemplateUrl , audio)
  })


  twobuttons.appendChild(homebutton);
  twobuttons.appendChild(sharebutton);

  backdiv.appendChild(backbutton);
  
  backflow.appendChild(backdiv);
  backflow.appendChild(twobuttons);


  return backflow;
};
