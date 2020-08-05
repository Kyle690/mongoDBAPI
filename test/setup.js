import supertest from 'supertest';
import chai from 'chai';
import sinnonChai from 'sinon-chai';

import app from '../src/app';

chai.use(sinnonChai);

export const { expect } = chai;
export const server = supertest.agent(app);
export const BASE_URL = '/v1';
