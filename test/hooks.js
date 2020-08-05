import mongoose from 'mongoose';

before(async () => {
  console.log('befroe');
});

after(async () => {
  console.log('after');
  mongoose.connection.close();
});
