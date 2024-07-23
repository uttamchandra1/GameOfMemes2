const TextArea = (onDone) => {
  const textdiv = document.createElement("div");
  textdiv.className = "textdiv";

  // Create a container div to hold liveTextDiv, editButton, and resizeButton
  const containerDiv = document.createElement("div");
  containerDiv.className = "containerDiv";
  containerDiv.style.position = "absolute";
  containerDiv.style.top = "187px";
  containerDiv.style.left = "69px";

  // Create a div to display the live text
  const liveTextDiv = document.createElement("div");
  liveTextDiv.className = "liveTextDiv";
  liveTextDiv.style.position = "relative";
  liveTextDiv.style.whiteSpace = "pre-wrap";
  liveTextDiv.style.overflowWrap = "break-word";
  liveTextDiv.style.border = "1px solid black";
  liveTextDiv.style.borderStyle = "dashed";
  liveTextDiv.style.padding = "10px";
  liveTextDiv.contentEditable = true;

  // Create an edit button element
  const editButton = document.createElement("button");
  editButton.innerHTML = "&#9998;";
  editButton.style.position = "absolute";
  editButton.style.top = "0";
  editButton.style.right = "0";
  editButton.style.cursor = "pointer";
  editButton.style.backgroundColor = "#414141";
  editButton.style.color = "white";
  editButton.style.borderRadius = "50%";
  editButton.style.width = "18px";
  editButton.style.height = "18px";
  editButton.style.display = "none";
  editButton.style.justifyContent = "center";
  editButton.style.alignItems = "center";

  // Create a resize button element
  const resizeButton = document.createElement("button");
  resizeButton.innerHTML = "&#8690;";
  resizeButton.style.position = "absolute";
  resizeButton.style.bottom = "0px";
  resizeButton.style.right = "0px";
  resizeButton.style.cursor = "se-resize";
  resizeButton.style.backgroundColor = "#414141";
  resizeButton.style.color = "white";
  resizeButton.style.borderRadius = "50%";
  resizeButton.style.width = "18px";
  resizeButton.style.height = "18px";
  resizeButton.style.display = "none";
  resizeButton.style.justifyContent = "center";
  resizeButton.style.alignItems = "center";
  resizeButton.className = "resizeButton";

  containerDiv.appendChild(editButton);
  containerDiv.appendChild(resizeButton);
  containerDiv.appendChild(liveTextDiv);

  // Append the container div to textdiv
  textdiv.appendChild(containerDiv);

  const settings = document.createElement("div");
  settings.className = "settings";
  settings.style.display = "none";
  settings.style.position = "fixed"; // Change to fixed
  settings.style.left = "50%";
  settings.style.transform = "translateX(-50%)";
  settings.style.backgroundColor = "#f0f0f0"; // Background color for visibility
  settings.style.padding = "10px";
  settings.style.borderRadius = "8px";
  settings.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";

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
  donebutton.style.cursor = "pointer";
  donebutton.style.marginTop = "10px";
  donebutton.style.textAlign = "center";
  donebutton.style.padding = "5px";
  donebutton.style.backgroundColor = "#e97b31";
  donebutton.style.color = "white";
  donebutton.style.borderRadius = "4px";

  // Append elements to their respective parents
  colorPicker.appendChild(blackcolor);
  colorPicker.appendChild(whitecolor);
  textSize.appendChild(increasebutton);
  textSize.appendChild(decreasebutton);
  settings.appendChild(textSize);
  settings.appendChild(colorPicker);
  settings.appendChild(donebutton);
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
    whitecolor.style.border = "1px solid black";
  });

  // Handle text color change to white
  whitecolor.addEventListener("click", () => {
    liveTextDiv.style.color = "white";
    whitecolor.style.border = "2.67px solid #E97B31";
    blackcolor.style.border = "none";
  });

  donebutton.addEventListener("click", () => {
    settings.style.display = "none";
    liveTextDiv.contentEditable = false;
    if (onDone) {
      onDone();
    }
  });

  const editText = () => {
    settings.style.display = "flex";
    liveTextDiv.contentEditable = true;
    liveTextDiv.focus();
  };

  // Handle edit button click to show settings
  editButton.addEventListener("click", editText);
  editButton.addEventListener("touchstart", editText);

  liveTextDiv.addEventListener("click", () => {
    editButton.style.display = "flex";
    resizeButton.style.display = "flex";
    containerDiv.classList.add("selected");
  });

  liveTextDiv.addEventListener("touchend", () => {
    editButton.style.display = "flex";
    resizeButton.style.display = "flex";
    liveTextDiv.style.border = "1px solid black";
    liveTextDiv.style.borderStyle = "dashed";
    containerDiv.classList.add("selected");
  });

  document.addEventListener("click", (event) => {
    if (!containerDiv.contains(event.target)) {
      editButton.style.display = "none";
      resizeButton.style.display = "none";
      containerDiv.classList.remove("selected");
    }
  });

  document.addEventListener("touchend", (event) => {
    if (!containerDiv.contains(event.target)) {
      editButton.style.display = "none";
      resizeButton.style.display = "none";
      containerDiv.classList.remove("selected");
      liveTextDiv.style.border = "none";
    }
  });

  containerDiv.addEventListener("touchstart", (event) => startDrag(event, containerDiv));
  containerDiv.addEventListener("mousedown", (event) => startDrag(event, containerDiv));
  containerDiv.addEventListener("touchmove", (event) => drag(event, containerDiv));
  containerDiv.addEventListener("mousemove", (event) => drag(event, containerDiv));
  containerDiv.addEventListener("touchend", (event) => endDrag(event, containerDiv));
  containerDiv.addEventListener("mouseup", (event) => endDrag(event, containerDiv));

  resizeButton.addEventListener("mousedown", (event) => startResize(event, containerDiv, liveTextDiv));
  resizeButton.addEventListener("touchstart", (event) => startResize(event, containerDiv, liveTextDiv));
  resizeButton.addEventListener("mousemove", (event) => resize(event, containerDiv, liveTextDiv));
  resizeButton.addEventListener("touchmove", (event) => resize(event, containerDiv, liveTextDiv));
  resizeButton.addEventListener("mouseup", (event) => endResize(event, containerDiv, liveTextDiv));
  resizeButton.addEventListener("touchend", (event) => endResize(event, containerDiv, liveTextDiv));

  function startDrag(event, container) {
    event.preventDefault();
    if (isCursorInCenter(event, container)) {
      if (event.type === "touchstart") {
        const touch = event.touches[0];
        initialX = touch.clientX - container.getBoundingClientRect().left;
        initialY = touch.clientY - container.getBoundingClientRect().top;
      } else {
        initialX = event.clientX - container.getBoundingClientRect().left;
        initialY = event.clientY - container.getBoundingClientRect().top;
      }
      container.style.zIndex = "1000";
      container.dragging = true;
    }
  }

  function isCursorInCenter(event, container) {
    const assetRect = container.getBoundingClientRect();
    const centerX = assetRect.left + assetRect.width / 2;
    const centerY = assetRect.top + assetRect.height / 2;
    const cursorX = event.clientX || event.touches[0].clientX;
    const cursorY = event.clientY || event.touches[0].clientY;
    const distanceToCenter = Math.sqrt(
      (cursorX - centerX) ** 2 + (cursorY - centerY) ** 2
    );
    return distanceToCenter <= assetRect.width / 4;
  }

  function drag(event, container) {
    event.preventDefault();
    if (container.dragging) {
      let clientX, clientY;
      if (event.type === "touchmove") {
        const touch = event.touches[0];
        clientX = touch.clientX;
        clientY = touch.clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      currentX = clientX - initialX;
      currentY = clientY - initialY;
      container.style.left = currentX + "px";
      container.style.top = currentY + "px";
    }
  }

  function endDrag(event, container) {
    event.preventDefault();
    container.dragging = false;
  }

  let initialWidth, initialHeight, initialMouseX, initialMouseY;

  function startResize(event, container, liveTextDiv) {
    event.preventDefault();
    if (event.type === "touchstart") {
      const touch = event.touches[0];
      initialMouseX = touch.clientX;
      initialMouseY = touch.clientY;
    } else {
      initialMouseX = event.clientX;
      initialMouseY = event.clientY;
    }
    initialWidth = parseFloat(getComputedStyle(liveTextDiv, null).getPropertyValue("width").replace("px", ""));
    initialHeight = parseFloat(getComputedStyle(liveTextDiv, null).getPropertyValue("height").replace("px", ""));
    container.initialWidth = parseFloat(getComputedStyle(container, null).getPropertyValue("width").replace("px", ""));
    container.initialHeight = parseFloat(getComputedStyle(container, null).getPropertyValue("height").replace("px", ""));
    container.resizing = true;
  }

  function resize(event, container, liveTextDiv) {
    if (container.resizing) {
      let clientX, clientY;
      if (event.type === "touchmove") {
        const touch = event.touches[0];
        clientX = touch.clientX;
        clientY = touch.clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      const widthChange = clientX - initialMouseX;
      const heightChange = clientY - initialMouseY;
      liveTextDiv.style.width = initialWidth + widthChange + "px";
      liveTextDiv.style.height = initialHeight + heightChange + "px";
      container.style.width = container.initialWidth + widthChange + "px";
      container.style.height = container.initialHeight + heightChange + "px";
    }
  }

  function endResize(event, container) {
    event.preventDefault();
    container.resizing = false;
  }

  // Function to adjust settings position above the keyboard
  function adjustSettingsPosition() {
    const windowHeight = window.innerHeight;
    const keyboardHeight = 300; // Assumed keyboard height
    settings.style.bottom = keyboardHeight + "px";
  }

  // Add event listeners to adjust settings position on focus
  liveTextDiv.addEventListener("focus", adjustSettingsPosition);
  liveTextDiv.addEventListener("touchstart", adjustSettingsPosition);
  
  // Reset settings position when focus is lost
  liveTextDiv.addEventListener("blur", () => {
    settings.style.bottom = "auto";
  });

  // Make the liveTextDiv focusable
  liveTextDiv.tabIndex = 0;

  return textdiv;
};
