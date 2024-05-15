const Meme_Page_Screen = (game) => {
   
    const memepage = document.createElement("div");
    memepage.className = "memepage"

    memepage.appendChild(GameMeme(game));
    memepage.appendChild(PopularMeme());

    return memepage;

}
