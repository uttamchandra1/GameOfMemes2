const express = require("express");
const ffmpeg = require("fluent-ffmpeg");
const path = require("path");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(fileUpload());

app.post("/create-video", async (req, res) => {
  const { files } = req;
  const image = files.image;
  const audio = files.audio;

  const imageName = new Date().getTime().toString() + image.name;
  const audioName = new Date().getTime().toString() + audio.name;

  const imagePath = path.join(__dirname, "uploads", imageName);
  const audioPath = path.join(__dirname, "uploads", audioName);

  await image.mv(imagePath);
  await audio.mv(audioPath);

  const outputPath = path.join(__dirname, "output", `${Date.now()}.mp4`);

  // Ensure the output directory exists
  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  ffmpeg()
    .input(audioPath)
    .input(imagePath)
    .loop(10)
    .outputOptions([
      "-c:v libx264",
      "-c:a aac",
      "-pix_fmt yuv420p",
      "-shortest", // Ensures the video ends when the audio ends
      "-tune stillimage", // Optimize for still images
      "-vf scale=1280:720", // Set resolution to 720p
      "-r 25", // Frame rate
      "-b:v 1M", // Video bitrate
      "-b:a 192k", // Audio bitrate
    ])
    .on("end", () => {
      console.log("Video created successfully!");

      // Download the video and delete the output file afterward
      res.download(outputPath, "meme-video.mp4", (err) => {
        if (err) {
          console.error(err);
        }

        // Delete the output video file
        fs.unlinkSync(outputPath);

        // Optionally delete the input files
        // fs.unlinkSync(imagePath);
        // fs.unlinkSync(audioPath);
      });
    })
    .on("error", (err) => {
      console.error("Error creating video:", err);
      res.status(500).send("Error creating video");
    })
    .save(outputPath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
