import express from 'express'
import {fileURLToPath} from "url"
import path from 'path'
import router from './routes/routes.js';
import {connectdb} from "../backend/config/db.js"


const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
 export const homepath=path.join(__dirname,"index.html");
 const app=express();
 connectdb();
 app.use(express.json());
 app.use("/",router);
 app.listen(7485,()=>{
    console.log("server started");
 })




