const Backflow = (memeTemplateUrl) => {
  const backflow = document.createElement("div");
  backflow.className = "backflow";

  const backdiv = document.createElement("div");
  backdiv.className = "backdiv";

 /*  const sharebutton = document.createElement("button");
  sharebutton.innerText = "Share";
  sharebutton.className = "sharebutton";

  const shareimg = document.createElement("img");
  shareimg.src = "./assets/share.png";
  shareimg.alt = "share";
  shareimg.className = "shareimg";

  //sharebutton.addEventListener("click", () => {
   // createAndDownloadMeme(memeTemplateUrl);
 // });

 */

  const crossbutton = document.createElement("button");
  crossbutton.className = "crossButton";

  const crossimg = document.createElement("img");
  crossimg.className = "crossimg";
  crossimg.src = "./assets/cross4.svg";

  //crossbutton.appendChild(crossimg);

  const backtext = document.createElement("p");
  backtext.className = "backtext";
  backtext.innerText = "Two Buttons";

  crossimg.addEventListener("click", () => {
    changeScreen(Home_Screen());
  });

  //sharebutton.appendChild(shareimg);
  backdiv.appendChild(crossimg);
  backdiv.appendChild(backtext);
  backflow.appendChild(backdiv);
  //backflow.appendChild(sharebutton);

  return backflow;
};
