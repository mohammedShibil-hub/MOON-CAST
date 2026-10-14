const mongoose = require("mongoose");

const sellerProductSchema = new mongoose.Schema(
    {
        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seller",
            required: true,
        },

        selleruserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        images: [
            {
                type: String,
                required: true,
            }
        ],

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
        },

        category: {
            type: String,
            required: true,
            enum: ["Diorama", "Diecast", "Hotwheels"],
        },

        scale: {
            type: String,
            required: true,
            trim: true,
        },

        brand: {
            type: String,
            required: true,
            trim: true,
        }, 

        islatest: {
            type: Boolean,
            default: true,
        },

        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
    },
    
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("SellerProduct", sellerProductSchema);