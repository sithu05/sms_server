import * as mongoose from 'mongoose';
import * as PassportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String
}, { timestamps: true });

UserSchema.plugin(PassportLocalMongoose);