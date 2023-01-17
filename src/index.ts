import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import { errors as celebrateErrors } from 'celebrate';
import Database from '@common/database';
import ErrorsMiddleware from '@common/middlewares/ErrorsMiddleware';
import { MoviesRoutes } from '@models/movies/routes/movies.routes';

const main = async (): Promise<void> => {
  // DATABASE
  const database = new Database();
  await database.register();

  // EXPRESS
  const app = express();

  // EXPRESS: pre-routes middlewares
  app.use(cors());
  app.use(express.json());

  // EXPRESS: routes
  const moviesHttp = new MoviesRoutes();
  app.use('/movies', moviesHttp.register());

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
