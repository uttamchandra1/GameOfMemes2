const Backflow = () => {
    const backflow = document.createElement("div")
    backflow.className = "backflow"

    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back.png";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Start your magic"

    backflow.appendChild(backimg);
    backflow.appendChild(backtext);

    return backflow;
}