const getRandomColors = require("../controllers/getRandomColors");
const router = require("express").Router();

router.get("/", getRandomColors);

module.exports = router;
