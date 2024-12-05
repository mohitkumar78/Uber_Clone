import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'first name at least three character long']
        },
        lastname: {
            type: String,
            minlength: [3, 'last name at least three character long']
        }
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'email have at list five character']
    },
    Password: {
        type: String,
        required: true,
    },
    socketid: {
        type: String
    }
})
userSchema.methods.genrateToken = function () {
    const token = jwt.sign({ id: this._id }, "hbdhfshcdsbvfhgsvbdghfvhgsdv")
    return token
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.Password)
}
userSchema.statics.hashpassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
const userModel = mongoose.model('user', userSchema);

export default userModel;