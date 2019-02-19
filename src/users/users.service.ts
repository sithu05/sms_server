import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModal } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: PassportLocalModal<User>) {}

  async create(data: CreateUserDto): Promise<User> {
    const user = new this.userModel(data);

    return new Promise((resolve, reject) => {
      this.userModel.register(user, data.password, (err, registered) => {
        if (err) {
          reject(err);
        } else {
          resolve(registered);
        }
      });
    });
  }

  async findById(id: number): Promise<User> {
    return await this.userModel.findById(id);
  }
}