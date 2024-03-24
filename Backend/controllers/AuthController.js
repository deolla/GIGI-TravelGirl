import express from 'express';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';


const register = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                fullName: req.body.fullName,
                gender: req.body.gender,
                country: req.body.country,
                currency: req.body.currency,
                language: req.body.language,
                password: hashedPass
            });
            user.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'User created'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    }
)};


const login = (req, res, next) => {
    const email = req.params.email
    const password = req.params.password

    if (!email || !password) {
        return res.status(400).json({
            message: 'Invalid request'
        });
    }
        

    User.findOne({ email: email, password: password }, (err, user) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id
                    }, process.env.JWT_KEY, {
                        expiresIn: '1h'
                    });
                    const tokenSecret = jwt.sign({
                        email: user.email,
                        userId: user._id
                    }, process.env.JWT_SECRET, {
                        expiresIn: '24h'
                    });
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        tokenSecret: tokenSecret
                    });
                }
                res.status(401).json({
                    message: 'Auth failed'
                });
            });
        }
    });
}

const tokenSecret = (req, res, next) => {
    const tokenSecret = req.body.tokenSecret;
    jwt.verify(tokenSecret, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).json({
                message: 'Invalid token'
            });
        }
        else {
            let token = jwt.sign({
                email: decoded.email,
                userId: decoded.userId
            }, process.env.JWT_KEY, {
                expiresIn: '60s'
            });
            let tokenSecret = req.body.tokenSecret
            return res.status(200).json({
                message: 'Token refreshed',
                token: token,
                tokenSecret: tokenSecret
            });
        }
    });
}

export default {
    register,
    login,
    tokenSecret
}