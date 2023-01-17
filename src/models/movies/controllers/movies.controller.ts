import { Request, Response, NextFunction } from 'express';
import { CreateMovieService } from '../services/create-movie.service';

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
}
