import { HttpError } from '@common/errors/HttpError';
import { IUpdateMovieDTO } from '../dtos/update-movie.dto';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class UpdateMovieService {
  async execute({ imdbId, data }: IUpdateMovieDTO): Promise<MovieEntity> {
    const moviesRepository = new MoviesRepository();

    const movie = await moviesRepository.findOne(imdbId);
    if (!movie) {
      throw new HttpError('Movie not found', 404);
    }

    Object.assign(movie, data);
    await moviesRepository.save(movie);

    return movie;
  }
}
