import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const bookFlightSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    flightNumber: { type: String, required: true },
    departureDate: { type: Date, required: true },
    seatClass: { type: String, required: true },
    // departureAirport: { type: String, required: true },
    // arrivalAirport: { type: String, required: true }
});

const BookFlight = model("BookFlight", bookFlightSchema);

export default BookFlight;