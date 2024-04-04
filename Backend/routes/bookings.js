// Import necessary modules and middleware
import express from "express";
import bodyParser from "body-parser";
import sendFlightBookingConfirmationMessage from "../middleware/emailFlight.js";
import sendHotelBookingConfirmationMessage from "../middleware/emailHotel.js";
// import sendFlightBookingConfirmationMessage from '../middleware/emailbooking.js'
import uuid4 from "uuid4";
import stripe from "stripe";
import BookHotel from "../models/bookhotel.js";
import User from "../models/user.js";
import authenticate from "../middleware/authenticate.js";
import BookHotel from "../models/bookhotel.js";
import User from "../models/user.js";
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();
// Use body-parser middleware to parse JSON bodies
router.use(bodyParser.json());

// Route for handling hotel Booking confirmation/notifications.
router.post("/hotel", authenticate, async (req, res) => {
  // Extract data from the request body
  const { checkinDate, checkoutDate, totalPrice, placeName } = req.body;
  const { email, userId } = req.userData;

  if (
    !email ||
    !userId ||
    !checkinDate ||
    !checkoutDate ||
    !totalPrice ||
    !placeName
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const user = await User.findById(userId);
  try {
    await sendHotelBookingConfirmationMessage({
      name: user.fullName,
      email,
      userId,
      checkinDate,
      checkoutDate,
      totalPrice,
      placeName,
    });
    const hd = { checkinDate, checkoutDate, totalPrice, status: "success" };
    // const user = await User.findById(userId);
    // user.bookings.push(hd);
    const updated = await User.findByIdAndUpdate(
      userId,
      { $push: { bookings: hd } },
      { new: true }
    );

    return res.status(200).json({ message: "Hotel booked successfully" });
  } catch (error) {
    console.error("Error sending notification email: ", error);
    return res
      .status(500)
      .json({ message: "An error occurred while booking the hotel" });
  }
});

// Booking a flight
router.post("/flight", authenticate, async (req, res) => {
  // Extract data from the request body
  const { from, to, departureTime, arrivalTime, price } = req.body;
  const { email, userId } = req.userData;
  if (!email || !from || !to || !departureTime || !arrivalTime || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const user = await User.findById(userId);

  try {
    await sendFlightBookingConfirmationMessage({
      name: user.fullName,
      email,
      from,
      to,
      departureTime,
      arrivalTime,
      price,
    });

    const hd = { from, to, departureTime, arrivalTime, price };

    const updated = await User.findByIdAndUpdate(
      userId,
      { $push: { flights: hd } },
      { new: true }
    );
    return res.status(200).json({ message: "Flight booked successfully" });
  } catch (error) {
    console.error("Error sending travel notification email: ", error);
    return res
      .status(500)
      .json({ message: "An error occurred while booking the flight" });
  }
});

// Export the router
export default router;
