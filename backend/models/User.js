import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [emailRegex, 'Geçersiz e-posta adresi!']
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'employee', 'disabled', 'guest'],
        default: 'employee'
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, { timestamps: true })

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

const User = mongoose.model('User', UserSchema);

export default User;