const express = require("express");
const router = express.Router();
const topics = require("../controllers/topics");
const posts = require("../controllers/posts");

router.get("/topics", topics.index);
router.get("/posts", posts.index);

module.exports = router;
