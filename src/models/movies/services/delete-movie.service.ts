import { HttpError } from '@common/errors/HttpError';
import { IDeleteMovieDTO } from '../dtos/delete-movie.dto';
import { MoviesRepository } from '../repositories/movies.repository';

export class DeleteMovieService {
  async execute({ id }: IDeleteMovieDTO): Promise<void> {
    const moviesRepository = new MoviesRepository();

    const movie = await moviesRepository.findOneById(id);
    if (!movie) {
      throw new HttpError('Movie not found', 404);
    }

    await moviesRepository.delete(id);
  }
}
