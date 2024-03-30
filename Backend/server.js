// server.js

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
import session from "express-session";
import passport from 'passport';
import GoogleRoute from './routes/googleauth.js'
import MongoStore from 'connect-mongo';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

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

// Intialize Passport and Passport Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: process.env.NODE_ENV === "production" ? { secure: true } : { secure: false }, // eslint-disable-line
  store: MongoStore.create({ mongoUrl: process.env.URI})
}));
app.use(passport.initialize());
app.use(passport.session());

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// Route setup
app.use("/user", userRoute);
app.use("/location", LocationRoute);
app.use("/api", AuthRoute);
app.use("/flight", FlightRoute);
app.use("/current", CurrentRoute);

// google routes
app.use("/auth", GoogleRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listen to port
app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});

export default app;
