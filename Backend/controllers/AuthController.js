import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import sendEmail from '../middleware/email.js'
import crypto from 'crypto';

const register = (req, res, next) => {
  //   console.log(req.body);
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      const user = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "User created successfully",
            user: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error creating user",
            error: err,
          });
        });
    }
  });
};

const login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ $or: [{ email: email }, { username: email }] })
    .then((user) => {
      if (!user) {
        return res.status(403).json({
          message: "User not found, please sign up",
        });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: "Authentication failed",
            error: err,
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "36h",
            }
          );
          return res.status(200).json({
            message: "Authentication successful",
            token: token,
            // new_token: new_token,
          });
        } else {
          res.status(401).json({
            message: "Authentication failed! Please try again",
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occurred",
        error: err,
      });
    });
};

const logout = async (req, res, next) => {
    try {
        // Clear the JWT cooki
        await res.cookie('jwt', '', { maxAge: 1 });
        res.status(200).json({
            message: 'Logged out successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error logging out',
            error: err
        });
    }
}

const forgetPassword = async (req, res, next) => {
    try {
        // Get user based on email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        // Generate the random reset token
        const resetToken = user.createPasswordResetToken();
        await user.save({ validateBeforeSave: false });
        
        // Send it to user's email
        const resetURL = `${req.protocol}://${req.get('host')}/api/resetPassword/${resetToken}`;
        const message = `We have recieved a password reset request. Please use the below link to reset password:\n${resetURL}.\nThis reset password link will be valid for 10min.\n\nIf you didn't request this, please ignore this email!`;

        await sendEmail({
            email: user.email,
            subject: 'Password reset token',
            message: message
        });
        res.status(200).json({
            status: 'ok',
            message: 'Token sent to email'
        });
    }catch(err){
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return res.status(500).json({
            message: 'Error sending email',
            error: err
        });
    }
}

const resetPassword = async (req, res, next) => {
    try {
        const token = crypto.createHash('sha256').update(req.params.token).digest('hex');
        const password = req.body.password;

        const user = await User.findOne({ passwordResetToken: token, passwordResetTokenExpires: { $gt: Date.now() } });

        if (!user) {
            return res.status(400).json({
                message: 'Token is invalid or has expired'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user.password = hashedPassword;
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpires = undefined;
        user.passwordChangedAt = Date.now();

        await user.save();

        res.status(200).json({
            message: 'Password updated successfully'
        });

        // Redirect to login page
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error updating password',
            error: err
        });
    }
};

export default { register, login, logout, forgetPassword, resetPassword };
