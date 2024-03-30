import express  from 'express';
import passport from 'passport';
import { ensureAuth, ensureGuest }  from '../middleware/auth.js';

const router = express.Router();

router.get('/google', ensureGuest, passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

export default router;
