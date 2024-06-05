let selectedassets = [];
const editscreen = document.querySelector(".editscreen");

const LoadAsset = (game) => {
  const selectedgameasset = document.createElement("div");
  selectedgameasset.className = "selectedgameasset";

  
 
  let initialX, initialY, currentX, currentY;

  game.assets.forEach((asset) => {
    const assetImgDiv = document.createElement("div");
    const assetImg = document.createElement("img");

    assetImg.src = asset.thumbnail;
    assetImg.alt = asset.title;
    assetImg.className = "assetImg";
    assetImgDiv.appendChild(assetImg);
    selectedgameasset.appendChild(assetImgDiv);

    assetImg.addEventListener("click", function () {
      // Create a new div container for the selected asset
      const selectedAssetContainer = document.createElement("div");
      selectedAssetContainer.className = "selectedAssetContainer";
      selectedAssetContainer.style.position = "absolute";
      selectedAssetContainer.style.display = "inline-block";
      selectedAssetContainer.style.top = "156px";
      selectedAssetContainer.style.left = "20px";
      selectedAssetContainer.dragging = false;

      // Clone the selected asset and append to the new container
      const clonedAsset = assetImg.cloneNode(true);
      clonedAsset.style.position = "absolute";
      clonedAsset.style.top = "12px";
      clonedAsset.style.height = "56px";
      clonedAsset.style.width = "56px";
      clonedAsset.style.cursor = "move";
      clonedAsset.style.border = "1px solid #414141 ";
      selectedassets.push({ element: clonedAsset });

      selectedAssetContainer.appendChild(clonedAsset);

      // Create and append close button
      const closeButton = document.createElement("div");
      closeButton.innerHTML = "&#10006;"; // Unicode for 'X'
      closeButton.style.position = "absolute";
      closeButton.style.left = "44px";
      closeButton.style.cursor = "pointer";
      closeButton.style.backgroundColor = "#414141";
      closeButton.style.color = "white";
      closeButton.style.borderRadius = "50%";
      closeButton.style.width = "24px";
      closeButton.style.height = "24px";
      closeButton.style.display = "flex";
      closeButton.style.justifyContent = "center";
      closeButton.style.alignItems = "center";
      closeButton.className = "closeButton";
      selectedAssetContainer.appendChild(closeButton);

      // append rotate button
      const rotateButton = document.createElement("div");
      rotateButton.innerHTML = "&#x21bb;"; // Unicode for '↻'
      rotateButton.style.position = "absolute";
      rotateButton.style.top = "75px"; // Positioning below the cloned asset
      rotateButton.style.left = "20px";
      rotateButton.style.cursor = "pointer";
      rotateButton.style.backgroundColor = "#414141";
      rotateButton.style.color = "white";
      rotateButton.style.borderRadius = "50%";
      rotateButton.style.width = "18px";
      rotateButton.style.height = "18px";
      rotateButton.style.display = "flex";
      rotateButton.style.justifyContent = "center";
      rotateButton.style.alignItems = "center";
      rotateButton.className = "rotateButton";
      selectedAssetContainer.appendChild(rotateButton);

      // Append the new container to the parent div
      console.log(editscreen)
      console.log(selectedAssetContainer)
      editscreen.appendChild(selectedAssetContainer);

      const removeContainer = () => {
        console.log("removed");
        selectedAssetContainer.remove(); // Remove the container div
      };

      const rotateAsset = () => {
        let currentRotation = clonedAsset.style.transform.match(/rotate\((\d+)deg\)/);
        let newRotation = currentRotation ? parseInt(currentRotation[1]) + 90 : 90;
        clonedAsset.style.transform = `rotate(${newRotation}deg)`;
      };

      // click and touch event listeners for the close button
      closeButton.addEventListener("click", removeContainer);
      closeButton.addEventListener("touchend", removeContainer);

      //  click and touch event listeners for the rotate button
      rotateButton.addEventListener("click", rotateAsset);
      rotateButton.addEventListener("touchend", rotateAsset);

      clonedAsset.addEventListener("click", () => {
        closeButton.style.display = "flex";
        rotateButton.style.display = "flex";
        selectedAssetContainer.classList.add("selected");
      });

      clonedAsset.addEventListener("touchend", () => {
        closeButton.style.display = "flex";
        rotateButton.style.display = "flex";
        selectedAssetContainer.classList.add("selected");
      });

      document.addEventListener("click", (event) => {
        if (!selectedAssetContainer.contains(event.target)) {
          closeButton.style.display = "none";
          rotateButton.style.display = "none";
          selectedAssetContainer.classList.remove("selected");
        }
      });

      document.addEventListener("touchend", (event) => {
        if (!selectedAssetContainer.contains(event.target)) {
          closeButton.style.display = "none";
          rotateButton.style.display = "none";
          selectedAssetContainer.classList.remove("selected");
        }
      });

      selectedAssetContainer.addEventListener("touchstart", (event) => startDrag(event, selectedAssetContainer));
      selectedAssetContainer.addEventListener("mousedown", (event) => startDrag(event, selectedAssetContainer));
      selectedAssetContainer.addEventListener("touchmove", (event) => drag(event, selectedAssetContainer));
      selectedAssetContainer.addEventListener("mousemove", (event) => drag(event, selectedAssetContainer));
      selectedAssetContainer.addEventListener("touchend", (event) => endDrag(event, selectedAssetContainer));
      selectedAssetContainer.addEventListener("mouseup", (event) => endDrag(event, selectedAssetContainer));
    });

    function startDrag(event, container) {
      event.preventDefault();
      if (isCursorInCenter(event, container)) {
        if (event.type === "touchstart") {
          // For touch events
          const touch = event.touches[0];
          initialX = touch.clientX - container.getBoundingClientRect().left;
          initialY = touch.clientY - container.getBoundingClientRect().top;
        } else {
          // For mouse events
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
          // For touch events
          const touch = event.touches[0];
          clientX = touch.clientX;
          clientY = touch.clientY;
        } else {
          // For mouse events
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
  });

  return selectedgameasset;
};


