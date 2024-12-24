import express from 'express';
import * as projectController from '../controllers/projectController.js'

const router = express.Router();

router
    .route('/')
    .get(projectController.getAllProjects)
    .post(projectController.createProject)

router
    .route('/:id')
    .get(projectController.getProject)
    .put(projectController.updateProject)
    .delete(projectController.deleteProject)

export default router;