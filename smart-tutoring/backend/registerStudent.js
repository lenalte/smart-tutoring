const { MongoClient, FindCursor } = require('mongodb');
const express = require('express');
const { json } = require('express');
const app = express()
const port = 4000
const mongoose = require('mongoose')
const User = require('./models/userStudent')
const bp = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const router = express.Router();

require('dotenv').config()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.json())


// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
mongoose.connect('mongodb://127.0.0.1:27017/user');


// Database Name
const dbName = 'smartTutoring';


// User

function generateToken(email) {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "5m" });
}


// POST mongoose Endpoint
router.post('/users', async (req, res) => {
    try {
        console.log("body", req.body);

        const { password: secretPassword } = req.body
        const hashedPW = await bcrypt.hash(secretPassword, 10)
        console.log("hashedPW:", hashedPW)

        const accessToken = generateToken(req.body.email);

        const user = new User({ ...req.body, password: hashedPW, token: accessToken })
        console.log("new User", user.name)
        const dbRes = await user.save()

        return res.status(201).send({ token: accessToken, dbRes })

    } catch (error) {
        console.log("error", error)
        if (error.name === "ValidationError") {
            let errors = {}

            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
        }
        if (error.name === "MongoServerError") {
            return res.status(500).send(error.message);
        }
        console.log("error", error);
        return res.status(500).send("Something went wrong");
    }
});



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})