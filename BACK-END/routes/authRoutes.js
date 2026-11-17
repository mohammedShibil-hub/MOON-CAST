const express = require("express");
const router = express.Router();
const Seller = require("../models/sellerSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days,
    path: "/api/auth"
};

const generateAccessToken = (user) => {
    return jwt.sign({ id: user._id, _id: user._id }, process.env.JWT_SECRET, { expiresIn: "10m" });
}

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" });
}

router.get("/test", (req, res) => {
    res.send("Auth route working ✅");
});

router.post("/register", async (req, res) => {
    try {

        console.log("register body:", req.body);

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

        const user = await User.findOne({ email: email.trim().toLowerCase() });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const seller = await Seller.findOne({ userId: user._id })

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.refreshToken = await bcrypt.hash(refreshToken, 10);
        await user.save();

        res.cookie("refreshToken", refreshToken, cookieOptions);

        res.status(200).json({
            token: accessToken,

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },

            sellerExists: !!seller
        });

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({ message: error.message });
    }
});

router.post("/refresh", async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token missing"
            });
        }

        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET
        );

        const user = await user.findById(decoded.id);

        if (!user || !user.refreshTokenHash) {
            return res.status(401).json({
                message: "invalid session"
            });
        }

        const isValid = await bcrypt.compare(
            refreshToken,
            user.refreshTokenHash
        );

        if (!isValid) {
            return res.status(401).json({
                message: "invalid refresh session"
            });
        }

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        // Rotate refresh token
        user.refreshTokenHash = await bcrypt.hash(
            newRefreshToken,
            10
        );

        await user.save();

        res.cookie(
            "refreshToken",
            newRefreshToken,
            cookieOptions
        );

        res.status(200).json({
            token: newAccessToken
        });

    } catch (error) {
        console.error("Refresh error:", error.message);

        res.status(401).json({
            message: "Session expired. Please login again."
        });
    }
})

router.post("/logout", async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (refreshToken) {
            try {
                const decoded = jwt.verify(
                    refreshToken,
                    process.env.JWT_REFRESH_SECRET
                );

                await User.findByIdAndUpdate(decoded.id, {
                    $unset: {
                        refreshTokenHash: 1
                    }
                });

            } catch (error) {
                // Continue with cookie clearing
            }
        }

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/api/auth"
        });

        res.status(200).json({
            message: "Logged out successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.post("/check-user", async (req, res) => {
    try {
        const { identifier } = req.body;

        if (!identifier) {
            return res.status(400).json({ message: "Email is required" });
        }

        const user = await User.findOne({ email: identifier.trim().toLowerCase() });

        if (!user) {
            return res.status(404).json({ message: "User not found", exists: false });
        }

        res.json({
            exists: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});



module.exports = router;