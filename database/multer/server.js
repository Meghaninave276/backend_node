
import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import path from "path"
import fs from "fs"



import {fileURLToPath} from 'url'
import { Movie } from '../../movie_management_system/backend/models/movie'





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
   image_path:String


},{timestamps:true});


const Student = mongoose.model("students", studentschema);


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadpath);

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))

    }
})
const upload=multer({storage});


app.post("/",upload.single("image"),async(req,res)=>{
    const student =  new Student({
            name:"megha",
            age:19,
            course:"bca",
            image_path:"http://localhost:7412"+"uploads"+req.file.filename
        })
        const result= await student.save();
        res.json({msg:"student added",result})
   

})

app.get("/",async(req,res)=>{
    const student=await Student.find();
    res.json(student);


})

app.delete("/",async(req,res)=>{
    try
    {
        const movie = await Movie.findById(req.params.id);
        if(fs.existsSync())

    }
    catch(err)
    {

    }

})

app.listen(7412,()=>{
    console.log("server started");
})