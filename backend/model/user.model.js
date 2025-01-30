import mongoose, { Mongoose } from "mongoose";

const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,
    },

    // email: {
    //     type: String,
    // },  

    // password: {
    //     type: String,
    // },

    imageUrl:{
      type:String,
    },

    clerkId:{
        type:String,
    },


},{timestamps:true})

export const User = mongoose.model('User',UserSchema);