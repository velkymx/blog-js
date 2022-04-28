const express = require("express");
const router = express.Router();
const auth = require('../controllers/auth')

router.post('/register', auth.index);
router.post('/login', auth.index);

/*

These routes belong in the client

router.get('/register', auth.index);
router.get('/login', auth.index);
router.get('/logout', auth.index);

*/

module.exports = router
