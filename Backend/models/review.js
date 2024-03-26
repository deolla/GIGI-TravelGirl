import mongoose from "mongoose";
const { Schema, model } = mongoose;

const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who wrote the review
    destination: { type: String, required: true }, // Destination being reviewed
    rating: { type: Number, required: true }, // Rating given by the user
    comment: { type: String }, // Optional comment by the user
    datePosted: { type: Date, default: Date.now }, // Date the review was posted
});

const Review = model("Review", reviewSchema);

export default Review;
