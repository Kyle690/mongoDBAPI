import dotenv from 'dotenv';

dotenv.config();
export const connectionString = process.env.CONNECTION_STRING.trim();
export const testEnvString = process.env.TEST_ENV_VAR;
