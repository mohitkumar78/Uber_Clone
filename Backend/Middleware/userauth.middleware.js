import userModel from "../Model/user.model.js";
import jwt from 'jsonwebtoken';
import Blacklist from "../Model/blacklistToken.model.js";
export const userAuth = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const token =
            req.cookies.token ||
            (req.headers.authorization && req.headers.authorization.split(' ')[1]);

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized: No token provided",
            });
        }

        const isblacklisttoken = await Blacklist.findOne({ token: token });
        if (isblacklisttoken) {
            return res.status(401).json({
                message: "unauhorized "
            })
        }
        // Verify token
        const decodedToken = jwt.verify(token, "hbdhfshcdsbvfhgsvbdghfvhgsdv");

        // Find user based on decoded token
        const user = await userModel.findById(decodedToken.id); // Use `id`, not `_id`

        if (!user) {
            return res.status(401).json({
                message: "Unauthorized: User not found",
            });
        }

        // Attach user to request
        req.user = user;
        return next();
    } catch (error) {
        console.error("Authorization Error:", error.message);
        return res.status(401).json({
            message: "Unauthorized: Invalid token or error in authentication",
        });
    }
};
