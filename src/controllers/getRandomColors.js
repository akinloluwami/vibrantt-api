const randomColor = require("randomcolor");
const hexColor = require("hex-color-to-color-name").GetColorName;

function getRandomColors(req, res) {
  const count = req.body.count || 5;
  let colorPalette = [];

  for (let i = 0; i < count; i++) {
    const colorCode = randomColor().replace("#", "");
    const colorName = hexColor(colorCode);
    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    }
    const rgb = hexToRgb(colorCode);
    const rgbString = `${rgb.r},${rgb.g},${rgb.b}`;

    colorPalette.push({
      name: colorName,
      hex: randomColor(),
      rgb: rgbString,
    });
  }
  res.status(200).json({
    palette: colorPalette,
  });
}

module.exports = getRandomColors;
