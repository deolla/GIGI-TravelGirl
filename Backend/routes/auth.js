import express from 'express';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/register', AuthController.login);
router.post('/tokensecret', AuthController.tokenSecret);

export default router;
