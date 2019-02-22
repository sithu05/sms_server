import { Document } from 'mongoose';

export interface Setting extends Document {
    readonly courses: Array<string>
}