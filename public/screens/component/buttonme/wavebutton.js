const WaveButton = (
    soundWave = "./assets/sounwave.svg",
    gradientColors = ["#87cefa", "#4682b4", "#4682b4", "#1e90ff"],
    width = "118px",
) => {
    const edittoolsmaindiv = document.createElement("div");
    edittoolsmaindiv.className = "edittoolsmaindiv";

    const edittoolsbutton = document.createElement("div");
    edittoolsbutton.className = "edittoolsbutton";
    
    edittoolsmaindiv.style.setProperty("--button-width", width);
    edittoolsmaindiv.style.setProperty("--gradient-start", gradientColors[0]);
    edittoolsmaindiv.style.setProperty("--gradient-mid", gradientColors[1]);
    edittoolsmaindiv.style.setProperty("--gradient-end", gradientColors[3]);

    const soundWaveIcon = document.createElement("img");
    soundWaveIcon.src = soundWave
    soundWaveIcon.className = "soundwaveicon";

    const crossIcon = document.createElement("img");
    crossIcon.src = "./assets/musiccross.png";
    edittoolstext.className = "crossIcon"

    edittoolsbutton.appendChild(soundWaveIcon);
    edittoolsbutton.appendChild(crossIcon);

    edittoolsmaindiv.appendChild(edittoolsbutton);

    return edittoolsmaindiv;
}