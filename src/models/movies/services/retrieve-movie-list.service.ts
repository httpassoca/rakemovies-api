import { IRetrieveMovieListDTO } from '../dtos/retrieve-movie-list.dto';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class RetrieveMovieListService {
  async execute(dto: IRetrieveMovieListDTO): Promise<MovieEntity[]> {
    const moviesRepository = new MoviesRepository();
    const movies = await moviesRepository.find({
      year: dto.year || undefined,
      type: dto.type || undefined,
      title: dto.search || undefined,
    });

    return movies;
  }
}
