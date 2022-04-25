const Topics = require("../models/topics");

exports.index = function (req,res) {
  Topics.find({}, function (err, response) {
    if (err) return handleError(err);
      res.json(response);
  });
}

exports.create = function (req,res) {

}

exports.store = function (req,res) {


}

exports.show = function (req,res) {

}

exports.edit = function (req,res) {

}

exports.update = function (req,res) {

}

exports.destroy = function (req,res) {

}

// Verb	URI	Action	Route Name
// GET	/photos/{photo}/comments	index	photos.comments.index
// GET	/photos/{photo}/comments/create	create	photos.comments.create
// POST	/photos/{photo}/comments	store	photos.comments.store
// GET	/comments/{comment}	show	comments.show
// GET	/comments/{comment}/edit	edit	comments.edit
// PUT/PATCH	/comments/{comment}	update	comments.update
// DELETE	/comments/{comment}	destroy	comments.destroy
