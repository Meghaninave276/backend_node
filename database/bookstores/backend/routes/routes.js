import express from 'express'
import { addbook,getbooks,updatebook,deletebook } from '../controllers/book_controllers.js'

const router=express.Router();
router.get("/",getbooks);
router.post("/",addbook);
router.put("/:id",updatebook);
router.delete("/:id",deletebook);

export default router;
