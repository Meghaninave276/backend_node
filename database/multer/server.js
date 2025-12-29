
import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import path from "path"
import fs from "fs"



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
            name:req.body.name,
            age:req.body.age,
            course:req.body.course,
            image_path:"http://localhost:7412"+"uploads"+req.file.filename
        })
        const result= await student.save();
        res.json({msg:"student added",result})
   

})

app.get("/",async(req,res)=>{
    const student=await Student.find();
    res.json(student);


})

app.delete("/:id",async(req,res)=>{
    try
    {
        const student = await Student.findById(req.params.id);
        const deletepath=path.join(__dirname,student.image_path)
        if(fs.existsSync(deletepath))
            {
                fs.unlinkSync(deletepath);

            } 
            await Student.findByIdAndDelete(req.params.id);
            res.json({ message: "student deleted" });

    }
    catch(err)
    {
        res.status(500).json({message:"student not deleted",err});
    }

})
app.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        if (req.file) {
            const deletePath = path.join(__dirname, student.image_path);

            if (fs.existsSync(deletePath)) {
                fs.unlinkSync(deletePath);
            }

            student.image_path = "/uploads/" + req.file.filename;
        }

        student.name = req.body.name;
        student.age = req.body.age;
        student.course = req.body.course;

        await student.save();

        res.json({ message: "student updated", student });

    } catch (err) {
        res.status(500).json({ message: "student not updated", err });
    }
});


app.listen(7412,()=>{
    console.log("server started");
})