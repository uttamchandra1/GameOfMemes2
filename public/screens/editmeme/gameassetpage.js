const GameassetPage = (game, editscreen) => {
    const gameassetpage = document.createElement("div");
    gameassetpage.className = "gameassetpage";
  
    const searchdiv = document.createElement("div");
    searchdiv.className = "searchdiv";

    const searchIcon = document.createElement("img");
    searchIcon.src = "./assets/searchvector.png";
    searchIcon.className = "searchicon"
  
    const inputbar = document.createElement("input");
    inputbar.type = "search";
    inputbar.className = "inputbar";
    inputbar.placeholder = "Search Assets";
  
    searchdiv.appendChild(searchIcon)
    searchdiv.appendChild(inputbar);
    gameassetpage.appendChild(searchdiv);
    gameassetpage.appendChild(LoadAsset(game, editscreen, gameassetpage));
  
    // Initialize height
    gameassetpage.style.height = "182px";
    gameassetpage.style.maxHeight = "40%";
    gameassetpage.style.minHeight = "5%";
    gameassetpage.style.overflowY = "auto"; // Ensure the content can scroll if it overflows
  
    // Create draggable handle
    const dragHandle = document.createElement("div");
    dragHandle.className = "drag-handle";
    dragHandle.style.width = "100%"; // Full width for better usability
    dragHandle.style.height = "20px"; // Increase height for better touch area
    dragHandle.style.position = "absolute";
    dragHandle.style.top = "0"; // Place at the very top of the gameassetpage
    dragHandle.style.left = "0"; // Align to the left
    dragHandle.style.backgroundColor = "transparent"; // Transparent background to not affect design
    dragHandle.style.cursor = "ns-resize"; // Indicate resize capability
  
    // Inner handle for visual indication
    const innerHandle = document.createElement("div");
    innerHandle.style.width = "64px";
    innerHandle.style.height = "4px";
    innerHandle.style.backgroundColor = "#3B5C6B"; // Visible handle for better user experience
    innerHandle.style.borderRadius = "2px";
    innerHandle.style.opacity = "0.5"; // Slightly visible for user to know where to drag
    innerHandle.style.position = "absolute";
    innerHandle.style.top = "8px"; // Center within the draggable area
    innerHandle.style.left = "calc(50% - 32px)"; // Center within the draggable area
  
    dragHandle.appendChild(innerHandle);
    gameassetpage.appendChild(dragHandle);
  
    // Variables to handle dragging
    let isDragging = false;
    let startY;
    let startHeight;
  
    // Mouse events
    dragHandle.addEventListener("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const diffY = startY - e.clientY;
      gameassetpage.style.height = `${startHeight + diffY}px`;
    };
  
    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  
    // Touch events
    dragHandle.addEventListener("touchstart", (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
      startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd);
    });
  
    const onTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const diffY = startY - e.touches[0].clientY;
      gameassetpage.style.height = `${startHeight + diffY}px`;
    };
  
    const onTouchEnd = () => {
      isDragging = false;
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  
    return gameassetpage;
  };