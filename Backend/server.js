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
    console.log(`Error connecting to MongoDB:', error.message`);
  }
}

connect();

app.get('/', (req, res) => {
  const user = new User({
    username: 'deol',
    fullName: 'Joe Doe',
    email: 'user@example.com',
    password: 'password',
    gender: 'male',
    dateOfBirth: '1990-01-01',
    country: 'Nigeria',
    currency: 'USD',
    language: 'English',
    rating: 5,
  });
  user.save();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;