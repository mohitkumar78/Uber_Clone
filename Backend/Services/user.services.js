import userModel from "../Model/user.model.js";

export const createUser = async ({ firstname, lastname, email, Password }) => {
    console.log(firstname, lastname, email, Password)
    if (!firstname || !email || !Password) {
        throw new Error("All field are required");
    }
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        Password
    })
    return user;

}