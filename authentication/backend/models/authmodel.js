import mongoose from 'mongoose'
const authschema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
},{timestamps:true})
export const Auth=mongoose.model("auth",authschema);