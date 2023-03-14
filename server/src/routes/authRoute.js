/** @format */

//router object
import express from "express";
import { loginController, registerController } from "../controllers/authController.js";

const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test");

export default router;
