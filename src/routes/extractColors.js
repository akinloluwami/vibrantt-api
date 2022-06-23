const extractColors = require("../controllers/extractColors");
const router = require("express").Router();

router.post("/", extractColors);
module.exports = router;
