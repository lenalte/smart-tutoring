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




// function generateToken(email) {
//     return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "5m" });
//   }

// // POST/users/login Endpoint
// app.post('/users/login', async (req, res) => {
//     const { email, password } = req.body
//     const user = await User.findOne({ email })
//     console.log("User found:", user);
  
//     if (!user) {
//       return res.status(404).send({ status: "Wrong email" })
//     }
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       const token = generateToken(req.body.email);
//       return res.status(201).json({ token: token });
//     }
  
//     res.status(404).send({ status: "Wrong password" })
//   })




