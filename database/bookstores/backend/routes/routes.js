import express from 'express'
import { addbook,getbooks } from '../controllers/book_controllers'

const router=express.Router();
router.get("/",addbook);
router.post("/",getbooks);

export default router;
