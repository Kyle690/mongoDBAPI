import express from 'express';
import { messagesPage, addMessagePage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessagePage);
indexRouter.get('/test', (req, res) => {
  res.status(200).send({ messages: 'This is the test message route' });
});

export default indexRouter;
