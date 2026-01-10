import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();
const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS

    }
})
export const sendotpmail=async(email,otp)=>{
 try

 {
     await  transport.sendMail({
        from:`otp services <${process.env.EMAIL}>`,
        to:email,
        subject:"otp verification",
        text:`your otp is ${otp} will be expired in 2 minutes!`
    })
    return true;

 }
 catch(err)
 {
    return false;

 }

}