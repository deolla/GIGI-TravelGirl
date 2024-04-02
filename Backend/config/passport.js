const passport = require('passport');
import User from '../models/user.js'
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "667545423666-9ctloq8hhn3tes08vj59bpcdctpsio9m.apps.googleusercontent.com",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:1337/auth/google/callback",
    passReqToCallback: true
  },
  async function(accessToken, refreshToken, profile, done) {
    try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
            user = await User.create({
                googleId: profile.id,
                username: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
            //await user.save();
        }
        return done(null, user);
    } catch (err) {
        console.error(`Error saving user: ${err}`);
        return done(err);
    }
}));

// Serialization
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  // Deserialization
passport.deserializeUser(async function(id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        console.error(`Error deserializing user: ${err}`);
        done(err);
    }
});

module.exports = passport;
