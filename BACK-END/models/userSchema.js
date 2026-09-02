const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: { 
            type: String, 
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },

        cart: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
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
                status: {
                    type: String, 
                    default: "Pending" 
                },
                createdAt: {
                    type: Date, 
                    default: Date.now 
                },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
