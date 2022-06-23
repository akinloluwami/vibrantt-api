const getColorName = require("hex-color-to-color-name").GetColorName;
const createShades = require("colorshades").default;

function getShades(req, res) {
  const { color } = req.body;
  const shades = createShades(color);
  const colorShades = [];

  shades.colors.forEach((color) => {
    const colorCode = color.hex.replace("#", "");
    const colorName = getColorName(colorCode);
    const rgb = color.rgb.replace("rgb(", "").replace(")", "");
    colorShades.push({
      name: colorName,
      hex: color.hex,
      rgb: rgb,
    });
  });

  res.status(200).json({
    palette: colorShades,
  });
}
module.exports = getShades;
