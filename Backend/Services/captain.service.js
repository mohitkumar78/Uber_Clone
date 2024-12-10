import Captain from "../Model/captain.model.js"
export const createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vechileType }) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechileType) {
        throw new Error("All fields are required");
    }
    const cap = await Captain.findOne({ email });
    if (cap) {
        throw new Error("User already exists with this email");
    }
    const captain = await Captain.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        Password: password, // Correct field name here
        vechile: {
            color,
            plate,
            capacity,
            vechileType
        }
    });
    console.log(captain);
    return captain;
};
