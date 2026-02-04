import express from "express"
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectdb } from "./config/db.js";
import auth_routes from "./routes/auth_routes.js";
import admin_routes from "./routes/admin_routes.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
connectdb()
app.use("/api/auth",auth_routes);
app.use("/api/admin",admin_routes);
app.listen(process.env.PORT,()=>{
    console.log("server started");
})
