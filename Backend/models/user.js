import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const userSchema = new Schema ({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String},
    country: { type: String},
    currency: { type: String},
    language: { type: String, },
    preferences: {
        favoriteDestinations: [{ type: String }],
        interests: [{ type: String }]
    },
    bookings: [{
        bookingId: { type: Types.ObjectId },
        destination: { type: String },
        checkInDate: { type: Date },
        checkOutDate: { type: Date },
        numGuests: { type: Number },
        totalPrice: { type: Number },
        status: { type: String } // e.g., confirmed, pending, canceled
    }]
});

// Add indexes
userSchema.index({ username: 1, email: 1 });

const User = model("User", userSchema);

export default User;
