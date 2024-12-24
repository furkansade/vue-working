import mongoose from 'mongoose';
import Project from '../models/Project.js'
import { isValidObjectId, findDocumnetById } from '../utils/index.js';


const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json(projects)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    } 
}

const getProject = async (req, res) => {

    const { id } = req.params;

    if(isValidObjectId(id, res)) return;

    try {

        const project = await findDocumnetById(Project, id, res);
        if(!project) return;

        const projectName = project.projectName;

        res.status(200).json({
            project,
            message: `Proje: ${projectName}`
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    }
};

const createProject = async (req, res) => {
    try {

        const { projectName, projectDescription, projectStatus, users, projectExpireDate } = req.body;

        const existingProject = await Project.findOne({ projectName });

        if(existingProject) {
            return res.status(400).json({ message: 'Bu isimde bir proje zaten mevcut!' })
        }

        const newProject = new Project({
            projectName,
            projectDescription,
            projectExpireDate,
            projectStatus,
            users
        })

        const savedProject = await newProject.save();

        res.status(201).json({ 
            project: savedProject,
            message: 'Yeni proje eklendi!'
         })



    } catch (error) {
        if(error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((val) => val.message);
            return res.status(400).json({ message: validationErrors })
        } else {
            console.error('Error at create project: ', error);
            return res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
        }
    }
}

const updateProject = async (req, res) => {

    const { id } = req.params;

    if(isValidObjectId(id, res)) return;

    const { projectName, projectDescription, projectStatus, users, projectExpireDate } = req.body;

    const existingProject = await Project.findOne({ projectName });

    if(existingProject) {
        return res.status(400).json({ message: 'Bu isimde bir proje zaten mevcut!' })
    }

    try {

        const project = await findDocumnetById(Project, id, res);
        if(!project) return;
        
        project.projectName = projectName || project.projectName; 
        project.projectDescription = projectDescription || project.projectDescription; 
        project.projectStatus = projectStatus || project.projectStatus; 
        project.users = users || project.users; 
        project.projectExpireDate = projectExpireDate || project.projectExpireDate; 

        await project.save();

        res.status(200).json({ message: "Proje başarıyla güncellendi!" })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    }
}

const deleteProject = async (req, res) => {

    const { id } = req.params;

    if(isValidObjectId(id, res)) return;;

    try {

        const project = await findDocumnetById(Project, id, res);
        if(!project) return;

        await project.deleteOne();
        res.status(200).json({ message: "Proje silindi!" })
        
    } catch (error) {
        console.error('Error at create project: ', error);
        return res.status(500).json({ error: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    }
}

export { getAllProjects, getProject, createProject, updateProject, deleteProject }