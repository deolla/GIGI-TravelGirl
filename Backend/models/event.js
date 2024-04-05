// This file contains the schema for the event model.
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  organizer: { type: String, required: true },
  image: { type: String },
  tags: [{ type: String }],
});
// Create an Index for searching events.
eventSchema.index({ startDate: 1 });

const Event = model("Event", eventSchema);

export default Event;
