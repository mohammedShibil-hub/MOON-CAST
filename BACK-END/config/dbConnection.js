const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("database is connected")
    } catch (err) {
        console.log("database connected failed", err.message)
        process.exit(1)
    }
};

module.exports = connectDB