import { Controller, Get, Post, Body, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CourseService } from './course.service';
import { CreateCourseDTO } from './dto/create-course.dto';

@Controller('courses')
export class CourseController {
    constructor(
        private readonly courseService: CourseService
    ) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll(@Response() res) {
        const courses = await this.courseService.getCourses();

        res.send(courses);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async store(@Body() data: CreateCourseDTO, @Response() res) {
        const course = await this.courseService.create(data);

        res.send(course);
    }
}