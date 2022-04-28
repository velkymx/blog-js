const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    karma_post: {
        type: Number,
        default: 0
    },
    karma_comment: {
        type: Number,
        default: 0
    },
    saved_posts: Array,
    saved_comments: Array,
    subscribed: Array,
    owned: Array
}, { timestamps: true }););

module.exports = Accounts = mongoose.model('accounts', accountsSchema);
