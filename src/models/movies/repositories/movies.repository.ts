import shapeObject from '@common/utils/shapeObject';
import { getRepository, Like, Repository } from 'typeorm';
import { ICreateMovieBO } from '../bos/create-movie.bo';
import { IFilterMovieBO } from '../bos/filter-movie.bo';
import { MovieEntity } from '../entities/movie.entity';

export class MoviesRepository {
  private ormRepository: Repository<MovieEntity>;

  constructor() {
    this.ormRepository = getRepository(MovieEntity);
  }

  public async create(data: ICreateMovieBO): Promise<MovieEntity> {
    const movie = this.ormRepository.create(data);
    await this.ormRepository.save(movie);
    return movie;
  }

  public async save(movie: MovieEntity): Promise<void> {
    await this.ormRepository.save(movie);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findOne(id: string): Promise<MovieEntity | null> {
    const movie = await this.ormRepository.findOne({
      where: { id },
    });
    if (!movie) return null;
    return movie;
  }

  public async find(filter: IFilterMovieBO): Promise<MovieEntity[]> {
    const cuttedObject = shapeObject(filter);
    const movies = await this.ormRepository.find({
      where: { ...cuttedObject, title: Like(`%${cuttedObject.title}%`) },
      select: ['title', 'id', 'imdbID', 'year', 'type', 'poster_image'],
    });
    return movies;
  }
}
