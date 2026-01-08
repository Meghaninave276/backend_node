import mongoose from 'mongoose'
export const conncetdb=()=>{
   try
   {
     mongoose.connect("mongodb://localhost:27017/passport");
    console.log("mongodb connected");
   }
   catch(err)
   {
     console.log("mongodb not connected",err);
   }
}