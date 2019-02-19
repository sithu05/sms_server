import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModel } from 'mongoose';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<User>) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    }, userModel.authenticate());
  }
}