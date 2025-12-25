import mongoose from 'mongoose'
export const connectdb=async()=>{
 try
 {
    await mongoose.connect("mongodb://localhost:27017/movies");
    console.log("mongodb connected");

 }
 catch(err)
 {
    console.log(err);

 }

}