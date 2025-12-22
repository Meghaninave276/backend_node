import express from 'express'
import { addbook,getbooks } from '../controllers/book_controllers.js'

const router=express.Router();
router.get("/",getbooks);
router.post("/",addbook);

export default router;
