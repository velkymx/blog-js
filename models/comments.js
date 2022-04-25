const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    subject: String,
    description: String,
    account_id: String,
    post_id:String,
}, { timestamps: true });

module.exports = Comments = mongoose.model('comments', commentsSchema);
