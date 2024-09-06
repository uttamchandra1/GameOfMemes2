const Start_Edit_Screen = (memeTemplateUrl, game) => {
  const starteditscreen = document.createElement("div");
  starteditscreen.className = "starteditscreen";

  const backflowdiv = document.createElement("div");
  backflowdiv.className = "backflowdiv";

  const controlcrossdiv = document.createElement("div");
  controlcrossdiv.className = "controlcross"

  const crosstext = document.createElement("p");
  crosstext.className = "crosstext";
  crosstext.innerText = "Two Buttons";

  controlcrossdiv.appendChild(ControlButton("./assets/crossvector.svg"));
  backflowdiv.appendChild(controlcrossdiv)
  backflowdiv.appendChild(crosstext);

  controlcrossdiv.addEventListener("click" , () => {
    changeScreen(Meme_Page_Screen(game))
  })

  const startbutton = document.createElement("div");
  startbutton.className = "startbutton";

  const memecontainerstart = document.createElement("div");
  memecontainerstart.className = "memecontainerstart";

  startbutton.addEventListener("click", () => {
    changeScreen(Meme_Edit_Screen(memeTemplateUrl, game));
  });

  starteditscreen.appendChild(backflowdiv);
  startbutton.appendChild(
    createCustomButton(
      "336px",
      "48px",
      "Start Editing",
      "18px",
      (gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"])
    )
  );
  memecontainerstart.appendChild(Selected_Meme(memeTemplateUrl));
  starteditscreen.appendChild(memecontainerstart);
  starteditscreen.appendChild(startbutton);

  return starteditscreen;
};
