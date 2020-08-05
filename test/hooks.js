import mongoose from 'mongoose';
import { createData, deleteData } from '../src/utils/queryFunction';

before(async () => {
  await createData();
});

after(async () => {
  await deleteData();
  mongoose.connection.close();
});
