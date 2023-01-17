import { HttpError } from '@common/errors/HttpError';
import { OmbdApiMoviesProvider } from 'providers/omdb/services/omdb-api.provider';
import { MovieEntity } from '../entities/movie.entity';
import { MoviesRepository } from '../repositories/movies.repository';

export class CreateMovieService {
  async execute(data: { imdbId: string }): Promise<MovieEntity> {
    const moviesRepository = new MoviesRepository();

    const movieAlreadyExists = await moviesRepository.findOne(data.imdbId);
    if (movieAlreadyExists) {
      throw new HttpError('Movie already exists', 400);
    }
    const omdbApi = new OmbdApiMoviesProvider();
    const omdbMovie = await omdbApi.searchByIdOrTitle({
      i: data.imdbId,
    });
    const movie = await moviesRepository.create({
      actors: omdbMovie.Actors,
      type: omdbMovie.Type,
      title: omdbMovie.Title,
      year: Number(omdbMovie.Year),
      poster_image: omdbMovie.Poster,
      rated: omdbMovie.Rated,
      released: omdbMovie.Released,
      runtime: omdbMovie.Runtime,
      genre: omdbMovie.Genre,
      director: omdbMovie.Director,
      writer: omdbMovie.Writer,
      plot: omdbMovie.Plot,
      plot_full: omdbMovie.Plot,
      language: omdbMovie.Language,
      country: omdbMovie.Country,
      awards: omdbMovie.Awards,
      metascore: omdbMovie.Metascore,
      imdbRating: omdbMovie.imdbRating,
      imdbVotes: omdbMovie.imdbVotes,
      imdbID: omdbMovie.imdbID,
      release_dvd: omdbMovie.DVD,
      boxOffice: omdbMovie.BoxOffice,
      production: omdbMovie.Production,
      website: omdbMovie.Website,
    });

    return movie;
  }
}
