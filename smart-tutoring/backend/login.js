import express from 'express';
import User from './models/userStudent';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json({ limit: "50mb" }));

app.post("/register", async (req, res) => {
    try {
        const { first_name, last_name, email, passwort } = req.body;

        if (!(email && passwort && first_name && last_name)) {
            res.status(400).send("All input is requiered");
        }
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("User Already Exist. Pleas Login");
        }

        const encryptedPassword = await bcrypt.hash(passwort, 10);

        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            passwort: encryptedPassword,
            role: "default"
        });


        const token = jwt.sign(
            { user_id: user._id, email },
            { expiresIn: "2h" }
        );

        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
});





