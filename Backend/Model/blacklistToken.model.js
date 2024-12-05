import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400, // 1 day (in seconds)
    },
});

// Ensure `createdAt` is indexed for expiration
blacklistTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const Blacklist = mongoose.model("Blacklist", blacklistTokenSchema);
export default Blacklist;
