import mongoose from "mongoose";
const { Schema, model } = mongoose;

const locationSchema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String },
    attractions: [{ type: Schema.Types.ObjectId, ref: 'Attraction' }],
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    imageUrl: { type: String },
});

// Creating an index on name for searching locations
locationSchema.index({ name: 'text' });

const Location = model("Location", locationSchema);

export default Location;
