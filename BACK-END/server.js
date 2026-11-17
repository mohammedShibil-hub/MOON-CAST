require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection')
const path = require('path');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const sellerregiRoutes = require("./routes/sellerregiRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const cookieParser = require('cookie-parser');

connectDB()
const app = express()

const allowedOrigins = [
    "https://moon-cast.vercel.app",
    "http://localhost:5173"
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error(`Not allowed by CORS: ${origin}`));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(express.json());
app.use(cookieParser());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/products", require('./routes/productRoutes'));
app.use("/api/auth", authRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/seller-details", sellerregiRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "server.html"));
});


const PORT = process.env.PORT || 6004;
app.listen(PORT, "0.0.0.0",() => console.log(`server running on ${PORT}`));