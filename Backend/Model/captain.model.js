import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            minlength: [3, 'firstname must have at least 3 characters'],
            required: true
        },
        lastname: {
            type: String,
            minlength: [3, 'lastname must have at least 3 characters']
        }
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vechile: {
        color: {
            type: String,
            required: true,
            minlength: [3, "color must have at least three characters"]
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "plate number must be at least 3 characters long"]
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "capacity must be at least 1"]
        },
        vechileType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
});

// Instance methods
captainSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this._id }, "hbdhfshcdsbvfhgsvbdghfvhgsdv", {
        expiresIn: "24h"
    });
    return token;
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Static methods
captainSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

const Captain = mongoose.model("Captain", captainSchema);

export default Captain;
