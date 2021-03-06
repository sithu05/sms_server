import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './courses/course.module';
import { SettingModule } from './setting/setting.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
        useNewUrlParser: true,
        useCreateIndex: true
      }),
      inject: [ConfigService]
    }),
    AuthModule,
    UsersModule,
    CourseModule,
    SettingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
