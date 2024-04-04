import express from "express";
import authenticate from "../middleware/authenticate.js";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.get("/", authenticate, UserController.currentUser);

export default router;
