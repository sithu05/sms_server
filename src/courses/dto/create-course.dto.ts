import { IsString, IsArray } from 'class-validator';

export class CreateCourseDTO {
    @IsString()
    name: string;

    @IsArray()
    subjects: Array<string>;
}