const PopularMeme = (game) => {
  const memeTemplateContainer = document.createElement("div");
  memeTemplateContainer.id = "memes-template";
  memeTemplateContainer.className = "memes-template"


  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      data.data.memes.forEach((meme) => {
        const memeTemplateUrl = meme.url;

        //  image data and convert it to Base64
        fetchAndConvertToBase64(memeTemplateUrl)
          .then((base64) => {
            const memeTemplateElement = document.createElement("div");
            memeTemplateElement.classList.add("meme-template-container");

            const memeTemplateImage = document.createElement("div");
            memeTemplateImage.classList.add("meme-image-div");

            const eye = document.createElement("img");
            eye.className = "eye"
            eye.src = "./assets/eye.png";

            // img element with Base64 source
            const memeImage = document.createElement("img");
            memeImage.src = base64;
            memeImage.alt = meme.name;
            memeImage.classList.add("meme-template-image");
            memeTemplateImage.appendChild(memeImage);
            memeTemplateElement.appendChild(eye);
            memeTemplateElement.appendChild(memeTemplateImage);

            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("add-caption-div");
            const addCaptionButton = document.createElement("button");
            addCaptionButton.innerText = meme.name;

           

            buttonDiv.addEventListener("click", () => {
              if (!game) { // Check if the game is not selected
                console.log("No game selected, opening game selection page");
                changeScreen(GameSelection_Page(meme , base64));
            } else {
                changeScreen(Meme_Edit_Screen(base64, game));
            }
              
            });

            buttonDiv.appendChild(addCaptionButton);
            
            memeTemplateElement.appendChild(buttonDiv);

            memeTemplateContainer.appendChild(memeTemplateElement);
          })
          .catch((error) => {
            console.error("Error fetching or converting image:", error);
          });
      });
    });

  // fetch image data and convert it to Base64
  function fetchAndConvertToBase64(imageUrl) {
    return fetch(imageUrl)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );
  }

  return memeTemplateContainer;
};


