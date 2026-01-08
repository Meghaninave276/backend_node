import mongoose from 'mongoose'
const authschema=new mongoose.Schema({
    email:String,
    password:String
},{timestamps:true});
export const users=mongoose.model("users",authschema);