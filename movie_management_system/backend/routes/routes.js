import { addmovie,getmovie } from "../controllers/moviecontrollers.js";
import express from 'express'
import multer from 'multer'
import path from "path"
import { uploadpath } from "../server.js";
const router= express.Router();




const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadpath);

    },
   filename:(req,file,cb)=>{
          cb(null,"movie-img-"+Date.now()+path.extname(file.originalname));
  
      }
    
})

 export const upload=multer({storage});

 router.post("/",upload.single("Movie_Poster"),addmovie);
router.get("/",getmovie);
// router.get("/:id",getmoviebyId);
// router.get("/search",searchMovie);


export default router;
