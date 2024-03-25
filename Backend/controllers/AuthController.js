import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                username: req.body.username,
                fullName: req.body.fullName,
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created successfully',
                        user: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'Error creating user',
                        error: err
                    });
                });
            }
        });
    }

    const login = (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
    
        User.findOne({ $or: [{ email: email }, { username: email }] })
            .then(user => {
                if (!user) {
                    return res.status(403).json({
                        message: 'User not found, please sign up'
                    });
                }
    
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        return res.status(500).json({
                            message: 'Authentication failed',
                            error: err
                        });
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            userId: user._id
                        }, process.env.JWT_KEY, {
                            expiresIn: '36h'
                        });
                        return res.status(200).json({
                            message: 'Authentication successful',
                            token: token,
                            new_token: new_token
                        });
                    } else {
                        res.status(401).json({
                            message: 'Authentication failed! Please try again'
                        });
                    }
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: 'An error occurred',
                    error: err
                });
            });
    };    

export default { register, login };
