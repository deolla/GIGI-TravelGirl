import mongoose from "mongoose";
const { Schema, model } = require("mongoose");


const attractionsSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviews: [{ 
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        text: String,
        rating: Number,
        createdAt: { type: Date, default: Date.now }
    }],
    imageUrl: { type: String },
    tags: [{ type: String }],
});
// Create an index for searching attractions.
attractionsSchema.index({ rating: 1 });

const Attraction = model("Attraction", attractionsSchema);

export default Attraction;
