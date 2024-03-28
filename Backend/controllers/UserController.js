// This is UserContoller.
import User from "../models/user.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

const currentUser = async (req, res, next) => {
  try {
    // console.log(req.userData);
    const user = await User.findById(req.userData.userId);
    // const user = await User.find();
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (updateUser) {
      res.status(200).json(updateUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(204).json({ success: true });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    country: req.body.country,
    currency: req.body.currency,
    language: req.body.language,
    preferences: req.body.preferences,
    bookings: req.body.bookings,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export default {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
  currentUser,
};
