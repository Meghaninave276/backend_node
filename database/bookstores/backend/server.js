import express from 'express'
import { connectdb } from './config/db.js'
import router from './routes/routes.js'
const app=express();
app.use(express.json());
connectdb();

app.use("/api",router);

app.listen(4785,()=>{
    console.log("server started");
})
