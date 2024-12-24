import Project from '../models/Project.js'

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json({ 
            projects,
            message: 'Tüm projeler'
         })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    } 
}

const createProject = async (req, res) => {
    try {

        const { projectName, projectDescription, projectStatus, users, projectExpireDate } = req.body;

        const newProject = new Project({
            projectName,
            projectDescription,
            projectExpireDate,
            projectExpireDate
        })

        const savedProject = await newProject.save();

        let usersArray = Array.isArray(users) ? users : [users];

        if(usersArray.length > 0) {
            const assigments = usersArray.map(userId => ({
                userId,
                projectId: savedProject._id
            }))

            // await User.updateMany(
            //     { _id: { $in: usersArray } },
            //     { $push: { projects: savedProject._id } }
            // );
  
        
            await Project.updateOne(
                { _id: savedProject._id },
                { $push: { users: { $each: usersArray } } }
            );
        }

        res.status(201).json({ 
            newProject,
            message: 'Yeni proje eklendi!'
         })



    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyiniz!' })
    }
}

export { getAllProjects, createProject }