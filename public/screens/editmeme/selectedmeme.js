const Selected_Meme = (memeTemplateUrl) => {

    const memecontainer = document.createElement("div")
    memecontainer.className = "memecontainer"

    const memeImg = document.createElement("img");
    memeImg.className = "memeImg";
    memeImg.src = memeTemplateUrl;
    memeImg.alt = "selectedimage";

    memecontainer.appendChild(memeImg);

    return memecontainer;
}