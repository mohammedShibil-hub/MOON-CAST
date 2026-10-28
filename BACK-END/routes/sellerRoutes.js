const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Seller = require("../models/sellerSchema");


router.get("/profile",authMiddleware, async (req, res) => {

    console.log("SELLER PROFILE API CALLED");
    console.log("req.user:", req.user);


    try {


         if (!req.user || !req.user.id) {
            return res.status(401).json({
                message: "User ID not found in token"
            });
        }

        const seller = await Seller.findOne({ userId: req.user.id });
        if (!seller) {
            return res.json({exists: false });
        };

        res.json({
            exists: true,
            seller 
        });
        
    } catch (error) {
        console.error("Error fetching seller profile:", error);
        console.error("SELLER PROFILE ERROR:");
        console.error(error);


        res.status(500).json({
            message: error.message,
            error: error.toString()
        });
    }
});

module.exports = router;