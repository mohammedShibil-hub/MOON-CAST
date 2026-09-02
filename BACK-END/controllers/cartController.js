import User from "../models/userSchema.js";

export const getCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId)
            .populate("cart.productId");

        res.json(user.cart);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};