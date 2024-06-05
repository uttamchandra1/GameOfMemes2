const GameassetPage = (game) => {
  const gameassetpage = document.createElement("div");
  gameassetpage.className = "gameassetpage";

  const searchdiv = document.createElement("div");
  searchdiv.className = "searchdiv";

  const inputbar = document.createElement("input");
  inputbar.type = "search";
  inputbar.className = "inputbar";
  inputbar.placeholder = "Search Assets"


  searchdiv.appendChild(inputbar);
  gameassetpage.appendChild(searchdiv);
  gameassetpage.appendChild(LoadAsset(game));

  // Initialize height
  gameassetpage.style.height = "20%";

  // Variables to handle dragging
  let isDragging = false;
  let startY;
  let startHeight;

  // Mouse and touch events
  gameassetpage.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diffY = startY - e.clientY;
    gameassetpage.style.height = `${startHeight + diffY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events
  gameassetpage.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    startHeight = parseInt(window.getComputedStyle(gameassetpage).height, 10);
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diffY = startY - e.touches[0].clientY;
    gameassetpage.style.height = `${startHeight + diffY}px`;
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  return gameassetpage;
};
