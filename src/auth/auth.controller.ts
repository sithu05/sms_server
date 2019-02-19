import { Controller, Get, Post, UseGuards, Request, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('api')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req, @Response() res) {
    const token = await this.authService.generateToken(req.user._id);
    return res.json({ token });
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async me(@Request() req, @Response() res) {
    return res.send(req.user);
  }
}