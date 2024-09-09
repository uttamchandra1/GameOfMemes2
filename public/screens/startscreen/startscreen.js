const Start_Screen = () => {
    const startscreen = document.createElement("div");
    startscreen.className = "startscreen";

    const logodiv = document.createElement("div");
    logodiv.className = "logodiv";

    const logo = document.createElement("img");
    logo.className = "logo";
    logo.src = "./assets/logo2.svg";

    logodiv.appendChild(logo);
    startscreen.appendChild(logodiv);

    return startscreen;
};
