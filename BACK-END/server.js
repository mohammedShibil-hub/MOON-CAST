require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection')
const path = require('path');
const cors = require('cors');

connectDB()
const app = express()

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/images', express.static('public/images'));
app.use("/api/products", require('./routes/productRoutes'));


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server running on ${PORT}`));