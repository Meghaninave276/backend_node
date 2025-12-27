import express from 'express'
import { connectdb } from './config/db.js'
import router from './routes/routes.js'
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
export const uploadpath=path.join(__dirname,"uploads");

connectdb();

app.use("/movie",router);
app.use("/uploads", express.static(uploadpath));


app.listen(4563,()=>{
    console.log("server started");

})