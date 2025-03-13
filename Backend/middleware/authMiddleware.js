const userModel = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = req.headers.authorization.split(" ")[1]; 
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);                
        const user = await userModel.findById(decoded.user.id); 
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        return next();       
    } catch (error) {
        console.error("JWT Error:", error.message);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};


module.exports.roleUser = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: No user found" });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: You don't have access to this route" });
        }

        next(); 
    };
};

