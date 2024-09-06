const BackflowComponent = (
    BackText = "Add Music to Your Meme"
) => {
    const backcontainer = document.createElement("div");
    backcontainer.className = "backcontainer"
   

    const backTextDiv = document.createElement("div");
    backTextDiv.className = "backTextDiv";

    const backtext = document.createElement("span");
    backtext.innerHTML = BackText

    backTextDiv.appendChild(backtext)

    backcontainer.appendChild(ControlButton("./assets/polygon.svg"))
    backcontainer.appendChild(backTextDiv)

    return backcontainer;
}