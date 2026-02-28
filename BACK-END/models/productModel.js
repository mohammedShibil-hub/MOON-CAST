const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        images: {
            type: [String],
            required: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        brand: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },
        category: {
            type: String,
            required: true,
            enum: ["diorama", "diecast", "hotwheels"],
            index: true
        },
        scale: {
            type: String,
            required: true,
            trim: true
        },
        isTrending: {
            type: Boolean,
            default: false
        },
        isLatest: {
            type: Boolean,
            default: false
        },
        mrp: {
            type: Number,
            required: true,
            min: 0
        },
        price: {
            type: Number,
            required: true,
            min: 0
        }
    },
    { timestamps: true }
);

productSchema.index({
    name : "text",
    brand : "text",
    category : "text"
});

module.exports = mongoose.model("Product", productSchema);