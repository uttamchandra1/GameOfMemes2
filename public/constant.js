let CURRENT_SCREEN = ""

function changeScreen(newScreen ) {
    OVERLAY.innerHTML = "";
    OVERLAY.appendChild(newScreen);
    CURRENT_SCREEN = newScreen;
  };

  

  

let currentAudio = null;

function playMusicTrack(audioSrc) {
  // Check if there is already an audio playing and stop it
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Create a new Audio instance and play the new track
  var audio = new Audio(audioSrc);

  // Loop the audio track
  if (typeof audio.loop == "boolean") {
    audio.loop = true;
  } else {
    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }

  audio.play();
  console.log("Music track is playing:", audioSrc);

  // Store the current audio instance for future reference
  currentAudio = audio;
  
  return audio;
}