import { addmovie,getmovie } from "../controllers/moviecontrollers.js";
import express from 'express'

const router= express.Router();

router.post("/",addmovie);
router.get("/",getmovie);

export default router;
