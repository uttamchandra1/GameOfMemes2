const Home_Screen = () => {
   
    const Homescreen = document.createElement("div");
    Homescreen.classList.add("homescreen");

    Homescreen.appendChild(Logo_Container());
    Homescreen.appendChild(Buttons());
    return Homescreen;

}

