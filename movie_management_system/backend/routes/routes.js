import { addmovie,getmovie,getmoviebyId,searchMovie } from "../controllers/moviecontrollers.js";
import express from 'express'

const router= express.Router();

router.post("/",addmovie);
router.get("/",getmovie);
router.get("/:id",getmoviebyId);
router.get("/search",searchMovie);


export default router;
