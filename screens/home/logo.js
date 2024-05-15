const Logo_Container = () => {

    const logo_container = document.createElement("div")
    logo_container.className = "logo-container";

    const image = document.createElement("img");
    image.className= "logo-img"
    image.src = "./assets/gamelogo.png"
    image.alt = "logo"

    logo_container.appendChild(image)

    return logo_container;
}