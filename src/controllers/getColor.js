const hexColor = require("hex-color-to-color-name").GetColorName;
const createShades = require("colorshades").default;

function getColor(req, res) {
  const { color } = req.body;
  const colorCode = color.replace("#", "");
  const colorName = hexColor(colorCode);
  const shades = createShades(color);
  const colorShades = [];

  shades.colors.forEach((color) => {
    colorShades.push(color.hex);
  });

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

  res.status(200).json({
    colorName: colorName,
    shades: colorShades,
    rgb: rgbString,
  });
}

module.exports = getColor;
