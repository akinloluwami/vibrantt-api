const randomColor = require("randomcolor");
const GetColorName = require("hex-color-to-color-name").GetColorName;

function generatePalette(req, res) {
  const count = req.body.count || 8;
  const hue = req.body.hue || "random";
  let colorPalette = [];

  randomColor({
    count: count,
    hue: hue,
  }).forEach((color) => {
    const hexToRgb = color.split("#")[1];
    const rgb = hexToRgb.match(/.{1,2}/g).map((hex) => {
      return parseInt(hex, 16);
    });
    const rgbColor = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;

    colorPalette.push({
      hex: color,
      name: GetColorName(color.replace("#", "")),
      rgb: rgbColor,
    });
  });

  res.status(200).json({
    palette: colorPalette,
  });
}

module.exports = generatePalette;
