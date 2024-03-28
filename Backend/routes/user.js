// This is a route to handle user related requests.
import express from "express";
import UserController from "../controllers/UserController.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

// Get all users
router.get("/", authenticate, UserController.getUsers);
router.get("/:id", authenticate, UserController.getUser);
router.put("/:id", authenticate, UserController.updateUser);
router.delete("/:id", authenticate, UserController.deleteUser);
router.post("/", authenticate, UserController.createUser);

export default router;
