const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "General"
    },
    tag: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: Date.now
    },
});

module.exports = mongoose.model('user', NotesSchema)