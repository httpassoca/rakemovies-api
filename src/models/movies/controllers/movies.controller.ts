import { Request, Response, NextFunction } from 'express';
import { CreateMovieService } from '../services/create-movie.service';
import { DeleteMovieService } from '../services/delete-movie.service';
import { RetrieveMovieService } from '../services/retrieve-movie.service';
import { RetrieveMovieListService } from '../services/retrieve-movie-list.service';
import { UpdateMovieService } from '../services/update-movie.service';

export class MoviesController {
  public async createMovie(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const createMovieService = new CreateMovieService();
    const movie = await createMovieService.execute(req.body);
    return res.status(201).json(movie);
  }

  public async retrieveMovie(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const retrieveMovieService = new RetrieveMovieService();
    const movie = await retrieveMovieService.execute({ imdbId: req.params.id });
    return res.status(200).json(movie);
  }

  public async retrieveMovieList(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const retrieveMovieListService = new RetrieveMovieListService();
    const movies = await retrieveMovieListService.execute(req.query);
    return res.status(200).json(movies);
  }

  public async updateMovie(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const updateMovieService = new UpdateMovieService();
    const movie = await updateMovieService.execute({
      id: req.params.id,
      data: req.body,
    });
    return res.status(200).json(movie);
  }

  public async deleteMovieService(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const deleteMovieService = new DeleteMovieService();
    await deleteMovieService.execute({ id: req.params.id });
    return res.status(204).send();
  }
}
