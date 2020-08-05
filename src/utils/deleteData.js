import mongoose from 'mongoose';

import { deleteData } from './queryFunction';

(async () => {
  await deleteData();
  mongoose.connection.close();
})();
