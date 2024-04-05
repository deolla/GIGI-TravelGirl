import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookFlightSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  to: { type: String, required: true },
  from: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
  // departureAirport: { type: String, required: true },
  // arrivalAirport: { type: String, required: true }
});

const BookFlight = model("BookFlight", bookFlightSchema);

export default BookFlight;
