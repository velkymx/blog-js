const express = require("express");
const router = express.Router();
const topics = require("../controllers/topics");
const posts = require("../controllers/posts");

router.get("/topics", topics.index);

router.get("/posts", posts.index);
router.get("/posts/:slug", posts.show);
router.post("/posts", posts.store);
router.put("/posts/:id", posts.update);

module.exports = router;
