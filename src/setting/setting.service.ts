import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting } from './interfaces/setting.interface';

@Injectable()
export class SettingService {
    constructor(@InjectModel('Setting') private readonly settingModel: Model<Setting>) {}
}