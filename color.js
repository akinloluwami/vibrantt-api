const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 2000; // Bro use a constant for the port number instead of an hard-coded value 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Vibrantt!"); // Try dey use res.send instead of res.json to return plain strings, you know that someone else might want to use the API too
});

app.get("/ping", (req, res) => {
  res.status(200).send("Vibrantt to the moon! 🚀");
});

const getColorRoute = require("./src/routes/getColor");
const extractColorsRoute = require("./src/routes/extractColors");
const generatePaletteRoute = require("./src/routes/generatePalette");
const getShadesRoute = require("./src/routes/getShades");

app.use("/getcolor", getColorRoute);
app.use("/extractcolors", extractColorsRoute);
app.use("/generatepalette", generatePaletteRoute);
app.use("/getshades", getShadesRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

