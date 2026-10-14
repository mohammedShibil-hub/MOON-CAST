const express = require("express");
const router = express.Router();



router.post("/register", async (req, res) => {
    try {
        const { 
            userId, 
            accountHolderName, 
            accountNumber, 
            ifscCode,
            bankName,
        } = req.body;

        if (
            !userId || 
            !accountHolderName ||
            !accountNumber || 
            !ifscCode || 
            !bankName
        ) { 
            return res.status(400).json({ message: "All bank details are required" });
        }

        const existingSeller = await seller.findOne({ userId: req.user.id });

        if (existingSeller) {
            return res.status(400).json({ message: "you are already registered as a seller" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const seller = await seller.create({
            userId: user._id,
            sellerName: user.name,
            phone: user.phone || '',
            bank: {
                accountHolderName,
                accountNumber,
                ifscCode,
                bankName,
            },

            isSeller: true,
            status: "pending",
        });

        res.status(201).json({
            message: "Seller registration successful",
            seller: seller._id,
        });

    } catch (error) {
        console.error("Error in seller registration:", error);
        res.status(500).json({ message: "Failed to register seller" });
    }
});