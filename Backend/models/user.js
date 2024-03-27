import mongoose from "mongoose";
import crypto from 'crypto';
import bcrypt from 'bcrypt';

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
    }],
    passwordChangedAt: { type: Date},
    dateJoined: { type: Date, default: Date.now },
    passwordResetToken: { type: String },
    passwordResetTokenExpires: { type: Date }
});

// Add indexes
userSchema.index({ username: 1, email: 1 });

userSchema.methods.createPasswordResetToken = function(){
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetToken = hashedToken;
    this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;
    console.log('Password reset token created: ', resetToken, this.passwordResetToken);
    return resetToken;
}



const User = model("User", userSchema);



export default User;
