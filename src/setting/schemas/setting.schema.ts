import * as mongoose from 'mongoose';

export const SettingSchema = new mongoose.Schema({
    subjects: [{ type: String }]
}, { timestamps: true });