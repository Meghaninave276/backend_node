import express from "express"
import session from 'express-session'
import passport from 'passport'
import cookieParser from "cookie-parser"
import Mongostore from 'connect-mongo'
import { conncetdb } from "./config/db.js"
import "./config/passport.js";
import router from "./routes/routes.js"

const app=express();
app.use(express.json());
app.use(cookieParser());
conncetdb();

app.use(session({
    secret:"secret-key-181920",
    resave:false,
    saveUninitialized:false,
    store: Mongostore.create({
    mongoUrl: "mongodb://localhost:27017/passport",
}),

    cookie:{
        maxAge:24*60*60*1000
    }
}))
app.use(passport.initialize());
app.use(passport.session())
app.use("/",router);
app.listen(7485,()=>{
    console.log("server started");

})







