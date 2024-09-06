const EdiToolsButton = (
    edittoolIconSrc = "./assets/textvector.png",
    edittoolIconClass = "edittolsicon",
    gradientColors = ["#87cefa", "#4682b4", "#4682b4", "#1e90ff"],
    width = "118px",
    elementType = "span",  
    elementClass = "edittoolstext", 
    elementContent = ""  
) => {

    const edittoolsmaindiv = document.createElement("div");
    edittoolsmaindiv.className = "edittoolsmaindiv";

    const edittoolsbutton = document.createElement("div");
    edittoolsbutton.className = "edittoolsbutton";
    
    edittoolsmaindiv.style.setProperty("--button-width", width);
    edittoolsmaindiv.style.setProperty("--gradient-start", gradientColors[0]);
    edittoolsmaindiv.style.setProperty("--gradient-mid", gradientColors[1]);
    edittoolsmaindiv.style.setProperty("--gradient-end", gradientColors[3]);

    const edittoolIcon = document.createElement("img");
    edittoolIcon.src = edittoolIconSrc;
    edittoolIcon.className = edittoolIconClass;

    let dynamicElement;

    if (elementType === "img") {
        
        dynamicElement = document.createElement("img");
        dynamicElement.src = elementContent;  
    } else {
        
        dynamicElement = document.createElement("span");
        dynamicElement.innerHTML = elementContent || InnerText; 
    }

    dynamicElement.className = elementClass;  

    edittoolsbutton.appendChild(edittoolIcon);
    edittoolsbutton.appendChild(dynamicElement);

    edittoolsmaindiv.appendChild(edittoolsbutton);

    return edittoolsmaindiv;
};
