const Backflow = () => {
  const backflow = document.createElement("div");
  backflow.className = "backflow";

  const backdiv = document.createElement("div");
  backdiv.className = "backdiv";

  const twobuttons = document.createElement("div");
  twobuttons.className = "twobuttons"


  const backbutton = document.createElement("button");
  backbutton.className = "crossButton";


  const backimg = document.createElement("img");
  backimg.className = "crossimg";
  backimg.src = "./assets/back1.svg";



  backimg.addEventListener("click", () => {
    changeScreen(Home_Screen());
  });

  const homebutton = document.createElement("button");
  homebutton.className = "homebutton";

  const sharebutton = document.createElement("button");
  sharebutton.className = "sharebutton";


  twobuttons.appendChild(homebutton);
  twobuttons.appendChild(sharebutton);

  backdiv.appendChild(backimg);
  
  backflow.appendChild(backdiv);
  backflow.appendChild(twobuttons);


  return backflow;
};
