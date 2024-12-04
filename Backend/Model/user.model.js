import mongoose from "mongoose";

const userSchema  =new  mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name at least three character long']
        },
        lastname:{
            type:String,
            minlength:[3,'last name at least three character long']
        }
    }
})