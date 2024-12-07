import Captain from "../Model/captain.model.js";
import { validationResult } from "express-validator";
import { createCaptain } from "../Services/captain.service.js";
export const register = async (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { fullname, email, password, vechile } = req.body;

    if (!fullname || !email || !password || !vechile) {
        return res.status(400).json({
            message: "All field are required"
        })
    }
    const isCaptainAllreadyExists = Captain.findOne({ email: email });

    if (isCaptainAllreadyExists) {
        return res.status(400).json({
            message: "Captain is already exist with this email"
        })
    }
    const hashpassword = await Captain.hashPassword(password);

    const captain = await createCaptain({ firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashpassword, color: vechile.color, plate: vechile.plate, capacity: vechile.capacity, vechileType: vechile.vechileType })

    const token = Captain.generateToken();

    return res.status(200).json({
        token, captain
    })

}