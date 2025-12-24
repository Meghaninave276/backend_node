import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import path from "path"
import { stringify } from 'querystring'
import {fileURLToPath} from 'url'





const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename);
const uploadpath=path.join(__dirname, "uploads");


const app=express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/school").then(()=>console.log("mongodb connected")).catch(err=>console.log(err));


const studentschema= new mongoose.Schema({
    name:String,
    age:Number,
    course:String,
   profile:String


},{timestamps:true});


const student=mongoose.model("students",studentschema);

const storage=multer.storage({
    destination:(req,file,cb)=>{
        cb(null,uploadpath);

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))

    }
})
const upload=multer({storage});

