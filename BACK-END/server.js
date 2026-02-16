require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection')

const app = express()


connectDB()


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server running on ${PORT}`));