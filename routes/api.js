const express = require("express");
const router = express.Router();
const topics = require('../controllers/topics')

router.get('/topics', topics.index);

module.exports = router
