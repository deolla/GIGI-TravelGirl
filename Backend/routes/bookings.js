// Import necessary modules and middleware
import express from 'express';
import bodyParser from 'body-parser';
import sendHotelBookingConfirmationMessage from '../middleware/emailbooking.js'
import sendFlightBookingConfirmationMessage from '../middleware/emailbooking.js'



const router = express.Router();
// Use body-parser middleware to parse JSON bodies
router.use(bodyParser.json());

// Route for handling hotel Booking confirmation/notifications.
router.post('/hotel', async (req, res) => {
    // Extract data from the request body
    const { email, userId, checkinDate, checkoutDate, totalPrice } = req.body;

    if (!email || !userId || !checkinDate || !checkoutDate || !totalPrice) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        await sendHotelBookingConfirmationMessage({ email, userId, checkinDate, checkoutDate, totalPrice });
        return res.status(200).json({ message: 'Hotel booked successfully' });
    } catch (error) {
        console.error('Error sending notification email: ', error);
        return res.status(500).json({ message: 'An error occurred while booking the hotel' });
    }
});

// Booking a flight
router.post('/flight', async (req, res) => {
    // Extract data from the request body
    const { email, userId, flightNumber, departureDate, seatDate } = req.body;

    if (email || !userId || !flightNumber || !departureDate || !seatDate) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        await sendFlightBookingConfirmationMessage({ email, userId, flightNumber, departureDate, seatDate });
        return res.status(200).json({ message: 'Flight booked successfully' });
    } catch (error) {
        console.error('Error sending travel notification email: ', error);
        return res.status(500).json({ message: 'An error occurred while booking the flight' });
    }
});

// Export the router
export default router;