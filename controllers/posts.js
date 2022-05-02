const Posts = require("../models/posts");

exports.index = function (req, res) {
  Posts.find({}, function (err, response) {
    if (err) return handleError(err);
    res.json(response);
  });
};

exports.create = function (req, res) {};

exports.store = function (req, res) {
  // validateRegister
  // save to DB

  let post = new Posts({
    title: req.body.title,
    slug: req.body.title
      .toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^\w-]+/g, ""),
    summary: req.body.summary,
    body: req.body.body,
    feature_image: req.body.feature_image,
    settings: {
      active: true,
      comment: true,
      featured: false,
      private: false,
      private_password: "",
      redirect: "",
      sticky: false,
    },
    account_id: 1,
  });

  post
    .save()
    .then((response) => {
      res.end();
    })
    .catch((err) => {
      //When there are errors We handle them here
      console.log(err);
      res.send(400, "Error saving post");
    });
};

exports.show = function (req, res) {
  Posts.findOne(
    {
      slug: req.params.slug,
      "settings.active": true,
    },
    function (err, post) {
      if (err) {
        console.log(err);
        res.send(500, "Error loading post");
      } else if (post === null) {
        res.send(404, "Post not found");
      } else {
        res.send(post);
      }
    }
  );
};

exports.edit = function (req, res) {};

exports.update = function (req, res) {};

exports.destroy = function (req, res) {};

// Verb	URI	Action	Route Name
// GET	/photos/{photo}/comments	index	photos.comments.index
// GET	/photos/{photo}/comments/create	create	photos.comments.create
// POST	/photos/{photo}/comments	store	photos.comments.store
// GET	/comments/{comment}	show	comments.show
// GET	/comments/{comment}/edit	edit	comments.edit
// PUT/PATCH	/comments/{comment}	update	comments.update
// DELETE	/comments/{comment}	destroy	comments.destroy
