const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/auth");
const {getSongs} = require("../controllers/song");

router.get("/getSongs", getSongs);

module.exports = router;