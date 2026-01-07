
import { authmiddleware } from '../middleware/authmiddleware.js'
import { signup,login, home } from '../controllers/authcontrollers.js';

import express from 'express'
const router=express.Router();
router.post("/signup",signup);
router.post("/login",login);
router.get("/home",authmiddleware,home);
export default router;