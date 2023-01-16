import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { errors as celebrateErrors } from 'celebrate';
import Database from '@common/database';
import ErrorsMiddleware from '@common/middlewares/ErrorsMiddleware';

const main = async (): Promise<void> => {
  // DATABASE
  const database = new Database();
  await database.register();

  // EXPRESS
  const app = express();

  // EXPRESS: pre-routes middlewares
  app.use(cors());
  app.use(express.json());

  // EXPRESS: post-routes middlewares
  const errorsMiddleware = new ErrorsMiddleware();
  app.use(celebrateErrors());
  app.use(errorsMiddleware.execute);

  // SERVER
  const port = process.env.API_PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running under http://localhost:${port}`);
  });
};

main();
