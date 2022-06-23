const ColorThief = require("colorthief");
const rgbHex = require("simple-rgb");
async function extractColors(req, res) {
  const { image, count, format } = req.body;
  let dominantColor = "";
  let colorPalette = [];
  if (!image) {
    res.status(400).json({
      message: "Image is required",
    });
  } else if (
    image.split(".").pop() !== "png" &&
    image.split(".").pop() !== "jpg" &&
    image.split(".").pop() !== "jpeg"
  ) {
    res.status(400).json({
      message: "Image must be in png, jpg or jpeg format",
    });
  } else {
    await ColorThief.getPalette(image, count || 8).then((palette) => {
      palette.forEach((color) => {
        const hexColor = rgbHex(color[0], color[1], color[2]).color;
        const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        if (format === "hex") {
          colorPalette.push(hexColor);
        } else if (format === "rgb") {
          colorPalette.push(rgbColor);
        } else if (!format) {
          colorPalette.push(hexColor);
        } else {
          colorPalette.push(hexColor);
        }
      });
    });

    await ColorThief.getColor(image).then((color) => {
      const hexColor = rgbHex(color[0], color[1], color[2]).color;
      const rgbColor = `${color[0]}, ${color[1]}, ${color[2]}`;
      if (format === "hex") {
        dominantColor = hexColor;
      } else if (format === "rgb") {
        dominantColor = rgbColor;
      } else if (!format) {
        dominantColor = hexColor;
      } else {
        dominantColor = hexColor;
      }
    });
    res.status(200).json({
      dominantColor,
      palette: colorPalette,
    });
  }
}

module.exports = extractColors;
