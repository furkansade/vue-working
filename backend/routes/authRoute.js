import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.route('/login').post(authController.loginUser);

export default router;