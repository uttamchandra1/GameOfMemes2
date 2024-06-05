const Backflow = (memeTemplateUrl) => {
    const backflow = document.createElement("div")
    backflow.className = "backflow"

    const backdiv = document.createElement("div");
    backdiv.className = "backdiv"

    const sharebutton = document.createElement("button");
    sharebutton.innerText = "Share"
    sharebutton.className = "sharebutton"

    const shareimg = document.createElement("img")
    shareimg.src = "./assets/share.png";
    shareimg.alt = "share";
    shareimg.className = "shareimg";


    sharebutton.addEventListener("click", () => {
        createAndDownloadMeme(memeTemplateUrl);
        console.log(memeTemplateUrl)
    });

    const backimg = document.createElement("img");
    backimg.className = 'backimg';
    backimg.src = "./assets/back.png";

    const backtext = document.createElement("p")
    backtext.className = "backtext";
    backtext.innerText = "Start your magic"

    backimg.addEventListener("click" , () => {
        changeScreen(Home_Screen())
    })

    sharebutton.appendChild(shareimg);
    backdiv.appendChild(backimg);
    backdiv.appendChild(backtext);
    backflow.appendChild(backdiv);
    backflow.appendChild(sharebutton);

    return backflow;
}


