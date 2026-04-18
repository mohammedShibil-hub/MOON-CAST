const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURL =
            process.env.NODE_ENV === "production"
                ? process.env.DB_URL   // Atlas (Render)
                : "mongodb://localhost:27017/moonCast"; 

        await mongoose.connect(dbURL);

        console.log(`Database connected: ${process.env.NODE_ENV || "development"}`);
    } catch (err) {
        console.log("Database connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB