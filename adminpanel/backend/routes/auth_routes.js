import express from 'express'
import { changeforgetpass, changepassword, forgetpassword, loginstatus, signin, signout, signup, verifyotp } from '../controller/auth_controller.js';
const auth_routes=express.Router();
auth_routes.post("/signup",signup)
auth_routes.post("/signin",signin)
auth_routes.post("/verifyotp",verifyotp)
auth_routes.post("/changepass",changepassword)
auth_routes.post("/forgetpass",forgetpassword)
auth_routes.post("/changeforgetpass",changeforgetpass)

auth_routes.get("/logout",signout)
auth_routes.get("/loginstatus",loginstatus)
export default auth_routes;