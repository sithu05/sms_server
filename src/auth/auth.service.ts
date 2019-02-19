import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from './../users/users.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  async generateToken(id: string): Promise<string> {
    return jwt.sign({ id }, this.configService.get('JWT_SECRET'), {
      expiresIn: parseInt(this.configService.get('JWT_EXPIRE'), 10),
    });
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findById(payload.id);
  }
}
