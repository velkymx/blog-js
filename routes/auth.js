const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/logout", auth.logout);

/*

These routes belong in the client

router.get('/register', auth.index);
router.get('/login', auth.index);
router.get('/logout', auth.index);

*/

module.exports = router;
