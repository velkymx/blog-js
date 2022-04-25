const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    subject: String,
    description: String,
    account_id: String,
    topic_id:String,
}, { timestamps: true });

module.exports = Posts = mongoose.model('posts', postsSchema);
