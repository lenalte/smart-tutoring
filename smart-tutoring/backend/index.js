const { MongoClient } = require('mongodb');
const express = require('express');
// const { json } = require('express');
const app = express()
const port = 4000
const mongoose = require('mongoose')
const User = require('./models/userStudent')
const bp = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const queryStudent = require('./models/queryStudent');
const queryTutor = require('./models/queryTutor');

const cors = require('cors');
app.use(cors({
    origin: '*'
}));
// const cors = require('cors');
// app.use(cors({ origin: 'http://localhost:4000' }));

require('dotenv').config()
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(express.json())


// Connection URL
const url = process.env.MONGODB_CONNECTION;
const client = new MongoClient(url);
mongoose.connect(process.env.MONGODB_CONNECTION);


// Database Name
const dbName = 'smartTutoring';



// Auth Middleware
async function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    // console.log("authHeader:", authHeader);
    if (authHeader) {
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.status(401);
        // console.log("token:", token)
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findOne({ email: decoded.email })
            // console.log("decoded:", decoded);
            const timestamp = (new Date()).getUTCSeconds()
            // console.log("current timestamp", timestamp)
            if (timestamp <= decoded.exp) {
                req.user = user;
                return next();
            } else {
                return res.status(401).send("Unauthorized, Token is no longer valid");
            }
        } catch (err) {
            return res.status(401).send("Unauthorized, Invalid token");
        }
    } else {
        return res.status(401).send("Unauthorized, Token not provided");
    }
}


// Register user

function generateToken(email) {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "5m" });
}


// POST mongoose Endpoint
app.post('/users', async (req, res) => {
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



// POST/users/login Endpoint
app.post('/users/login', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    console.log("User found:", user);

    if (!user) {
        return res.status(404).send({ status: "Wrong email" })
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = generateToken(req.body.email);
        return res.status(201).json({ token: token });
    }

    res.status(404).send({ status: "Wrong password" })
})


//POST/users/logout Endpoint
app.post('/users/logout', auth, async (req, res) => {
    const user = await User.findOne({ email: req.user.email })
    console.log("user", user);
    const invalidatedToken = await bcrypt.hash(user.token, 10);
    console.log("invalidatedToken", invalidatedToken);

    return res.status(201).send({ token: invalidatedToken });
})


// GET mongoose Endpoint mit auth
app.get('/users', auth, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email })
        console.log("user", user);
        return res.send(user)
    } catch (e) {
        if (e.name === "CastError") {
            return res.status(404).send({ status: "not Found" });
        }
        console.log(e);

        return res.status(500);
    }
})


// PATCH/users mongoose Endpoint mit auth
app.patch('/users', auth, async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });
        const updatedUser = await user.updateOne({ ...req.body });
        console.log('updated user:', updatedUser);
        return res.send(Object.values(updatedUser))
    } catch (error) {
        res.status(500).send({ status: "Oops, something went wrong :(" })
    }
})




// Query Student

// POST/queryS
app.post('/queryS', auth, async (req, res) => {
    console.log("body", req.body);
    console.log('user', req.user)
    const query = new queryStudent({
        ...req.body,
        author: req.user._id
    })
    console.log("new Query", query)
    const dbRes = await query.save()
    res.json(await dbRes);
});

// GET/queryS
app.get('/queryS', auth, async (req, res) => {
    const userEmail = req.user.email;
    console.log(userEmail)
    const query = await queryStudent.find({ author: req.user._id })
    console.log("query", query);

    if (query.length == 0) {
        res.status(404).send({ status: "Not Found" })
    }
    return res.send(Object.values(query))
})

// PATCH/queryS/:id 
app.patch('/queryS/:id', auth, async (req, res) => {
    const id = req.params.id;
    const query = await queryStudent.findOne({ author: req.user._id });
    if (!query) return res.status(404).send({ status: "Not Found" });
    const updatedQuery = await queryStudent.updateOne({ _id: id }, { ...req.body })
    console.log('updated query', updatedQuery);
    res.send(Object.values(updatedQuery))
})

// DEL/queryS/:id
app.delete('/queryS/:id', auth, async (req, res) => {
    const id = req.params.id;
    const query = await queryStudent.findOne({ author: req.user._id });
    if (!query) return res.status(404).send({ status: "Not Found" });
    try {
        console.log("delete entry with id", id);
        const deletedQuery = await queryStudent.findByIdAndRemove(id)
        console.log('deleted task', deletedQuery);
        return res.send(deletedQuery)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send("Something went wrong");
    }
})





// Query Tutor

// POST/queryS
app.post('/queryT', auth, async (req, res) => {
    console.log("body", req.body);
    console.log('user', req.user)
    const query = new queryTutor({
        ...req.body,
        author: req.user._id
    })
    console.log("new Query", query)
    const dbRes = await query.save()
    res.json(await dbRes);
});

// GET/queryT
app.get('/queryT', auth, async (req, res) => {
    const userEmail = req.user.email;
    console.log(userEmail)
    const query = await queryTutor.find({ author: req.user._id })
    console.log("query", query);

    if (query.length == 0) {
        res.status(404).send({ status: "Not Found" })
    }
    return res.send(Object.values(query))
})

// PATCH/queryT/:id 
app.patch('/queryT/:id', auth, async (req, res) => {
    const id = req.params.id;
    const query = await queryTutor.findOne({ author: req.user._id });
    if (!query) return res.status(404).send({ status: "Not Found" });
    const updatedQuery = await queryStudent.updateOne({ _id: id }, { ...req.body })
    console.log('updated query', updatedQuery);
    res.send(Object.values(updatedQuery))
})

// DEL/queryT/:id
app.delete('/queryT/:id', auth, async (req, res) => {
    const id = req.params.id;
    const query = await queryTutor.findOne({ author: req.user._id });
    if (!query) return res.status(404).send({ status: "Not Found" });
    try {
        console.log("delete entry with id", id);
        const deletedQuery = await queryStudent.findByIdAndRemove(id)
        console.log('deleted task', deletedQuery);
        return res.send(deletedQuery)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send("Something went wrong");
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})