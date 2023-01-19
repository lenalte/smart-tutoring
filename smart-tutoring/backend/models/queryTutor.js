const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    age: Number,
    schools: [String],
    location: Number,
    hours: Number,
    languages: [String],
    skill: [Number],
    bio: String,
    subjects: [String],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'UserTutor' },
})

module.exports = mongoose.model("queryTutor", querySchema)