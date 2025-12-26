import express from 'express'
import { connectdb } from './config/db.js'
import router from './routes/routes.js'
import path from 'path'
import {fileURLToPath} from 'url'

const app=express();
app.use(express.json());

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

connectdb();

app.use("/movie",router);

app.listen(4563,()=>{
    console.log("server started");

})