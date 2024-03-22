import mongoose from "mongoose";
import express from "express";
import User from "./models/user";

const app = express();
const port = 5000;

// const URI =
//   "mongodb+srv://GIGI-TravelGirl:GIGI-TravelGirl@gigi-travelgirlcluster.bma2zsf.mongodb.net/?retryWrites=true&w=majority&appName=GIGI-TravelGirlCluster";

const URI = "mongodb://localhost:27017/testdb";
async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB:', error.message`);
  }
}

connect();

app.get("/", async (req, res) => {
  const user = {
    username: "deol",
    fullName: "Joe Doe",
    email: "user@example.com",
    password: "password",
    gender: "male",
    dateOfBirth: "1990-01-01",
    country: "Nigeria",
    currency: "USD",
    language: "English",
    rating: 5,
  };
  // user.save();
  const bb = await User.create(user);
  console.log(bb);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
