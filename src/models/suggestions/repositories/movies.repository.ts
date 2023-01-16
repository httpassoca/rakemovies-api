import { getRepository, Repository } from 'typeorm';
import { ICreateMovieBO } from '../bos/create-movie.bo';
import { IFilterMovieBO } from '../bos/filter-movie.bo';
import { MoviesEntity } from '../entities/movie.entity';

export class SuggestionsRepository {
  private ormRepository: Repository<MoviesEntity>;

  constructor() {
    this.ormRepository = getRepository(MoviesEntity);
  }

  public async create(data: ICreateMovieBO): Promise<MoviesEntity> {
    const movie = this.ormRepository.create(data);
    await this.ormRepository.save(movie);
    return movie;
  }

  public async save(movie: MoviesEntity): Promise<void> {
    await this.ormRepository.save(movie);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findOne(filter: IFilterMovieBO): Promise<MoviesEntity | null> {
    const movie = await this.ormRepository.findOne({
      where: filter,
    });
    if (!movie) return null;
    return movie;
  }

  public async find(filter: IFilterMovieBO): Promise<MoviesEntity[]> {
    const movies = await this.ormRepository.find({
      where: filter,
    });
    return movies;
  }
}
