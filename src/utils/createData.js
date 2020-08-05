import mongoose from 'mongoose';
import { createData } from './queryFunction';

(async () => {
  await createData();
  mongoose.connection.close();
})();
