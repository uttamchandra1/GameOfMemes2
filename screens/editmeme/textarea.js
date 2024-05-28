const TextArea = (onDone) => {
  const textdiv = document.createElement("div");
  textdiv.className = "textdiv";

  // Create a div to display the live text
  const liveTextDiv = document.createElement("div");

  liveTextDiv.className = "liveTextDiv";
  liveTextDiv.style.position = "absolute";
  liveTextDiv.style.top = "187px";
  liveTextDiv.style.left = "69px";
  liveTextDiv.style.whiteSpace = "pre-wrap"; // Maintain whitespace and line breaks
  

  
  // Create a text area element
  const textarea = document.createElement("textarea");
  textarea.className = "textarea";
  textarea.rows = 3;
  textarea.cols = 30;


  // Update live text as the user types
  textarea.addEventListener("input", () => {
    liveTextDiv.textContent = textarea.value;
  });

  const settings = document.createElement("div");
  settings.className = "settings";

  const textSize = document.createElement("div");
  textSize.className = "textSize";

  const increasebutton = document.createElement("button");
  increasebutton.innerText = "A+";
  increasebutton.className = "increasebutton";

  const decreasebutton = document.createElement("button");
  decreasebutton.innerText = "A-";
  decreasebutton.className = "decreasebutton";

  const colorPicker = document.createElement("div");
  colorPicker.className = "colorPicker";

  const blackcolor = document.createElement("div");
  blackcolor.className = "blackcolor";
  blackcolor.style.backgroundColor = "black";
  blackcolor.style.width = "20px";
  blackcolor.style.height = "20px";
  blackcolor.style.display = "inline-block";
  blackcolor.style.cursor = "pointer";

  const whitecolor = document.createElement("div");
  whitecolor.className = "whitecolor";
  whitecolor.style.backgroundColor = "white";
  whitecolor.style.border = "1px solid black";
  whitecolor.style.width = "20px";
  whitecolor.style.height = "20px";
  whitecolor.style.display = "inline-block";
  whitecolor.style.cursor = "pointer";

  const donebutton = document.createElement("div");
  donebutton.innerText = "Done";
  donebutton.className = "donebutton";

  // Append elements to their respective parents
  colorPicker.appendChild(blackcolor);
  colorPicker.appendChild(whitecolor);
  textSize.appendChild(increasebutton);
  textSize.appendChild(decreasebutton);
  settings.appendChild(textSize);
  settings.appendChild(colorPicker);
  settings.appendChild(donebutton);
  textdiv.appendChild(liveTextDiv);
  textdiv.appendChild(textarea);
  textdiv.appendChild(settings);

  // Handle text size increase
  increasebutton.addEventListener("click", () => {
    const currentSize = parseFloat(
      window.getComputedStyle(liveTextDiv, null).getPropertyValue("font-size")
    );
    liveTextDiv.style.fontSize = currentSize + 2 + "px";
  });

  // Handle text size decrease
  decreasebutton.addEventListener("click", () => {
    const currentSize = parseFloat(
      window.getComputedStyle(liveTextDiv, null).getPropertyValue("font-size")
    );
    liveTextDiv.style.fontSize = currentSize - 2 + "px";
  });

  // Handle text color change to black
  blackcolor.addEventListener("click", () => {
    
    liveTextDiv.style.color = "black";
    blackcolor.style.border = "2.67px solid #E97B31";
    whitecolor.style.border = "1px solid black"; // Reset white color border
  });

  // Handle text color change to white
  whitecolor.addEventListener("click", () => {
    
    liveTextDiv.style.color = "white";
    whitecolor.style.border = "2.67px solid #E97B31";
    blackcolor.style.border = "none"; // Reset black color border
  });

  donebutton.addEventListener("click", () => {
    textarea.style.display = "none";
    settings.style.display = "none";
    if (onDone) {
      onDone(); // Call the callback to show the "Add Text" button again
    }
  });

  // Handle dragging of liveTextDiv for both mouse and touch devices
  let isDragging = false;
  let offsetX, offsetY;

  const startDragging = (clientX, clientY) => {
    isDragging = true;
    offsetX = clientX - liveTextDiv.getBoundingClientRect().left;
    offsetY = clientY - liveTextDiv.getBoundingClientRect().top;
  };

  const onMouseMove = (e) => {
    if (isDragging && !isResizing) {
      liveTextDiv.style.left = `${e.clientX - offsetX}px`;
      liveTextDiv.style.top = `${e.clientY - offsetY}px`;
    }
  };

  const onTouchMove = (e) => {
    if (isDragging && !isResizing) {
      liveTextDiv.style.left = `${e.touches[0].clientX - offsetX}px`;
      liveTextDiv.style.top = `${e.touches[0].clientY - offsetY}px`;
    }
  };

  const stopDragging = () => {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", stopDragging);
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", stopDragging);
  };

  liveTextDiv.addEventListener("mousedown", (e) => {
    if (!isResizing) {
      startDragging(e.clientX, e.clientY);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", stopDragging);
    }
  });

  liveTextDiv.addEventListener("touchstart", (e) => {
    if (!isResizing) {
      startDragging(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault()
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", stopDragging);
    }
    
  });

  liveTextDiv.addEventListener("focus", () => {
    console.log("focus")
    liveTextDiv.style.border = "1px dashed black"; // Add border when focused
  });

  liveTextDiv.addEventListener("blur", () => {
    liveTextDiv.style.border = "none"; // Remove border when focus is lost
  });

  // Detect resizing by observing mouse down events on the resizer area
  liveTextDiv.addEventListener("mousedown", (e) => {
    if (e.target === liveTextDiv) {
      isResizing = false;
    } else {
      isResizing = true;
    }
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
  });
  // Make the liveTextDiv focusable
  liveTextDiv.tabIndex = 0;

  return textdiv;
};


