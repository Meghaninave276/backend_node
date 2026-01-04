import { Auth } from "../models/authmodel.js";
import { homepath, signinpath, signuppath } from "../server.js";
export const signup=async(req,res)=>{
    try
    {
     const result =  await Auth.create(req.body);
     res.json({message:"user signup successfully!",result})
    }
    catch(err)
    {
        res.json({message:"user not signup !",err})
    }

}
export const signin=async(req,res)=>{
    try
    {
        const {email,password}=req.body;
       const user = await Auth.findOne({email});
        if(!user)
        {
           return res.json({message:"user not found"})

        }
        const ismatch =   password==user.password;
        if(!ismatch)
        {
             return res.json({message:"password is incorrect"})

        }
       res.cookie("auth_token", true, {
  maxAge: 24 * 60 * 60 * 1000, 
  httpOnly: true
});

        res.json({message:"user signin successfully"});
    }
    catch(err)
    {
        res.json({message:"user not signin",err});

    }

}

export const home=async(req,res)=>{
//    const users = await Auth.find();
//    res.json(users);
res.sendFile(homepath);

}
export const signuppage=async(req,res)=>{
//    const users = await Auth.find();
//    res.json(users);
res.sendFile(signuppath);

}
export const signinpage=async(req,res)=>{
//    const users = await Auth.find();
//    res.json(users);
res.sendFile(signinpath);

}