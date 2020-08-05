import debug from 'debug';
import '../models/connect';

import { Messages } from '../models/models';

const logger = debug('dev');

const data = [
  { name: 'name1', message: 'first message' },
  { name: 'name2', message: 'second message' }
];

export const createData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { name, message } = d;
    const m = Messages({ name, message });
    try {
      await m.save();
    } catch (e) {
      logger(`error: ${e.message}`);
    }
    if (index + 1 === stop)resolve();
  });
});

export const deleteData = async () => new Promise(resolve => {
  const stop = data.length;
  data.forEach(async (d, index) => {
    const { name } = d;
    try {
      await Messages.deleteOne({ name });
    } catch (e) {
      logger(`error: ${e.message}`);
    }

    if (index + 1 === stop)resolve();
  });
});
