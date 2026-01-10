import express from 'express'
import router from './routes/otp_routes.js'
import { connectdb } from './config/db.js'

const app=express();
app.use(express.json());
connectdb();
app.use("/",router);
app.listen(4563,()=>{
    console.log("server started");
})