import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { MoviesController } from '../controllers/movies.controller';

export class MoviesRoutes {
  public register(): Router {
    const router = Router();

    const moviesController = new MoviesController();

    router.post(
      '/',
      celebrate({
        [Segments.BODY]: Joi.object().keys({
          type: Joi.string().required(),
          title: Joi.string().required(),
          year: Joi.number().required(),
          poster_image: Joi.string(),
          rated: Joi.string().required(),
          released: Joi.string().required(),
          runtime: Joi.string().required(),
          genre: Joi.string().required(),
          director: Joi.string().required(),
          writer: Joi.string().required(),
          actors: Joi.string().required(),
          plot: Joi.string().required(),
          plot_full: Joi.string(),
          language: Joi.string().required(),
          country: Joi.string().required(),
          awards: Joi.string().required(),
          metascore: Joi.string().required(),
          imdbRating: Joi.string().required(),
          imdbVotes: Joi.string().required(),
          imdbID: Joi.string().required(),
          release_dvd: Joi.string().required(),
          boxOffice: Joi.string().required(),
          production: Joi.string().required(),
          website: Joi.string().required(),
        }),
      }),
      moviesController.createMovie,
    );

    router.delete(
      '/:id',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().uuid().required(),
        }),
      }),
      moviesController.deleteMovieService,
    );

    return router;
  }
}
