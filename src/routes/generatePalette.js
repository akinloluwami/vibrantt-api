const generatePalette = require("../controllers/generatePalette");
const router = require("express").Router();

router.get("/", generatePalette);

module.exports = router;
