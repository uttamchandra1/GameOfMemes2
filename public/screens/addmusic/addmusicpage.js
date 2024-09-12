const openMusicOverlay = (memeTemplateUrl, game) => {
  // Create overlay page and its elements
  const addmusicpage = document.createElement("div");
  addmusicpage.className = "addmusicpage";

  const musicpageBack = document.createElement("div");
  musicpageBack.className = "musicpageBack";

  const musicbackControl = document.createElement("div");
  musicbackControl.appendChild(
    BackflowComponent((BackText = "Add Music to Your Meme "))
  );

  // Close overlay on back button click
  musicbackControl.addEventListener("click", () => {
    document.body.removeChild(addmusicpage);
  });

  const musicbuttoncontainer = document.createElement("div");
  musicbuttoncontainer.className = "musicbuttoncontainer";

  const musiccontainer = document.createElement("div");
  musiccontainer.className = "musiccontainer";

  // Append the overlay to the body
  document.body.appendChild(addmusicpage);


  const addMusicdiv = document.querySelector(".addmusicdiv");
  // Iterate over the music list and create a music box for each track
  MUSIC_LIST.forEach((music) => {
    const musicbox = MusicBox(music);
    musiccontainer.appendChild(musicbox);

    musicbox.addEventListener("click", () => {
      // Play the selected music track and update currentAudio
      currentAudio = playMusicTrack(music.path);
      
      // Remove the music selection overlay
      document.body.removeChild(addmusicpage);

      // Update the UI to reflect the audio selection
      addMusicdiv.innerHTML = ""; 
      addMusicdiv.appendChild(
        EdiToolsButton(
          "./assets/soundwave.gif",   // edittoolIconSrc
          "soundwaveimg",             // edittoolIconClass
          ["#A5E7FF", "#61AFFF", "#61AFFF", "#1D77FF"], // gradientColors
          "125px",                    // width
          "img",                      // elementType
          "crossbuttontool",           // elementClass
          "./assets/crossbuttontools.png" // elementContent
        )
      );

      console.log("Music selected:", music.path);
    });
  });

  // Create the "Generate New Track" button
  const genrateTrack = document.createElement("div");
  genrateTrack.className = "genrateTrack";
  genrateTrack.appendChild(
    createCustomButton(
      (width = "328px"),
      (height = "48px"),
      (text = "Generate New Track"),
      (fontSize = "18px"),
      (gradientColors = ["#fbeb00", "#f3bc00", "#f3bc00", "#ed8d00"]),
      (DynamicIconSrc = "./assets/musicgliter.png")
    )
  );

  // Change screen to music selection when "Generate New Track" is clicked
  genrateTrack.addEventListener("click", () => {
    document.body.removeChild(addmusicpage);
    changeScreen(Music_Selection(memeTemplateUrl, game));
  });

  // Handle the "Most Popular" and "Your Tracks" buttons
  function onMostPopularClick() {
    console.log("Popular Tracks");
    // Add your logic to display popular tracks
  }

  function onGameWiseClick() {
    console.log("Your Tracks");
    // Add your logic to display game-wise tracks
  }

  // Append buttons for "Most Popular" and "Your Tracks"
  musicbuttoncontainer.appendChild(
    MusicButton({
      onMostPopularClick,
      onGameWiseClick,
      initialActive: "Your Tracks", // Set initial active tab
    })
  );

  // Append all components to the overlay page
  musicpageBack.appendChild(musicbackControl);
  addmusicpage.appendChild(musicpageBack);
  addmusicpage.appendChild(musicbuttoncontainer);
  addmusicpage.appendChild(musiccontainer);
  addmusicpage.appendChild(genrateTrack);

  return addmusicpage;
};
