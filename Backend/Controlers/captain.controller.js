import Captain from "../Model/captain.model.js";
import { createCaptain } from "../Services/captain.service.js";
import { validationResult } from "express-validator";
export const register = async (req, res) => {
    console.log("req is coming");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    const { fullname, email, password, vechile } = req.body;

    const hashpassword = await Captain.hashPassword(password);
    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashpassword, // Correct field name here
        color: vechile.color,
        plate: vechile.plate,
        capacity: vechile.capacity,
        vechileType: vechile.vechileType
    });
    const token = captain.generateToken(); // Use `captain` instance to call instance method
    return res.status(200).json({
        captain,
        token
    });
};


