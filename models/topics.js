const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicsSchema = new Schema({
    subject: String,
    description: String,
    account_id: String,
}, { timestamps: true });

module.exports = Topics = mongoose.model('topics', topicsSchema);
