const mongoose = require("mongoose")

const querySchema = new mongoose.Schema({
    age: Number,
    schools: [String],
    location: Number,
    hours: Number,
    languages: [String],
    languageSkills: [{ language: String, level: Number }],
    aboutyou: String,
    subjects: [String],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'UserStudent' },
})

module.exports = mongoose.model("queryStudent", querySchema)