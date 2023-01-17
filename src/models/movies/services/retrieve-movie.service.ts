import { IRetrieveMovieDTO } from '../dtos/retrieve-movie.dto';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class RetrieveMovieService {
  async execute({ imdbId }: IRetrieveMovieDTO): Promise<MovieEntity | null> {
    const moviesRepository = new MoviesRepository();
    const movie = await moviesRepository.findOne(imdbId);

    return movie;
  }
}
