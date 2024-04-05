import mongoose from "mongoose";
const { Schema, model } = mongoose;

const flightSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  originCode: { type: String, required: true },
  destinationCode: { type: String },
  depature: [{ type: Date, required: true }],
  arrival: [{ type: Date, required: true }],
  price: { type: Number, required: true },
  //   events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});
flightSchema.index({ startDate: 1 });

const Flight = model("Flight", flightSchema);

export default Flight;
