const express = require("express");
const router = express.Router();

const User = require("../models/userSchema");
const Seller = require("../models/sellerSchema");
const authMiddleware = require("../middleware/authMiddleware");



router.post("/register", authMiddleware, async (req, res) => {
    try {
        const {
            accountHolderName,
            accountNumber,
            confirmAccountNumber,
            ifscCode,
            bankName,
            pancardNumber,
            gstNumber
        } = req.body;

        if (
            !accountHolderName ||
            !accountNumber ||
            !confirmAccountNumber ||
            !ifscCode ||
            !bankName ||
            !pancardNumber ||
            !gstNumber
        ) {
            return res.status(400).json({ message: "All bank and legal details are required" });
        }

        if (accountNumber !== confirmAccountNumber) {
            return res.status(400).json({
                message: "Account numbers do not match."
            });
        }

        const userId = req.user.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const existingSeller = await Seller.findOne({userId });

        if (existingSeller) {
            return res.status(400).json({ message: "you are already registered as a seller" });
        }

        const newSeller = await Seller.create({
            userId: user._id,
            sellerName: user.name,
            bank: {
                accountHolderName,
                accountNumber,
                ifscCode,
                bankName,
            },

            legal: {
                pancardNumber,
                gstNumber,
            },

            isseller: true,
            status: "pending",
        });

        res.status(201).json({
            message: "Seller registration successful",
            seller: newSeller._id,
        });

    } catch (error) {
        console.error("Error in seller registration:", error);
        res.status(500).json({ message: error.message || "Internal server error" });
    }
});


module.exports = router;