import express from 'express'
import cookieParser from 'cookie-parser'
import { connectdb } from './config/db.js'
import router from './routes/routes.js'
import {fileURLToPath} from 'url'
import path from 'path'


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
export const homepath=path.join(__dirname,"static","index.html");
export const signinpath=path.join(__dirname,"static","signin.html");
export const signuppath=path.join(__dirname,"static","signup.html");

const app=express();
connectdb();
app.use(express.json());
app.use(cookieParser());
app.use("/",router);
app.listen(4569,()=>{
    console.log("server started");
})

