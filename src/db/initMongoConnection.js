import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { MONGO_BD_VARS } from '../constants/index.js';

export const initMongoConnection = async () => {
  try {
    const user = env(MONGO_BD_VARS.MONGO_USER);
    const password = env(MONGO_BD_VARS.MONGO_PASSWORD);
    const url = env(MONGO_BD_VARS.MONGO_URL);
    const db = env(MONGO_BD_VARS.MONGO_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log('connection toDB established');
  } catch (error) {
    console.log('Error while connecting to DB', error);
    throw error;
  }
};
