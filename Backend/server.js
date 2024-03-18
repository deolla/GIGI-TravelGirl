import mongoose from "mongoose";
import express from "express";

const app = express();
const port = 5000;

const URI = 'mongodb+srv://GIGI-TravelGirl:GIGI-TravelGirl@gigi-travelgirlcluster.bma2zsf.mongodb.net/?retryWrites=true&w=majority&appName=GIGI-TravelGirlCluster'

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});