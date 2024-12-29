import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user) {
            return res.status(500).json({ message: 'Giriş başarısız, lütfen tekrar deneyin!' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(500).json({ message: 'Giriş başarısız, lütfen tekrar deneyin!' })
        }

        user.password = undefined;

        const expirationTime = 60 * 60 * 12;

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: expirationTime,
        })

        return res.status(200).json({ 
            user,
            token,
            message: 'Giriş başarılı!'
         })

    } catch (error) {
        console.error('User login error: ', error);
        res.status(500).json({ message: 'Bir hata oluştu, lütfen tekrar deneyin!' })
    }
}

export {
    loginUser
}