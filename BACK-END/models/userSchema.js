const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: { type: String, unique: true },
        password: String,

        cart: [
            {
                productId: String,
                quantity: Number,
            }
        ],

        wishlist: [String],

        address: {
            fullName: String,
            phone: String,
            addressLine: String,
            city: String,
            pincode: String,
        },

        orders: [
            {
                products: Array,
                totalAmount: Number,
                status: { type: String, default: "Pending" },
                createdAt: { type: Date, default: Date.now },
            }
        ]
    });

module.exports = mongoose.model("User", userSchema);
