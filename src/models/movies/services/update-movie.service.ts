import { HttpError } from '@common/errors/HttpError';
import { IUpdateMovieDTO } from '../dtos/update-movie.dto';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class UpdateMovieService {
  async execute({ id, data }: IUpdateMovieDTO): Promise<MovieEntity> {
    const moviesRepository = new MoviesRepository();

    const user = await moviesRepository.findOne({
      id,
    });
    if (!user) {
      throw new HttpError('User not found', 404);
    }

    Object.assign(user, data);
    await moviesRepository.save(user);

    return user;
  }
}
