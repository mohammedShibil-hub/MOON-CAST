const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log("AUTH ERROR: Authorization header missing");

        return res.status(401).json({
            message: "Authorization header missing"
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        console.log("AUTH ERROR: Token missing");

        return res.status(401).json({
            message: "Token missing"
        });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("AUTH SUCCESS");

        req.user = decoded;

        next();

    } catch (error) {

        console.log("JWT ERROR:", error.name);
        console.log("JWT MESSAGE:", error.message);

        return res.status(401).json({
            message: "Invalid token",
            error: error.name
        });

    }

};