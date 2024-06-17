const GameassetPage = (game, editscreen) => {
    const gameassetpage = document.createElement("div");
    gameassetpage.className = "gameassetpage";
  
    const searchdiv = document.createElement("div");
    searchdiv.className = "searchdiv";
  
    const inputbar = document.createElement("input");
    inputbar.type = "search";
    inputbar.className = "inputbar";
    inputbar.placeholder = "Search Assets";
  
    searchdiv.appendChild(inputbar);
    gameassetpage.appendChild(searchdiv);
    gameassetpage.appendChild(LoadAsset(game, editscreen, gameassetpage));
  
    // Initialize height
    gameassetpage.style.height = "20%";
    gameassetpage.style.maxHeight = "40%";
    gameassetpage.style.minHeight = "5%";
    gameassetpage.style.overflowY = "auto"; // Ensure the content can scroll if it overflows
  
    // Create draggable handle
    const dragHandle = document.createElement("div");
    dragHandle.className = "drag-handle";
    dragHandle.style.width = "64px";
    dragHandle.style.height = "4px";
    dragHandle.style.position = "absolute";
    dragHandle.style.top = "8px";
    dragHandle.style.left = "calc(50% - 32px)";
    dragHandle.style.backgroundColor = "#3B5C6B"; // visible handle for better user experience
    dragHandle.style.borderRadius = "2px";
    dragHandle.style.opacity = "0.5"; // slightly visible for user to know where to drag
    dragHandle.style.cursor = "ns-resize"; // indicate resize capability
  
    gameassetpage.appendChild(dragHandle);
  
    // Variables to handle dragging
    let isDragging = false;
    let startY;
    let startHeight;
  
    // Prevent default scrolling behavior during dragging
    const preventScroll = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
  
    // Mouse events
    dragHandle.addEventListener("mousedown", (e) => {
      isDragging = true;
      startY = e.clientY;
      startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
    });
  
    dragHandle.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const diffY = startY - e.clientY;
      gameassetpage.style.height = `${startHeight + diffY}px`;
    });
  
    dragHandle.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    // Touch events
    dragHandle.addEventListener("touchstart", (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
      startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
    });
  
    dragHandle.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const diffY = startY - e.touches[0].clientY;
        gameassetpage.style.height = `${startHeight + diffY}px`;
      },
      { passive: false }
    );
  
    dragHandle.addEventListener("touchend", () => {
      isDragging = false;
    });
  
    return gameassetpage;
  };