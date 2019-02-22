import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CourseSchema } from './schemas/course.schema';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }])
    ],
    controllers: [CourseController],
    providers: [CourseService]
})

export class CourseModule {}