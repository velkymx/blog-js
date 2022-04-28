const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profilesSchema = new Schema({
    username: String,
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
});

module.exports = Profiles = mongoose.model('profiles', profilesSchema);
