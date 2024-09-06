const createAndDownloadMeme = (memeTemplateUrl, audio) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const memecontainer = document.querySelector(".memecontainer");
  const memeRect = memecontainer.getBoundingClientRect();

  const img = new Image();
  img.src = memeTemplateUrl;

  img.onload = () => {
    const aspectRatio = img.width / img.height;
    const containerAspectRatio = memeRect.width / memeRect.height;

    let drawWidth, drawHeight;
    if (aspectRatio > containerAspectRatio) {
      // Image is wider than container
      drawWidth = memeRect.width;
      drawHeight = memeRect.width / aspectRatio;
    } else {
      // Image is taller than container
      drawWidth = memeRect.height * aspectRatio;
      drawHeight = memeRect.height;
    }

    canvas.width = drawWidth;
    canvas.height = drawHeight;
    ctx.drawImage(img, 0, 0, drawWidth, drawHeight);

    // Retrieve live text content and styles
    const liveTextDiv = document.querySelector(".liveTextDiv");
    if (liveTextDiv && memecontainer) {
      const text = liveTextDiv.textContent;
      const fontSize = window
        .getComputedStyle(liveTextDiv, null)
        .getPropertyValue("font-size");
      const color = window
        .getComputedStyle(liveTextDiv, null)
        .getPropertyValue("color");
      const boundingRect = liveTextDiv.getBoundingClientRect();

      // Calculate the scaling factors
      const scaleX = drawWidth / memeRect.width;
      const scaleY = drawHeight / memeRect.height;

      const relativeLeft = (boundingRect.left - memeRect.left) * scaleX;
      const relativeTop = (boundingRect.top - memeRect.top) * scaleY;

      // Set font size and color
      ctx.font = `${fontSize} "Montserrat", sans-serif`;
      ctx.fillStyle = color;

      // Draw text on canvas
      ctx.fillText(text, relativeLeft, relativeTop);
    }

    // Draw selected assets
    const loadAssetImage = (element) => {
      return new Promise((resolve) => {
        const assetImg = new Image();
        assetImg.crossOrigin = "anonymous";
        assetImg.src = element.src;
        assetImg.onload = () => {
          const assetRect = element.getBoundingClientRect();

          // Calculate the scaling factors
          const scaleX = drawWidth / memeRect.width;
          const scaleY = drawHeight / memeRect.height;

          const relativeLeft = (assetRect.left - memeRect.left) * scaleX;
          const relativeTop = (assetRect.top - memeRect.top) * scaleY;

          // Apply rotation if needed
          const currentRotation =
            element.style.transform.match(/rotate\((\d+)deg\)/);
          const rotation = currentRotation ? parseInt(currentRotation[1]) : 0;

          // Save the context state before transformation
          ctx.save();

          // Move the context to the asset's center
          const centerX = relativeLeft + assetRect.width / 2;
          const centerY = relativeTop + assetRect.height / 2;
          ctx.translate(centerX, centerY);

          // Apply rotation
          ctx.rotate((rotation * Math.PI) / 180);

          // Draw the image at its transformed position
          ctx.drawImage(
            assetImg,
            -assetRect.width / 2, // Translate back by half of the width
            -assetRect.height / 2, // Translate back by half of the height
            assetRect.width,
            assetRect.height
          );

          // Restore the context state
          ctx.restore();

          resolve();
        };
      });
    };

    // Create an array of promises for loading all selected asset images
    const assetPromises = selectedassets.map(({ element }) =>
      loadAssetImage(element)
    );

    // Wait for all asset images to load and then create and download the meme

    Promise.all(assetPromises).then(() => {
      // Convert the canvas to a blob and prepare FormData
      canvas.toBlob((blob) => {
        fetch(audio.src)
          .then((response) => response.blob())
          .then((audioBlob) => {
            const formData = new FormData();
            formData.append("image", blob, "meme.png");
            formData.append("audio", audioBlob, "meme-audio.mp3");

            // Log FormData contents
            console.log("FormData contents:");
            formData.forEach((value, key) => {
              console.log(key, value);
            });

            // Send the image and audio to the server
            fetch("/create-video", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.blob())
              .then((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "meme-video.mp4";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
              })
              .catch((error) => console.error("Error:", error));
          });
      }, "image/png");
    });
  };
};
