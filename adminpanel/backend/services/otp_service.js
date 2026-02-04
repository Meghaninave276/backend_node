import { otpcollection } from "../model/otp_model.js";
import dotenv from "dotenv"

import nodemailer from "nodemailer"
dotenv.config();
 const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
 })
export const sendotp=async(email)=>{
    const otp=Math.floor(100000+Math.random()*90000);
    const expiry=new Date(Date.now()+1000*60*2);
   try
   {
     await otpcollection.create({email,otp,expiry});
    await transport.sendMail({
        from:`admin panel <${process.env.EMAIL}>`,
        to:email,
        subject:"otp verification",
        text:`your otp is ${otp} will expire in 3 minutes`   
    });
    return {status:true,message:"otp sent succesfully"}
   }
    catch(err)
    {
          return {status:false,message:err.message}
    }

}