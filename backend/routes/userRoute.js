import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router();

router.route('/').get(userController.getAllUsers);
router.route('/new').post(userController.createUser);

export default router;