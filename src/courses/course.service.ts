import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './interfaces/course.interface';
import { CreateCourseDTO } from './dto/create-course.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectModel('Course') private readonly courseModel: Model<Course>
    ) {}

    async getCourses(): Promise<Course[]> {
        return await this.courseModel.find({});
    }

    async create(data: CreateCourseDTO): Promise<Course> {
        const course = new this.courseModel(data);
        return await course.save();
    }
}