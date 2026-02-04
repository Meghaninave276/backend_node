import mongoose from 'mongoose'
export const authschema = new mongoose.Schema({
    email:{type:String, unique:true, required:true},
    password:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }

},{timestamps:true});
export const authcollection=mongoose.model("auth",authschema);