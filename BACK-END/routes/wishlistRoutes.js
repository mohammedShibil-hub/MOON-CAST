
const express = require('express');
const router = express.Router();
const userSchema = require("../models/userSchema");
const Product = require("../models/productSchema");
const authMiddleware = require("../middleware/authMiddleware");



router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await userSchema.findById(req.user._id).populate('wishlist');
        res.status(200).json({ wishlist: user.wishlist });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


router.post('/toggle', authMiddleware, async (req, res) => {
    try {
        const { productId } = req.body;
        const user = await userSchema.findById(req.user._id);
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const alreadyInWishlist = user.wishlist.some(id => id.toString() === productId);

        if (alreadyInWishlist) {
            user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
        }
        else {
            user.wishlist.push(productId);
        }

        await user.save();
        await user.populate('wishlist');
        res.status(200).json({
            message: alreadyInWishlist ? "Product removed from wishlist" : "Product added to wishlist",
            wishlist: user.wishlist
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/wishlist/:productId', authMiddleware, async (req, res) => {
    try {
        const user = await userSchema.findById(req.user._id);

        user.wishlist = user.wishlist.filter(id => id.toString() !== req.params.productId);
        await user.save();
        await user.populate('wishlist');
        res.status(200).json({ message: "Product removed from wishlist", wishlist: user.wishlist });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;