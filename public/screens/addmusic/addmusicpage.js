const openMusicOverlay = (memeTemplateUrl, game, music) => {
  const addmusicpage = document.createElement("div");
  addmusicpage.className = "addmusicpage";
  
  const musicpageBack = document.createElement("div");
  musicpageBack.className = "musicpageBack";

  const musicbuttoncontainer = document.createElement("div");
  musicbuttoncontainer.className = "musicbuttoncontainer"

  const musiccontainer = document.createElement("div");
  musiccontainer.className = "musiccontainer"

  document.body.appendChild(addmusicpage)

  MUSIC_LIST.forEach((music) => {
    const musicbox = MusicBox(music);
    musiccontainer.appendChild(musicbox);

    musicbox.addEventListener("click", () => {
      document.body.removeChild(addmusicpage);  
      Meme_Edit_Screen(memeTemplateUrl,game,music)
    });
  });

  const genrateTrack = document.createElement("div")
  genrateTrack.className = "genrateTrack"

  genrateTrack.appendChild(createCustomButton(
    width = "328px", 
    height = "48px", 
    text = "Generate New Track", 
    fontSize = "18px",
    gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"],
    DynamicIconSrc = "./assets/musicgliter.png"
  ))

  function onMostPopularClick() {
    console.log("Popular Tracks")
  }

  function onGameWiseClick() {
    console.log("your tracks")
  }

  musicpageBack.appendChild(BackflowComponent(BackText = "Add Music to Your Meme "))
  musicbuttoncontainer.appendChild(MusicButton({
    onMostPopularClick,
    onGameWiseClick,
    initialActive : 'Yours Tracks'
}))
  addmusicpage.appendChild(musicpageBack);
  addmusicpage.appendChild(musicbuttoncontainer);
  addmusicpage.appendChild(musiccontainer);
  addmusicpage.appendChild(genrateTrack)

  return addmusicpage;
};
