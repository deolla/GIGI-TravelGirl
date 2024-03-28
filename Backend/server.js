import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import AuthRoute from "./routes/auth.js";
import LocationRoute from "./routes/location.js";
import CurrentRoute from "./routes/current.js";
import FlightRoute from "./routes/Flight.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();
const port = 5000;


async function connect() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB:', ${error.message}`);
  }
}

mongoose.connection.on("error", (error) => {
  console.log(`Error connecting to MongoDB:', ${error.message}`);
});

// middleware routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use("/user", userRoute);
app.use("/location", LocationRoute);
app.use("/api", AuthRoute);
app.use("/flight", FlightRoute);
app.use("/current", CurrentRoute);

// Listen to port 5000
app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});

export default app;
