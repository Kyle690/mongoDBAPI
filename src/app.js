import cors from 'cors';
import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose from 'mongoose';
import { testEnvString } from './settings';
import indexRouter from './routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors('*'));
app.use(compression());

mongoose.connection.on('connect', () => console.log('Database connected'));
mongoose.connection.on('error', (err) => console.log('Error', err));

app.get('/v1', (req, res) => {
  res.status(200).json({ messages: testEnvString });
});

app.use('/v1', indexRouter);

export default app;
