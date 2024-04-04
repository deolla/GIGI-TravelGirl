// Import necessary modules and middleware
import express from "express";
import bodyParser from "body-parser";
import sendFlightBookingConfirmationMessage from "../middleware/emailFlight.js";
import sendHotelBookingConfirmationMessage from "../middleware/emailHotel.js";
// import sendFlightBookingConfirmationMessage from '../middleware/emailbooking.js'
import uuid4 from "uuid4";
import stripe from "stripe";
// import BookHotel from "../models/bookhotel.js";
import User from "../models/user.js";
import authenticate from "../middleware/authenticate.js";
import BookHotel from "../models/bookhotel.js";
import BookFlight from "../models/bookflight.js";
import dotenv from "dotenv";
dotenv.config();
// import User from "../models/user.js";
const stripeApiKey = process.env.STRIPE_SECRET_KEY;
const stripeInstance = stripe(stripeApiKey);
const router = express.Router();
// Use body-parser middleware to parse JSON bodies
router.use(bodyParser.json());

// Route for handling hotel Booking confirmation/notifications.
router.post("/hotel", authenticate, async (req, res) => {
  // Extract data from the request body
  const { checkinDate, checkoutDate, totalPrice, token, placeName } = req.body;
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

  try {
    const customer = await stripeInstance.customers.create({
      email: email,
      source: token.id,
    });
    const payment = await stripeInstance.charges.create(
      {
        amount: totalPrice * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: email,
      },
      {
        idempotencyKey: uuid4(),
      }
    );

    // if payment is successful, save the booking details to the database
    if (payment) {
      try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const name = user.fullName;
        const newHotelBooking = new BookHotel({
          email,
          userId,
          checkinDate,
          checkoutDate,
          totalPrice,
        });
        await newHotelBooking.save();
        await sendHotelBookingConfirmationMessage({
          name,
          email,
          userId,
          checkinDate,
          checkoutDate,
          totalPrice,
          placeName,
        });
        return res.status(200).json({ message: "Hotel booked successfully" });
      } catch (error) {
        console.error("Error saving hotel booking: ", error);
        return res
          .status(500)
          .json({ message: "An error occurred while booking the hotel" });
      }
    }
    res.send("Payment successful");
  } catch (error) {
    console.error("Error processing payment: ", error);
    return res
      .status(500)
      .json({ message: "An error occurred while processing payment" });
  }
});

// Booking a flight
router.post("/flight", authenticate, async (req, res) => {
  // Extract data from the request body
  const { to, from, departureTime, arrivalTime, price, token } = req.body;
  const { email, userId } = req.userData;
  if (
    !email ||
    !userId ||
    !departureTime ||
    !arrivalTime ||
    !price ||
    !token ||
    !to ||
    !from
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const customer = await stripeInstance.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripeInstance.charges.create(
      {
        amount: price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuid4(),
      }
    );

    if (payment) {
      try {
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        const name = user.fullName;
        const newFlightBooking = new BookFlight({
          userId,
          to,
          from,
          departureTime,
          arrivalTime,
          price,
        });
        await newFlightBooking.save();
        await sendFlightBookingConfirmationMessage({
          name,
          email,
          userId,
          to,
          from,
          departureTime,
          arrivalTime,
          price,
        });
        return res.status(200).json({ message: "Flight booked successfully" });
      } catch (error) {
        console.error("Error saving flight booking: ", error);
        return res
          .status(500)
          .json({ message: "An error occurred while booking the flight" });
      }
    }
  } catch (error) {
    console.error("Error processing payment: ", error);
    return res
      .status(500)
      .json({ message: "An error occurred while processing payment" });
  }
});
export default router;
