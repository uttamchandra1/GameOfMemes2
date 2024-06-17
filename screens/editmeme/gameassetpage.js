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
    gameassetpage.addEventListener("mousedown", (e) => {
      if (e.target === inputbar || e.target.closest(".searchdiv")) return; // Ignore dragging on the search bar
      isDragging = true;
      startY = e.clientY;
      startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
    });
  
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const diffY = startY - e.clientY;
      gameassetpage.style.height = `${startHeight + diffY}px`;
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    // Touch events
    gameassetpage.addEventListener("touchstart", (e) => {
      if (e.target === inputbar || e.target.closest(".searchdiv")) return; // Ignore dragging on the search bar
      const touchY = e.touches[0].clientY;
      const rect = gameassetpage.getBoundingClientRect();
      if (touchY < rect.top + 10 || touchY > rect.bottom - 10) {
        isDragging = true;
        startY = touchY;
        startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
      }
    });
  
    gameassetpage.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const diffY = startY - e.touches[0].clientY;
        gameassetpage.style.height = `${startHeight + diffY}px`;
      },
      { passive: false }
    );
  
    gameassetpage.addEventListener("touchend", () => {
      isDragging = false;
    });
  
    return gameassetpage;
  };
  