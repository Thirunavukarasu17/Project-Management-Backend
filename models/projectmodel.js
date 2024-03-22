import mongoose from "mongoose";

const projectschema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        members: {
            type: String,
            required: true
        },
        days: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Project = mongoose.model('Project', projectschema);
