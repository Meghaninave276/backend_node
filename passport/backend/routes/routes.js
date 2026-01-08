import passport from "passport";
import express from 'express'
import { signup,signin,signout,home } from "../controllers/authcontrollers.js";
import { isAuthenticated } from "../middleware/authmiddleware.js";
const router=express.Router();
router.post("/signup",signup);
router.post("/signin",passport.authenticate("local"),signin);
router.get("/home",isAuthenticated,home);
router.get("/signout",signout);
export default router;


