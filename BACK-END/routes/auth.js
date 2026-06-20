const express = require("express");
const router = express.Router();

const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

router.get("/test", (req, res) => {
  res.send("Auth route working ✅");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({
        message: "User registered successfully"
    });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ 
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;