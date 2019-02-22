import { Document } from 'mongoose';

export interface Course extends Document {
    readonly name: string;
    readonly subjects: Array<string>
}