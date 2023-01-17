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
          imdbId: Joi.string().required(),
        }),
      }),
      moviesController.createMovie,
    );

    router.get(
      '/search',
      celebrate({
        [Segments.QUERY]: Joi.object().keys({
          search: Joi.string(),
          year: Joi.string(),
          type: Joi.string(),
        }),
      }),
      moviesController.retrieveMovieList,
    );

    router.get(
      '/:id',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required(),
        }),
      }),
      moviesController.retrieveMovie,
    );

    router.put(
      '/:id',
      celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
          type: Joi.string(),
          title: Joi.string(),
          year: Joi.string(),
          poster_image: Joi.string(),
          rated: Joi.string(),
          released: Joi.string(),
          runtime: Joi.string(),
          genre: Joi.string(),
          director: Joi.string(),
          writer: Joi.string(),
          actors: Joi.string(),
          plot: Joi.string(),
          plot_full: Joi.string(),
          language: Joi.string(),
          country: Joi.string(),
          awards: Joi.string(),
          metascore: Joi.string(),
          imdbRating: Joi.string(),
          imdbVotes: Joi.string(),
          imdbID: Joi.string(),
          release_dvd: Joi.string(),
          boxOffice: Joi.string(),
          production: Joi.string(),
          website: Joi.string(),
        }),
      }),
      moviesController.updateMovie,
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
