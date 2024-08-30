const express = require("express");
const router = express.Router();

const {preSignup, signup, login, allowIfCookie } = require("../controllers/user.js");

router.get("/check-cookie", allowIfCookie);
router.post("/pre-signup", preSignup);
router.post("/signup", signup);
router.post("/login", login);

// router.post("/send-code", sendCode);
// router.post("/verify-code", verifyCode);

module.exports = router;
