import express from 'express';
import * as projectController from '../controllers/projectController.js'

const router = express.Router();

router.route('/').get(projectController.getAllProjects)
router.route('/').post(projectController.createProject)

export default router;