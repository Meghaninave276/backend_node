import jwt from 'jsonwebtoken'
export const authmiddleware=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }
  try
  {
    const decoded=jwt.verify(token,"345u67@#$%^&");
    req.user=decoded;
    next();

  }
  catch(err)
  {

     res.status(401).json({ message: "Invalid token",err });
  }


}