const express = require("express");

const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");
require("@prisma/client");

const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(
  fileUpload({
    limits: {
      fileSize: 100000000,
    },
    abortOnLimit: true,
  })
);
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "./upload", imageName);
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error(err);
      return res.send({
        success: false,
        message: "Error reading image file",
      });
    }

    res.contentType("image/jpeg");
    res.send(data);
  });
});
app.post("/upload", (req, res) => {
  function isImage(file) {
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];
    return acceptedImageTypes.includes(file.mimetype);
  }

  const { image } = req.files;

  if (!isImage(image)) return res.sendStatus(400);
  image.mv(__dirname + "/upload/" + image.name);
  // All good
  return res.send("ok");
});
// redirect to routes/index.js
const route = require("./routes");
app.use("/", route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
