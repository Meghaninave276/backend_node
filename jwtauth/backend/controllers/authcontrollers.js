import { authmodel } from '../models/authmodel.js';
import { homepath } from '../server.js';
import bcrypt from 'bcrypt'
export const signup=async(req,res)=>{
    const {email,password}=req.body;
    const hashedpassword=await bcrypt.hash(password,12);
    const user=new authmodel({email,password:hashedpassword});
    await user.save();
    res.json({message:"User registered"});

    

}

export const login=async(req,res)=>{
    try
    {
        const {email,password}=req.body;
    const user=await authmodel.findOne({email});
    if(!user)
    {
       return res.json({message:"User not found"});

    }

    const ismatch=await bcrypt.compare(password,user.password);
    if(!ismatch)
    {
        return res.json({message:"password incorrect"});
    }
    const token=jwt.sign(
        {userId: user._id, email: user.email},
        "345u67@#$%^&",
         { expiresIn: "1h" }
    )
    return  res.json({ message: "Login success", token });

    }
    catch(err)
    {
        res.json({message:"user not login"});

    }
}
export const home=(req,res)=>{
    res.sendFile(homepath);


}

