export const isauthenticated=(req,res,next)=>{
    if(req.isauthenticated())
    {
        return next();

    }
    res.json({message:"unauthorized!please login first"});

}