import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { UserSchema } from './users/schemas/user.schema';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});

const User = mongoose.model('User', UserSchema);

User.register({ name: 'admin', email: 'admin@admin.com' }, 'secret', (err, user) => {
  if (err) throw Error(err);

  if (user) {
    console.log('admin accounted seeded');
    mongoose.connection.close();
  }
});