import { authcollection } from "../model/auth_modle.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { sendotp } from "../services/otp_service.js";
import { otpcollection } from "../model/otp_model.js";
import { usercollection } from "../model/user_model.js";



export const signup=async(req,res)=>{
    const {email,password}=req.body;
    try
    {
        const hashed=await bcrypt.hash(password,12);
      const user =  await usercollection.create({email})
        await  authcollection.create({email,password:hashed,user:user._id})
       
        res.json({status:true,message:"user registered"})

    }
    catch(err)
    {
        res.json({status:false,message:"user not  registered",err})
    }

}

export const signin=async(req,res)=>{
    const {email,password}=req.body;
    const user= await  authcollection.findOne({email});
    if(!user)
    {
         return res.json({ status: false, message: "User not found! Registere First !" })
    }
    const ismatchpassord=await bcrypt.compare(password,user.password);
    if(!ismatchpassord)
    {
        return res.json({ status: false, message: "password is incorrcet" })
    }
    const status=await sendotp(email);
    res.json(status);

}

export const verifyotp=async(req,res)=>{
    const {email,otp}=req.body;
    const record=await otpcollection.findOne({email,otp});
    if(!record)
    {
         return res.json({ status: false, message: "OTP is incorrect !" })
    }
    if(record.expiry<new Date(Date.now()))
    {
        return res.json({ status: false, message: "OTP is expired !" })
    }
    try
    {
        const user=await usercollection.findOne({email});
        const token=jwt.sign({...user},process.env.SECRET_KEY,{
            expiresIn:"1h"
        });
        res.cookie("auth_token",token,{maxAge:1000*60*60,httpOnly:true})
        await otpcollection.deleteMany({email});
        res.json({status:true,message:"otp verified & signin succesfully"});


    }
    catch(err)
    {
         res.json({status:false,message:"otp verification failed!"});

    }
}


//change pass


export const changepassword=async(req,res)=>{
    const {email,oldpass,newpass}=req.body;
    try

    {
        const user= await authcollection.findOne({email});
    if(!user)
    {
      return res.json({status:false,message:"user not found"});

    }
   const ismatch = await bcrypt.compare(oldpass,user.password)
   if(!ismatch)
   {
        return res.json({status:false,message:"old password is incorrect"});
   }

   const hashed=await bcrypt.hash(newpass,12);
 await authcollection.updateOne({email},{
    $set:
    {
        password:hashed
    }
   })
        res.json({status:true,message:"password changed successfully"});
    }
    catch(err)
    {
        res.json({status:false,message:err.message});
        
    }



}


//foreget pass

export const forgetpassword=async(req,res)=>{
    const {email}=req.body;
    try
    {
        const user=await authcollection.findOne({email});
   const status = sendotp(email);
   res.json(status);
    }

    catch(err)
    {
        res.json({status:false,message:err.message});
    }
}


export const changeforgetpass=async(req,res)=>{
    const {email,password,otp}=req.body;
  try
  {
     const record=await otpcollection.findOne({email,otp});
    if(!record)
    {
         return res.json({ status: false, message: "OTP is incorrect !" })
    }
    if(record.expiry<new Date(Date.now()))
    {
        return res.json({ status: false, message: "OTP is expired !" })
    }
      const user=await authcollection.findOne({email});
    const hashed=await bcrypt.hash(password,12);
   await authcollection.updateOne({email},{
        $set:{
            password:hashed
        }
    })
    res.json({status:true,message:"password changed successfully!"});
  }
  catch(err)
  {
    res.json({statu:false,message:err.message});
  }


}




export const signout=(req,res)=>{
   res.clearCookie("auth_token");
     res.json({ status: true, message: "Signout successfully !!" });
}
export const loginstatus=(req,res)=>{
    try
    {

        const token = req.cookies.auth_token;

        if(!token)
        {
            res.json({status:false,message:"signin first"});

        }
        const decoded=jwt.verify(token,process.env.SECRET_KEY,{expiresIn:"1h"})
            return res.json({ status: true, message: "Already Logged In", user: decoded.payload })
    }
    catch(err)
    {
            return res.json({ status:  false, message: "logged out login first!", err })

    }

}