const Backflow = () => {
  const backflow = document.createElement("div");
  backflow.className = "backflow";

  const backdiv = document.createElement("div");
  backdiv.className = "backdiv";

  const backbutton = document.createElement("button");
  backbutton.className = "crossButton";

  const backimg = document.createElement("img");
  backimg.className = "crossimg";
  backimg.src = "./assets/back1.svg";


  const backtext = document.createElement("p");
  backtext.className = "backtext";
  backtext.innerText = "Two Buttons";

  backimg.addEventListener("click", () => {
    changeScreen(Home_Screen());
  });

  
  backdiv.appendChild(backimg);
  backdiv.appendChild(backtext);
  backflow.appendChild(backdiv);


  return backflow;
};
