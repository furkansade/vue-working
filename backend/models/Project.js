import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    projectExpireDate: {
        type: Date,
        default: Date.now,
    },
    projectDescription: {
        type: String,
        required: false,
    },
    projectStatus: {
        type: String,
        required: true,
        enum: ["active", "inactive"],
        default: "active",
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
}, { timestamps: true });

const Project = mongoose.model('Project', ProjectSchema)

export default Project;