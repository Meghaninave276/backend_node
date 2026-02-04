import mongoose from 'mongoose'
const userschema=new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    name:String,
    phone:String,
    address:String,
    education:String,
    age:Number,
    exp:String,
    image:String,
    role:String


    
},{timestamps:true})

export const usercollection=mongoose.model("users",userschema);