// This is a route to handle user related requests.
import app from '../server';
import User from '../models/user';
import { getUser } from '../controllers/UserController';

const router = app.Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Route to get a specific user by ID
router.get('/users/:id', getUser, (req, res) => {
    res.json(res.user);
});


// Route to create a new user
router.post('/users', async (req, res) => {
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
        bookings: req.body.bookings
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Route to update a user by ID
router.patch('/users/:id', getUser, async (req, res) => {
    if (req.body.username != null) {
        res.user.username = req.body.username;
    }
    if (req.body.fullName != null) {
        res.user.fullName = req.body.fullName;
    }
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }
    if (req.body.gender != null) {
        res.user.gender = req.body.gender;
    }
    if (req.body.country != null) {
        res.user.country = req.body.country;
    }
    if (req.body.currency != null) {
        res.user.currency = req.body.currency;
    }
    if (req.body.language != null) {
        res.user.language = req.body.language;
    }
    if (req.body.preferences != null) {
        res.user.preferences = req.body.preferences;
    }
    if (req.body.bookings != null) {
        res.user.bookings = req.body.bookings;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update user
router.put('/users/:id', getUser, async (req, res) => {
    try {
        // Update the entire resource with the provided representation
        res.user.username = req.body.username;
        res.user.fullName = req.body.fullName;
        res.user.email = req.body.email;
        res.user.password = req.body.password;
        res.user.gender = req.body.gender;
        res.user.country = req.body.country;
        res.user.currency = req.body.currency;
        res.user.language = req.body.language;
        res.user.preferences = req.body.preferences;
        res.user.bookings = req.body.bookings;
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Route to delete a user by ID
router.delete('/users/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({message: 'User deleted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


export default router;
