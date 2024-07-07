const Meme_Page_Screen = (game) => {
   
    const memepage = document.createElement("div");
    memepage.className = "memepage"

    const memepagediv = document.createElement("div");
    memepagediv.className="memepagediv"

    memepagediv.appendChild(PopularMeme(game));
    

    memepage.appendChild(GameMeme(game));
    memepage.appendChild(memepagediv);

    return memepage;

}
