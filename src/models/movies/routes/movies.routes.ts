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
          id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
          type: Joi.string(),
          title: Joi.string(),
          year: Joi.string(),
          poster_image: Joi.string().optional(),
          rated: Joi.string().optional(),
          released: Joi.string().optional(),
          runtime: Joi.string().optional(),
          genre: Joi.string().optional(),
          director: Joi.string().optional(),
          writer: Joi.string().optional(),
          actors: Joi.string().optional(),
          plot: Joi.string().optional(),
          plot_full: Joi.string().optional(),
          language: Joi.string().optional(),
          country: Joi.string().optional(),
          awards: Joi.string().optional(),
          metascore: Joi.string().optional(),
          imdbRating: Joi.string().optional(),
          imdbVotes: Joi.string().optional(),
          imdbID: Joi.string().optional(),
          release_dvd: Joi.string().optional(),
          boxOffice: Joi.string().optional(),
          production: Joi.string().optional(),
          website: Joi.string().optional(),
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
