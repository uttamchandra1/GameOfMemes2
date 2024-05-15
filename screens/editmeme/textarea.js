const TextArea = () => {

    const textdiv = document.createElement("div");
    textdiv.className = "textdiv";

     // Create a text area element
     const textarea = document.createElement("textarea");
     textarea.className = "textarea";

     const settings = document.createElement("div")
     settings.className = "settings";

     const textSize = document.createElement("div");
     textSize.className = "textSize";

     const colorPicker = document.createElement("div");
     colorPicker.className = "colorPicker";


     settings.appendChild(textSize);
     settings.appendChild(colorPicker);
     textdiv.appendChild(textarea);
     textdiv.appendChild(settings);


     return textdiv;
}