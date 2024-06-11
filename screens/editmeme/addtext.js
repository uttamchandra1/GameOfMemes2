const AddText = () => {

    const addtextdiv = document.createElement("div")
    addtextdiv.className = "addtextdiv"


    const button = document.createElement("button")
    button.innerHTML = "Add Text"
    button.className = "button"

    button.addEventListener("click" , () => {
        console.log("clicked");
        
        addtextdiv.appendChild(TextArea((button) => {
            
            button.style.display = "block"
        }));
        button.style.display = "none"
    } )

    addtextdiv.appendChild(button)

    return addtextdiv;

}