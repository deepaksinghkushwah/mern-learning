const express = require("express");
const router = express.Router();
const {protect} = require("../middlewares/auth");
const {register, login} = require("../controllers/auth");

router.post("/register", register);
router.post("/signin", login);

module.exports = router;