const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    age: Number,
    schools: [String],
    location: Number,
    hours: Number,
    languages: [String],
    languageSkill: [{ language: String, level: Number }],
    aboutyou: String,
    subjects: [String],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'UserTutor' },
})

module.exports = mongoose.model("queryTutor", querySchema)