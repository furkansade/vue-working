import User from "../models/User.js";
import userValidation from "../validations/userValidation.js";


const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d@$!%*#?&.]{8,}$/;


const getAllUsers = async (req, res) => {
    try {
        
        const users = await User.find().select('-password').populate('projects', 'projectName');
        res.status(200).json(users)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kullanıcılar getirilirken bir hata oluştu, lütfen tekrar deneyin!' })
    }
}

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;

        const existingEmail = await User.findOne({ email })

        if(existingEmail) {
            return res.status(400).json({ message: 'Eklemek istediğiniz mail sisteme kayıtlı!' })
        }

        // password validation
        if (!password.match(passwordRegex)) {
            return res.status(400).json({ message: 'Şifre en az 8 karakter olmalı ve en az bir harf, bir rakam ve bir özel karakter içermelidir!' })
        }

        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            role
        });

        const savedUser = await newUser.save();

        savedUser.password = undefined;

        res.status(201).json({ message: 'Yeni kullanıcı eklendi.', user: savedUser })
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Yeni kullanıcı oluşturulamadı, lütfen tekrar deneyin!' })
    }
}

const updateUser = async (req, res) => {
    
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if(!deletedUser) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı!' })
        }

        res.status(200).json({ message: 'Kullanıcı başarıyla silindi!' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Kullanıcı silinemedi, lütfen tekrar deneyin!' })
    }
}

export {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}