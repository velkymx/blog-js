const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    title: String,
    slug: {
      type: String,
      unique: true,
    },
    summary: String,
    body: String,
    feature_image: String,
    tags: { type: [String], index: true },
    settings: {
      active: Boolean,
      comment: Boolean,
      featured: Boolean,
      private: Boolean,
      private_password: String,
      redirect: String,
      sticky: Boolean,
    },
    account_id: String,
    publishedAt: Date,
    topics: Array,
  },
  { timestamps: true }
);

module.exports = Posts = mongoose.model("posts", postsSchema);
