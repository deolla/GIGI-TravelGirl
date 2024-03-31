import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const bookHotelSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    email: { type: String, required: true },
    checkinDate: { type: Date, required: true },
    checkoutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true } 
});

const BookHotel = model("BookHotel", bookHotelSchema);

export default BookHotel;
