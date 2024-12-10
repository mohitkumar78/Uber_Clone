import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import e from 'express';

const CaptainSchema = new mongoose.Schema({
    fullname: {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true }
    },
    email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    socketId: {
        type: String
    },
    vechile: {
        color: { type: String, required: true },
        plate: { type: String, required: true },
        capacity: { type: Number, required: true },
        vechileType: { type: String, required: true, enum: ['car', 'motorcycle', 'auto'] }
    },
    location: {
        ltd: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
});

// Static method for hashing passwords
CaptainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

// Instance method for generating tokens
CaptainSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, 'secret_key', { expiresIn: '24h' });
};

const Captain = mongoose.model('Captain', CaptainSchema);
export default Captain;
