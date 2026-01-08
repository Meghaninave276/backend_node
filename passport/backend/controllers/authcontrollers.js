import bcrypt from 'bcrypt'
import { users } from '../models/authmodel.js'
export const signup=async(req,res)=>{
   try
   {
     const {email,password}=req.body;
    const hashedpassword=await bcrypt.hash(password,10);
   await users.create({
        email,
        password:hashedpassword

    })
    res.json({message:"user resgistered"});
   }
   catch(err)
   {
    res.json({message:"user not registered"});
   }
}
export const signin=(req,res)=>{
    res.json({message:"user login",user:req.user});
    
}
export const signout=(req,res)=>{
    req.logout=(()=>{
        res.json({message:"user logout"});
    })
}
export const home=(req,res)=>{
    res.json({message:"home accessed",user:req.user});
    
}