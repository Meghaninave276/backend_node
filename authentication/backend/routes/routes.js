import { signup,signin, home, signinpage, signuppage } from "../controllers/authcontroller.js";
import express from 'express'
import { isAuthenticated } from "../middleware/authmiddleware.js";
const router=express.Router();
router.post("/api/signup",signup);

router.post("/api/signin",signin);



router.get("/signup",signuppage);
router.get("/signin",signinpage);
router.get("/home",isAuthenticated,home);

export default router;