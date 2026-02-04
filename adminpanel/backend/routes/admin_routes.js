import express from 'express'
import {  getcurrentuser, getuser, updateuser } from '../controller/admin_controller.js';

const router=express.Router();

router.get("/getuser",getuser);
router.put("/updateuser",updateuser);
router.get("/getcurrentuser",getcurrentuser)

export default router;