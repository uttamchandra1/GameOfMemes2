const express = require("express");
const fileUpload = require("express-fileupload");
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

// Enable files upload
app.use(fileUpload());

// Serve static files
app.use(express.static("public"));

app.post("/create-video", (req, res) => {
  const { files } = req;
  const image = files.image;
  const audio = files.audio;

  // Temporary paths to save uploaded files
  const imagePath = path.join(__dirname, "uploads", image.name);
  const audioPath = path.join(__dirname, "uploads", audio.name);
  const outputPath = path.join(__dirname, "output", `${Date.now()}.mp4`);

  // Ensure the uploads directory exists
  if (!fs.existsSync(path.dirname(imagePath))) {
    fs.mkdirSync(path.dirname(imagePath), { recursive: true });
  }

  // Save the image and audio files temporarily
  image.mv(imagePath, (err) => {
    if (err) {
      return res.status(500).send("Error saving image file");
    }

    audio.mv(audioPath, (err) => {
      if (err) {
        return res.status(500).send("Error saving audio file");
      }

      // Combine the image and audio into a video
      ffmpeg()
        .input(imagePath)
        .input(audioPath)
        .loop(10)
        .outputOptions(
          "-c:v",
          "libx264",
          "-c:a",
          "aac",
          "-pix_fmt",
          "yuv420p",
          "-shortest",
          "-tune stillimage", // Optimize for still images
          "-vf format=yuv420p", // Ensures video format compatibility
          "-r 25"
        )
        .save(outputPath)
        .on("end", () => {
          // Remove the temporary image and audio files
          fs.unlinkSync(imagePath);
          fs.unlinkSync(audioPath);

          // Send the created video to the client
          res.download(outputPath, "meme-video.mp4", (err) => {
            if (err) {
              console.error(err);
            }

            // Remove the output video file after download
            fs.unlinkSync(outputPath);
          });
        })
        .on("error", (err) => {
          console.error("Error creating video:", err);
          res.status(500).send("Error creating video");
        });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
