import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    name: String,
    subjects: [{ type: String }]
}, { timestamps: true });