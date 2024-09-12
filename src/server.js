import express from 'express';

import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { ENV_VARS } from './constants/index.js';

export const startServer = () => {
  const app = express();
  const PORT = env(ENV_VARS.PORT, 3000);
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.json({
      message: 'bla',
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'error',
    });
    next();
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'smth went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
