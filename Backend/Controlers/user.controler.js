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

