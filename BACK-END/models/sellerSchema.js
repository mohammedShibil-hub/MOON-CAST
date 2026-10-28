const mongoose = require("mongoose");
const sellerSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        sellerName: {
            type: String,
            required: true,
            trim: true,
        },

        bank: {
            accountHolderName: {
                type: String,
                required: true,
                trim: true,
            },

            accountNumber: {
                type: String,
                required: true,
                trim: true,
            },

            ifscCode: {
                type: String,
                required: true,
                trim: true,
                toUpperCase: true,
            },

            bankName: {
                type: String,
                required: true,
                trim: true,
            },
        },

        legal: {
            pancardNumber: {
                type: String,
                required: true,
                trim: true,
            },
            gstNumber: {
                type: String,
                required: true,
                trim: true,
            }
        },
        isseller: {
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


module.exports = mongoose.model("Seller", sellerSchema);