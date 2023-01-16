import { ICreateMovieBO } from '../bos/create-movie.bo';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class CreateMovieService {
  async execute(data: ICreateMovieBO): Promise<MovieEntity> {
    const moviesRepository = new MoviesRepository();

    const movie = await moviesRepository.create(data);

    return movie;
  }
}
