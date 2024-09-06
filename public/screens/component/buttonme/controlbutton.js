
const ControlButton = (polygonSrc) => {
           

    const maindiv = document.createElement("div");
    maindiv.className = "maindiv";

    const polygon = document.createElement("img");
    polygon.src = polygonSrc
    polygon.className = "polygon";

    const controlbutton = document.createElement("div");
    controlbutton.className = "controlbutton";


    maindiv.appendChild(polygon);
    maindiv.appendChild(controlbutton); 

    return maindiv
}