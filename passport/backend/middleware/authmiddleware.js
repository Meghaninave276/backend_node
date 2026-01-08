export const isAuthenticated=(req,res,next)=>{
    if(req.isAuthenticated())
    {
        return next();

    }
    res.json({message:"unauthorized!please login first"});

}