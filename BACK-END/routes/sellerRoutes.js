const express = require("express");
const router = express.Router();


router.get("/profile", async (req, res) => {
    try {
        const seller = await seller.findOne({ userId: req.user.id });
        if (!seller) {
            return res.status(404).json({ message: "Seller profile not found", exists: false });
        };

        res.json({
            exists: true,
            seller 
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;