import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

// Protect user creation route with Clerk middleware
router.post("/",  userController.addUser);
router.get("/",  userController.getUserById);

export default router;
