import Captain from "../Model/captain.model.js";


export const createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vechileType }) => {

    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechileType) {
        throw new Error("All field are required")
    }

    await Captain.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,


        vechile: {
            color,
            plate,
            capacity,
            vechileType
        },
    })
}