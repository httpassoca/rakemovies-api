import { Request, Response, NextFunction } from 'express';
import { CreateMovieService } from '../services/create-movie.service';
import { DeleteMovieService } from '../services/delete-movie.service';
import { RetrieveMovieListService } from '../services/retrieve-movie-list.service';

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

  public async retrieveUserList(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> {
    const retrieveMovieListService = new RetrieveMovieListService();
    const movies = await retrieveMovieListService.execute(req.query);
    // console.log(movies);
    return res.status(200).json(movies);
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
