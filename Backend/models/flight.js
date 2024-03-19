// This file contains the schema for the flight model.
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const flightSchema = new Schema({
    airline: { type: String, required: true },
    flightNumber: { type: String, required: true },
    departureAirp
})

const Flight = model("Flight", flightSchema);

export default Flight;
