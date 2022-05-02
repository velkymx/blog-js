const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    provider: {
      type: String,
    },
    provider_id: {
      type: String,
    },
    password: {
      type: String,
    },
    displayname: {
      type: String,
    },
    biography: {
      type: String,
    },
    icon: {
      type: String,
    },
    karma_post: {
      type: Number,
      default: 0,
    },
    karma_comment: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: 1,
    },
    verified: {
      type: Boolean,
      default: 0,
    },
    role: {
      type: Number,
      default: 5,
    },
    timezone: {
      type: String,
      default: "America/New_York",
    },
    saved_posts: Array,
    saved_comments: Array,
    subscribed: Array,
    owned: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = Accounts = mongoose.model("accounts", accountsSchema);
