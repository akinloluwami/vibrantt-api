const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Vibrantt!");
});

app.get("/ping", (req, res) => {
  res.status(200).json("Vibrantt to the moon! 🚀");
});

const getColorRoute = require("./src/routes/getColor");
const extractColorsRoute = require("./src/routes/extractColors");
const generatePaletteRoute = require("./src/routes/generatePalette");
const getShadesRoute = require("./src/routes/getShades");

app.use("/getcolor", getColorRoute);
app.use("/extractcolors", extractColorsRoute);
app.use("/generatepalette", generatePaletteRoute);
app.use("/getshades", getShadesRoute);

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
