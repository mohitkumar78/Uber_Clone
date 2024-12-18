import userModel from "../Model/user.model.js";
import { createUser } from "../Services/user.services.js";
import { validationResult } from "express-validator";
import blacklist from "../Model/blacklistToken.model.js";

export const Rigster = async (req, res, next) => {
    console.log("req is comming")
    const { fullname, email, Password } = req.body
    console.log(req.body)
    console.log(fullname, email, Password)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }


    const hashPassword = await userModel.hashpassword(Password);
    const user = await createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, Password: hashPassword })
    console.log(user)

    const token = user.genrateToken();
    res.status(200).json({ token, user })
}

export const Login = async (req, res, next) => {
    try {
        console.log("login req is comming")
        console.log(req.body)
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const { email, Password } = req.body;
        console.log(email, Password)
        // Await the query to get the resolved user document
        const user = await userModel.findOne({ email }).select("+Password");

        // If no user is found
        console.log("user is", user)
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
        res.cookie('token', token)
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

export const profile = async (req, res, next) => {
    return res.status(200).json(req.user)
}

export const logout = async (req, res, next) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklist.create({ token });

    res.status(200).json({ message: "logout" })
}