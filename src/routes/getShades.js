const getShades = require("../controllers/getShades");
const router = require("express").Router();

router.get("/", getShades);
module.exports = router;
