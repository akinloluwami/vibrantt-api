const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("This is a color");
});

const getColorRoute = require("./src/routes/getColor");
const extractColorsRoute = require("./src/routes/extractColors");
const getRandomColorsRoute = require("./src/routes/getRandomColors");

app.use("/getcolor", getColorRoute);
app.use("/extractcolors", extractColorsRoute);
app.use("/getpalette", getRandomColorsRoute);

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
