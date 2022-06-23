const getColor = require("../controllers/getColor");
const router = require("express").Router();

router.get("/", getColor);

module.exports = router;
