import mongoose from 'mongoose'
const authschema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
},{timestamps:true});
export const authmodel=mongoose.model("jwtauths",authschema);