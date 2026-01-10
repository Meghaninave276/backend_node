import express from 'express'
import { sendotp,verifyotp } from '../controllers/otp_controllers.js';
const router=express.Router();
router.post("/send",sendotp);
router.post("/verify",verifyotp);
export default router;