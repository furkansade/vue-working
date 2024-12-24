import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
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

const Project = mongoose.model('Project', projectSchema)

export default Project;