const mongoose = require("mongoose")
// const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new mongoose.Schema({
    prename: String,
    lastname: String,
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        match: /.+\@.+\..+/,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    token: {
        type: String,
        required: true
    },
    query: [{ type: mongoose.Schema.Types.ObjectId, ref: 'queryStudent' }]
})


module.exports = mongoose.model("User", userSchema)