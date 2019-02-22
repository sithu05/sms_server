import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SettingSchema } from './schemas/setting.schema';
import { SettingService } from './setting.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Setting', schema: SettingSchema }])
    ],
    providers: [SettingService]
})

export class SettingModule {}