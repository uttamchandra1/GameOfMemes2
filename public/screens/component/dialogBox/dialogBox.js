const Color_List = ["#C585F2", "#61AFFF", "#FF5772"];

const getRandomColorFromList = () => {
    const randomIndex = Math.floor(Math.random() * Color_List.length);
    return Color_List[randomIndex];
};

const MusicBox = (music) => {

    const musicbox = document.createElement("div");
    musicbox.className = "musicbox";

    const color = getRandomColorFromList();

    // Set random border-bottom color for musicbox from Color_List
    musicbox.style.borderBottomColor = color;

    const playbutton = document.createElement("div");
    playbutton.className = "play-button";

    // Set random background color for playbutton from Color_List
    playbutton.style.backgroundColor = color;

    const playbuttonicon = document.createElement("div");
    playbuttonicon.className = "play-icon";
    playbutton.appendChild(playbuttonicon);

    const nextbutton = document.createElement("div");
    nextbutton.className = "nextbutton";

    // Set random background color for nextbutton from Color_List
    nextbutton.style.backgroundColor = color;

    const nextbuttonicon = document.createElement("img");
    nextbuttonicon.className = "nextbuttonicon";
    nextbuttonicon.src = "./assets/next2.png";
    nextbutton.appendChild(nextbuttonicon);

    musicbox.appendChild(playbutton);
    musicbox.appendChild(CreateTags(music));
    musicbox.appendChild(nextbutton);

    return musicbox;
};
