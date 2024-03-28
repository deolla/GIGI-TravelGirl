import express from "express";
import authenticate from "../middleware/authenticate.js";
import FlightController from "../controllers/FlightController.js";

const router = express.Router();

router.post("/", authenticate, FlightController.getFlights);

export default router;
