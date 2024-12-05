import userModel from "../Model/user.model.js";
import { createUser } from "../Services/user.services.js";
import { validationResult } from "express-validator";
export const Rigster = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { fullname, email, Password } = req.body

    const hashPassword = await userModel.hashpassword(Password);
    const user = await createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, Password: hashPassword })
    console.log(user)

    const token = user.genrateToken();
    res.status(200).json({ token, user })
}

export const Login = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const { email, Password } = req.body;

        // Await the query to get the resolved user document
        const user = await userModel.findOne({ email }).select("+Password");

        // If no user is found
        console.log(user)
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // Compare password
        const isMatch = await user.comparePassword(Password);

        // If password doesn't match
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // Generate token
        const token = user.genrateToken();

        return res.status(200).json({
            token,
            user,
        });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
