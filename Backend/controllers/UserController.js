// This is UserContoller.
import User from '../models/user.js';


const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);
    } catch (err) {
        next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({"success": true});
    } catch (err) {
        next(err);
    }
}

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
}

export default {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser
}
